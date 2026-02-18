---
name: 'Konfiguration & Utilities'
description: 'Regeln für TypeScript-Dateien im lib/ Ordner'
applyTo: 'lib/**/*.ts'
---

# Lib-Dateien Regeln

## config.ts
- Zentrale Datenquelle für alle Firmendaten, Farben, Features
- Typisiert mit `SiteConfig` Interface
- Werte aus `docs/BRANCHE.md` übernehmen
- Alle Platzhalter wie `{stadt}`, `{region}` in SEO-Texten auflösen

## animations.ts
- Framer Motion `Variants` Objekte exportieren
- Naming: `fadeUp`, `fadeLeft`, `fadeRight`, `stagger`, `heroReveal`, `counterReveal`, `pulse`
- Keine Duration > 0.6s
- Keine y/x Offsets > 40px
- Easing: `[0.25, 0.1, 0.25, 1]` als Standard (nicht "easeInOut")
- Kein `type: "spring"` mit sichtbarem Bounce

## services-data.ts
- Exportiert Array von `ServiceData` Objekten
- Daten aus `docs/BRANCHE.md` → `leistungen` übernehmen
- Slugs müssen URL-safe sein (lowercase, keine Umlaute, Bindestriche)

## utils.ts
- Reine Hilfsfunktionen, keine Side Effects
- `cn()` Funktion für Tailwind-Klassen-Merging (clsx + tailwind-merge)
