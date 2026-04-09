import { Era, Dynasty, HistoricalEvent, Personality, BreadcrumbItem } from "@/lib/types";
import { ANCIENT_ERA } from "./eras/ancient";
import { MEDIEVAL_ERA } from "./eras/medieval";
import { MODERN_ERA } from "./eras/modern";

/** All eras — the root of the content hierarchy */
export const ALL_ERAS: Era[] = [ANCIENT_ERA, MEDIEVAL_ERA, MODERN_ERA];

/** Look up an era by slug */
export function getEraBySlug(slug: string): Era | undefined {
  return ALL_ERAS.find((e) => e.slug === slug);
}

/** Look up a dynasty within an era */
export function getDynastyBySlug(
  eraSlug: string,
  dynastySlug: string
): { era: Era; dynasty: Dynasty } | undefined {
  const era = getEraBySlug(eraSlug);
  if (!era) return undefined;
  const dynasty = era.dynasties.find((d) => d.slug === dynastySlug);
  if (!dynasty) return undefined;
  return { era, dynasty };
}

/** Look up an event within a dynasty */
export function getEventBySlug(
  eraSlug: string,
  dynastySlug: string,
  eventSlug: string
): { era: Era; dynasty: Dynasty; event: HistoricalEvent } | undefined {
  const result = getDynastyBySlug(eraSlug, dynastySlug);
  if (!result) return undefined;
  const event = result.dynasty.events.find((e) => e.slug === eventSlug);
  if (!event) return undefined;
  return { ...result, event };
}

/** Look up a personality within a dynasty */
export function getPersonalityBySlug(
  eraSlug: string,
  dynastySlug: string,
  personalitySlug: string
): { era: Era; dynasty: Dynasty; personality: Personality } | undefined {
  const result = getDynastyBySlug(eraSlug, dynastySlug);
  if (!result) return undefined;
  const personality = result.dynasty.personalities.find(
    (p) => p.slug === personalitySlug
  );
  if (!personality) return undefined;
  return { ...result, personality };
}

/** Generate breadcrumbs for any content level */
export function buildBreadcrumbs(
  eraSlug?: string,
  dynastySlug?: string,
  leafLabel?: string
): BreadcrumbItem[] {
  const crumbs: BreadcrumbItem[] = [{ label: "Eras", href: "/eras" }];

  if (eraSlug) {
    const era = getEraBySlug(eraSlug);
    if (era) {
      crumbs.push({ label: era.title, href: `/eras/${eraSlug}` });
    }
  }

  if (eraSlug && dynastySlug) {
    const result = getDynastyBySlug(eraSlug, dynastySlug);
    if (result) {
      crumbs.push({
        label: result.dynasty.title,
        href: `/eras/${eraSlug}/${dynastySlug}`,
      });
    }
  }

  if (leafLabel) {
    crumbs.push({ label: leafLabel, href: "#" });
  }

  return crumbs;
}
