"use client";

import { siteConfig } from "@/lib/config";

export function DatenschutzContent() {
    return (
        <div className="space-y-8 text-slate-700">
            <section tabIndex={0} className="focus:outline-none">
                <h2 className="text-2xl font-bold mb-4 text-slate-900">1. Datenschutz auf einen Blick</h2>
                <h3 className="text-lg font-semibold mb-2 text-slate-800">Allgemeine Hinweise</h3>
                <p className="leading-relaxed">
                    Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                </p>
            </section>

            <section tabIndex={0} className="focus:outline-none">
                <h2 className="text-2xl font-bold mb-4 text-slate-900">2. Hosting und Content Delivery Networks (CDN)</h2>
                <p className="leading-relaxed mb-4">
                    Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
                </p>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                    <p className="font-semibold text-slate-900">Vercel Inc.</p>
                    <p className="text-sm">440 N Barranca Ave #4133<br />Covina, CA 91723</p>
                </div>
                <p className="leading-relaxed mt-4">
                    Details entnehmen Sie der Datenschutzerklärung von Vercel:
                    <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                        https://vercel.com/legal/privacy-policy
                    </a>.
                </p>
            </section>

            <section tabIndex={0} className="focus:outline-none">
                <h2 className="text-2xl font-bold mb-4 text-slate-900">3. Allgemeine Hinweise und Pflichtinformationen</h2>
                <h3 className="text-lg font-semibold mb-2 text-slate-800">Datenschutz</h3>
                <p className="leading-relaxed">
                    Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                </p>
            </section>

            <section tabIndex={0} className="focus:outline-none">
                <h2 className="text-2xl font-bold mb-4 text-slate-900">4. Datenerfassung auf dieser Website</h2>
                <h3 className="text-lg font-semibold mb-2 text-slate-800">Kontaktformular</h3>
                <p className="leading-relaxed">
                    Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>
            </section>

            <section tabIndex={0} className="focus:outline-none">
                <h2 className="text-2xl font-bold mb-4 text-slate-900">5. Cookies</h2>
                <p className="leading-relaxed">
                    Unsere Website verwendet Cookies. Das sind kleine Textdateien, die Ihr Webbrowser auf Ihrem Endgerät speichert. Cookies helfen uns dabei, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
                </p>
            </section>

            <div className="bg-slate-100 p-6 rounded-lg border border-slate-200 mt-12">
                <p className="text-sm text-slate-500 italic">
                    Hinweis: Dies ist eine Muster-Datenschutzerklärung für {siteConfig.company.name}. Für den rechtsverbindlichen Einsatz ist eine Prüfung durch einen Fachanwalt zwingend erforderlich.
                </p>
            </div>
        </div>
    );
}
