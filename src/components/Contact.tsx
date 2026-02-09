"use client";

import { useState, useCallback } from "react";
import { useTranslations } from "next-intl";
import { Mail, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Toast } from "@/components/ui/toast";
import { ScrollAnimation } from "@/components/ScrollAnimation";

// TODO: Replace with actual contact details
const CONTACT_EMAIL = "kontakt@kraftweb.studio";
const CONTACT_PHONE = "+49 123 456 7890";

export function Contact() {
  const t = useTranslations("contact");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);
  const [consent, setConsent] = useState(false);

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsSubmitting(true);

      const formData = new FormData(e.currentTarget);
      const data = {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        message: formData.get("message") as string,
      };

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          setToast({ message: t("form.success"), type: "success" });
          (e.target as HTMLFormElement).reset();
          setConsent(false);
        } else {
          setToast({ message: t("form.error"), type: "error" });
        }
      } catch {
        setToast({ message: t("form.error"), type: "error" });
      } finally {
        setIsSubmitting(false);
      }
    },
    [t]
  );

  return (
    <section id="kontakt" className="py-20 sm:py-28" aria-labelledby="contact-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 id="contact-title" className="text-3xl sm:text-4xl font-bold tracking-tight">
              {t("title")}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">{t("subtitle")}</p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Info */}
          <ScrollAnimation>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-sm text-foreground">{t("emailLabel")}</h3>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-primary hover:underline text-sm"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-sm text-foreground">{t("phoneLabel")}</h3>
                  <a
                    href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`}
                    className="text-primary hover:underline text-sm"
                  >
                    {CONTACT_PHONE}
                  </a>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground">{t("alternative")}</p>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="inline-flex items-center gap-2 text-primary hover:underline text-sm mt-1"
                >
                  <Mail className="h-4 w-4" />
                  {CONTACT_EMAIL}
                </a>
              </div>

              <p className="text-xs text-muted-foreground italic">{t("responseTime")}</p>
            </div>
          </ScrollAnimation>

          {/* Contact Form */}
          <ScrollAnimation delay={0.15}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="contact-name">{t("form.name")}</Label>
                <Input
                  id="contact-name"
                  name="name"
                  placeholder={t("form.namePlaceholder")}
                  required
                  autoComplete="name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-email">{t("form.email")}</Label>
                <Input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder={t("form.emailPlaceholder")}
                  required
                  autoComplete="email"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-message">{t("form.message")}</Label>
                <Textarea
                  id="contact-message"
                  name="message"
                  placeholder={t("form.messagePlaceholder")}
                  required
                  rows={5}
                />
              </div>

              <div className="flex items-start gap-2">
                <Checkbox
                  id="contact-consent"
                  checked={consent}
                  onCheckedChange={(checked) => setConsent(checked === true)}
                  required
                  aria-required="true"
                />
                <Label htmlFor="contact-consent" className="text-xs text-muted-foreground leading-relaxed cursor-pointer">
                  {t("form.consent")}
                </Label>
              </div>

              <Button type="submit" className="w-full" size="lg" disabled={isSubmitting || !consent}>
                {isSubmitting ? (
                  t("form.sending")
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    {t("form.submit")}
                  </>
                )}
              </Button>
            </form>
          </ScrollAnimation>
        </div>
      </div>

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </section>
  );
}
