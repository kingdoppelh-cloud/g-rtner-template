import { DatenschutzContent } from "@/components/legal/DatenschutzContent";

export const metadata = {
    title: "Datenschutz | Gartenpflege Honka",
    description: "Informationen zum Datenschutz und zur Verarbeitung Ihrer Daten bei Gartenpflege Honka.",
};

export default function DatenschutzPage() {
    return (
        <main className="min-h-screen bg-white">
            <div className="container mx-auto px-4 py-24 max-w-4xl">
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">Datenschutzerklärung</h1>
                    <div className="h-1.5 w-20 bg-accent mt-4" />
                </div>
                <DatenschutzContent />
            </div>
        </main>
    );
}
