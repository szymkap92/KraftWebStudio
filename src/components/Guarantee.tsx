"use client";

import { useTranslations } from "next-intl";
import { ShieldCheck } from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";

export function Guarantee() {
  const t = useTranslations("guarantee");

  return (
    <section className="py-20 sm:py-28 bg-muted/30" aria-labelledby="guarantee-title">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="rounded-2xl border border-primary/20 bg-card p-8 sm:p-12 text-center">
            <div className="inline-flex p-4 rounded-2xl bg-primary/10 mb-6">
              <ShieldCheck className="h-10 w-10 text-primary" />
            </div>
            <h2
              id="guarantee-title"
              className="text-2xl sm:text-3xl font-bold tracking-tight mb-4"
            >
              {t("title")}
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto text-base">
              {t("description")}
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
