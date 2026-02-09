"use client";

import { useTranslations } from "next-intl";
import {
  MessageSquare,
  Layout,
  Palette,
  Code,
  CheckCircle,
  HeadphonesIcon,
} from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";

const STEP_ICONS = [MessageSquare, Layout, Palette, Code, CheckCircle, HeadphonesIcon];

export function Process() {
  const t = useTranslations("process");

  return (
    <section id="prozess" className="py-20 sm:py-28" aria-labelledby="process-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 id="process-title" className="text-3xl sm:text-4xl font-bold tracking-tight">
              {t("title")}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">{t("subtitle")}</p>
          </div>
        </ScrollAnimation>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {STEP_ICONS.map((Icon, index) => (
            <ScrollAnimation key={index} delay={index * 0.1}>
              <div className="relative group">
                <div className="flex items-start gap-4">
                  <div className="shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-primary mb-1">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {t(`steps.${index}.title`)}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t(`steps.${index}.description`)}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
