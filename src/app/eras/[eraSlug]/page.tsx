import { notFound } from "next/navigation";
import { ALL_ERAS, getEraBySlug, buildBreadcrumbs } from "@/content";
import Breadcrumb from "@/components/common/Breadcrumb";
import Card from "@/components/common/Card";

interface EraPageProps {
  params: Promise<{ eraSlug: string }>;
}

export function generateStaticParams() {
  return ALL_ERAS.map((era) => ({ eraSlug: era.slug }));
}

export async function generateMetadata({ params }: EraPageProps) {
  const { eraSlug } = await params;
  const era = getEraBySlug(eraSlug);
  if (!era) return {};
  return {
    title: `${era.title} | Magadh Empire`,
    description: era.description,
  };
}

export default async function EraPage({ params }: EraPageProps) {
  const { eraSlug } = await params;
  const era = getEraBySlug(eraSlug);
  if (!era) notFound();

  const breadcrumbs = buildBreadcrumbs(eraSlug);

  return (
    <section style={{ padding: "var(--spacing-8) var(--spacing-4)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Breadcrumb items={breadcrumbs} />

        <div style={{ marginBottom: "var(--spacing-8)" }}>
          {era.period && (
            <span style={{
              display: "inline-block",
              fontSize: "var(--font-size-xs)",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "var(--color-primary-dark)",
              backgroundColor: "var(--color-primary-light)",
              padding: "var(--spacing-1) var(--spacing-3)",
              borderRadius: "var(--border-radius-sm)",
              marginBottom: "var(--spacing-3)",
            }}>
              {era.period}
            </span>
          )}
          <h1 style={{
            fontFamily: "var(--font-family-serif)",
            fontSize: "var(--font-size-4xl)",
            color: "var(--color-secondary-dark)",
            marginBottom: "var(--spacing-4)",
          }}>
            {era.title}
          </h1>
          <p style={{
            fontSize: "var(--font-size-lg)",
            color: "var(--color-text-secondary)",
            lineHeight: "1.8",
            maxWidth: "800px",
            whiteSpace: "pre-line",
          }}>
            {era.content}
          </p>
        </div>

        {/* Dynasties */}
        {era.dynasties.length > 0 && (
          <div>
            <h2 style={{
              fontFamily: "var(--font-family-serif)",
              fontSize: "var(--font-size-2xl)",
              color: "var(--color-secondary-dark)",
              marginBottom: "var(--spacing-6)",
            }}>
              Dynasties & Periods
            </h2>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "var(--spacing-6)",
            }}>
              {era.dynasties.map((dynasty) => (
                <Card
                  key={dynasty.slug}
                  href={`/eras/${eraSlug}/${dynasty.slug}`}
                  title={dynasty.title}
                  description={dynasty.description}
                  tag={dynasty.period}
                  meta={`Founded by ${dynasty.founder}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
