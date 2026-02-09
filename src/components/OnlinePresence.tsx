"use client";

import { useState, useCallback } from "react";
import { useTranslations } from "next-intl";
import {
  Palette,
  Zap,
  TrendingUp,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Toast } from "@/components/ui/toast";
import { ScrollAnimation } from "@/components/ScrollAnimation";

const BLOCK_ICONS = [Palette, Zap, TrendingUp];
const BLOCK_ITEM_COUNT = 4;

export function OnlinePresence() {
  const t = useTranslations("onlinePresence");
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
        phone: formData.get("phone") as string,
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
    <section id="pakiet" className="py-20 sm:py-28" aria-labelledby="presence-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollAnimation>
          <div className="max-w-3xl mb-12 lg:mb-16">
            <h2
              id="presence-title"
              className="text-3xl sm:text-4xl font-bold tracking-tight"
            >
              {t("title")}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              {t("subtitle")}
            </p>
          </div>
        </ScrollAnimation>

        {/* Main grid: benefits left, form right */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Benefits column */}
          <div className="lg:col-span-7 space-y-8">
            {BLOCK_ICONS.map((Icon, blockIndex) => (
              <ScrollAnimation key={blockIndex} delay={blockIndex * 0.1}>
                <div className="rounded-xl border border-border bg-card p-6 hover:border-primary/20 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {t(`blocks.${blockIndex}.title`)}
                    </h3>
                  </div>
                  <ul className="space-y-2.5">
                    {Array.from({ length: BLOCK_ITEM_COUNT }, (_, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        {t(`blocks.${blockIndex}.items.${i}`)}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollAnimation>
            ))}
          </div>

          {/* Form column — sticky on desktop */}
          <div className="lg:col-span-5">
            <ScrollAnimation delay={0.2}>
              <div
                id="presence-form"
                className="lg:sticky lg:top-24 rounded-xl border border-primary/20 bg-card p-6 sm:p-8 shadow-lg shadow-primary/5"
              >
                <h3 className="text-lg font-semibold text-foreground mb-6">
                  {t("form.title")}
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="presence-name">{t("form.name")}</Label>
                    <Input
                      id="presence-name"
                      name="name"
                      placeholder={t("form.namePlaceholder")}
                      required
                      autoComplete="name"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="presence-email">{t("form.email")}</Label>
                    <Input
                      id="presence-email"
                      name="email"
                      type="email"
                      placeholder={t("form.emailPlaceholder")}
                      required
                      autoComplete="email"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="presence-phone">{t("form.phone")}</Label>
                    <Input
                      id="presence-phone"
                      name="phone"
                      type="tel"
                      placeholder={t("form.phonePlaceholder")}
                      autoComplete="tel"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="presence-message">{t("form.message")}</Label>
                    <Textarea
                      id="presence-message"
                      name="message"
                      placeholder={t("form.messagePlaceholder")}
                      required
                      rows={4}
                    />
                  </div>

                  <div className="flex items-start gap-2">
                    <Checkbox
                      id="presence-consent"
                      checked={consent}
                      onCheckedChange={(checked) => setConsent(checked === true)}
                      required
                      aria-required="true"
                    />
                    <Label
                      htmlFor="presence-consent"
                      className="text-xs text-muted-foreground leading-relaxed cursor-pointer"
                    >
                      {t("form.consent")}
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    size="lg"
                    disabled={isSubmitting || !consent}
                  >
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
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </section>
  );
}
