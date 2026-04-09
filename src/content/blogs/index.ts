/**
 * Blog data service.
 *
 * This is the single access point for blog content.
 * Currently reads from local TypeScript files.
 * When a backend is added, only this file needs to change —
 * consumers import the same functions and get the same types.
 */

import { BlogPost } from "@/lib/types";
import { HINDUISM_ZOROASTRIANISM } from "./hinduism-and-zoroastrianism";

/** All blog posts — add new imports here as content grows */
const ALL_BLOG_POSTS: BlogPost[] = [HINDUISM_ZOROASTRIANISM];

/** Return all posts, newest first */
export function getAllBlogPosts(): BlogPost[] {
  return [...ALL_BLOG_POSTS].sort(
    (a, b) =>
      new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  );
}

/** Retrieve a single post by slug */
export function getBlogBySlug(slug: string): BlogPost | undefined {
  return ALL_BLOG_POSTS.find((p) => p.slug === slug);
}

/** Return all slugs — used by generateStaticParams */
export function getAllBlogSlugs(): string[] {
  return ALL_BLOG_POSTS.map((p) => p.slug);
}
