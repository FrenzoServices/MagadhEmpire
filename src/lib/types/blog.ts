/**
 * Blog content types for the Magadh Empire platform.
 *
 * Content is structured as typed sections so it can be:
 * 1. Rendered consistently through a single component
 * 2. Easily serialized/deserialized from a future API
 * 3. Type-checked at build time
 */

/** A heading block within a blog post */
export interface BlogSectionHeading {
  type: "heading";
  level: 2 | 3 | 4;
  text: string;
  emoji?: string;
}

/** A paragraph block (supports inline markdown-like bold via **text**) */
export interface BlogSectionParagraph {
  type: "paragraph";
  text: string;
}

/** A blockquote / callout block */
export interface BlogSectionBlockquote {
  type: "blockquote";
  text: string;
}

/** A comparison or data table */
export interface BlogSectionTable {
  type: "table";
  headers: string[];
  rows: string[][];
}

/** A bullet-point or numbered list */
export interface BlogSectionList {
  type: "list";
  style: "unordered" | "ordered";
  items: string[];
}

/** A horizontal rule / divider */
export interface BlogSectionDivider {
  type: "divider";
}

/** Union of all section types */
export type BlogSection =
  | BlogSectionHeading
  | BlogSectionParagraph
  | BlogSectionBlockquote
  | BlogSectionTable
  | BlogSectionList
  | BlogSectionDivider;

/** A full blog post */
export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  author: string;
  publishedDate: string;
  tags: string[];
  coverEmoji?: string;
  sections: BlogSection[];
}
