import Link from "next/link";
import { Product } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { BadgeCheck } from "lucide-react";

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    // Calculate price range
    const minPrice = (product.minWeight * product.pricePerLb).toFixed(2);
    const maxPrice = (product.maxWeight * product.pricePerLb).toFixed(2);

    return (
        <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 transition-all hover:shadow-lg hover:ring-brand-gold/50">

            {/* Image Container */}
            <div className="aspect-h-1 aspect-w-1 h-64 w-full overflow-hidden bg-gray-100 group-hover:opacity-95 text-center flex items-center justify-center">
                {product.images[0] ? (
                    <img
                        src={product.images[0]}
                        alt={product.name}
                        className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    />
                ) : (
                    <span className="text-gray-400">Sin Imagen</span>
                )}

                {/* Organic Badge Overlay */}
                {product.isOrganic && (
                    <div className="absolute top-4 right-4 bg-brand-green-800/90 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 backdrop-blur-sm">
                        <BadgeCheck className="w-3 h-3" />
                        Orgánico
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand-gold transition-colors font-serif">
                    <Link href={`/productos/${product.id}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                    </Link>
                </h3>
                <p className="mt-2 text-sm text-gray-500 line-clamp-2">{product.description}</p>

                <div className="mt-4 flex-1">
                    <div className="flex justify-between items-center text-sm border-t border-gray-100 pt-4">
                        <span className="text-gray-600">Peso aprox:</span>
                        <span className="font-semibold text-gray-900">{product.minWeight} - {product.maxWeight} lbs</span>
                    </div>
                    <div className="flex justify-between items-center text-sm mt-2">
                        <span className="text-gray-600">Precio/lb:</span>
                        <span className="font-medium text-brand-green-600">${product.pricePerLb.toFixed(2)}</span>
                    </div>
                </div>

                <div className="mt-6 flex items-end justify-between">
                    <div className="flex flex-col">
                        <span className="text-xs text-gray-500 uppercase tracking-wider">Rango de Precio</span>
                        <span className="text-xl font-bold text-brand-brown-900 font-serif">
                            ${minPrice} - ${maxPrice}
                        </span>
                    </div>
                    <Button size="sm" variant="outline" className="z-10 bg-transparent border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-black transition-all">
                        Ver Detalles
                    </Button>
                </div>
            </div>
        </div>
    );
}
