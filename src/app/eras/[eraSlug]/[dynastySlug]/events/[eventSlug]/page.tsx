import { notFound } from "next/navigation";
import { ALL_ERAS, getEventBySlug, buildBreadcrumbs } from "@/content";
import Breadcrumb from "@/components/common/Breadcrumb";
import Button from "@/components/common/Button";

interface EventPageProps {
  params: Promise<{ eraSlug: string; dynastySlug: string; eventSlug: string }>;
}

export function generateStaticParams() {
  const paths: { eraSlug: string; dynastySlug: string; eventSlug: string }[] = [];
  ALL_ERAS.forEach((era) => {
    era.dynasties.forEach((dynasty) => {
      dynasty.events.forEach((event) => {
        paths.push({ eraSlug: era.slug, dynastySlug: dynasty.slug, eventSlug: event.slug });
      });
    });
  });
  return paths;
}

export async function generateMetadata({ params }: EventPageProps) {
  const { eraSlug, dynastySlug, eventSlug } = await params;
  const result = getEventBySlug(eraSlug, dynastySlug, eventSlug);
  if (!result) return {};
  return {
    title: `${result.event.title} | ${result.dynasty.title} | Magadh Empire`,
    description: result.event.description,
  };
}

export default async function EventPage({ params }: EventPageProps) {
  const { eraSlug, dynastySlug, eventSlug } = await params;
  const result = getEventBySlug(eraSlug, dynastySlug, eventSlug);
  if (!result) notFound();

  const { dynasty, event } = result;
  const breadcrumbs = buildBreadcrumbs(eraSlug, dynastySlug, event.title);

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
          }}>{event.year}</span>
        </div>

        <h1 style={{
          fontFamily: "var(--font-family-serif)", fontSize: "var(--font-size-4xl)",
          color: "var(--color-secondary-dark)", marginBottom: "var(--spacing-4)",
        }}>{event.title}</h1>

        <div style={{
          padding: "var(--spacing-4) var(--spacing-6)", backgroundColor: "var(--color-background-soft)",
          borderLeft: "4px solid var(--color-primary)", borderRadius: "var(--border-radius-sm)",
          marginBottom: "var(--spacing-8)",
        }}>
          <p style={{ fontWeight: 600, fontSize: "var(--font-size-sm)", color: "var(--color-text-secondary)", marginBottom: "var(--spacing-1)" }}>
            Historical Significance
          </p>
          <p style={{ color: "var(--color-text-primary)", lineHeight: "1.6" }}>
            {event.significance}
          </p>
        </div>

        <div style={{
          fontSize: "var(--font-size-lg)", color: "var(--color-text-secondary)",
          lineHeight: "1.9", whiteSpace: "pre-line",
        }}>
          {event.content}
        </div>

        <div style={{ marginTop: "var(--spacing-8)" }}>
          <Button href={`/eras/${eraSlug}/${dynastySlug}`} variant="ghost">
            ← Back to {dynasty.title}
          </Button>
        </div>
      </div>
    </section>
  );
}
