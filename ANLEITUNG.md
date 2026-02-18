# Anleitung zur Anpassung der Website

Damit Sie die Website schnell und einfach für Ihren Kunden anpassen können, haben wir alle Texte, Bilder und Konfigurationen in **einer einzigen Datei** gesammelt.

## 📂 Die wichtigste Datei

Öffnen Sie diese Datei in Ihrem Editor:
`lib/config.ts`

Dies ist die **einzige Datei**, die Sie bearbeiten müssen, um 95% der Website-Inhalte zu ändern.

---

## 🛠️ Was Sie ändern können

Die Datei ist in logische Abschnitte unterteilt:

### 1. Firmendaten (`company`)
Hier tragen Sie die Basis-Daten ein, die auf der ganzen Website (Footer, Kontakt, Impressum) verwendet werden.
- Name, Inhaber
- Adresse, Telefon, E-Mail
- Öffnungszeiten

### 2. Farben & SEO (`colors`, `seo`)
- Passen Sie die **Farben** an das Branding des Kunden an (einfach Hex-Codes ändern).
- Ändern Sie den **Titel** und die **Beschreibung** für Google.

### 2.1 Lade-Bildschirm (`preloader`)
Der Text, der kurz beim Laden der Seite erscheint.
- `title`: Große Überschrift (z.B. Firmenname).
- `subline`: Kleiner Text darunter (z.B. "Herzlich Willkommen").

### 3. Hero-Bereich (`hero`)
Der erste große Text ganz oben auf der Startseite.
- `headline`: Die große Überschrift.
- `subline`: Der Text darunter.
- `ctaPrimary`: Text für den Haupt-Button.

### 4. Leistungen (`services`)
Eine Liste aller angebotenen Dienstleistungen.
- `titel`: Name der Leistung (z.B. "Gartenpflege").
- `icon`: Das passende Symbol (Wählen Sie aus: `Flower2`, `Hammer`, `Shield`, `Axe`, `Bug`, `Leaf`).
- `beschreibung`: Kurzer Text für die Karte.
- `kundenprobleme`: 3 Stichpunkte, warum der Kunde das braucht.
- `vorteile`: 3 Vorteile Ihrer Arbeit.

### 5. Über Uns (`about`)
Der Text und das Bild für den "Über uns" Bereich.
- `headline`: Überschrift (z.B. "Tradition trifft Moderne").
- `description`: Der eigentliche Text.
- `image`: Link zum Bild (kann lokal `/images/...` oder eine URL sein).
- `badges`: Die Liste mit den Häkchen (z.B. "Meisterbetrieb").

### 6. Galerie (`gallery`)
Die Bilder der Projekte.
- Tragen Sie hier die Pfade zu den Bildern ein (`src`).
- Geben Sie jedem Bild einen `title`.

### 7. Häufige Fragen (`faq`)
Die Liste der Fragen und Antworten ganz unten.

### 8. Bewertungen (`reviews`)
Die Kundenstimmen, die auf der Seite angezeigt werden.

---

## 🚀 Schnellanleitung für den Start

1.  Öffnen Sie `lib/config.ts`.
2.  Gehen Sie die Datei von oben nach unten durch.
3.  Ändern Sie die Texte zwischen den Anführungszeichen.
    *   Richtig: `name: "Neuer Firmenname",`
    *   Falsch: `name: Neuer Firmenname,` (Anführungszeichen fehlen!)
4.  Speichern Sie die Datei.
5.  Die Website aktualisiert sich automatisch.

---

## ⚠️ Wichtig

- **Keine Codes löschen**: Löschen Sie keine Klammern `{ }` oder Kommas `,`.
- **Bilder**: Wenn Sie eigene Bilder verwenden, speichern Sie diese im Ordner `public/images/` und verweisen Sie in der Config darauf (z.B. `/images/mein-bild.jpg`).

---

## 🏁 Testen & Fertigstellen

1.  **Vorschau starten**:
    Geben Sie im Terminal ein:
    `npm run dev`
    Öffnen Sie dann `http://localhost:3000` im Browser. Änderungen werden sofort sichtbar.

2.  **Finale Version erstellen**:
    Wenn alles perfekt ist:
    `npm run build`
    Dies erstellt den optimierten Code im Ordner `.next`, bereit für den Server.

Viel Erfolg!
