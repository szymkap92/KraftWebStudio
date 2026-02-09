"use client";

import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/routing";

export function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const locale = useLocale();

  const privacyHref = locale === "de" ? "/datenschutz" : "/polityka-prywatnosci";

  return (
    <footer className="border-t border-border bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <Image
              src="/brand/logo.png"
              alt={tNav("logoAlt")}
              width={28}
              height={28}
              className="rounded-sm"
            />
            <div>
              <p className="text-lg font-bold tracking-tight">
                KraftWeb<span className="text-primary"> Studio</span>
              </p>
              <p className="text-sm text-muted-foreground">{t("claim")}</p>
            </div>
          </div>

          {/* Legal Links */}
          <nav className="flex items-center gap-6 text-sm" aria-label="Legal">
            <Link href="/impressum" className="text-muted-foreground hover:text-foreground transition-colors">
              {t("impressum")}
            </Link>
            <Link href={privacyHref} className="text-muted-foreground hover:text-foreground transition-colors">
              {t("datenschutz")}
            </Link>
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} KraftWeb Studio. {t("rights")}
          </p>
          <p className="text-xs text-muted-foreground mt-1">{t("madeWith")}</p>
        </div>
      </div>
    </footer>
  );
}
