"use client";

import { useState, useEffect, useCallback } from "react";
import { useTranslations } from "next-intl";
import { MessageCircle, Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Toast } from "@/components/ui/toast";
import { cn } from "@/lib/utils";

export function StickyContactButton() {
  const t = useTranslations("onlinePresence");
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [consent, setConsent] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen]);

  // Prevent body scroll when form is open on mobile
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

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
          setTimeout(() => setIsOpen(false), 2000);
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
    <>
      {/* Sticky button */}
      <button
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-3 shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all duration-300 cursor-pointer",
          isVisible && !isOpen
            ? "translate-y-0 opacity-100"
            : "translate-y-16 opacity-0 pointer-events-none"
        )}
        aria-label={t("stickyButton")}
      >
        <MessageCircle className="h-5 w-5" />
        <span className="text-sm font-medium hidden sm:inline">{t("stickyButton")}</span>
      </button>

      {/* Overlay + expanded form */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-fade-in"
            onClick={() => setIsOpen(false)}
          />

          {/* Form panel */}
          <div className="relative z-10 w-full sm:max-w-md mx-auto bg-card border border-border rounded-t-2xl sm:rounded-2xl p-6 sm:p-8 shadow-2xl animate-slide-up max-h-[90vh] overflow-y-auto">
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-1 rounded-sm opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            <h3 className="text-lg font-semibold text-foreground mb-5 pr-8">
              {t("form.title")}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="sticky-name">{t("form.name")}</Label>
                <Input
                  id="sticky-name"
                  name="name"
                  placeholder={t("form.namePlaceholder")}
                  required
                  autoComplete="name"
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="sticky-email">{t("form.email")}</Label>
                <Input
                  id="sticky-email"
                  name="email"
                  type="email"
                  placeholder={t("form.emailPlaceholder")}
                  required
                  autoComplete="email"
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="sticky-phone">{t("form.phone")}</Label>
                <Input
                  id="sticky-phone"
                  name="phone"
                  type="tel"
                  placeholder={t("form.phonePlaceholder")}
                  autoComplete="tel"
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="sticky-message">{t("form.message")}</Label>
                <Textarea
                  id="sticky-message"
                  name="message"
                  placeholder={t("form.messagePlaceholder")}
                  required
                  rows={3}
                />
              </div>

              <div className="flex items-start gap-2">
                <Checkbox
                  id="sticky-consent"
                  checked={consent}
                  onCheckedChange={(checked) => setConsent(checked === true)}
                  required
                  aria-required="true"
                />
                <Label
                  htmlFor="sticky-consent"
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
        </div>
      )}

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </>
  );
}
