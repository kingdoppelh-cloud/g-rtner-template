"use client";

import { siteConfig } from "@/lib/config";

export function ImpressumContent() {
    return (
        <div className="space-y-8 text-slate-700">
            <section>
                <h2 className="text-xl font-bold mb-4 text-slate-900">Angaben gemäß § 5 TMG</h2>
                <p className="leading-relaxed">
                    {siteConfig.company.name}<br />
                    {siteConfig.company.owner}<br />
                    {siteConfig.company.address.street}<br />
                    {siteConfig.company.address.zip} {siteConfig.company.address.city}
                </p>
            </section>

            <section>
                <h2 className="text-xl font-bold mb-4 text-slate-900">Kontakt</h2>
                <p className="leading-relaxed">
                    Telefon: {siteConfig.company.phone}<br />
                    E-Mail: {siteConfig.company.email}<br />
                    Webseite: {siteConfig.company.website}
                </p>
            </section>

            <section>
                <h2 className="text-xl font-bold mb-4 text-slate-900">Umsatzsteuer-ID</h2>
                <p className="leading-relaxed">
                    Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                    DE 123 456 789 (Platzhalter)
                </p>
            </section>

            <section>
                <h2 className="text-xl font-bold mb-4 text-slate-900">Aufsichtsbehörde</h2>
                <p className="leading-relaxed">
                    {siteConfig.company.handwerkskammer}
                </p>
            </section>

            <section>
                <h2 className="text-xl font-bold mb-4 text-slate-900">EU-Streitschlichtung</h2>
                <p className="leading-relaxed">
                    Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                    <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                        https://ec.europa.eu/consumers/odr/
                    </a>.
                    Unsere E-Mail-Adresse finden Sie oben im Impressum.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-bold mb-4 text-slate-900">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
                <p className="leading-relaxed">
                    Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                </p>
            </section>

            <div className="bg-slate-100 p-6 rounded-lg border border-slate-200 mt-12">
                <p className="text-sm text-slate-500 italic">
                    Hinweis: Dies ist ein automatisch generiertes Impressum basierend auf Ihren Angaben in der Konfiguration. Eine rechtliche Prüfung durch einen Anwalt wird ausdrücklich empfohlen.
                </p>
            </div>
        </div>
    );
}
