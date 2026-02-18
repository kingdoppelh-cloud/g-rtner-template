import { ImpressumContent } from "@/components/legal/ImpressumContent";

export const metadata = {
    title: "Impressum | Gartenpflege Honka",
    description: "Rechtliche Informationen und Kontaktmöglichkeiten von Gartenpflege Honka.",
};

export default function ImpressumPage() {
    return (
        <main className="min-h-screen bg-white">
            <div className="container mx-auto px-4 py-24 max-w-4xl">
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">Impressum</h1>
                    <div className="h-1.5 w-20 bg-accent mt-4" />
                </div>
                <ImpressumContent />
            </div>
        </main>
    );
}
