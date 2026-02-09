"use client";

import { useTranslations } from "next-intl";
import { Search, HeadphonesIcon, Megaphone } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ScrollAnimation } from "@/components/ScrollAnimation";

const SERVICES = [
  { key: "seo" as const, Icon: Search },
  { key: "support" as const, Icon: HeadphonesIcon },
  { key: "marketing" as const, Icon: Megaphone },
];

export function AdditionalServices() {
  const t = useTranslations("additional");

  return (
    <section className="py-20 sm:py-28" aria-labelledby="additional-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 id="additional-title" className="text-3xl sm:text-4xl font-bold tracking-tight">
              {t("title")}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">{t("subtitle")}</p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {SERVICES.map(({ key, Icon }, index) => (
            <ScrollAnimation key={key} delay={index * 0.15}>
              <Card className="h-full hover:shadow-md transition-shadow text-center">
                <CardHeader>
                  <div className="mx-auto p-3 rounded-xl bg-primary/10 w-fit">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg mt-2">{t(`${key}.title`)}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(`${key}.description`)}
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation delay={0.4}>
          <p className="text-center text-sm text-muted-foreground mt-8 max-w-2xl mx-auto italic">
            {t("note")}
          </p>
        </ScrollAnimation>
      </div>
    </section>
  );
}
