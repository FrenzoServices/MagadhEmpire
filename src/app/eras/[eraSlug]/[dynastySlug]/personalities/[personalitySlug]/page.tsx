import { notFound } from "next/navigation";
import { ALL_ERAS, getPersonalityBySlug, buildBreadcrumbs } from "@/content";
import Breadcrumb from "@/components/common/Breadcrumb";
import Button from "@/components/common/Button";

interface PersonalityPageProps {
  params: Promise<{ eraSlug: string; dynastySlug: string; personalitySlug: string }>;
}

export function generateStaticParams() {
  const paths: { eraSlug: string; dynastySlug: string; personalitySlug: string }[] = [];
  ALL_ERAS.forEach((era) => {
    era.dynasties.forEach((dynasty) => {
      dynasty.personalities.forEach((person) => {
        paths.push({ eraSlug: era.slug, dynastySlug: dynasty.slug, personalitySlug: person.slug });
      });
    });
  });
  return paths;
}

export async function generateMetadata({ params }: PersonalityPageProps) {
  const { eraSlug, dynastySlug, personalitySlug } = await params;
  const result = getPersonalityBySlug(eraSlug, dynastySlug, personalitySlug);
  if (!result) return {};
  return {
    title: `${result.personality.title} | ${result.dynasty.title} | Magadh Empire`,
    description: result.personality.description,
  };
}

export default async function PersonalityPage({ params }: PersonalityPageProps) {
  const { eraSlug, dynastySlug, personalitySlug } = await params;
  const result = getPersonalityBySlug(eraSlug, dynastySlug, personalitySlug);
  if (!result) notFound();

  const { dynasty, personality } = result;
  const breadcrumbs = buildBreadcrumbs(eraSlug, dynastySlug, personality.title);

  return (
    <section style={{ padding: "var(--spacing-8) var(--spacing-4)" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <Breadcrumb items={breadcrumbs} />

        <div style={{ display: "flex", gap: "var(--spacing-3)", marginBottom: "var(--spacing-3)", flexWrap: "wrap" }}>
          <span style={{
            fontSize: "var(--font-size-xs)", fontWeight: 600, textTransform: "uppercase",
            letterSpacing: "0.08em", color: "var(--color-primary-dark)",
            backgroundColor: "var(--color-primary-light)",
            padding: "var(--spacing-1) var(--spacing-3)", borderRadius: "var(--border-radius-sm)",
          }}>{personality.role}</span>
          {personality.birthYear && (
            <span style={{
              fontSize: "var(--font-size-xs)", fontWeight: 500, color: "var(--color-text-light)",
              padding: "var(--spacing-1) var(--spacing-3)", border: "1px solid rgba(0,0,0,0.1)",
              borderRadius: "var(--border-radius-sm)",
            }}>{personality.birthYear} – {personality.deathYear || "?"}</span>
          )}
        </div>

        <h1 style={{
          fontFamily: "var(--font-family-serif)", fontSize: "var(--font-size-4xl)",
          color: "var(--color-secondary-dark)", marginBottom: "var(--spacing-6)",
        }}>{personality.title}</h1>

        <div style={{
          fontSize: "var(--font-size-lg)", color: "var(--color-text-secondary)",
          lineHeight: "1.9", whiteSpace: "pre-line", marginBottom: "var(--spacing-8)",
        }}>
          {personality.content}
        </div>

        {/* Achievements */}
        {personality.achievements.length > 0 && (
          <div style={{
            padding: "var(--spacing-6)", backgroundColor: "var(--color-background-soft)",
            borderRadius: "var(--border-radius-lg)", marginBottom: "var(--spacing-8)",
          }}>
            <h2 style={{
              fontFamily: "var(--font-family-serif)", fontSize: "var(--font-size-xl)",
              color: "var(--color-secondary-dark)", marginBottom: "var(--spacing-4)",
            }}>Key Achievements</h2>
            <ul style={{
              listStyle: "none", padding: 0, display: "flex", flexDirection: "column",
              gap: "var(--spacing-3)",
            }}>
              {personality.achievements.map((achievement, idx) => (
                <li key={idx} style={{
                  paddingLeft: "var(--spacing-6)", position: "relative",
                  color: "var(--color-text-secondary)", lineHeight: "1.6",
                }}>
                  <span style={{
                    position: "absolute", left: 0, color: "var(--color-primary-dark)",
                    fontWeight: 700,
                  }}>✦</span>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        )}

        <Button href={`/eras/${eraSlug}/${dynastySlug}`} variant="ghost">
          ← Back to {dynasty.title}
        </Button>
      </div>
    </section>
  );
}
