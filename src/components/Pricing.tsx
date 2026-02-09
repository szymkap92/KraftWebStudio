"use client";

import { useTranslations } from "next-intl";
import { Star, Headphones } from "lucide-react";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { cn } from "@/lib/utils";

const PACKAGES = ["mini", "smart", "business", "premium"] as const;
const HAS_INSTALLMENTS = new Set(["smart", "business", "premium"]);

export function Pricing() {
  const t = useTranslations("pricing");

  return (
    <section id="preise" className="py-20 sm:py-28 bg-muted/30" aria-labelledby="pricing-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollAnimation>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 id="pricing-title" className="text-3xl sm:text-4xl font-bold tracking-tight">
              {t("title")}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">{t("subtitle")}</p>
          </div>
        </ScrollAnimation>

        {/* Pricing Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {PACKAGES.map((pkg, index) => {
            const isPremium = pkg === "premium";

            return (
              <ScrollAnimation key={pkg} delay={index * 0.1}>
                <Card
                  className={cn(
                    "h-full flex flex-col relative hover:border-primary/30 transition-all",
                    isPremium && "border-primary/40 shadow-lg shadow-primary/10"
                  )}
                >
                  {isPremium && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                      <Badge className="bg-primary text-primary-foreground px-3 py-1 shadow-md shadow-primary/20">
                        <Star className="h-3 w-3 mr-1 fill-current" />
                        {t(`${pkg}.bestseller`)}
                      </Badge>
                    </div>
                  )}

                  <CardHeader className={cn("pb-2", isPremium && "pt-8")}>
                    <p className="text-sm font-bold text-primary tracking-widest uppercase">
                      {t(`${pkg}.name`)}
                    </p>
                    <p className="text-sm text-muted-foreground mt-2 min-h-[3.75rem] leading-relaxed">
                      {t(`${pkg}.description`)}
                    </p>
                  </CardHeader>

                  <CardContent className="flex-1 space-y-2">
                    {/* Price */}
                    {isPremium && (
                      <p className="text-xs text-muted-foreground">{t("startingFrom")}</p>
                    )}
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-3xl sm:text-4xl font-bold text-foreground">
                        {t(`${pkg}.price`)}
                      </span>
                      <span className="text-lg font-semibold text-foreground">&euro;</span>
                    </div>

                    {/* Gross price */}
                    <p className="text-xs text-muted-foreground">
                      {isPremium ? t("grossLabelFrom") : t("grossLabel")}{" "}
                      {t(`${pkg}.grossPrice`)} &euro;
                    </p>

                    {/* Installments */}
                    {HAS_INSTALLMENTS.has(pkg) && (
                      <p className="text-xs text-primary/80 font-medium">
                        {t(`${pkg}.installments`)}
                      </p>
                    )}

                    {/* Delivery */}
                    <p className="text-xs text-muted-foreground">
                      {t(`${pkg}.delivery`)}
                    </p>
                  </CardContent>

                  <CardFooter>
                    <Button
                      className="w-full"
                      variant={isPremium ? "default" : "secondary"}
                      asChild
                    >
                      <a href="#kontakt">{t("cta")}</a>
                    </Button>
                  </CardFooter>
                </Card>
              </ScrollAnimation>
            );
          })}
        </div>

        {/* Support Add-on */}
        <ScrollAnimation delay={0.5}>
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="rounded-xl border border-primary/20 bg-card p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                <div className="shrink-0 p-3 rounded-xl bg-primary/10">
                  <Headphones className="h-7 w-7 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-primary mb-1">
                    {t("support.title")}
                  </p>
                  <p className="text-foreground font-medium leading-relaxed">
                    {t("support.description")}
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-3">
                    <Badge variant="accent" className="text-xs">
                      {t("support.freeMonths")}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      {t("support.thenPrice")}{" "}
                      <strong className="text-foreground">
                        {t("support.price")} {t("support.unit")}
                      </strong>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Disclaimer */}
        <ScrollAnimation delay={0.6}>
          <p className="text-center text-sm text-muted-foreground mt-8 max-w-2xl mx-auto">
            {t("disclaimer")}
          </p>
        </ScrollAnimation>
      </div>
    </section>
  );
}
