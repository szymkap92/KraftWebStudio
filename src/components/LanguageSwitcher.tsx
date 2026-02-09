"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function switchLocale(newLocale: "de" | "pl") {
    if (newLocale === locale) return;
    const secure = window.location.protocol === "https:" ? ";Secure" : "";
    document.cookie = `NEXT_LOCALE=${newLocale};path=/;max-age=31536000;SameSite=Lax${secure}`;

    // Preserve the current #hash so the user stays in the same section
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    router.replace(pathname, { locale: newLocale });

    // Re-apply hash after navigation (router.replace strips it)
    if (hash) {
      requestAnimationFrame(() => {
        window.location.hash = hash;
      });
    }
  }

  return (
    <div className="flex items-center gap-1 rounded-lg border border-border p-0.5" role="group" aria-label="Language">
      <button
        onClick={() => switchLocale("de")}
        className={cn(
          "px-2.5 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer",
          locale === "de"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        )}
        aria-pressed={locale === "de"}
        aria-label="Deutsch"
      >
        DE
      </button>
      <button
        onClick={() => switchLocale("pl")}
        className={cn(
          "px-2.5 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer",
          locale === "pl"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        )}
        aria-pressed={locale === "pl"}
        aria-label="Polski"
      >
        PL
      </button>
    </div>
  );
}
