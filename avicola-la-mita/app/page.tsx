import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { PRODUCTS } from "@/lib/data";
import { ProductCard } from "@/components/products/ProductCard";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function Home() {
  const featuredProducts = PRODUCTS.slice(0, 3); // Display top 3 products

  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <Features />

      {/* Products Grid Section */}
      <section id="products" className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between mb-10">
            <h2 className="text-3xl font-bold tracking-tight text-brand-brown-900 font-serif">
              Nuestros Productos Favoritos
            </h2>
            <Button variant="outline" className="hidden md:inline-flex border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white" asChild>
              <Link href="/productos">
                Ver todo el catálogo
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-8 md:hidden">
            <Button variant="outline" className="w-full border-brand-gold text-brand-gold" asChild>
              <Link href="/productos">
                Ver todo el catálogo
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Culinary Inspiration Section */}
      <section className="relative isolate overflow-hidden bg-brand-brown-900 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-brand-gold sm:text-6xl font-serif">Inspiración Culinaria</h2>
            <p className="mt-6 text-lg leading-8 text-brand-cream">
              Convierte tus recetas favoritas en experiencias gourmet. Nuestro pollo orgánico eleva cada plato con sabor auténtico y textura incomparable. Desde el tradicional seco de pollo hasta innovaciones culinarias modernas.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Button className="bg-brand-gold text-brand-brown-900 hover:bg-yellow-400">
                Ver Recetas (Próximamente)
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section id="about-teaser" className="bg-brand-cream/30 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-green-800 font-serif sm:text-4xl">Compromiso con la Excelencia</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Somos una empresa familiar dedicada a criar aves con amor y procesarlas con responsabilidad. Conoce más sobre nuestra historia y certificaciones.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button variant="outline" asChild>
              <Link href="/nosotros">Conocer más</Link>
            </Button>
            <Button variant="ghost" className="text-brand-green-800 hover:text-brand-green-900 hover:bg-brand-green-100" asChild>
              <Link href="/certificaciones">Ver Certificaciones &rarr;</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section Placeholder (Simple CTA) */}
      <section id="contact" className="bg-brand-green-900 py-24 text-center text-white relative overflow-hidden">
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern.png')]"></div>

        <div className="relative z-10 mx-auto max-w-2xl px-6">
          <h2 className="text-3xl font-bold tracking-tight mb-4 font-serif text-white">¿Listo para probar la diferencia?</h2>
          <p className="mb-8 text-brand-green-100 text-lg">Contáctanos hoy y recibe tu pedido de pollo orgánico fresco en la puerta de tu casa.</p>
          <Button size="lg" className="bg-white text-brand-green-900 font-bold hover:bg-brand-green-50">
            Contactar por WhatsApp
          </Button>
        </div>
      </section>
    </div>
  );
}
