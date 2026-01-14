import { Button } from "@/components/ui/Button";

export function About() {
    return (
        <section id="about" className="overflow-hidden bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pr-8 lg:pt-4">
                        <div className="lg:max-w-lg">
                            <h2 className="text-base font-semibold leading-7 text-brand-green-600 uppercase tracking-wide">Sobre Nosotros</h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-brand-brown-900 sm:text-4xl">Liderazgo con Pasión y Compromiso</p>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Avícola La Mita nace del sueño de ofrecer a las familias ecuatorianas un producto de calidad superior, criado con respeto y amor por la naturaleza.
                            </p>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Bajo el liderazgo de nuestra gerente, <strong>Vilma Almachi</strong>, hemos crecido manteniendo nuestros valores fundamentales: honestidad, trabajo duro y un compromiso inquebrantable con la alimentación saludable.
                            </p>
                            <div className="mt-10">
                                <Button size="lg" className="bg-brand-green-800 text-white hover:bg-brand-green-900">
                                    Conoce más de nuestra historia
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <img
                            src="/images/vilma-almachi.jpg"
                            alt="Vilma Almachi - Gerente de Avícola La Mita"
                            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                            width={2432}
                            height={1442}
                        />
                        <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                </div>
            </div>
        </section>
    );
}
