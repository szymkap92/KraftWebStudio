import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  const baseUrl = "https://kraftweb.studio";
  const url = `${baseUrl}/${locale}`;
  const alternateLocale = locale === "de" ? "pl" : "de";

  return {
    title: {
      default: t("title"),
      template: `%s | KraftWeb Studio`,
    },
    description: t("description"),
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: url,
      languages: {
        de: `${baseUrl}/de`,
        pl: `${baseUrl}/pl`,
        "x-default": `${baseUrl}/de`,
      },
    },
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      url,
      siteName: "KraftWeb Studio",
      locale: locale === "de" ? "de_DE" : "pl_PL",
      alternateLocale: alternateLocale === "de" ? "de_DE" : "pl_PL",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("ogTitle"),
      description: t("ogDescription"),
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "de" | "pl")) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages({ locale });

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <JsonLd locale={locale} />
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
    </NextIntlClientProvider>
  );
}
