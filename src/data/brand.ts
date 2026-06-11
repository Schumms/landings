/**
 * brand.ts — Schumm & Rösch Marken-Konfiguration (statisch, nicht vom Agent editiert)
 */

export interface NavLink {
  label: string;
  href: string;
}

export interface BrandData {
  company: string;
  companyShort: string;
  tagline: string;
  url: string;
  landingUrl: string;
  lang: string;
  /** Schwarzes Logo — für helle Hintergründe (Nav, Formular) */
  logo: string;
  /** Weißes Logo — für dunkle Hintergründe (Hero-Overlay, Footer) */
  logoOnDark: string;
  logoAlt: string;
  nav: {
    left: NavLink[];
    right: NavLink[];
  };
  footer: {
    nav: NavLink[];
    legal: NavLink[];
  };
  contact: {
    email: string;
    phone: string;
    address: {
      street: string;
      zip: string;
      city: string;
    };
  };
  social: {
    instagram?: string;
    linkedin?: string;
    tiktok?: string;
  };
  legal: {
    impressum: string;
    datenschutz: string;
  };
}

const brand: BrandData = {
  company: "Schumm & Rösch Planen + Einrichten GmbH",
  companyShort: "Schumm & Rösch",
  tagline: "Wir erschaffen Arbeitsräume der Zukunft.",
  url: "https://www.schumms.com",
  landingUrl: "https://landing.schumms.com",
  lang: "de",
  logo: "/images/schumms-logo-black.png",
  logoOnDark: "/images/schumms-logo-white.png",
  logoAlt: "Schumm & Rösch",
  nav: {
    left: [
      { label: "Services", href: "https://www.schumms.com/services" },
      { label: "Events", href: "https://www.schumms.com/events" },
    ],
    right: [
      { label: "Team", href: "https://www.schumms.com/team" },
      { label: "Kontakt", href: "https://www.schumms.com/kontakt" },
    ],
  },
  footer: {
    nav: [
      { label: "Services", href: "https://www.schumms.com/services" },
      { label: "Events", href: "https://www.schumms.com/events" },
      { label: "Team", href: "https://www.schumms.com/team" },
      { label: "Blog", href: "https://www.schumms.com/blog" },
      { label: "Kontakt", href: "https://www.schumms.com/kontakt" },
    ],
    legal: [
      { label: "Impressum", href: "/impressum" },
      { label: "Datenschutz", href: "/datenschutz" },
    ],
  },
  contact: {
    email: "Info@schumms.com",
    phone: "+49 (0)6122 727 555-0",
    address: {
      street: "Borsigstraße 20",
      zip: "65205",
      city: "Wiesbaden",
    },
  },
  social: {
    instagram: "https://www.instagram.com/schumms.de/",
    linkedin: "https://www.linkedin.com/company/schumm-roesch/",
    tiktok: "https://www.tiktok.com/@schumms.de",
  },
  legal: {
    impressum: "/impressum",
    datenschutz: "/datenschutz",
  },
};

export default brand;
