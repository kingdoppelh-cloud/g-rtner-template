# Vollständige Anforderungen: Handwerker-Landingpage

> Diese Datei beschreibt die komplette Seitenstruktur, alle Sektionen, SEO-Anforderungen,
> Lead-Generierung und technische Details. Referenziert aus `CLAUDE.md`.

---

## Interaktiver Setup-Prozess

**Beim ersten Start: Stelle dem Nutzer die folgenden Fragen nacheinander.**
Warte jeweils die Antwort ab, bevor du zur nächsten Frage übergehst.
Die Antworten werden in `lib/config.ts` und `docs/BRANCHE.md` eingetragen.

### Frage 1: Branche & Firmendaten
```
Für welchen Betrieb erstellen wir die Website?
- Firmenname
- Inhaber / Geschäftsführer
- Branche (z.B. SHK, Dachdecker, Elektriker, Maler)
- Stadt / Region
- Telefonnummer
- E-Mail-Adresse
```

### Frage 2: Leistungsspektrum
```
Welche Leistungen bietet der Betrieb an? (4–6 Kernleistungen)
→ Ich schlage branchenspezifische Leistungen vor, du bestätigst oder änderst.
```

### Frage 3: Analytics
```
Web-Analytics integrieren?
→ JA → Google Analytics Measurement-ID eingeben (G-XXXXXXXXXX)
→ NEIN → Weiter
```

### Frage 4: Cookie-Consent
```
DSGVO Cookie-Banner integrieren?
→ JA → Clientseitiger Banner (kein externer Dienst)
→ NEIN → Weiter
```

### Frage 5: Kontaktformular-Backend
```
Wie sollen Anfragen ankommen?
→ A) E-Mail (Resend API-Key benötigt)
→ B) Webhook (Make.com / n8n URL benötigt)
→ C) Nur Frontend (später anbinden)
```

### Frage 6: Farbschema
```
Farbschema?
→ A) Branchenempfehlung (ich schlage basierend auf der Branche vor)
→ B) Eigene Farben (Primary + Accent als Hex)
```

### Frage 7: Lead Magnet
```
Lead Magnet integrieren?
→ A) Checkliste (PDF-Download gegen E-Mail)
→ B) Kostenrechner (interaktives Tool)
→ C) Wartungsplaner (interaktives Tool)
→ D) Förder-Check (Kurzabfrage)
→ E) Keinen
```

### Frage 8: Zusatzfeatures
```
Zusatzfeatures? (Mehrfachauswahl)
□ WhatsApp-Button
□ Notdienst-Banner (24/7)
□ Google Maps Einbettung
□ Bildergalerie / Referenzen
□ Team-Sektion
□ FAQ-Akkordeon
```

---

## Zentrale Konfiguration (`lib/config.ts`)

Alle Daten aus `docs/BRANCHE.md` werden in eine typisierte Konfiguration überführt.
Der Nutzer muss **nur `docs/BRANCHE.md` ändern** – `config.ts` liest daraus.

```typescript
// Type-Definition
export interface SiteConfig {
  company: {
    name: string;
    owner: string;
    claim: string;
    foundedYear: number;
    phone: string;
    phoneEmergency: string;
    email: string;
    address: { street: string; zip: string; city: string };
    region: string;
    serviceRadius: string;
    openingHours: { weekdays: string; saturday: string; emergency: string };
  };
  colors: {
    primary: string;
    primaryLight: string;
    primaryLighter: string;
    accent: string;
    accentLight: string;
  };
  seo: { title: string; description: string; keywords: string[] };
  features: Record<string, boolean | string>;
  socialProof: {
    googleRating: number;
    googleReviewCount: number;
    yearsExperience: number;
    completedProjects: number;
    emergencyResponseMinutes: number;
  };
  navigation: Array<{ label: string; href: string; children?: Array<{ label: string; href: string }> }>;
}
```

---

## Seitenstruktur

### Globaler Header

- **Sticky** mit `bg-white/90 backdrop-blur-sm` beim Scrollen
- Logo links (Text-Logo mit Firmenname, kein Bild nötig)
- Navigation mittig (Desktop) / Hamburger (Mobile, shadcn `Sheet`)
- Rechts: Telefonnummer (Desktop) + CTA-Button "Anfrage" in Akzentfarbe
- Framer Motion: sanftes `y: -10 → 0` beim initialen Laden
- **Notdienst-Banner** (optional): Schmaler roter Streifen ÜBER dem Header
  - Roter pulsierender Punkt + "24h Notdienst: {telefon}" + schließbar

### Globaler Footer

- `bg-slate-900 text-white`
- 4-Spalten Layout → 1 Spalte mobil
  - Spalte 1: Firmenname, Kurztext, (Social-Icons Platzhalter)
  - Spalte 2: Leistungen (Links)
  - Spalte 3: Kontaktdaten, Öffnungszeiten
  - Spalte 4: Rechtliches (Impressum, Datenschutz, AGB)
- Untere Zeile: `© {Jahr} {Firmenname}. Alle Rechte vorbehalten.`

### Rechtliche Seiten

