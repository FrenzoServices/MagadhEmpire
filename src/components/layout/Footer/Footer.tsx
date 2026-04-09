import Link from "next/link";
import { NAV_ITEMS, SITE_CONFIG } from "@/lib/constants/navigation";
import styles from "./Footer.module.css";

const EXPLORE_LINKS = [
  { label: "Ancient Era", href: "/eras/ancient" },
  { label: "Medieval Era", href: "/eras/medieval" },
  { label: "Modern Era", href: "/eras/modern" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        {/* Brand Column */}
        <div className={styles.brand}>
          <span className={styles.brandName}>🏛️ {SITE_CONFIG.name}</span>
          <p className={styles.brandDescription}>
            {SITE_CONFIG.description}
          </p>
        </div>

        {/* Navigation Column */}
        <div>
          <h4 className={styles.columnTitle}>Navigate</h4>
          <div className={styles.columnLinks}>
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={styles.columnLink}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Explore Column */}
        <div>
          <h4 className={styles.columnTitle}>Explore</h4>
          <div className={styles.columnLinks}>
            {EXPLORE_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={styles.columnLink}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <hr className={styles.divider} />
        <p className={styles.copyright}>
          © {currentYear} {SITE_CONFIG.name}. Preserving history for the future.
        </p>
      </div>
    </footer>
  );
}
