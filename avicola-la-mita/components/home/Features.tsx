import { Leaf, ShieldCheck, Heart } from "lucide-react";

const features = [
    {
        name: "100% Orgánico",
        description: "Alimentación basada en granos naturales, libre de químicos y pesticidas.",
        icon: Leaf,
    },
    {
        name: "Sin Antibióticos",
        description: "Nuestras aves crecen sanas de forma natural, sin el uso de promotores de crecimiento.",
        icon: ShieldCheck,
    },
    {
        name: "Crianza con Amor",
        description: "Respetamos el ciclo natural de vida, garantizando bienestar y libertad.",
        icon: Heart,
    },
];

export function Features() {
    return (
        <section className="bg-brand-cream py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-brand-green-600 uppercase tracking-wide">
                        Nuestros Valores
                    </h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-brand-brown-900 sm:text-4xl">
                        Calidad que se siente en cada bocado
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        En Avícola La Mita, no solo vendemos pollo; ofrecemos salud, sabor y conciencia ambiental.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {features.map((feature) => (
                            <div key={feature.name} className="flex flex-col items-center text-center lg:items-start lg:text-left bg-white p-8 rounded-2xl shadow-sm border border-brand-brown-100 hover:shadow-md transition-shadow">
                                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-brand-green-100">
                                    <feature.icon className="h-6 w-6 text-brand-green-600" aria-hidden="true" />
                                </div>
                                <dt className="text-xl font-semibold leading-7 text-brand-brown-900">
                                    {feature.name}
                                </dt>
                                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                                    <p className="flex-auto">{feature.description}</p>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
}
