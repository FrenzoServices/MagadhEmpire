export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Eras", href: "/eras" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

export const SITE_CONFIG = {
  name: "Magadh Empire",
  tagline: "Exploring the Depths of Indian History",
  description:
    "A digital heritage platform dedicated to preserving and sharing the rich narrative of Indian civilization.",
  url: "https://magadhempire.com",
} as const;
