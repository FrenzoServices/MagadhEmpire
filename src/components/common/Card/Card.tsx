import Link from "next/link";
import styles from "./Card.module.css";

interface CardProps {
  href: string;
  title: string;
  description: string;
  tag?: string;
  meta?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export default function Card({
  href,
  title,
  description,
  tag,
  meta,
  imageSrc,
  imageAlt,
}: CardProps) {
  return (
    <Link href={href} className={styles.card} style={{ textDecoration: "none" }}>
      {imageSrc && (
        <img
          src={imageSrc}
          alt={imageAlt || title}
          className={styles.cardImage}
          loading="lazy"
        />
      )}

      <div className={styles.cardBody}>
        {tag && <span className={styles.cardTag}>{tag}</span>}
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
      </div>

      {meta && (
        <div className={styles.cardFooter}>
          <span className={styles.cardMeta}>{meta}</span>
          <span className={styles.cardMeta}>→</span>
        </div>
      )}
    </Link>
  );
}
