"use client";

import { useTranslations } from "next-intl";
import { Check, Sparkles } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollAnimation } from "@/components/ScrollAnimation";

export function Pricing() {
  const t = useTranslations("pricing");

  const packages = [
    { key: "business" as const, optionalCount: 4 },
    { key: "shop" as const, optionalCount: 6 },
  ];

  return (
    <section id="preise" className="py-20 sm:py-28 bg-muted/30" aria-labelledby="pricing-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 id="pricing-title" className="text-3xl sm:text-4xl font-bold tracking-tight">
              {t("title")}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">{t("subtitle")}</p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {packages.map(({ key: pkg, optionalCount }, index) => (
            <ScrollAnimation key={pkg} delay={index * 0.15}>
              <Card className="h-full flex flex-col hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="accent">{t(`${pkg}.badge`)}</Badge>
                  </div>
                  <CardTitle className="text-2xl">{t(`${pkg}.title`)}</CardTitle>
                  <div className="mt-3">
                    <span className="text-3xl font-bold text-primary">{t(`${pkg}.currency`)}{t(`${pkg}.price`)}</span>
                    <span className="text-sm text-muted-foreground ml-2">/ {t(`${pkg}.unit`)}</span>
                  </div>
                  <CardDescription className="mt-2">{t(`${pkg}.description`)}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2.5">
                    {Array.from({ length: 7 }, (_, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        {t(`${pkg}.features.${i}`)}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-4 border-t border-border">
                    <p className="text-xs font-medium text-muted-foreground mb-2">{t(`${pkg}.optionalLabel`)}</p>
                    <ul className="space-y-1.5">
                      {Array.from({ length: optionalCount }, (_, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <Sparkles className="h-3 w-3 shrink-0 mt-0.5" />
                          {t(`${pkg}.optional.${i}`)}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <a href="#kontakt">{t(`${pkg}.cta`)}</a>
                  </Button>
                </CardFooter>
              </Card>
            </ScrollAnimation>
          ))}

          {/* Custom Package */}
          <ScrollAnimation delay={0.3}>
            <Card className="h-full flex flex-col border-primary/20 bg-accent/30 hover:shadow-md transition-shadow">
              <CardHeader className="flex-1 flex flex-col justify-center text-center">
                <Badge variant="accent" className="w-fit mx-auto mb-3">{t("custom.badge")}</Badge>
                <CardTitle className="text-2xl">{t("custom.title")}</CardTitle>
                <CardDescription className="mt-3 text-base">{t("custom.description")}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="secondary" className="w-full" asChild>
                  <a href="#kontakt">{t("custom.cta")}</a>
                </Button>
              </CardFooter>
            </Card>
          </ScrollAnimation>
        </div>

        <ScrollAnimation delay={0.4}>
          <p className="text-center text-sm text-muted-foreground mt-8 max-w-2xl mx-auto">
            {t("disclaimer")}
          </p>
        </ScrollAnimation>
      </div>
    </section>
  );
}
