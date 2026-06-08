import { Button } from "@/components/ui/button";
import StepCard from "@/components/homecard";
import StatCard from "@/components/homestat";
import { cn } from "@/lib/utils";
import React from "react";
import Link from "next/link";

export default function HomePage() {
  return (
    <>

      <div className="min-h-screen w-full bg-[#F2F2F6] text-black pt-[55px]">

        <div className="relative w-full h-[10rem]">
          <div
            className={cn(
              "absolute inset-0 z-0",
              "[background-size:30px_30px]",
              "[background-image:linear-gradient(to_right,#E7E7E8_1px,transparent_1px),linear-gradient(to_bottom,#E7E7E8_1px,transparent_1px)]",
              "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_3px),linear-gradient(to_bottom,#262626_1px,transparent_3px)]"
            )}
          />
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#F2F2F6]/0 via-[#F2F2F6]/70 to-[#F2F2F6]" />
          <div className="relative z-10 flex flex-col items-center w-full py-7">
            <h1 className="text-[72px] font-semibold text-center mb-4">
              Le shopping sans files d’attente
            </h1>

            <p className="text-center text-[#6A6A73] max-w-2xl mb-6 font-medium text-[28px]">
              <span className="text-[#984B4B]">Orbit </span>
              réinvente l’expérience en magasin. Scannez, payez et partez. C’est aussi simple que ça.
            </p>
          </div>
        </div>

        <div className="relative z-10 flex flex-col items-center w-full py-25">
          <Link href="/inscription">
            <Button className="flex bg-[#8C1111] hover:bg-[#5e0a0a] text-[20px] text-white font-semibold rounded-md py-6">
              Découvrir Orbit
            </Button>
          </Link>

          <div className="mt-8 rounded-2xl shadow-md overflow-hidden max-w-4xl w-full bg-white">
            <img
              src="/images/accueil.png"
              alt="Image accueil"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <section className="py-16 px-6">
          <div className="text-center mb-12">
            <h2 className="text-[40px] font-bold mb-2">
              Comment ça marche ?
            </h2>

            <p className="text-[#0D0D0D] font-semibold text-[20px]">
              <span className="text-[#a12020]">Orbit </span>
              simplifie le shopping en trois étapes.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-start gap-12 max-w-6xl mx-auto">
            <StepCard
              image="/images/scan_home.png"
              alt="Vous scannez"
              title="Vous Scannez"
              description="Avec votre téléphone, vous pouvez ajouter au panier vos articles."
            />

            <StepCard
              image="/images/partir_home.png"
              alt="Partez sans attente"
              title="Partez sans attente"
              description="Vous payez en toute sécurité via l’application lors de votre sortie."
            />

            <StepCard
              image="/images/achat_home.png"
              alt="Profitez de vos achats"
              title="Profitez de vos achats !"
              description="Sortez avec vos nouveaux vêtements, sans jamais avoir fait la queue."
            />
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto flex flex-col items-center gap-16">
            <div className="w-full bg-white rounded-2xl shadow-sm py-10 px-6 flex flex-col md:flex-row justify-around items-center text-center">
              <StatCard
                value={90}
                title="Paniers abandonnés"
                description="Par les clients des grandes enseignes à cause de l’attente."
                isPercentage
              />

              <StatCard
                value={45}
                title="Intéressés"
                description="Par Orbit, d'après une enquête sur un pannel de 100 personnes"
                isPercentage
              />

              <StatCard
                value={75}
                title="Efficacité en caisse"
                description="Réduction des files et amélioration du flux en magasin."
                isPercentage
              />
            </div>

            <div className="text-center">
              <h2 className="text-[40px] font-bold mb-2">
                Et si vous n’attendiez plus ?
              </h2>

              <p className="text-[#6A6A73] mb-6 font-medium text-[24px]">
                Avec <span className="text-[#984B4B]">Orbit</span>
                , vous n’attendez plus.
                <br />
                Vous profitez, vous sortez léger.
              </p>
              <Link href="/inscription">
                <Button className="bg-[#8C1111] hover:bg-[#5e0a0a] text-[20px] font-semibold text-white rounded-md px-6 py-6">
                  Essayer Orbit
                </Button>
              </Link>  
            </div>
          </div>
        </section>
      </div>
    </>
  );
}