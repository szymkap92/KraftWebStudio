"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { key: "services", href: "#leistungen" },
  { key: "process", href: "#prozess" },
  { key: "pricing", href: "#preise" },
  { key: "portfolio", href: "#portfolio" },
  { key: "about", href: "#ueber-mich" },
  { key: "faq", href: "#faq" },
  { key: "contact", href: "#kontakt" },
] as const;

export function Header() {
  const t = useTranslations("nav");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  function handleNavClick() {
    setIsMobileOpen(false);
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-border/50"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 shrink-0">
            <Image
              src="/brand/logo.png"
              alt={t("logoAlt")}
              width={36}
              height={36}
              className="rounded-md"
              priority
            />
            <span className="text-lg font-bold tracking-tight text-foreground">
              KraftWeb<span className="text-primary"> Studio</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {t(item.key)}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <LanguageSwitcher />
            <Button size="sm" asChild>
              <a href="#kontakt">{t("cta")}</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-3">
            <LanguageSwitcher />
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="p-2 text-foreground cursor-pointer"
              aria-expanded={isMobileOpen}
              aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            >
              {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <nav className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-2" aria-label="Mobile navigation">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={handleNavClick}
                className="block py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {t(item.key)}
              </a>
            ))}
            <Button className="mt-2 w-full" asChild>
              <a href="#kontakt" onClick={handleNavClick}>{t("cta")}</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
