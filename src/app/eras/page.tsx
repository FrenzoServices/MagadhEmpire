import type { Metadata } from "next";
import Card from "@/components/common/Card";

export const metadata: Metadata = {
  title: "Historical Eras | Magadh Empire",
  description: "Explore the major eras of Indian history — Ancient, Medieval, and Modern — through structured historical series.",
};

const ERAS = [
  {
    title: "Ancient India",
    description: "The Indus Valley Civilization, Vedic Period, Mauryan Empire, Gupta Empire, and beyond.",
    tag: "3300 BCE – 500 CE",
    href: "/eras/ancient",
  },
  {
    title: "Medieval India",
    description: "The Rajput kingdoms, Delhi Sultanate, Vijayanagara Empire, and the Mughal era.",
    tag: "500 CE – 1757 CE",
    href: "/eras/medieval",
  },
  {
    title: "Modern India",
    description: "Colonial rule, the freedom struggle, independence, and the making of a republic.",
    tag: "1757 CE – Present",
    href: "/eras/modern",
  },
];

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
          {ERAS.map((era) => (
            <Card
              key={era.href}
              href={era.href}
              title={era.title}
              description={era.description}
              tag={era.tag}
              meta="Explore →"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
