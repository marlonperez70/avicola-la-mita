import { Metadata } from "next";
import { COMPANY_INFO } from "@/lib/data";

export const metadata: Metadata = {
    title: "Nosotros | Avícola La Mita",
    description: "Conoce la historia de Avícola La Mita, nuestra misión, visión y a nuestra gerente Vilma Almachi.",
};

export default function NosotrosPage() {
    const { mission, vision, about, manager } = COMPANY_INFO;

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="relative bg-black py-24 sm:py-32">
                <div className="absolute inset-0 overflow-hidden">
                    <img
                        src="/images/live-chickens.jpg"
                        alt="Granja Avícola La Mita"
                        className="h-full w-full object-cover opacity-30"
                    />
                </div>
                <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-gold-shine sm:text-6xl font-serif">
                        Nuestra Historia
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-300 max-w-2xl mx-auto">
                        Más que una avícola, somos una familia comprometida con la vida y la salud.
                    </p>
                </div>
            </div>

            {/* Quiénes Somos & Gerente Profile */}
            <section className="py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">

                        {/* Text Content */}
                        <div className="lg:pr-4">
                            <div className="lg:max-w-lg">
                                <h2 className="text-base font-semibold leading-7 text-brand-green-600 uppercase tracking-wide">Quiénes Somos</h2>
                                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-serif">
                                    Tradición y Compromiso
                                </p>
                                <p className="mt-6 text-xl leading-8 text-gray-700">
                                    {about}
                                </p>

                                <div className="mt-12 border-l-4 border-brand-gold pl-6 py-2 bg-brand-cream/30">
                                    <p className="font-serif italic text-xl text-brand-brown-900">
                                        "{manager.quote}"
                                    </p>
                                    <p className="mt-4 font-bold text-brand-green-800">– {manager.name}</p>
                                </div>
                            </div>
                        </div>

                        {/* Manager Profile Image & Bio */}
                        <div className="lg:sticky lg:top-24">
                            <div className="relative overflow-hidden rounded-2xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10">
                                <img
                                    src={manager.image}
                                    alt={manager.name}
                                    className="aspect-[3/4] w-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-8">
                                    <h3 className="text-2xl font-bold text-white font-serif">{manager.name}</h3>
                                    <p className="text-brand-gold text-sm font-semibold uppercase tracking-wider mb-4">Gerente General</p>
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        {manager.bio}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Misión y Visión */}
            <section className="bg-brand-brown-100/50 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                        {/* Misión */}
                        <div className="bg-white p-10 rounded-2xl shadow-sm border border-brand-brown-100">
                            <h3 className="text-2xl font-bold text-brand-green-800 font-serif mb-6">Nuestra Misión</h3>
                            <p className="text-lg leading-relaxed text-gray-600">
                                {mission}
                            </p>
                        </div>
                        {/* Visión */}
                        <div className="bg-white p-10 rounded-2xl shadow-sm border border-brand-brown-100">
                            <h3 className="text-2xl font-bold text-brand-gold font-serif mb-6">Nuestra Visión</h3>
                            <p className="text-lg leading-relaxed text-gray-600">
                                {vision}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
