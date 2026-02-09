import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { ArrowLeft } from "lucide-react";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "impressum" });
  return {
    title: t("title"),
  };
}

export default async function ImpressumPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "impressum" });
  const tLegal = await getTranslations({ locale, namespace: "legal" });

  const sectionKeys = ["responsible", "contact", "tax", "dispute", "liability"] as const;

  return (
    <div className="pt-24 pb-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          {tLegal("backToHome")}
        </Link>

        <h1 className="text-3xl font-bold tracking-tight mb-6">{t("title")}</h1>

        <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 mb-8 text-sm text-amber-800">
          {t("notice")}
        </div>

        <div className="space-y-8">
          {sectionKeys.map((key) => (
            <section key={key}>
              <h2 className="text-lg font-semibold mb-3">{t(`sections.${key}.title`)}</h2>
              <div className="text-muted-foreground whitespace-pre-line leading-relaxed">
                {t(`sections.${key}.content`)}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
