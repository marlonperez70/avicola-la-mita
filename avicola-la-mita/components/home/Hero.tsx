import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-brand-green-900 pt-16 pb-32 lg:pt-32">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <img
                    src="/images/live-chickens.jpg"
                    alt="Pollos de campo en libertad"
                    className="h-full w-full object-cover opacity-40 mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-brand-green-900/90 to-brand-brown-900/90" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl lg:max-w-4xl">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
                        Sabor Orgánico y Natural <br className="hidden lg:block" />
                        <span className="text-brand-green-100">Directo a tu Mesa</span>
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-brand-green-100 max-w-xl">
                        Descubre el verdadero sabor del pollo de campo. Criados libremente, sin antibióticos y con alimentación 100% orgánica.
                    </p>
                    <div className="mt-10 flex items-center gap-x-6">
                        <Button size="lg" className="bg-white text-brand-green-900 hover:bg-brand-green-100" asChild>
                            <Link href="#products">
                                Ver Productos
                            </Link>
                        </Button>
                        <Link href="#about" className="text-sm font-semibold leading-6 text-white flex items-center gap-1 hover:text-brand-green-100">
                            Conoce nuestra historia <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Visual Element (Bottom curve or image placeholder) */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-brand-cream to-transparent"></div>
        </section>
    );
}
