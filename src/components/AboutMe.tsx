"use client";

import { useTranslations } from "next-intl";
import { SafeImage } from "@/components/SafeImage";
import { Button } from "@/components/ui/button";
import { ScrollAnimation } from "@/components/ScrollAnimation";

export function AboutMe() {
  const t = useTranslations("about");

  return (
    <section id="ueber-mich" className="py-20 sm:py-28" aria-labelledby="about-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 id="about-title" className="text-3xl sm:text-4xl font-bold tracking-tight">
              {t("title")}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">{t("subtitle")}</p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center max-w-5xl mx-auto">
          {/* Image */}
          <ScrollAnimation>
            <div className="relative">
              <div className="relative aspect-[4/5] max-w-sm mx-auto rounded-2xl overflow-hidden shadow-xl">
                <SafeImage
                  src="/images/wakacje.png"
                  alt={t("imageAlt")}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  fallbackText={t("imageAlt")}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary/10 rounded-xl -z-10" />
            </div>
          </ScrollAnimation>

          {/* Text */}
          <ScrollAnimation delay={0.15}>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">{t("text1")}</p>
              <p className="text-muted-foreground leading-relaxed">{t("text2")}</p>
              <p className="text-muted-foreground leading-relaxed">{t("text3")}</p>
              <p className="text-muted-foreground leading-relaxed">{t("text4")}</p>
              <div className="pt-4">
                <Button asChild>
                  <a href="#kontakt">{t("cta")}</a>
                </Button>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
