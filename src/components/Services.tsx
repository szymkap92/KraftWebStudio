"use client";

import { useTranslations } from "next-intl";
import { Globe, ShoppingCart, Clock } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollAnimation } from "@/components/ScrollAnimation";

const SERVICE_ICONS = [Globe, ShoppingCart] as const;

export function Services() {
  const t = useTranslations("services");

  const services = [
    { key: "business" as const, Icon: SERVICE_ICONS[0] },
    { key: "shop" as const, Icon: SERVICE_ICONS[1] },
  ];

  return (
    <section id="leistungen" className="py-20 sm:py-28 bg-muted/30" aria-labelledby="services-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 id="services-title" className="text-3xl sm:text-4xl font-bold tracking-tight">
              {t("title")}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">{t("subtitle")}</p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map(({ key, Icon }, index) => (
            <ScrollAnimation key={key} delay={index * 0.15}>
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="accent">{t(`${key}.badge`)}</Badge>
                  </div>
                  <CardTitle className="text-2xl">{t(`${key}.title`)}</CardTitle>
                  <CardDescription className="text-base">{t(`${key}.description`)}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>
                      {t(`${key}.timeLabel`)}: <strong className="text-foreground">{t(`${key}.time`)}</strong>
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {[0, 1, 2, 3, 4, 5].map((i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        {t(`${key}.features.${i}`)}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation delay={0.3}>
          <p className="text-center text-sm text-muted-foreground mt-8">{t("disclaimer")}</p>
        </ScrollAnimation>
      </div>
    </section>
  );
}
