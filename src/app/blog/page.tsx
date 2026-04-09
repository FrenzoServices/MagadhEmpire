import type { Metadata } from "next";
import Link from "next/link";
import { getAllBlogPosts } from "@/content/blogs";
import styles from "./blog.module.css";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "In-depth articles exploring the connections, philosophies, and untold stories of Indian civilization and ancient world religions.",
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <>
      <section className={styles.blogHeader}>
        <h1 className={styles.blogTitle}>Blog</h1>
        <p className={styles.blogSubtitle}>
          In-depth articles and historical explorations — uncovering the
          connections that shaped ancient civilizations.
        </p>
      </section>

      <section className={styles.grid}>
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className={styles.card}
          >
            {/* Cover emoji banner */}
            <div className={styles.cardBanner}>
              {post.coverEmoji || "📝"}
            </div>

            {/* Body */}
            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>{post.title}</h3>
              <p className={styles.cardDescription}>{post.description}</p>
            </div>

            {/* Tags */}
            <div className={styles.tags}>
              {post.tags.slice(0, 3).map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>

            {/* Footer */}
            <div className={styles.cardFooter}>
              <span className={styles.cardDate}>
                {new Date(post.publishedDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className={styles.cardReadMore}>Read →</span>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}
