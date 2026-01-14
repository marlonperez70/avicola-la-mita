import { Metadata } from "next";
import { PRODUCTS } from "@/lib/data";
import { ProductCard } from "@/components/products/ProductCard";

export const metadata: Metadata = {
    title: "Nuestros Productos | Avícola La Mita",
    description: "Catálogo de pollos orgánicos certificados. Pollo entero, pechuga y alitas. Calidad premium y sabor natural.",
};

export default function ProductosPage() {
    return (
        <div className="bg-white">
            <div className="bg-brand-brown-900 py-16 sm:py-24 text-center">
                <h1 className="text-4xl font-bold tracking-tight text-brand-gold font-serif sm:text-5xl">
                    Catálogo de Productos
                </h1>
                <p className="mt-4 text-brand-cream text-lg max-w-2xl mx-auto px-4">
                    Seleccionamos lo mejor de nuestra granja para tu mesa. Orgánico, fresco y saludable.
                </p>
            </div>

            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                    {PRODUCTS.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
}
