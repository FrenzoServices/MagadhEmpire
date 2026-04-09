import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllBlogSlugs, getBlogBySlug } from "@/content/blogs";
import type { BlogSection } from "@/lib/types";
import styles from "./page.module.css";

/** Pre-render all blog pages at build time (required for output: "export") */
export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

/** Dynamic SEO metadata */
export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const post = getBlogBySlug(slug);
    if (!post) return { title: "Post Not Found" };
    return {
      title: post.title,
      description: post.description,
      openGraph: {
        title: post.title,
        description: post.description,
        type: "article",
        publishedTime: post.publishedDate,
        authors: [post.author],
        tags: post.tags,
      },
    };
  });
}

/** Render bold **text** within a string */
function renderInlineMarkup(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

/** Render a single blog section */
function BlogSectionRenderer({ section }: { section: BlogSection }) {
  switch (section.type) {
    case "heading": {
      const levelClass =
        section.level === 2 ? styles.h2 : section.level === 3 ? styles.h3 : styles.h4;
      const content = (
        <>
          {section.emoji && <span className={styles.headingEmoji}>{section.emoji}</span>}
          {section.text}
        </>
      );
      if (section.level === 2) return <h2 className={`${styles.sectionHeading} ${levelClass}`}>{content}</h2>;
      if (section.level === 3) return <h3 className={`${styles.sectionHeading} ${levelClass}`}>{content}</h3>;
      return <h4 className={`${styles.sectionHeading} ${levelClass}`}>{content}</h4>;
    }

    case "paragraph":
      return <p className={styles.paragraph}>{renderInlineMarkup(section.text)}</p>;

    case "blockquote":
      return (
        <blockquote className={styles.blockquote}>
          {renderInlineMarkup(section.text)}
        </blockquote>
      );

    case "table":
      return (
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                {section.headers.map((h) => (
                  <th key={h}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.rows.map((row, ri) => (
                <tr key={ri}>
                  {row.map((cell, ci) => (
                    <td key={ci}>{renderInlineMarkup(cell)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "list": {
      const ListTag = section.style === "ordered" ? "ol" : "ul";
      return (
        <ListTag className={styles.list}>
          {section.items.map((item, i) => (
            <li key={i}>{renderInlineMarkup(item)}</li>
          ))}
        </ListTag>
      );
    }

    case "divider":
      return <hr className={styles.divider} />;
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className={styles.article}>
      <Link href="/blog" className={styles.backLink}>
        ← Back to Blog
      </Link>

      <header className={styles.articleHeader}>
        <h1 className={styles.articleTitle}>
          {post.coverEmoji && (
            <span style={{ marginRight: "var(--spacing-3)" }}>{post.coverEmoji}</span>
          )}
          {post.title}
        </h1>

        <div className={styles.articleMeta}>
          <span>By {post.author}</span>
          <span>•</span>
          <time dateTime={post.publishedDate}>
            {new Date(post.publishedDate).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </div>

        <div className={styles.articleTags}>
          {post.tags.map((tag) => (
            <span key={tag} className={styles.articleTag}>
              {tag}
            </span>
          ))}
        </div>
      </header>

      <div>
        {post.sections.map((section, i) => (
          <BlogSectionRenderer key={i} section={section} />
        ))}
      </div>
    </article>
  );
}
