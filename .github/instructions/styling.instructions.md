---
name: 'Styling & Tailwind'
description: 'Design-Regeln für CSS und Tailwind-Klassen'
applyTo: '**/*.css'
---

# Styling-Regeln

## Tailwind Config
- Custom Colors aus `docs/DESIGNSYSTEM.md` in tailwind.config.ts einbinden
- Font-Family: DM Sans (--font-sans), JetBrains Mono (--font-mono)
- Container: max-w-6xl (NICHT max-w-7xl)

## Globals.css
- Tailwind Directives: @tailwind base, components, utilities
- Custom CSS Properties für Farben aus der Config
- Smooth Scrolling: `html { scroll-behavior: smooth }`
- Selection Color: `::selection { background: var(--color-primary-lighter) }`

## Verboten
- Kein `@apply` für Utility-Klassen (direkt in JSX schreiben)
- Keine CSS Modules
- Keine globalen Element-Styles die shadcn/ui überschreiben
