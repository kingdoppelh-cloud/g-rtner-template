export interface SiteConfig {
  company: {
    name: string;
    owner: string;
    legalForm: string;
    claim: string;
    foundedYear: number;
    isMeisterbetrieb: boolean;
    isInnungsmitglied: boolean;
    handwerkskammer: string;
    phone: string;
    phoneEmergency: string;
    email: string;
    website: string;
    address: {
      street: string;
      zip: string;
      city: string;
    };
    region: string;
    serviceRadius: string;
    openingHours: {
      weekdays: string;
      saturday: string;
      emergency: string;
    };
    employees: number;
    footerText: string;
  };
  preloader: {
    title: string;
    subline: string;
  };
  colors: {
    primary: string;
    primaryLight: string;
    primaryLighter: string;
    accent: string;
    accentLight: string;
    accentLighter: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  features: {
    notdienstBanner: boolean;
    whatsappButton: boolean;
    whatsappNummer: string;
    googleMaps: boolean;
    analytics: boolean;
    cookieConsent: boolean;
    kontaktBackend: string;
    faq: boolean;
    galerie: boolean;
  };
  socialProof: {
    googleRating: number;
    googleReviewCount: number;
    yearsExperience: number;
    completedProjects: number;
    emergencyResponseMinutes: number;
  };
  hero: {
    headline: string;
    subline: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  leadMagnet: {
    typ: string;
    titel: string;
    untertitel: string;
    cta: string;
    beschreibung: string;
  };
  navigation: Array<{
    label: string;
    href: string;
  }>;
  services: Array<{
    slug: string;
    titel: string;
    icon: string;
    kurz: string;
    beschreibung: string;
    kundenprobleme: string[];
    vorteile: Array<{
      titel: string;
      text: string;
    }>;
  }>;
  about: {
    sectionTitle: string;
    headline: string;
    description: string;
    quote: string;
    image: string;
    badges: string[];
  };
  gallery: {
    sectionTitle: string;
    headline: string;
    subline: string;
    images: Array<{
      id: number;
      src: string;
      category: string;
      title: string;
    }>;
  };
  faq: Array<{
    question: string;
    answer: string;
  }>;
  reviews: Array<{
    text: string;
    name: string;
    ort: string;
    sterne: number;
    datum: string;
  }>;
}

export const siteConfig: SiteConfig = {
  // 1. FIRMENDATEN (Exakt aus seiner Anzeige)
  company: {
    name: "Gartenpflege Honka",
    owner: "Armin Honka",
    legalForm: "Einzelunternehmen",
    claim: "Ihre Gartenpflege mit Profi-Ausrüstung.",
    foundedYear: 2010, // Basierend auf seiner "langjährigen Erfahrung"
    isMeisterbetrieb: false,
    isInnungsmitglied: false,
    handwerkskammer: "HWK Kassel",
    phone: "0157 3467 2596",
    phoneEmergency: "0157 3467 2596",
    email: "anfrage@gartenpflege-honka.de",
    website: "www.gartenpflege-honka.de",
    address: {
      street: "Ankerstraße 1", // Platzhalter für die Region
      zip: "34117",
      city: "Kassel & Umland",
    },
    region: "Nordhessen",
    serviceRadius: "30km",
    openingHours: {
      weekdays: "Mo–Fr: 07:00–18:00 Uhr",
      saturday: "Nach Vereinbarung",
      emergency: "WhatsApp jederzeit erreichbar",
    },
    employees: 1,
    footerText: "Professionelle Gartenpflege mit Herz und Verstand. Wir bringen Ihren Garten mit Stihl-Profi-Geräten wieder in Bestform."
  },

  preloader: {
    title: "Gartenpflege Honka",
    subline: "Profi-Ausrüstung für Ihren Garten",
  },

  // 2. FARBEN (Passend zum Stihl-Orange/Grün für Wiedererkennung)
  colors: {
    primary: "#14532d",       // Dunkelgrün
    primaryLight: "#166534",
    primaryLighter: "#dcfce7",
    accent: "#f59e0b",        // Satteres Orange (Stihl-Vibe)
    accentLight: "#fbbf24",
    accentLighter: "#fef3c7",
  },

  // 3. SEO (Lokal auf Kassel/Nordhessen optimiert)
  seo: {
    title: "Gartenpflege Honka – Ihr Gärtner in Kassel & Umgebung",
    description:
      "Professionelle Gartenpflege von Armin Honka. Rasenmähen, Heckenschnitt und Grünabfall-Entsorgung mit Profi-Stihl-Geräten in Nordhessen.",
    keywords: [
      "Gartenpflege Kassel",
      "Hecke schneiden Nordhessen",
      "Stihl Profi Gartenpflege",
      "Grünschnitt Entsorgung Kassel",
    ],
  },

  // 4. FUNKTIONEN AN/AUS (WhatsApp ist sein Hauptkanal!)
  features: {
    notdienstBanner: false,
    whatsappButton: true,
    whatsappNummer: "4915734672596", // Seine Nummer aus der Anzeige
    googleMaps: false,
    analytics: false,
    cookieConsent: true,
    kontaktBackend: "frontend",
    faq: true,
    galerie: true,
  },

  // 5. ZAHLEN & FAKTEN (Geschätzt für Einzelunternehmer mit Erfahrung)
  socialProof: {
    googleRating: 4.9,
    googleReviewCount: 24,
    yearsExperience: 8,
    completedProjects: 450,
    emergencyResponseMinutes: 60,
  },

  // 6. HERO SECTION (Persönlich & Direkt)
  hero: {
    headline: "Ich bringe Ihren Garten wieder in Bestform.",
    subline:
      "Vertrauen Sie auf langjährige Erfahrung und Profi-Stihl-Geräte. Zuverlässige Gartenpflege in Kassel und Umgebung – inklusive Entsorgung.",
    ctaPrimary: "Kostenloses Angebot sichern",
    ctaSecondary: "Direkt per WhatsApp",
  },

  // Lead Magnet (Optional - hier erstmal deaktiviert oder einfach halten)
  leadMagnet: {
    typ: "checklist",
    titel: "Garten-Pflegeplan",
    untertitel: "Ihr Wegweiser durch das Gartenjahr",
    cta: "Gratis herunterladen",
    beschreibung: "Tipps & Tricks vom Profi für Ihren Garten.",
  },

  // Navigation (WICHTIG: Wurde vorher gelöscht!)
  navigation: [
    { label: "Startseite", href: "/" },
    { label: "Leistungen", href: "#leistungen" },
    { label: "Über uns", href: "#ueber-uns" },
    { label: "Kontakt", href: "#kontakt" },
  ],

  // 7. LEISTUNGEN (Exakt seine USPs aus der Anzeige)
  services: [
    {
      slug: "gartenpflege",
      titel: "Gartenpflege",
      icon: "Flower2",
      kurz: "Rasen, Hecken & Beete",
      beschreibung:
        "Langjährige Erfahrung für Ihren Garten. Wir kümmern uns um den perfekten Schnitt und die nachhaltige Pflege Ihrer Anlage.",
      kundenprobleme: [
        "Die Hecke wuchert über den Zaun?",
        "Der Garten braucht dringend eine Grundreinigung?",
        "Sie suchen einen zuverlässigen Gärtner?",
      ],
      vorteile: [
        { titel: "Stihl-Profi-Geräte", text: "Für maximale Präzision und Schnelligkeit." },
        { titel: "Langjährige Erfahrung", text: "Ich weiß genau, was Ihr Garten braucht." },
        { titel: "Zuverlässigkeit", text: "Termintreue ist bei mir Ehrensache." },
      ],
    },
    {
      slug: "entsorgung",
      titel: "Grünabfall-Entsorgung",
      icon: "Truck",
      kurz: "Saubere Abfuhr mit Anhänger",
      beschreibung:
        "Kein Stress mit dem Grünschnitt. Ich verfüge über einen eigenen Anhänger und entsorge Ihren Gartenabfall fachgerecht für nur 30€ pro Fahrt.",
      kundenprobleme: [
        "Wohin mit dem ganzen Grünschnitt?",
        "Kein Anhänger oder Zeit für die Deponie?",
      ],
      vorteile: [
        { titel: "Inklusive Abholung", text: "Direkte Mitnahme nach der Arbeit." },
        { titel: "Faire Pauschale", text: "Transparente Kosten ohne Überraschungen." },
      ],
    },
    {
      slug: "baumfaellung",
      titel: "Baumfällung",
      icon: "Axe",
      kurz: "Sichere Fällung",
      beschreibung:
        "Wenn der Baum weg muss oder Pflege braucht. Wir fällen sicher und entfernen auf Wunsch den Stumpf.",
      kundenprobleme: [
        "Der Baum ist krank oder morsch?",
        "Die Äste hängen zu nah am Haus?",
      ],
      vorteile: [
        { titel: "Sicherheit", text: "Wir wissen genau, wie der Baum fällt." },
        { titel: "Entsorgung", text: "Wir nehmen das Holz direkt mit." },
      ],
    },
  ],

  // 8. ÜBER UNS (Angepasst auf Einzelunternehmer)
  about: {
    sectionTitle: "Über mich",
    headline: "Ihr Gärtner mit Herz und Verstand",
    description: "Als erfahrener Gartenprofi in Kassel und Umgebung stehe ich für zuverlässige Arbeit und faire Preise. Mit meinem eigenen Maschinenpark (Stihl) und Anhänger bin ich für jede Aufgabe im Garten gerüstet.",
    quote: "Ein schöner Garten macht Freude – ich sorge dafür, dass es so bleibt.",
    image: "/images/placeholder_profile.svg", // Platzhalter
    badges: [
      "Langjährige Erfahrung",
      "Eigene Profi-Geräte",
      "Anhänger vorhanden",
      "Faire Festpreise",
      "Schnelle Termine",
      "Saubere Arbeit"
    ]
  },

  // 9. GALERIE
  gallery: {
    sectionTitle: "Meine Arbeit",
    headline: "Eindrücke meiner Arbeit",
    subline: "Ein kleiner Einblick in meine tägliche Arbeit.",
    images: [
      { id: 1, src: "/images/projects/project-1.webp", category: "garten", title: "Heckenschnitt" },
      { id: 2, src: "/images/projects/project-2.webp", category: "pflaster", title: "Rasenpflege" },
      { id: 3, src: "/images/projects/project-3.webp", category: "wasser", title: "Neuanpflanzung" },
    ]
  },

  // 10. FAQS
  faq: [
    {
      question: "Arbeiten Sie auch samstags?",
      answer: "Ja, nach individueller Vereinbarung bin ich auch samstags für Sie im Einsatz."
    },
    {
      question: "Was kostet die Entsorgung?",
      answer: "Für die Abfuhr von Grünschnitt mit meinem Anhänger berechne ich eine faire Pauschale von 30€ pro Fahrt."
    },
    {
      question: "Bringen Sie Werkzeug mit?",
      answer: "Selbstverständlich. Ich arbeite mit meinen eigenen professionellen Stihl-Geräten."
    },
  ],

  // 11. BEWERTUNGEN
  reviews: [
    {
      text: "Herr Honka war sehr pünktlich und hat unsere Hecke perfekt geschnitten. Alles sauber hinterlassen. Gerne wieder!",
      name: "M. Schneider",
      ort: "Kassel",
      sterne: 5,
      datum: "2024-05",
    },
    {
      text: "Super Service mit der Entsorgung. Endlich ist der ganze Grünschnitt weg. Preis-Leistung top.",
      name: "K. Weber",
      ort: "Vellmar",
      sterne: 5,
      datum: "2024-06",
    },
  ],
};