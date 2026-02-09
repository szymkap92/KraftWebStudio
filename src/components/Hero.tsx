"use client";

import { useTranslations } from "next-intl";
import { SafeImage } from "@/components/SafeImage";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollAnimation } from "@/components/ScrollAnimation";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden" aria-labelledby="hero-title">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-accent/50 rounded-bl-[100px] opacity-60" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Column */}
          <ScrollAnimation>
            <div className="max-w-xl">
              <h1 id="hero-title" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                {t("title")}
                <span className="block text-primary mt-2">{t("titleAccent")}</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                {t("subtitle")}
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <a href="#kontakt">{t("ctaPrimary")}</a>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                  <a href="#preise">{t("ctaSecondary")}</a>
                </Button>
              </div>

              {/* Trust Chips */}
              <div className="mt-8 flex flex-wrap gap-2">
                {(["trustWordpress", "trustSeo", "trustFast", "trustClean"] as const).map((key) => (
                  <Badge key={key} variant="secondary" className="text-xs py-1 px-3">
                    {t(key)}
                  </Badge>
                ))}
              </div>

              <p className="mt-4 text-xs text-muted-foreground">{t("note")}</p>
            </div>
          </ScrollAnimation>

          {/* Image Column */}
          <ScrollAnimation delay={0.2}>
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-border">
                <SafeImage
                  src="/images/profesjonalne.png"
                  alt={t("imageAlt")}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  fallbackText={t("imageAlt")}
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/10 rounded-xl -z-10" />
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-accent rounded-xl -z-10" />
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
