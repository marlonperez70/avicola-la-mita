import Link from "next/link";
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-black text-brand-gold">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">

                    {/* Brand Info */}
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-xl font-bold text-brand-gold mb-4">Avícola La Mita</h3>
                        <p className="max-w-md text-sm leading-relaxed text-brand-gold/80 mb-6">
                            Producimos pollos orgánicos de la más alta calidad en Ecuador.
                            Comprometidos con el bienestar animal y la salud de nuestros clientes.
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="bg-white p-2 rounded-md inline-block">
                                <img src="/images/agrocalidad.jpg" alt="Certificación Agrocalidad" className="h-12 w-auto object-contain" />
                            </div>
                            <span className="text-xs text-brand-green-100 max-w-[150px]">
                                Certificados por Agrocalidad para garantizar la inocuidad alimentaria.
                            </span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-gold mb-4">
                            Enlaces
                        </h4>
                        <ul className="space-y-3">
                            <li><Link href="/" className="hover:text-white transition-colors">Inicio</Link></li>
                            <li><Link href="/productos" className="hover:text-white transition-colors">Nuestr os Productos</Link></li>
                            <li><Link href="/certificaciones" className="hover:text-white transition-colors">Certificaciones</Link></li>
                            <li><Link href="/nosotros" className="hover:text-white transition-colors">Sobre Nosotros</Link></li>
                            <li><Link href="#contact" className="hover:text-white transition-colors">Contacto</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-gold mb-4">
                            Contacto
                        </h4>
                        <ul className="space-y-3 text-sm text-brand-gold/80">
                            <li className="flex items-center gap-2">
                                <Phone className="h-4 w-4" />
                                <span>+593 99 561 6428</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="h-4 w-4" />
                                <span>contacto@avicolalamita.com</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <MapPin className="h-4 w-4" />
                                <span>Quito, Ecuador</span>
                            </li>
                        </ul>

                        <div className="mt-6 flex gap-4">
                            <a href="https://www.facebook.com/share/16jUpe2FcL/" target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:text-white transition-colors">
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-brand-gold hover:text-white transition-colors">
                                <Instagram className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-8 border-t border-brand-gold/20 pt-8 text-center text-xs text-brand-gold/60">
                    <p>&copy; {new Date().getFullYear()} Avícola La Mita. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
