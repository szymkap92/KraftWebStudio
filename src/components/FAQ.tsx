"use client";

import { useTranslations } from "next-intl";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollAnimation } from "@/components/ScrollAnimation";

const FAQ_COUNT = 7;

export function FAQ() {
  const t = useTranslations("faq");

  return (
    <section id="faq" className="py-20 sm:py-28 bg-muted/30" aria-labelledby="faq-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 id="faq-title" className="text-3xl sm:text-4xl font-bold tracking-tight">
              {t("title")}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">{t("subtitle")}</p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {Array.from({ length: FAQ_COUNT }, (_, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left text-base">
                    {t(`items.${i}.question`)}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {t(`items.${i}.answer`)}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
