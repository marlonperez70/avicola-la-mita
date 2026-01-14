import { Metadata } from "next";
import { CERTIFICATIONS } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { Download, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
    title: "Certificaciones | Avícola La Mita",
    description: "Conoce nuestras certificaciones Agrocalidad y EU Organic. Compromiso con la calidad y seguridad alimentaria.",
};

export default function CertificacionesPage() {
    return (
        <div className="bg-white">
            {/* Hero */}
            <div className="bg-brand-green-900 py-20 sm:py-28 text-center text-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl font-serif">
                        Nuestro Compromiso con la Excelencia
                    </h1>
                    <p className="mt-4 text-lg text-brand-green-100 max-w-2xl mx-auto">
                        Garantizamos la calidad orgánica y la seguridad de nuestros productos a través de rigurosas certificaciones nacionales e internacionales.
                    </p>
                </div>
            </div>

            {/* Certifications Grid */}
            <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:py-32">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                    {CERTIFICATIONS.map((cert) => (
                        <div key={cert.id} className="flex flex-col overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-200">
                            <div className="bg-gray-50 p-8 flex items-center justify-center h-48 border-b border-gray-100">
                                <img src={cert.logo} alt={cert.name} className="h-32 w-auto object-contain" />
                            </div>
                            <div className="flex flex-1 flex-col p-8">
                                <h3 className="text-2xl font-bold text-gray-900 font-serif mb-4">{cert.name}</h3>
                                <p className="text-gray-600 mb-8 leading-relaxed flex-1">
                                    {cert.description}
                                </p>

                                <div className="mb-8">
                                    <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">Estándares Cumplidos:</h4>
                                    <ul className="space-y-2">
                                        {cert.standards.map((std, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                                                <CheckCircle2 className="h-5 w-5 text-brand-green-600 flex-shrink-0" />
                                                <span>{std}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <Button variant="outline" className="w-full gap-2 border-brand-green-600 text-brand-green-600 hover:bg-brand-green-50" asChild>
                                    <a href={cert.pdfUrl} target="_blank" rel="noopener noreferrer">
                                        <Download className="h-4 w-4" />
                                        Descargar Certificado (PDF)
                                    </a>
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-16 text-center text-sm text-gray-500">
                    <p>* Actualizamos nuestras certificaciones anualmente para asegurar el cumplimiento continuo de todas las normativas.</p>
                </div>
            </div>
        </div>
    );
}