**Impressum** – Pflichtangaben nach § 5 TMG:
- Firmendaten, Kontakt, USt-ID (Platzhalter), HWK-Zugehörigkeit
- Berufsbezeichnung, Aufsichtsbehörde
- Streitschlichtung (EU OS-Plattform Link)
- **Hinweis:** "Platzhalter – bitte von Rechtsanwalt prüfen lassen"

**Datenschutz** – DSGVO-konforme Vorlage:
- Verantwortlicher, Datenerfassung, Hosting, Kontaktformular, Cookies
- Analytics-Absatz nur wenn `features.analytics === true`
- **Hinweis:** "Platzhalter – bitte von Rechtsanwalt prüfen lassen"

**AGB** – Allgemeine Geschäftsbedingungen:
- Handwerks-spezifische Klauseln (Auftragserteilung, Gewährleistung, Abnahme)
- **Hinweis:** "Platzhalter – bitte von Rechtsanwalt prüfen lassen"

---

## Landingpage-Sektionen (Hauptseite)

### 1. HERO

- Vollbreiter Hintergrund (Platzhalter-Bild, dunkles Overlay `bg-black/50`)
- Headline: Benefit-driven aus `BRANCHE.md` → `hero.headline`
- Subheadline aus `BRANCHE.md` → `hero.subline`
- Primary CTA: `hero.cta_primary` → scrollt zum Kontaktformular
- Secondary CTA: `hero.cta_secondary` → `tel:` Link
- Trust-Leiste (4 Badges): Sterne, Meisterbetrieb, Notdienst, Region

### 2. TRUST BAR

- Schmaler Streifen direkt unter Hero, `bg-primary`
- 4 Kennzahlen mit `font-mono` für die Zahlen
- AnimatedCounter (zählt hoch wenn sichtbar)
- Werte aus `socialProof` in der Config

### 3. LEISTUNGSÜBERSICHT

- `bg-white`, Headline "Unsere Leistungen"
- Grid: 3 Spalten (lg), 2 (md), 1 (sm)
- Cards: Border, kein Shadow, Icon + Titel + Kurztext + Link
- Daten aus `services-data.ts` (generiert aus `BRANCHE.md`)

### 4. ÜBER UNS TEASER

- `bg-slate-50`, Split-Layout
- Text links: Kurzvorstellung, Badges (Innungsfachbetrieb, Meisterbetrieb, Seit X)
- Bild rechts: Platzhalter (Teamfoto)
- CTA: "Lernen Sie uns kennen →"

### 5. LEAD MAGNET

- Nur wenn `features.leadMagnet !== "none"`
- `bg-primary`, weiße Schrift, zentriert
- Headline + Subline aus `BRANCHE.md` → `lead_magnet`
- Formular: Name + E-Mail + Submit
- Varianten je nach `lead_magnet.typ`:
  - **checklist**: PDF-Download nach Submit
  - **calculator**: Multi-Step Formular mit Ergebnis
  - **planner**: Datumseingabe mit Ergebnis
  - **funding**: Quiz mit Ergebnis

### 6. KUNDENBEWERTUNGEN

- `bg-white`
- Slider oder 3er-Grid
- Google-Logo + Gesamtbewertung oben
- Karten: Sterne, Text, Name+Ort, Datum
- Daten aus `BRANCHE.md` → `bewertungen`

### 7. EINZUGSGEBIET

- `bg-slate-50`
- Headline: "Wir sind für Sie da – in {region}"
- Orte als Badge-Chips (`rounded-full bg-white border`)
- Optional: Google Maps Embed

### 8. FAQ

- `bg-white`, linksbündig, `max-w-3xl mx-auto`
- shadcn `Accordion`
- Daten aus `BRANCHE.md` → `faqs`

### 9. CTA BANNER

- `bg-primary`, zentriert
- Headline: "Bereit für Ihr Projekt?"
- 2 Buttons: Primary CTA + Telefon-CTA

---

## Leistungs-Unterseiten (`app/leistungen/[slug]/page.tsx`)

Dynamisch generiert aus `services-data.ts`. Jede Seite enthält:

1. **Mini-Hero**: Leistungstitel + Kurzbeschreibung
2. **Problemstellung**: "Kennen Sie das?" → `kundenprobleme` aus BRANCHE.md
3. **Lösung**: Ausführliche Beschreibung
4. **Vorteile**: 3 Icon-Cards
5. **Prozess-Timeline**: 4 Schritte (Beratung → Angebot → Umsetzung → Abnahme)
6. **CTA**: Kontaktformular oder Button
7. **FAQ**: Leistungsspezifische Fragen

### SEO pro Unterseite:
- Dynamische Metadata aus `seo_title`, `seo_description`, `seo_keywords`
- `{stadt}` und `{region}` werden automatisch ersetzt
- JSON-LD `Service` Schema

---

## Kontaktformular

**Felder:**
- Anrede (Select: Herr/Frau/Divers)
- Name (Text, Pflicht)
- Telefon (Tel, Pflicht)
- E-Mail (Email, Pflicht)
- Betreff (Select, dynamisch aus Leistungen)
- Nachricht (Textarea)
- Datenschutz-Checkbox (Pflicht)

