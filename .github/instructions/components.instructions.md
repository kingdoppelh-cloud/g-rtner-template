---
name: 'Next.js Komponenten'
description: 'Regeln für React/Next.js TSX-Dateien im Handwerker-Landingpage Projekt'
applyTo: '**/*.tsx'
---

# Komponenten-Regeln

## Allgemein
- Function Components mit TypeScript, keine Class Components
- Props als separates `interface` definieren, nicht inline
- Exportiere Komponenten als `export function` (named export), kein `export default` außer für Pages
- `"use client"` NUR wenn nötig (Formulare, Framer Motion, Event Handler)
- Statische Sektionen ohne Interaktivität bleiben Server Components

## Styling
- Tailwind-Klassen direkt, keine CSS Modules
- shadcn/ui Komponenten für alle UI-Elemente (Button, Card, Input, etc.)
- Kein `rounded-2xl` oder `rounded-3xl` – siehe docs/DESIGNSYSTEM.md für Radius-Regeln
- Kein `shadow-2xl` – maximal `shadow-sm`, bevorzugt `border border-slate-200`
- Kein Gradient auf Buttons – solide Farben

## Framer Motion
- Animationen aus `lib/animations.ts` importieren, nie inline definieren
- `RevealOnScroll` Wrapper für Sektionen nutzen
- `whileInView` mit `viewport={{ once: true, amount: 0.2 }}`
- Keine Spring-Animationen mit sichtbarem Bounce

## Daten
- Firmendaten aus `lib/config.ts` importieren
- Leistungsdaten aus `lib/services-data.ts`
- Nichts hardcoden was branchenspezifisch ist

## Bilder
- Immer `next/image` mit `alt` Text
- Hero-Bilder: `priority` Attribut
- Platzhalter: `<div className="bg-slate-200 aspect-video" />`
