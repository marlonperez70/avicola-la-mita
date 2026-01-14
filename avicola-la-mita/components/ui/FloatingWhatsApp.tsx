import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
    const whatsappNumber = "593995616428"; // Vilma's number from specs
    const message = encodeURIComponent("Hola, estoy interesado en los productos de Avícola La Mita.");
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-lg transition-transform hover:scale-105 hover:bg-[#20bd5a] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
            aria-label="Contactar por WhatsApp"
        >
            <MessageCircle className="h-6 w-6" />
            <span className="hidden font-bold sm:inline">Contactar</span>
        </a>
    );
}
