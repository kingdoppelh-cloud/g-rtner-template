# Handwerker-Landingpage System

## Kontext
Lead-generierende Landingpage für deutsche Handwerksbetriebe. Die Branche und alle Inhalte werden ausschließlich aus `docs/BRANCHE.md` geladen. Für Seitenstruktur, Design und technische Anforderungen: siehe `docs/ANFORDERUNGEN.md`.

## Tech-Stack
- Next.js 16 (App Router, kein Pages Router)
- TypeScript (strict mode)
- Tailwind CSS 4
- shadcn/ui (alle UI-Elemente)
- Framer Motion 12 (Animationen)
- Vercel (Deployment)

## Goldene Regeln

1. **Firmendaten nie hardcoden** – alles aus `lib/config.ts` importieren
2. **shadcn/ui für ALLES** – keine eigenen Button/Card/Input Komponenten
3. **Animationen aus `lib/animations.ts`** – nie inline definieren
4. **Mobile-First** – alle Layouts von mobil nach desktop denken
5. **Click-to-Call** auf JEDER Telefonnummer (`<a href="tel:">`)
6. **Deutsche Texte**, DSGVO-konform, Du-Vermeidung (Sie-Form)
7. **Bilder via `next/image`** mit `priority` für Above-the-Fold

## Anti-Vibe-Coding Regeln (WICHTIG)

Die Seite soll sich von typischen AI-generierten Websites abheben. Folgende Dinge sind VERBOTEN:

- ❌ `rounded-2xl` oder `rounded-3xl` überall – stattdessen: `rounded-none` bis `rounded-lg`, bewusst eingesetzt
- ❌ Lila/Violet als Akzentfarbe
- ❌ Übertriebene Gradients auf Buttons oder Hintergründen
- ❌ `shadow-2xl` auf jeder Card
- ❌ Generische Hero-Bilder mit Gradient-Overlay in Lila/Blau
- ❌ Identische Card-Layouts für jede Sektion
- ❌ Poppins, Inter in Kombination mit zu viel Rounded überall
- ❌ Zu viel Spacing (nicht jede Sektion braucht `py-32`)
- ❌ Neon-Farben, Glassmorphism, übertriebene Blur-Effekte
- ❌ Emojis als Design-Element in Überschriften

Stattdessen – siehe `docs/DESIGNSYSTEM.md` für das vollständige Design-System.

## Projekt-Struktur
```
app/                          → Seiten (App Router)
  layout.tsx                  → Root Layout (Header + Footer)
  page.tsx                    → Hauptseite (Landingpage)
  leistungen/[slug]/page.tsx  → Dynamische Leistungs-Unterseiten
  kontakt/page.tsx            → Kontakt
  impressum/page.tsx          → Rechtlich
  datenschutz/page.tsx        → Rechtlich
  agb/page.tsx                → Rechtlich
  api/contact/route.ts        → Kontaktformular API
components/
  layout/                     → Header, Footer, MobileNav, EmergencyBanner
  sections/                   → HeroSection, ServicesGrid, TrustBar, etc.
  shared/                     → RevealOnScroll, AnimatedCounter, FloatingCTA
  ui/                         → shadcn/ui Komponenten
lib/
  config.ts                   → Zentrale Konfiguration (aus BRANCHE.md)
  animations.ts               → Framer Motion Presets
  services-data.ts            → Leistungsdaten
  utils.ts                    → Hilfsfunktionen
```

## Referenzen
- Branche & Inhalte: [docs/BRANCHE.md](docs/BRANCHE.md)
- Design-System: [docs/DESIGNSYSTEM.md](docs/DESIGNSYSTEM.md)
- Vollständige Spec: [docs/ANFORDERUNGEN.md](docs/ANFORDERUNGEN.md)
