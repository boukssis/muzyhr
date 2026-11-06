import { company, getSiteUrl } from "@/config/site";

export function JsonLd() {
  const url = getSiteUrl();
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: company.name,
    description: company.positioning,
    url,
    foundingDate: company.foundingDate,
    founder: {
      "@type": "Person",
      name: company.founder,
      jobTitle: "Founder",
      sameAs: company.founderLinkedin,
      workLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: company.locality,
          addressRegion: company.region,
          addressCountry: company.country,
        },
      },
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: company.locality,
      addressRegion: company.region,
      addressCountry: company.country,
    },
    areaServed: {
      "@type": "Country",
      name: "Canada",
    },
    availableLanguage: "English",
    sameAs: [company.linkedin],
    knowsAbout: [
      "HR infrastructure",
      "People operations",
      "Benefits administration",
      "Employee communications",
      "Employee onboarding",
      "HR process improvement",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
