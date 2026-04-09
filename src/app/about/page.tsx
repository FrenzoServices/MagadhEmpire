import type { Metadata } from "next";
import Button from "@/components/common/Button";

export const metadata: Metadata = {
  title: "About | Magadh Empire",
  description: "Learn about the mission behind Magadh Empire — a platform dedicated to making Indian history accessible and engaging.",
};

export default function AboutPage() {
  return (
    <section style={{ padding: "var(--spacing-12) var(--spacing-4)" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h1 style={{
          fontFamily: "var(--font-family-serif)",
          fontSize: "var(--font-size-4xl)",
          color: "var(--color-secondary-dark)",
          marginBottom: "var(--spacing-6)",
        }}>
          About Magadh Empire
        </h1>

        <div style={{
          fontSize: "var(--font-size-lg)",
          color: "var(--color-text-secondary)",
          lineHeight: "1.8",
          display: "flex",
          flexDirection: "column",
          gap: "var(--spacing-4)",
        }}>
          <p>
            <strong>Magadh Empire</strong> is a digital heritage platform
            dedicated to preserving and sharing the rich narrative of Indian
            civilization. Our mission is to make history accessible, structured,
            and engaging for everyone.
          </p>
          <p>
            We believe that understanding our past is the key to navigating the
            future. Through carefully curated content organized by eras,
            dynasties, events, and personalities, we aim to build the most
            comprehensive and intuitive resource for Indian history.
          </p>
          <p>
            Starting with blog-style articles and structured historical series,
            Magadh Empire will evolve into a full educational platform with
            AI-powered tools, video content, and community features.
          </p>
        </div>

        <div style={{ marginTop: "var(--spacing-8)" }}>
          <Button href="/eras">Start Exploring →</Button>
        </div>
      </div>
    </section>
  );
}
