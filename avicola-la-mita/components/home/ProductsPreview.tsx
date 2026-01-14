import Link from "next/link";
import { Button } from "@/components/ui/Button";

const products = [
    {
        id: 1,
        name: "Pollo Entero Orgánico",
        price: "$12.00",
        description: "Ideal para asados o caldos. Sabor intenso y textura firme.",
        image: "/images/roasted-chicken.jpg",
    },
    {
        id: 2,
        name: "Pechuga de Pollo",
        price: "$8.50 / kg",
        description: "Corte magro y versátil. Perfecta para dietas saludables.",
        image: "/images/chicken-breast.png",
    },
    {
        id: 3,
        name: "Alitas de Pollo",
        price: "$6.00 / kg",
        description: "Las favoritas para reuniones. Crujientes y jugosas.",
        image: "/images/chicken-wings.png",
    },
];

export function ProductsPreview() {
    return (
        <section id="products" className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="md:flex md:items-center md:justify-between">
                    <h2 className="text-2xl font-bold tracking-tight text-brand-brown-900">
                        Nuestros Productos Favoritos
                    </h2>
                    <Button variant="outline" className="hidden md:inline-flex" asChild>
                        <Link href="/productos">
                            Ver todo el catálogo
                        </Link>
                    </Button>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
                    {products.map((product) => (
                        <div key={product.id} className="group relative">
                            <div className="relative h-72 w-full overflow-hidden rounded-lg bg-gray-200 sm:aspect-h-1 sm:aspect-w-1 group-hover:opacity-75 sm:h-64 flex items-center justify-center">
                                {product.image ? (
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="h-full w-full object-cover object-center"
                                    />
                                ) : (
                                    <span className="text-brand-brown-600 font-medium opacity-50">[Imagen: {product.name}]</span>
                                )}
                            </div>
                            <div className="mt-4">
                                <h3 className="text-lg font-bold text-brand-brown-900">
                                    <a href="#">
                                        <span className="absolute inset-0" />
                                        {product.name}
                                    </a>
                                </h3>
                                <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                                <p className="mt-2 text-base font-semibold text-brand-green-600">{product.price}</p>
                            </div>
                            <div className="mt-4">
                                <Button size="sm" className="w-full">Añadir al Carrito</Button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 md:hidden">
                    <Button variant="outline" className="w-full" asChild>
                        <Link href="/productos">
                            Ver todo el catálogo
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
