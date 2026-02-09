"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { SafeImage } from "@/components/SafeImage";

type FilterType = "all" | "business" | "shop";

const PORTFOLIO_ITEMS = [
  { index: 0, category: "business" as const, image: "/portfolio/zum-goldenen-loewen.png" },
  { index: 1, category: "business" as const, image: "/portfolio/schmidt-elektrotechnik.png" },
  { index: 2, category: "shop" as const, image: "/portfolio/clara-mode-boutique.png" },
  { index: 3, category: "shop" as const, image: "/portfolio/naturpur-bio-laden.png" },
];

export function Portfolio() {
  const t = useTranslations("portfolio");
  const [filter, setFilter] = useState<FilterType>("all");
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const filteredItems = PORTFOLIO_ITEMS.filter(
    (item) => filter === "all" || item.category === filter
  );

  const filters: { key: FilterType; label: string }[] = [
    { key: "all", label: t("filterAll") },
    { key: "business", label: t("filterBusiness") },
    { key: "shop", label: t("filterShop") },
  ];

  return (
    <section id="portfolio" className="py-20 sm:py-28 bg-muted/30" aria-labelledby="portfolio-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 id="portfolio-title" className="text-3xl sm:text-4xl font-bold tracking-tight">
              {t("title")}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">{t("subtitle")}</p>
          </div>
        </ScrollAnimation>

        {/* Filter */}
        <ScrollAnimation>
          <div className="flex justify-center gap-2 mb-12" role="group" aria-label="Portfolio filter">
            {filters.map(({ key, label }) => (
              <Button
                key={key}
                variant={filter === key ? "default" : "secondary"}
                size="sm"
                onClick={() => setFilter(key)}
                aria-pressed={filter === key}
              >
                {label}
              </Button>
            ))}
          </div>
        </ScrollAnimation>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {filteredItems.map((item) => {
            const title = t(`items.${item.index}.title`);
            const imageAlt = t("imageAlt", { title });

            return (
              <ScrollAnimation key={item.index} delay={item.index * 0.1}>
                <div
                  className="group cursor-pointer rounded-xl border border-border bg-card overflow-hidden hover:shadow-lg transition-all"
                  onClick={() => setSelectedItem(item.index)}
                  onKeyDown={(e) => e.key === "Enter" && setSelectedItem(item.index)}
                  tabIndex={0}
                  role="button"
                  aria-label={`${title} - ${t("viewDetails")}`}
                >
                  <div className="relative aspect-[2/3] bg-muted overflow-hidden">
                    <SafeImage
                      src={item.image}
                      alt={imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      fallbackText={title}
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-foreground">
                        {title}
                      </h3>
                      <Badge variant="secondary" className="text-xs capitalize">
                        {t(`items.${item.index}.category`)}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{t(`items.${item.index}.industry`)}</p>
                    <div className="mt-3 flex items-center gap-1 text-sm text-primary font-medium">
                      <span>{t("viewDetails")}</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            );
          })}
        </div>

        {/* Detail Modal */}
        <Dialog open={selectedItem !== null} onOpenChange={() => setSelectedItem(null)}>
          {selectedItem !== null && (() => {
            const item = PORTFOLIO_ITEMS[selectedItem];
            const title = t(`items.${selectedItem}.title`);
            const imageAlt = t("imageAlt", { title });

            return (
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="text-2xl">{title}</DialogTitle>
                  <DialogDescription>
                    {t(`items.${selectedItem}.industry`)}
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-6">
                  {/* Project Image */}
                  <div className="relative aspect-[2/3] rounded-lg overflow-hidden border border-border">
                    <SafeImage
                      src={item.image}
                      alt={imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 600px"
                      className="object-cover"
                      priority
                      fallbackText={title}
                    />
                  </div>

                  {/* Details */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-1">{t("goal")}</h4>
                      <p className="text-sm text-muted-foreground">{t(`items.${selectedItem}.goal`)}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-1">{t("scope")}</h4>
                      <p className="text-sm text-muted-foreground">{t(`items.${selectedItem}.scope`)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{t(`items.${selectedItem}.description`)}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">{t("results")}</h4>
                      <ul className="space-y-1.5">
                        {[0, 1, 2].map((i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                            {t(`items.${selectedItem}.results.${i}`)}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Button variant="secondary" className="w-full" onClick={() => setSelectedItem(null)}>
                    {t("close")}
                  </Button>
                </div>
              </DialogContent>
            );
          })()}
        </Dialog>
      </div>
    </section>
  );
}
