import { HandPlatter, Leaf, Award } from "lucide-react";

// --- Types ---

export interface Product {
    id: string;
    name: string;
    description: string;
    minWeight: number; // lbs
    maxWeight: number; // lbs
    pricePerLb: number;
    // Calculated properties can be handled in component or here if we want static values
    images: string[];
    isOrganic: boolean;
    certifications: string[]; // IDs
}

export interface Certification {
    id: string;
    name: string;
    description: string;
    logo: string;
    pdfUrl: string;
    standards: string[];
}

export interface CorporateInfo {
    mission: string;
    vision: string;
    about: string;
    manager: {
        name: string;
        bio: string;
        image: string;
        quote: string;
    };
    contact: {
        address: string;
        phone: string;
        whatsapp: string; // Clean number for API
        email: string;
        mapUrl: string;
    };
}

// --- Seed Data ---

export const CERTIFICATIONS: Certification[] = [
    {
        id: "agrocalidad",
        name: "Agrocalidad Ecuador",
        description: "Certificación oficial de la Agencia de Regulación y Control Fito y Zoosanitario del Ecuador, garantizando inocuidad alimentaria y buenas prácticas pecuarias.",
        logo: "/images/agrocalidad.jpg",
        pdfUrl: "/docs/agrocalidad.pdf", // Placeholder
        standards: [
            "Buenas Prácticas Pecuarias (BPP)",
            "Bienestar Animal",
            "Control de Inocuidad"
        ]
    },
    {
        id: "eu-organic",
        name: "EU Organic",
        description: "Estándar de la Unión Europea para productos ecológicos. Garantiza que el producto ha sido producido respetando el medio ambiente y el bienestar animal.",
        logo: "/images/eu-organic-logo.png", // Start with placeholder or generic if missing
        pdfUrl: "/docs/eu-organic.pdf", // Placeholder
        standards: [
            "Sin OGM (Organismos Genéticamente Modificados)",
            "Uso restringido de pesticidas y fertilizantes químicos",
            "Rotación de cultivos y recursos locales"
        ]
    }
];

export const PRODUCTS: Product[] = [
    {
        id: "pollo-entero",
        name: "Pollo Orgánico Entero",
        description: "Pollo de campo criado en libertad, alimentado con granos orgánicos. Piel amarilla natural, sabor intenso y textura firme ideal para caldos y asados.",
        minWeight: 8,
        maxWeight: 12,
        pricePerLb: 1.10,
        images: ["/images/roasted-chicken.jpg"], // Using existing image for now
        isOrganic: true,
        certifications: ["agrocalidad", "eu-organic"]
    },
    {
        id: "pechuga",
        name: "Pechuga de Pollo Premium",
        description: "Corte magro extraído de pollos orgánicos certificados. Perfecta para dietas altas en proteína y bajas en grasa. Jugosa y tierna.",
        minWeight: 1,
        maxWeight: 2, // Per pack logic, can adjust display
        pricePerLb: 2.50, // Adjusted price logic for parts vs whole if needed, keeping simple for now
        images: ["/images/chicken-breast.png"],
        isOrganic: true,
        certifications: ["agrocalidad"]
    },
    {
        id: "alitas",
        name: "Alitas de Pollo Orgánicas",
        description: "Alitas carnosas y libres de antibióticos. Ideales para hornear o parrillar. Sabor auténtico sin químicos añadidos.",
        minWeight: 1,
        maxWeight: 3,
        pricePerLb: 1.80,
        images: ["/images/chicken-wings.png"],
        isOrganic: true,
        certifications: ["agrocalidad"]
    }
];

export const COMPANY_INFO: CorporateInfo = {
    about: `Avícola La Mita es una empresa familiar ecuatoriana dedicada a la producción sostenible y orgánica de carne de pollo premium. Fundada por Vilma Melida Almachi Albán, una emprendedora visionaria con profundo amor por la vida, los animales y el medio ambiente, nos especializamos en criar aves con los más altos estándares de bienestar animal y procesarlas con responsabilidad ambiental certificada.

Nuestra doble certificación (Agrocalidad Ecuador y EU Organic) respalda nuestro compromiso inquebrantable con la calidad, la sostenibilidad y la salud de nuestros consumidores. Cada ave que producimos es testimonio de nuestra filosofía: criar con amor, procesar con responsabilidad, alimentar con excelencia.`,

    mission: `Producir y comercializar carne de pollo orgánica de la más alta calidad, criada bajo estrictos estándares de bienestar animal y sostenibilidad ambiental, contribuyendo a la alimentación sana y saludable de las familias de Milagro y proyectándonos hacia mercados nacionales e internacionales, siendo referente en la industria avícola orgánica del Ecuador.`,

    vision: `Para 2030, ser reconocidos como la avícola orgánica líder en Ecuador, expandiendo nuestra presencia a nivel nacional e internacional, siendo modelo de excelencia en producción sostenible, innovación en procesos ambientalmente responsables y compromiso genuino con la salud alimentaria de nuestros consumidores, mientras mantenemos nuestros valores fundamentales de amor por la vida y respeto por el medio ambiente.`,

    manager: {
        name: "Vilma Melida Almachi Albán",
        bio: `Emprendedora ecuatoriana con espíritu de lucha y visión transformadora en la industria alimentaria sostenible. Vilma representa la convergencia entre tradición y innovación: una mujer que ha dedicado su vida a demostrar que es posible criar animales con amor genuino mientras se construye un negocio rentable y responsable.

Su filosofía empresarial se fundamenta en tres pilares: amor por la vida (cada ave recibe cuidado personalizado y ético), responsabilidad ambiental (procesos que minimizan el impacto ecológico), y compromiso con la salud pública (producir alimentos orgánicos certificados que nutran familias).

Con una mentalidad de crecimiento continuo, Vilma ha obtenido certificaciones internacionales que posicionan a Avícola La Mita como proveedor confiable para el mercado más exigente, sin perder nunca de vista su propósito original: alimentar sano y saludable a su comunidad y al mundo.`,
        image: "/images/vilma-almachi.jpg",
        quote: "Criar con amor no es solo una filosofía, es nuestra práctica diaria"
    },

    contact: {
        address: "Cdla. Las Piñas, Calles Pedro Pablo Echeverría entre Carlos Solís Morán y Segundo Luis Moreno, Casa #406, Milagro, Guayas, Ecuador",
        phone: "+593 99 561 6428",
        whatsapp: "593995616428",
        email: "contacto@avicolalamita.com", // Placeholder
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127504.53697920158!2d-79.6661776566406!3d-2.133282299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902d33c5e088cda9%3A0xe63f829d55a5c5c9!2sMilagro!5e0!3m2!1ses!2sec!4v1700000000000!5m2!1ses!2sec" // Generic Milagro embed for now
    }
};
