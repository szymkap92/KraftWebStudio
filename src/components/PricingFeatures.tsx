"use client";

import { useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge";
import { ScrollAnimation } from "@/components/ScrollAnimation";

const FEATURE_COUNT = 6;

export function PricingFeatures() {
  const t = useTranslations("pricingFeatures");

  return (
    <section className="py-20 sm:py-28" aria-labelledby="pricing-features-title">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <h2
            id="pricing-features-title"
            className="text-2xl sm:text-3xl font-bold tracking-tight text-center mb-12"
          >
            {t("title")}
          </h2>
        </ScrollAnimation>

        <div className="space-y-4">
          {Array.from({ length: FEATURE_COUNT }, (_, index) => (
            <ScrollAnimation key={index} delay={index * 0.08}>
              <div className="flex gap-4 sm:gap-5 rounded-xl border border-border bg-card p-5 sm:p-6 hover:border-primary/20 transition-colors">
                {/* Number */}
                <div className="shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary font-bold text-sm">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-1.5">
                    <h3 className="font-semibold text-foreground leading-snug">
                      {t(`items.${index}.title`)}
                    </h3>
                    <Badge variant="accent" className="shrink-0 text-xs w-fit">
                      {t(`items.${index}.badge`)}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(`items.${index}.description`)}
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
