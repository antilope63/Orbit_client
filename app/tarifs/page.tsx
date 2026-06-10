'use client';

import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const features = [
  {
    tag: 'Plus de ventes',
    title: 'Fini les abandons en caisse',
    desc: "Vos clients achètent, vous ne perdez plus de ventes à cause de l'attente.",
  },
  {
    tag: 'Moins de pertes',
    title: 'Antivol nouvelle génération',
    desc: 'La double techno NFC + RFID UHF détecte tout article non payé en sortie.',
  },
  {
    tag: 'Vos équipes libérées',
    title: 'Conseil plutôt que caisse',
    desc: "Redéployez votre personnel sur le conseil et l'expérience en magasin.",
  },
];

const faqs = [
  {
    question: "Comment se passe l'installation ?",
    answer:
      "Notre équipe se déplace dans votre point de vente pour installer l'ensemble du matériel et former vos collaborateurs. L'installation complète prend généralement entre une et deux journées selon la taille du magasin, sans interrompre votre activité.",
  },
  {
    question: 'Quels sont les délais de mise en service ?',
    answer:
      "Une fois le contrat signé, comptez environ 2 à 3 semaines pour la livraison du matériel et la planification de l'installation. Vous êtes opérationnel dès le jour de l'installation.",
  },
  {
    question: "Le matériel est-il inclus dans l'abonnement ?",
    answer:
      "Oui. L'ensemble du matériel (antennes RFID UHF, lecteurs NFC, terminaux de paiement, étiquettes) est inclus dans votre abonnement mensuel. Aucun frais caché, tout est compris.",
  },
  {
    question: "Y a-t-il un engagement de durée ?",
    answer:
      "Notre offre standard inclut un engagement de 24 mois pour amortir le matériel installé en magasin. Des conditions sur-mesure peuvent être étudiées pour les enseignes multi-points de vente.",
  },
];

export default function TarifsPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* ========== PRICING ========== */}
      <section className="px-4 sm:px-6 lg:px-8 pt-20 lg:pt-28 pb-12">
        <div className="max-w-[1492px] mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05]">
              Un tarif simple pour
              <br />
              une experience sans friction
            </h1>
            <p className="mt-6 text-base md:text-lg text-neutral-500">
              Un seul plan, pas de concession sur la qualité.
            </p>
          </div>

          {/* Card */}
          <div className="relative bg-[#F2F2F6] rounded-3xl p-6 sm:p-10 lg:p-14 overflow-hidden lg:min-h-[540px] flex flex-col">
            {/* Watermark logo */}
            <img
              src="/logo_rouge.svg"
              alt=""
              aria-hidden="true"
              className="pointer-events-none select-none absolute -bottom-2 -right-4 sm:-bottom-0 sm:-right-0 w-[200px] sm:w-[300px] lg:w-[400px] opacity-[0.06]"
            />

            {/* Top: titre + prix */}
            <div className="relative flex flex-col md:flex-row md:items-start md:justify-between gap-6 pb-8 lg:pb-10 border-b border-black/10">
              <div>
                <p className="text-sm font-semibold text-[#8B1A1A] mb-2">
                  Solution dédiée aux enseignes de prêt-à-porter
                </p>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-3">
                  Solution Orbit
                </h2>
                <p className="text-neutral-700 max-w-md">
                  Tout l&apos;équipement &amp; l&apos;accompagnement pour votre point de vente
                </p>
              </div>

              <div className="md:text-right">
                <div className="inline-block text-left">
                  <p className="text-sm text-neutral-600 md:text-base">
                    À partir de
                  </p>
                  <p className="mt-1 text-4xl font-bold text-black md:text-5xl">
                    1 000€
                    <span className="text-base font-medium text-neutral-700 md:text-lg">
                      /mois/magasins
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Features cards */}
            <div className="relative grid md:grid-cols-3 gap-4 md:gap-5 mt-8 lg:mt-10">
              {features.map((item) => (
                <div
                  key={item.tag}
                  className="bg-white rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-2 text-[#8B1A1A] mb-3">
                    <Sparkle />
                    <span className="font-medium">{item.tag}</span>
                  </div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="relative flex justify-center mt-10">
              <button
                type="button"
                className="bg-[#8B1A1A] hover:bg-[#6f1414] active:scale-[0.98] transition-all text-white font-medium px-8 py-3.5 rounded-[10px] shadow-sm"
              >
                Équiper mon magasin
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FAQ ========== */}
      <section className="px-4 sm:px-6 lg:px-8 pt-20 lg:pt-28 pb-10 lg:pb-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-center mb-12 lg:mb-16 leading-tight">
            Questions Fréquemment Posées
          </h2>

          <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-b border-neutral-200"
              >
                <AccordionTrigger className="font-semibold text-lg md:text-xl py-5 hover:no-underline text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-neutral-600 text-sm md:text-base leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ========== CTA BESOINS SPÉCIFIQUES ========== */}
      <section className="px-4 sm:px-6 lg:px-8 pt-10 lg:pt-12 pb-16 lg:pb-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-tight">
            Vous avez besoin des besoin specific
          </h2>
          <Link
            href="/contact"
            className="mt-8 inline-block bg-[#8B1A1A] hover:bg-[#6f1414] active:scale-[0.98] transition-all text-white font-medium px-8 py-3.5 rounded-[10px] shadow-sm"
          >
            Demander une demo
          </Link>
        </div>
      </section>
    </main>
  );
}

function Sparkle() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0l2.5 9.5L24 12l-9.5 2.5L12 24l-2.5-9.5L0 12l9.5-2.5L12 0z" />
    </svg>
  );
}