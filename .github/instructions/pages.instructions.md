---
name: 'App Router Pages'
description: 'Regeln für Next.js App Router Seiten und Layouts'
applyTo: 'app/**/*.tsx'
---

# App Router Regeln

## Metadata
- Jede `page.tsx` MUSS `generateMetadata()` oder `export const metadata` haben
- Titel-Format: "{Seitenname} | {Firmenname}"
- Description: Unter 160 Zeichen, mit Ortsangabe
- Open Graph Bild: `/images/og-image.jpg`

## Layout
- `app/layout.tsx`: Header + Footer wrappen, Font laden, JSON-LD einbetten
- Keine verschachtelten Layouts für Unterseiten (eine Layout-Ebene reicht)

## Pages
- Statisch gerendert (SSG) wo möglich
- `"use client"` NUR in interaktiven Komponenten, nicht auf Page-Ebene
- Sektionen als separate Komponenten importieren, nicht inline

## API Routes
- `app/api/contact/route.ts`: POST only, Zod Validation
- Rate Limiting berücksichtigen
- CORS Header setzen

## SEO
- JSON-LD Schema in layout.tsx (LocalBusiness) und auf Unterseiten (Service, FAQPage)
- `app/sitemap.ts` für automatische Sitemap
- `app/robots.ts` für robots.txt
- Canonical URLs auf jeder Seite
