"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const links = [
    { href: "/", label: "Inicio" },
    { href: "#products", label: "Productos" },
    { href: "#about", label: "Nosotros" },
    { href: "#contact", label: "Contacto" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-brand-gold/20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-brand-gold/50 shadow-[0_0_15px_rgba(255,215,0,0.3)]">
                                <Image
                                    src="/logo.png"
                                    alt="Avícola La Mita Logo"
                                    fill
                                    className="object-cover"
                                    sizes="48px"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl md:text-2xl font-bold tracking-tight text-gold-shine leading-none">
                                    Avícola Orgánica
                                </span>
                                <span className="text-xs md:text-sm font-light text-brand-gold/80 tracking-widest uppercase leading-none">
                                    La Mita
                                </span>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-sm font-medium text-brand-gold/80 hover:text-brand-gold transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <Button size="sm">
                            <ShoppingCart className="mr-2 h-4 w-4" />
                            Ordenar
                        </Button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <X className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="sm:hidden" id="mobile-menu">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        <Link href="/" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-brand-gold" aria-current="page">
                            Inicio
                        </Link>
                        <Link href="/productos" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-brand-gold">
                            Productos
                        </Link>
                        <Link href="/certificaciones" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-brand-gold">
                            Certificaciones
                        </Link>
                        <Link href="/nosotros" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-brand-gold">
                            Nosotros
                        </Link>
                        <Link href="#contact" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-brand-gold">
                            Contacto
                        </Link>
                    </div>
                    <div className="mt-4 px-3">
                        <Button className="w-full">
                            <ShoppingCart className="mr-2 h-4 w-4" />
                            Ordenar Ahora
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    );
}
