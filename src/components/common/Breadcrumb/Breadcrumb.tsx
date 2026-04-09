import Link from "next/link";
import { BreadcrumbItem } from "@/lib/types";
import styles from "./Breadcrumb.module.css";

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className={styles.breadcrumb} aria-label="Breadcrumb">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <span key={item.href + item.label}>
            {isLast ? (
              <span className={styles.current}>{item.label}</span>
            ) : (
              <>
                <Link href={item.href} className={styles.breadcrumbLink}>
                  {item.label}
                </Link>
                <span className={styles.separator}>›</span>
              </>
            )}
          </span>
        );
      })}
    </nav>
  );
}
