import { notFound } from "next/navigation";
import { ALL_ERAS, getDynastyBySlug, buildBreadcrumbs } from "@/content";
import Breadcrumb from "@/components/common/Breadcrumb";
import Card from "@/components/common/Card";
import Button from "@/components/common/Button";

interface DynastyPageProps {
  params: Promise<{ eraSlug: string; dynastySlug: string }>;
}

export function generateStaticParams() {
  const paths: { eraSlug: string; dynastySlug: string }[] = [];
  ALL_ERAS.forEach((era) => {
    era.dynasties.forEach((dynasty) => {
      paths.push({ eraSlug: era.slug, dynastySlug: dynasty.slug });
    });
  });
  return paths;
}

export async function generateMetadata({ params }: DynastyPageProps) {
  const { eraSlug, dynastySlug } = await params;
  const result = getDynastyBySlug(eraSlug, dynastySlug);
  if (!result) return {};
  return {
    title: `${result.dynasty.title} | ${result.era.title} | Magadh Empire`,
    description: result.dynasty.description,
  };
}

export default async function DynastyPage({ params }: DynastyPageProps) {
  const { eraSlug, dynastySlug } = await params;
  const result = getDynastyBySlug(eraSlug, dynastySlug);
  if (!result) notFound();

  const { era, dynasty } = result;
  const breadcrumbs = buildBreadcrumbs(eraSlug, dynastySlug);

  return (
    <section style={{ padding: "var(--spacing-8) var(--spacing-4)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Breadcrumb items={breadcrumbs} />

        {/* Header */}
        <div style={{ marginBottom: "var(--spacing-8)" }}>
          <div style={{ display: "flex", gap: "var(--spacing-3)", marginBottom: "var(--spacing-3)", flexWrap: "wrap" }}>
            {dynasty.period && (
              <span style={{
                fontSize: "var(--font-size-xs)", fontWeight: 600,
                textTransform: "uppercase", letterSpacing: "0.08em",
                color: "var(--color-primary-dark)", backgroundColor: "var(--color-primary-light)",
                padding: "var(--spacing-1) var(--spacing-3)", borderRadius: "var(--border-radius-sm)",
              }}>{dynasty.period}</span>
            )}
            <span style={{
              fontSize: "var(--font-size-xs)", fontWeight: 500,
              color: "var(--color-text-light)", padding: "var(--spacing-1) var(--spacing-3)",
              border: "1px solid rgba(0,0,0,0.1)", borderRadius: "var(--border-radius-sm)",
            }}>Capital: {dynasty.capital}</span>
          </div>

          <h1 style={{
            fontFamily: "var(--font-family-serif)", fontSize: "var(--font-size-4xl)",
            color: "var(--color-secondary-dark)", marginBottom: "var(--spacing-4)",
          }}>{dynasty.title}</h1>

          <p style={{
            fontSize: "var(--font-size-lg)", color: "var(--color-text-secondary)",
            lineHeight: "1.8", maxWidth: "800px", whiteSpace: "pre-line",
          }}>{dynasty.content}</p>
        </div>

        {/* Key Events */}
        {dynasty.events.length > 0 && (
          <div style={{ marginBottom: "var(--spacing-12)" }}>
            <h2 style={{
              fontFamily: "var(--font-family-serif)", fontSize: "var(--font-size-2xl)",
              color: "var(--color-secondary-dark)", marginBottom: "var(--spacing-6)",
            }}>Key Events</h2>
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "var(--spacing-6)",
            }}>
              {dynasty.events.map((event) => (
                <Card
                  key={event.slug}
                  href={`/eras/${eraSlug}/${dynastySlug}/events/${event.slug}`}
                  title={event.title}
                  description={event.description}
                  tag={event.year}
                  meta="Read more →"
                />
              ))}
            </div>
          </div>
        )}

        {/* Notable Personalities */}
        {dynasty.personalities.length > 0 && (
          <div style={{ marginBottom: "var(--spacing-12)" }}>
            <h2 style={{
              fontFamily: "var(--font-family-serif)", fontSize: "var(--font-size-2xl)",
              color: "var(--color-secondary-dark)", marginBottom: "var(--spacing-6)",
            }}>Notable Personalities</h2>
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "var(--spacing-6)",
            }}>
              {dynasty.personalities.map((person) => (
                <Card
                  key={person.slug}
                  href={`/eras/${eraSlug}/${dynastySlug}/personalities/${person.slug}`}
                  title={person.title}
                  description={person.description}
                  tag={person.role}
                  meta={person.birthYear ? `${person.birthYear} – ${person.deathYear || "?"}` : undefined}
                />
              ))}
            </div>
          </div>
        )}

        <Button href={`/eras/${eraSlug}`} variant="ghost">
          ← Back to {era.title}
        </Button>
      </div>
    </section>
  );
}
