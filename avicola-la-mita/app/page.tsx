import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { ProductsPreview } from "@/components/home/ProductsPreview";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <Features />
      <ProductsPreview />

      {/* Contact Section Placeholder (Simple CTA) */}
      <section id="contact" className="bg-brand-green-900 py-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">¿Listo para probar?</h2>
        <p className="mb-8 text-brand-green-100">Contáctanos hoy y recibe tu pedido fresco en casa.</p>
        <button className="bg-white text-brand-green-900 px-8 py-3 rounded-full font-bold hover:bg-brand-green-100 transition-colors">
          Contactar por WhatsApp
        </button>
      </section>
    </div>
  );
}
