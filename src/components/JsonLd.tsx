interface JsonLdProps {
  locale: string;
}

export function JsonLd({ locale }: JsonLdProps) {
  const isDE = locale === "de";

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "KraftWeb Studio",
    description: isDE
      ? "Professionelle Webentwicklung – Business-Websites und Online-Shops für Unternehmen in Deutschland."
      : "Profesjonalne tworzenie stron – strony firmowe i sklepy internetowe dla firm w Niemczech.",
    url: `https://kraftweb.studio/${locale}`,
    // TODO: Replace with actual contact details
    email: "kontakt@kraftweb.studio",
    telephone: "+49 123 456 7890",
    address: {
      "@type": "PostalAddress",
      addressCountry: "DE",
      // TODO: Add actual address
      addressLocality: "[Stadt]",
      postalCode: "[PLZ]",
      streetAddress: "[Straße]",
    },
    priceRange: "€€",
    areaServed: {
      "@type": "Country",
      name: "Germany",
    },
    knowsLanguage: ["de", "pl"],
    sameAs: [
      // TODO: Add social media URLs
    ],
  };

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    provider: {
      "@type": "ProfessionalService",
      name: "KraftWeb Studio",
    },
    serviceType: isDE ? "Webentwicklung" : "Tworzenie stron internetowych",
    areaServed: {
      "@type": "Country",
      name: "Germany",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: isDE ? "Web-Dienstleistungen" : "Usługi webowe",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: isDE ? "Business-Website" : "Strona firmowa",
            description: isDE
              ? "Professionelle Online-Präsenz für Unternehmen"
              : "Profesjonalna obecność online dla firm",
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "EUR",
            minPrice: "1200",
            maxPrice: "3500",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Online-Shop",
            description: isDE
              ? "Verkaufsstarker Online-Shop mit allen wichtigen Funktionen"
              : "Skuteczny sklep online z wszystkimi ważnymi funkcjami",
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "EUR",
            minPrice: "2500",
            maxPrice: "6000",
          },
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
      />
    </>
  );
}
