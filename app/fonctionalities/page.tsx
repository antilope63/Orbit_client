import Image from "next/image";

export default function FonctionnalitesPage() {
    return (
        <div className="min-h-screen bg-white">

            {/* Hero */}
            <section className="flex items-center justify-between px-12 py-16 max-w-6xl mx-auto gap-8">
                <div className="flex flex-col gap-4 max-w-sm">
                    <h1 className="text-5xl font-bold text-black">Fonctionnalités</h1>
                    <p className="text-[#6A6A73]">
                        <span className="font-bold text-[#8C1111]">Orbit</span> réinvente l'expérience en magasin.
                        Scannez, payez et partez. C'est aussi simple que ça.
                    </p>
                    <button className="w-fit px-5 py-2 bg-[#8C1111] text-white text-sm rounded-full hover:bg-[#6f0d0d] transition-colors">
                        Découvrir Orbit
                    </button>
                </div>
                <div className="w-[340px] h-[220px] relative rounded-xl overflow-hidden flex-shrink-0">
                    <Image
                        src="/hero-car.jpg"
                        alt="Hero"
                        fill
                        className="object-cover"
                    />
                </div>
            </section>

            {/* Titre section fonctionnalités */}
            <section className="text-center py-10 px-6">
                <h2 className="text-4xl font-bold text-black mb-3">Fonctionnalités</h2>
                <p className="text-[#6A6A73] max-w-md mx-auto text-sm">
                    Découvrez comment Orbit peut révolutionner l'expérience de votre
                    magasin grâce à nos fonctionnalités.
                </p>

                {/* Tabs */}
                <div className="flex items-center justify-center gap-2 mt-8">
                    <button className="px-5 py-2 bg-[#8C1111] text-white text-sm rounded-full">
                        principales
                    </button>
                    <button className="px-5 py-2 border border-gray-300 text-[#6A6A73] text-sm rounded-full hover:border-[#8C1111] hover:text-[#8C1111] transition-colors">
                        avancées
                    </button>
                </div>
            </section>

            {/* Cards */}
            <section className="grid grid-cols-3 gap-8 px-12 py-10 max-w-6xl mx-auto">
                {[
                    {
                        title: "Scan NFC instantané",
                        description:
                            "Chaque article est associé à un tag NFC unique. Le client scanne l'article, le produit est instantanément reconnu et ajouté à son panier.",
                        img: "/card1.jpg",
                    },
                    {
                        title: "Paiement automatique et sécurisé",
                        description:
                            "Une fois le panier validé, le paiement s'effectue simplement. Le client paie via son moyen de paiement enregistré et reçoit une facture.",
                        img: "/card2.jpg",
                    },
                    {
                        title: "Antivols automatiques",
                        description:
                            "Dès la validation du paiement, les antivols se désactivent automatiquement. Le client peut sortir sans intervention du personnel.",
                        img: "/card3.jpg",
                    },
                ].map((card, i) => (
                    <div key={i} className="flex flex-col gap-3">
                        <div className="w-full h-[180px] relative rounded-xl overflow-hidden">
                            <Image
                                src={card.img}
                                alt={card.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <h3 className="font-bold text-black text-base">{card.title}</h3>
                        <p className="text-[#6A6A73] text-sm leading-relaxed">{card.description}</p>
                    </div>
                ))}
            </section>

            {/* CTA Banner */}
            <section className="bg-[#f5e8e8] mx-12 my-10 rounded-2xl py-14 px-6 text-center max-w-6xl mx-auto">
                <h2 className="text-2xl font-bold text-black mb-2">
                    Prêt à réinventer l'expérience en magasin ?
                </h2>
                <p className="text-[#6A6A73] text-sm mb-6">
                    Avec Orbit. Transformez votre boutique en supprimant l'attente à la caisse.
                </p>
                <button className="px-6 py-2 bg-[#8C1111] text-white text-sm rounded-full hover:bg-[#6f0d0d] transition-colors">
                    Découvrir Orbit
                </button>
            </section>
        </div>
    );
}