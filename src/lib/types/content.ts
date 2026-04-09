/**
 * Core content hierarchy types for the Magadh Empire platform.
 * 
 * Hierarchy: Era → Dynasty → Event → Personality
 * 
 * Each level has a slug for URL routing and a parent reference
 * to enable breadcrumb navigation and drill-down.
 */

export interface ContentMeta {
  title: string;
  slug: string;
  description: string;
  coverImage?: string;
  period?: string;
}

export interface Personality extends ContentMeta {
  type: "personality";
  role: string;
  birthYear?: string;
  deathYear?: string;
  achievements: string[];
  content: string;
}

export interface HistoricalEvent extends ContentMeta {
  type: "event";
  year: string;
  significance: string;
  personalities: Personality[];
  content: string;
}

export interface Dynasty extends ContentMeta {
  type: "dynasty";
  founder: string;
  capital: string;
  events: HistoricalEvent[];
  personalities: Personality[];
  content: string;
}

export interface Era extends ContentMeta {
  type: "era";
  dynasties: Dynasty[];
  content: string;
}

/** Breadcrumb item for hierarchical navigation */
export interface BreadcrumbItem {
  label: string;
  href: string;
}

/** Utility type for content at any hierarchy level */
export type ContentNode = Era | Dynasty | HistoricalEvent | Personality;
