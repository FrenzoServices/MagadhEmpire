import { Era, Dynasty, HistoricalEvent, Personality } from "@/lib/types";
import { SITE_CONFIG } from "@/lib/constants/navigation";

const BASE_URL = SITE_CONFIG.url;

/** Generate JSON-LD for the website (WebSite schema) */
export function generateWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: BASE_URL,
  };
}

/** Generate JSON-LD for an Era page (Article + BreadcrumbList) */
export function generateEraJsonLd(era: Era) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: era.title,
      description: era.description,
      url: `${BASE_URL}/eras/${era.slug}`,
      publisher: {
        "@type": "Organization",
        name: SITE_CONFIG.name,
        url: BASE_URL,
      },
      mainEntityOfPage: `${BASE_URL}/eras/${era.slug}`,
    },
    generateBreadcrumbJsonLd([
      { name: "Home", url: BASE_URL },
      { name: "Eras", url: `${BASE_URL}/eras` },
      { name: era.title, url: `${BASE_URL}/eras/${era.slug}` },
    ]),
  ];
}

/** Generate JSON-LD for a Dynasty page */
export function generateDynastyJsonLd(era: Era, dynasty: Dynasty) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: dynasty.title,
      description: dynasty.description,
      url: `${BASE_URL}/eras/${era.slug}/${dynasty.slug}`,
      publisher: {
        "@type": "Organization",
        name: SITE_CONFIG.name,
        url: BASE_URL,
      },
      about: {
        "@type": "HistoricalEvent",
        name: dynasty.title,
        startDate: dynasty.period?.split("–")[0]?.trim(),
        location: { "@type": "Place", name: dynasty.capital },
      },
    },
    generateBreadcrumbJsonLd([
      { name: "Home", url: BASE_URL },
      { name: "Eras", url: `${BASE_URL}/eras` },
      { name: era.title, url: `${BASE_URL}/eras/${era.slug}` },
      { name: dynasty.title, url: `${BASE_URL}/eras/${era.slug}/${dynasty.slug}` },
    ]),
  ];
}

/** Generate JSON-LD for a Personality page (Person schema) */
export function generatePersonalityJsonLd(
  era: Era,
  dynasty: Dynasty,
  personality: Personality
) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: personality.title,
      description: personality.description,
      jobTitle: personality.role,
      birthDate: personality.birthYear,
      deathDate: personality.deathYear,
      url: `${BASE_URL}/eras/${era.slug}/${dynasty.slug}/personalities/${personality.slug}`,
    },
    generateBreadcrumbJsonLd([
      { name: "Home", url: BASE_URL },
      { name: "Eras", url: `${BASE_URL}/eras` },
      { name: era.title, url: `${BASE_URL}/eras/${era.slug}` },
      { name: dynasty.title, url: `${BASE_URL}/eras/${era.slug}/${dynasty.slug}` },
      {
        name: personality.title,
        url: `${BASE_URL}/eras/${era.slug}/${dynasty.slug}/personalities/${personality.slug}`,
      },
    ]),
  ];
}

/** Generate JSON-LD for an Event page */
export function generateEventJsonLd(
  era: Era,
  dynasty: Dynasty,
  event: HistoricalEvent
) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: event.title,
      description: event.description,
      datePublished: event.year,
      url: `${BASE_URL}/eras/${era.slug}/${dynasty.slug}/events/${event.slug}`,
      publisher: {
        "@type": "Organization",
        name: SITE_CONFIG.name,
        url: BASE_URL,
      },
    },
    generateBreadcrumbJsonLd([
      { name: "Home", url: BASE_URL },
      { name: "Eras", url: `${BASE_URL}/eras` },
      { name: era.title, url: `${BASE_URL}/eras/${era.slug}` },
      { name: dynasty.title, url: `${BASE_URL}/eras/${era.slug}/${dynasty.slug}` },
      {
        name: event.title,
        url: `${BASE_URL}/eras/${era.slug}/${dynasty.slug}/events/${event.slug}`,
      },
    ]),
  ];
}

/** Helper: generate BreadcrumbList schema */
function generateBreadcrumbJsonLd(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
