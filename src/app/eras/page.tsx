import type { Metadata } from "next";
import { ALL_ERAS } from "@/content";
import Card from "@/components/common/Card";

export const metadata: Metadata = {
  title: "Historical Eras | Magadh Empire",
  description: "Explore the major eras of Indian history — Ancient, Medieval, and Modern — through structured historical series.",
};

export default function ErasPage() {
  return (
    <section style={{ padding: "var(--spacing-12) var(--spacing-4)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h1 style={{
          fontFamily: "var(--font-family-serif)",
          fontSize: "var(--font-size-4xl)",
          color: "var(--color-secondary-dark)",
          marginBottom: "var(--spacing-2)",
        }}>
          Historical Eras
        </h1>
        <p style={{
          fontSize: "var(--font-size-lg)",
          color: "var(--color-text-secondary)",
          marginBottom: "var(--spacing-8)",
          maxWidth: "600px",
        }}>
          Select an era to begin your journey through the ages of Indian civilization.
        </p>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "var(--spacing-6)",
        }}>
          {ALL_ERAS.map((era) => (
            <Card
              key={era.slug}
              href={`/eras/${era.slug}`}
              title={era.title}
              description={era.description}
              tag={era.period}
              meta={`${era.dynasties.length} dynasties`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