**Technik:**
- React Hook Form + Zod Validation
- API Route `app/api/contact/route.ts`
- Backend je nach Config: E-Mail / Webhook / nur Frontend
- Erfolgsmeldung: "Vielen Dank! Wir melden uns innerhalb von 24 Stunden."
- Loading State auf Button

---

## SEO & Structured Data

### Metadata (Next.js App Router):
- Dynamisch pro Seite via `generateMetadata()`
- Open Graph + Twitter Cards
- Canonical URLs

### JSON-LD Schemas:
```typescript
// Auf jeder Seite: LocalBusiness
{
  "@type": "LocalBusiness",
  "name": config.company.name,
  "address": { ... },
  "telephone": config.company.phone,
  "openingHours": [ ... ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": config.socialProof.googleRating,
    "reviewCount": config.socialProof.googleReviewCount,
  }
}

// Auf Leistungsseiten: Service
{
  "@type": "Service",
  "name": service.titel,
  "provider": { "@type": "LocalBusiness", "name": config.company.name },
  "areaServed": config.company.region,
}

// Auf FAQ-Sektion: FAQPage
{
  "@type": "FAQPage",
  "mainEntity": faqs.map(f => ({
    "@type": "Question",
    "name": f.frage,
    "acceptedAnswer": { "@type": "Answer", "text": f.antwort }
  }))
}
```

### Auto-generiert:
- `app/sitemap.ts` → XML Sitemap
- `app/robots.ts` → robots.txt

---

## Performance

- Lighthouse Score: **90+** auf allen Kategorien
- `next/image` mit `priority` für Hero, `loading="lazy"` für alles andere
- `next/font` mit `display: "swap"` – keine externen Font-Requests
- ISR/SSG für alle Seiten
- Keine unnötigen Client-Komponenten – `"use client"` nur wo nötig (Formulare, Animationen)
- Bundle-Größe minimieren: Framer Motion Tree-Shaking beachten

---

## Mobil-spezifisch

- **Floating CTA** am unteren Rand (nur mobil): "Jetzt anrufen" mit Telefon-Icon
- Click-to-Call auf ALLEN Telefonnummern
- Sheet-basierte Mobile Navigation (kein Fullscreen-Overlay)
- Touch-Targets: mindestens 44px
- Kein Hover-only Content (alles auch per Tap erreichbar)

---

## Deployment (Vercel)

```bash
# Setup
npx create-next-app@latest [projektname] --typescript --tailwind --app --src-dir=false
cd [projektname]
npx shadcn@latest init
npx shadcn@latest add button card accordion sheet input textarea select checkbox badge separator form
npm install framer-motion react-hook-form @hookform/resolvers zod lucide-react

# Deploy
npx vercel
```

### Env-Variablen (falls nötig):
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
RESEND_API_KEY=re_xxxxx
WEBHOOK_URL=https://...
NEXT_PUBLIC_GOOGLE_MAPS_KEY=AIza...
```

---

## Lead-Generierung: Strategie-Zusammenfassung

### Die 7 Conversion-Hebel auf der Seite:
1. **Hero CTA** – Sofort sichtbar, Benefit-driven
2. **Telefonnummer überall** – Header, Hero, Footer, Floating Button
3. **Lead Magnet** – E-Mail-Capture gegen Mehrwert
4. **Kontaktformular** – Kurz, mit Betreff-Vorauswahl
5. **Notdienst-Banner** – Dringlichkeit für Akut-Leads
6. **Social Proof** – Google-Sterne, Kundenstimmen, Kennzahlen
7. **CTA-Banner** – Letzter Push vor dem Footer

### Effektive Lead Magneten nach Branche:
| Branche | Lead Magnet 1 | Lead Magnet 2 |
|---|---|---|
| SHK | Heizungs-Check Checkliste | Badsanierungs-Kostenrechner |
| Dachdecker | Dach-Check: 8 Warnsignale | Sturmschaden-Sofortguide |
| Elektriker | Elektro-Sicherheitscheck | Smart-Home Einsteiger-Guide |
| Maler | Farbberater-Tool | Fassaden-Renovierungs-Checkliste |
| Schreiner | Küchenplanungs-Guide | Holzpflege-Ratgeber |

---

## Reihenfolge der Implementierung

1. Projekt-Scaffold + Dependencies
2. `lib/config.ts` aus BRANCHE.md befüllen
3. `lib/animations.ts` + `lib/services-data.ts`
4. `components/shared/RevealOnScroll.tsx`
5. `components/layout/Header.tsx` + `Footer.tsx`
6. `app/layout.tsx` (Root Layout)
7. Sektionen der Hauptseite (in Reihenfolge: Hero → Trust → Services → About → Lead Magnet → Testimonials → Area → FAQ → CTA)
8. `app/page.tsx` (alles zusammensetzen)
9. Leistungs-Unterseiten
10. Kontaktformular + API Route
11. Rechtliche Seiten
12. SEO (Metadata, JSON-LD, Sitemap, Robots)
13. Mobile Floating CTA
14. Optionale Features (Analytics, Cookie, Maps, WhatsApp)
15. Performance-Audit + Deploy
