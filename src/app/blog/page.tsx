import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Magadh Empire",
  description: "Articles and series exploring the rich tapestry of Indian history.",
};

export default function BlogPage() {
  return (
    <section style={{ padding: "var(--spacing-12) var(--spacing-4)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h1 style={{
          fontFamily: "var(--font-family-serif)",
          fontSize: "var(--font-size-4xl)",
          color: "var(--color-secondary-dark)",
          marginBottom: "var(--spacing-2)",
        }}>
          Blog
        </h1>
        <p style={{
          fontSize: "var(--font-size-lg)",
          color: "var(--color-text-secondary)",
          marginBottom: "var(--spacing-8)",
          maxWidth: "600px",
        }}>
          In-depth articles and historical series — coming soon.
        </p>
        <div style={{
          padding: "var(--spacing-12)",
          backgroundColor: "var(--color-background-soft)",
          borderRadius: "var(--border-radius-lg)",
          textAlign: "center",
          color: "var(--color-text-light)",
        }}>
          <p style={{ fontSize: "var(--font-size-2xl)" }}>📝</p>
          <p style={{ marginTop: "var(--spacing-4)" }}>Blog content will be available in Phase 3.</p>
        </div>
      </div>
    </section>
  );
}
