import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PRODUCTS, COMPANY_INFO } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { Check, ShieldCheck, MessageCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface Props {
    params: Promise<{ id: string }>;
}

// Generate static params for SSG (since we have mock data)
export async function generateStaticParams() {
    return PRODUCTS.map((product) => ({
        id: product.id,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    const product = PRODUCTS.find((p) => p.id === id);
    if (!product) return { title: "Producto no encontrado" };

    return {
        title: `${product.name} | Avícola La Mita`,
        description: product.description,
    };
}

export default async function ProductDetailPage({ params }: Props) {
    const { id } = await params;
    const product = PRODUCTS.find((p) => p.id === id);

    if (!product) {
        notFound();
    }

    // WhatsApp Message
    const message = encodeURIComponent(`Hola, estoy interesado en el ${product.name} de aprox ${product.minWeight}-${product.maxWeight} libras.`);
    const whatsappUrl = `https://wa.me/${COMPANY_INFO.contact.whatsapp}?text=${message}`;

    const minPrice = (product.minWeight * product.pricePerLb).toFixed(2);
    const maxPrice = (product.maxWeight * product.pricePerLb).toFixed(2);

    return (
        <div className="bg-white py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-8">
                    <Link href="/productos" className="flex items-center text-sm font-medium text-brand-green-600 hover:text-brand-green-800 transition-colors">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Volver al catálogo
                    </Link>
                </div>

                <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
                    {/* Image Gallery */}
                    <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-square lg:aspect-auto h-[400px] lg:h-[600px] flex items-center justify-center">
                        <img
                            src={product.images[0]}
                            alt={product.name}
                            className="h-full w-full object-cover object-center"
                        />
                        {product.isOrganic && (
                            <div className="absolute top-6 left-6 bg-brand-green-800 text-white px-4 py-2 rounded-full font-bold flex items-center gap-2 shadow-lg">
                                <ShieldCheck className="w-5 h-5" />
                                Certificación Orgánica
                            </div>
                        )}
                    </div>

                    {/* Product Info */}
                    <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                        <h1 className="text-3xl font-bold tracking-tight text-brand-brown-900 font-serif sm:text-4xl">{product.name}</h1>

                        <div className="mt-4 flex items-end gap-4">
                            <p className="text-3xl tracking-tight text-brand-green-900 font-bold font-serif">
                                ${minPrice} - ${maxPrice}
                            </p>
                            <span className="text-base text-gray-500 mb-1">
                                (Estimado por unidad/paquete)
                            </span>
                        </div>
                        <div className="mt-2 text-sm text-brand-gold font-semibold">
                            ${product.pricePerLb.toFixed(2)} por libra
                        </div>


                        <div className="mt-8 space-y-6">
                            <p className="text-lg text-gray-700 leading-relaxed">
                                {product.description}
                            </p>
                        </div>

                        {/* Specs */}
                        <div className="mt-10 border-t border-gray-200 pt-10">
                            <h3 className="text-sm font-medium text-gray-900">Especificaciones</h3>
                            <div className="mt-4 prose prose-sm text-gray-500">
                                <ul role="list" className="space-y-4">
                                    <li className="flex items-center">
                                        <Check className="h-5 w-5 text-brand-green-600 mr-3" />
                                        <span>Peso promedio: {product.minWeight} - {product.maxWeight} lbs</span>
                                    </li>
                                    <li className="flex items-center">
                                        <Check className="h-5 w-5 text-brand-green-600 mr-3" />
                                        <span>Alimentación: 100% Orgánica Vegetal</span>
                                    </li>
                                    <li className="flex items-center">
                                        <Check className="h-5 w-5 text-brand-green-600 mr-3" />
                                        <span>Crianza: Libre pastoreo (Free Range)</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Certifications Links */}
                        <div className="mt-8">
                            <p className="text-sm text-gray-500 mb-3">Avalado por:</p>
                            <div className="flex gap-4">
                                <Link href="/certificaciones" className="group">
                                    <div className="p-2 border rounded-lg hover:border-brand-green-600 transition-colors cursor-pointer bg-gray-50">
                                        <img src="/images/agrocalidad.jpg" alt="Agrocalidad" className="h-8 w-auto opacity-80 group-hover:opacity-100" />
                                    </div>
                                </Link>
                                {/* Placeholder for EU Organic if we had the image */}
                            </div>
                        </div>


                        <div className="mt-10">
                            <Button size="lg" className="w-full bg-[#25D366] hover:bg-[#1da851] text-white border-transparent h-14 text-lg font-bold gap-2" asChild>
                                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                                    <MessageCircle className="h-6 w-6" />
                                    Contactar por WhatsApp
                                </a>
                            </Button>
                            <p className="mt-4 text-center text-sm text-gray-500">
                                Te responderemos directamente para coordinar tu pedido.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
