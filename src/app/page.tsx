import Button from "@/components/common/Button";
import Card from "@/components/common/Card";
import styles from "./page.module.css";

const FEATURED_ERAS = [
  {
    title: "Ancient India",
    description: "From the Indus Valley Civilization to the rise of the Mauryan Empire — the dawn of a civilization.",
    tag: "3300 BCE – 500 CE",
    href: "/eras/ancient",
  },
  {
    title: "Medieval India",
    description: "The age of Rajput valor, the Delhi Sultanate, and the magnificent Mughal Empire.",
    tag: "500 CE – 1757 CE",
    href: "/eras/medieval",
  },
  {
    title: "Modern India",
    description: "The struggle for independence, the birth of a republic, and the shaping of contemporary India.",
    tag: "1757 CE – Present",
    href: "/eras/modern",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.heroSubtitle}>Discover · Learn · Remember</p>
          <h1 className={styles.heroTitle}>
            The Grand Narrative of
            <br />
            <span className={styles.heroHighlight}>Indian Civilization</span>
          </h1>
          <p className={styles.heroDescription}>
            A digital odyssey through the grandeur of Indian history. From
            ancient eras to legendary dynasties, witness the stories that shaped
            a civilization.
          </p>
          <div className={styles.heroCta}>
            <Button href="/eras" size="lg">
              Explore Eras
            </Button>
            <Button href="/blog" variant="outline" size="lg">
              Latest Series
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Eras Section */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitle}>Journey Through Time</h2>
          <p className={styles.sectionSubtitle}>
            Navigate through the great eras of Indian history
          </p>
          <div className={styles.cardGrid}>
            {FEATURED_ERAS.map((era) => (
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

      {/* Mission Section */}
      <section className={styles.missionSection}>
        <div className={styles.sectionInner}>
          <h2 className={styles.missionTitle}>Our Mission</h2>
          <p className={styles.missionText}>
            To make the rich history of Indian civilization accessible,
            engaging, and structured — for students, enthusiasts, and anyone
            who believes history shapes the future.
          </p>
          <Button href="/about" variant="outline">
            Learn More About Us
          </Button>
        </div>
      </section>
    </>
  );
}
