import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

// Brand color extrait du logo Orbit
const ORBIT_RED = "#7E1A23";

const features = [
  {
    title: "Plus de ventes",
    subtitle: "Fini les abandons en caisse",
    description:
      "Vos clients achètent, vous ne perdez plus de ventes à cause de l'attente",
  },
  {
    title: "Moins de pertes",
    subtitle: "Antivol nouvelle génération",
    description:
      "La double techno NFC + RFID UHF détecte tout article non payé en sortie.",
  },
  {
    title: "Vos équipes libérées",
    subtitle: "Conseil plutôt que caisse",
    description:
      "Redéployez votre personnel sur le conseil et l'expérience en magasin.",
  },
];

export default function PricingPage() {
  return (
    <section
      className={`${jakarta.className} min-h-screen bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] text-black">
            Un tarif simple pour
            <br />
            une experience sans friction
          </h2>
          <p className="mt-5 text-base sm:text-lg text-neutral-500">
            Un seul plan, pas de concession sur la qualité.
          </p>
        </div>

        {/* Pricing card */}
        <div className="relative bg-[#ECECEE] rounded-[28px] p-6 sm:p-10 lg:p-12 overflow-hidden">
          {/* Top row : titre + prix */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-12 relative z-10">
            <div className="max-w-2xl">
              <p
                className="font-semibold text-sm sm:text-base"
                style={{ color: ORBIT_RED }}
              >
                Solution dédiée aux enseignes de prêt-à-porter
              </p>
              <h3 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold text-black">
                Solution Orbit
              </h3>
              <p className="mt-2 text-neutral-600 text-sm sm:text-base">
                Tout l&apos;équipement &amp; l&apos;accompagnement pour votre point de vente
              </p>
            </div>

            <div className="lg:text-right shrink-0">
              <p className="text-neutral-600 text-sm sm:text-base">À partir de</p>
              <p className="mt-1 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black tracking-tight">
                1 000€
                <span className="text-sm sm:text-base font-normal text-neutral-600 ml-0.5">
                  /mois/magasins
                </span>
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="my-8 sm:my-10 border-t border-neutral-300/70 relative z-10" />

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 relative z-10">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-white rounded-2xl p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-shadow duration-200 hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)]"
              >
                <div
                  className="flex items-center gap-2 font-semibold mb-3"
                  style={{ color: ORBIT_RED }}
                >
                  {/* Icône Orbit (étoile blanche sur rond bordeaux) */}
                  <Image
                    src="/icon-logo-blanc.png"
                    alt=""
                    width={20}
                    height={20}
                    className=""
                  />
                  <span>{f.title}</span>
                </div>
                <h4 className="font-bold text-black mb-2 text-base">
                  {f.subtitle}
                </h4>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex justify-center mt-10 relative z-10">
            <button
              type="button"
              className="text-white px-7 py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-200 shadow-sm hover:opacity-90 active:scale-[0.98]"
              style={{ backgroundColor: ORBIT_RED }}
            >
              Équiper mon magasin
            </button>
          </div>

          {/* Watermark — wordmark Orbit en filigrane */}
          <div
            aria-hidden="true"
            className="absolute -bottom-6 -right-2 sm:bottom-2 sm:right-6 w-[180px] sm:w-[240px] lg:w-[300px] opacity-[0.07] select-none pointer-events-none"
          >
            <Image
              src="/logo_rouge.svg"
              alt=""
              width={460}
              height={170}
              className="w-full h-auto"
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}