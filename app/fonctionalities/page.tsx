"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

const principalesCards = [
    {
        title: "Scan NFC instantané",
        description: "Chaque article est associé à un tag NFC unique. Le client scanne l'article, le produit est instantanément reconnu et ajouté à son panier.",
        img: "/image/scan_home.png",
    },
    {
        title: "Paiement automatique et sécurisé",
        description: "Une fois le panier validé, le paiement s'effectue simplement. Le client paie via son moyen de paiement enregistré et reçoit une facture.",
        img: "/image/achat_home.png",
    },
    {
        title: "Antivols automatiques",
        description: "Dès la validation du paiement, les antivols se désactivent automatiquement. Le client peut sortir sans intervention du personnel.",
        img: "/image/partir_home.png",
    },
];

const avanceesCards = [
    {
        title: "Tarification flexible",
        description: "Choisissez la formule qui correspond à vos besoins. Nos offres s'adaptent à la taille de votre magasin et à votre volume de ventes.",
        img: "/image/price.jpg",
    },
    {
        title: "Notifications en temps réel",
        description: "Recevez des alertes personnalisées sur vos achats, promotions et nouveautés disponibles en magasin.",
        img: "/image/notification.jpg",
    },
    {
        title: "Maintenance et installation",
        description: "L'installation et la maintenance sont entièrement organisées par nos soins. Vous n'avez rien à gérer, nous nous occupons de tout.",
        img: "/image/installation.jpg",
    },
];

export default function FonctionnalitesPage() {
    const [activeTab, setActiveTab] = useState<"principales" | "avancees">("principales");
    const cards = activeTab === "principales" ? principalesCards : avanceesCards;

    return (
        <div className="min-h-screen w-full bg-[#F2F2F6] text-black">

            {/* Hero */}
            <div className="relative w-full">
                <div
                    className={cn(
                        "absolute inset-0 z-0",
                        "[background-size:30px_30px]",
                        "[background-image:linear-gradient(to_right,#E7E7E8_1px,transparent_1px),linear-gradient(to_bottom,#E7E7E8_1px,transparent_1px)]",
                        "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_3px),linear-gradient(to_bottom,#262626_1px,transparent_3px)]"
                    )}
                />
                <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#F2F2F6]/0 via-[#F2F2F6]/70 to-[#F2F2F6]" />
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-[1420px] mx-auto px-12 py-20 gap-16 h-full">
                    <div className="flex flex-col gap-4 w-[438px]">
                        <h1 className="text-[40px] font-bold leading-tight">
                            Fonctionnalités
                        </h1>
                        <p className="text-[#6A6A73] font-medium text-[18px]">
                            <span className="text-[#984B4B] font-semibold">Orbit </span>
                            réinvente l'expérience en magasin. Scannez, payez et partez. C'est aussi simple que ça.
                        </p>
                        <Button asChild className="w-fit text-[14px] bg-[#8C1111] hover:bg-[#5e0a0a] text-white font-semibold rounded-md px-6 py-2">
                            <Link href="/inscription">
                                Découvrir Orbit
                            </Link>
                        </Button>
                    </div>
                    <div className="w-[600px] h-[400px] relative rounded-lg overflow-hidden flex-shrink-0 shadow-sm">
                        <Image
                            src="/image/accueil.png"
                            alt="Hero fonctionnalités"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* Section titre + tabs */}
            <section className="py-16 px-6 text-center">
                <h2 className="text-[40px] font-bold mb-2">Services proposées</h2>
                <p className="text-[#6A6A73] font-medium text-[18px] max-w-[500px] mx-auto">
                    Découvrez comment <span className="text-[#984B4B]">Orbit</span> peut révolutionner
                    l'expérience de votre magasin grâce à nos atouts.
                </p>

                {/* Tabs */}
                <div className="flex items-center justify-center mt-8">
                    <div className="flex items-center bg-white rounded-xl p-1 gap-1 shadow-sm">
                        <button
                            onClick={() => setActiveTab("principales")}
                            className={cn(
                                "px-8 py-3 rounded-lg font-semibold text-[16px] transition-all",
                                activeTab === "principales"
                                    ? "bg-[#8C1111] text-white"
                                    : "text-[#8C1111] hover:bg-gray-100"
                            )}
                        >
                            Principales
                        </button>
                        <button
                            onClick={() => setActiveTab("avancees")}
                            className={cn(
                                "px-8 py-3 rounded-lg font-semibold text-[16px] transition-all",
                                activeTab === "avancees"
                                    ? "bg-[#8C1111] text-white"
                                    : "text-[#8C1111] hover:bg-gray-100"
                            )}
                        >
                            Avancées
                        </button>
                    </div>
                </div>
            </section>

            {/* Cards fonctionnalités */}
            <section className="py-6 px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {cards.map((card, i) => (
                        <Card key={i} className="overflow-hidden rounded-2xl shadow-sm border-0">
                            <div className="w-full h-[250px] relative">
                                <Image
                                    src={card.img}
                                    alt={card.title}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <CardContent className="p-5 flex flex-col gap-2">
                                <h3 className="font-bold text-black text-[20px]">{card.title}</h3>
                                <p className="text-[#6A6A73] text-[16px] leading-relaxed">{card.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* CTA Banner */}
            <section className="py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="w-full bg-[#D16F6F] rounded-2xl shadow-sm py-14 px-6 flex flex-col items-center text-center gap-4">
                        <h2 className="text-[30px] font-bold text-white">
                            Prêt à réinventer l'expérience en magasin ?
                        </h2>
                        <p className="text-[#F2F2F6] font-medium text-[18px]">
                            Avec Orbit, transformez votre boutique
                            en supprimant l'attente à la caisse.
                        </p>
                        <Button asChild className="bg-[#8C1111] hover:bg-[#5e0a0a] text-white font-semibold text-[14px] rounded-md px-8 py-5 mt-2">
                            <Link href="/inscription">
                                Découvrir Orbit
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

        </div>
    );
}