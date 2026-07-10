/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

export default function ContactPage() {
  const [form, setForm] = useState({
    email: "",
    name: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/forms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        toast.success("Message envoyé ! ✅", {
          description: "Nous vous répondrons dans les plus brefs délais.",
        });
        setForm({ email: "", name: "", subject: "", message: "" });
      } else {
        toast.error("Une erreur est survenue. ❌​", {
          description: "Veuillez réessayer ou nous contacter directement.",
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("Une erreur est survenue. ❌​", {
        description: "Veuillez réessayer ou nous contacter directement.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen pt-[55px] bg-[#F2F2F6] text-[#111] relative"
      style={{
        backgroundImage: "url('/images/orbit-text-bg.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right center",
        backgroundAttachment: "fixed",
        backgroundSize: "contain",
      }}
    >
      <Toaster position="bottom-right" />

      <main className="flex flex-col lg:flex-row justify-between px-12 lg:px-24 py-12 max-w-7xl mx-auto w-full relative">
        {/* Partie gauche : formulaire */}
        <div className="flex-1 max-w-xl -ml-16">
          <p className="text-[#8C1111] text-[14px] font-regular">
            Contactez notre équipe !
          </p>

          <h1 className="text-[76px] font-semibold mb-8 leading-none">
            Nous contacter
          </h1>

          <div className="pl-20">
            <p className="text-[20px] font-regular mb-8">
              N'hésitez pas à nous contacter, nous vous répondrons dans les plus
              brefs délais.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 mb-16">
              <div>
                <label className="text-[16px] font-medium">Votre email</label>
                <Input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="mt-1 text-[16px] font-regular"
                  required
                />
              </div>

              <div>
                <label className="text-[16px] font-medium">Votre nom</label>
                <Input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Nom"
                  className="mt-1 text-[16px] font-regular"
                  required
                />
              </div>

              <div>
                <label className="text-[16px] font-medium">
                  Le sujet de votre message
                </label>
                <Input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Sujet"
                  className="mt-1 text-[16px] font-regular"
                  required
                />
              </div>

              <div>
                <label className="text-[16px] font-medium">Votre message</label>
                <Textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Écrivez votre message ici"
                  className="mt-1 text-[16px] font-regular"
                  rows={4}
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-[#8C1111] hover:bg-[#590202] text-white text-[16px] font-medium py-4 rounded-[8px]"
              >
                {loading ? "Envoi en cours..." : "Envoyer"}
              </Button>
            </form>
          </div>

          <Separator className="my-20 bg-[#6A6A73]/20 h-[1px]" />

          {/* Section FAQ */}
          <div className="mb-20">
            <p className="text-[#8C1111] text-[14px] font-regular">
              Vous avez des questions ?
            </p>
            <h1 className="text-[76px] font-semibold mb-8 leading-none">
              Nos réponses
            </h1>

            <div className="pl-20">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-[20px] font-medium">
                    Une fois l'achat effectué, comment l'antivol est-il
                    désactivé ?
                  </AccordionTrigger>
                  <AccordionContent className="text-[16px]">
                    Après le paiement, les antivols sont automatiquement
                    désactivés à distance pour un passage fluide et sans
                    attente.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-[20px] font-medium">
                    Est-ce que les caisses et les caissières vont disparaître ?
                  </AccordionTrigger>
                  <AccordionContent className="text-[16px]">
                    Non, Orbit ne supprime pas les caisses. Leur nombre sera
                    simplement réduit, et le personnel pourra se concentrer sur
                    l'accompagnement et le conseil des clients en magasin.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-[20px] font-medium">
                    Comment les enseignes sont-elles protégées contre les fraudes
                    et les vols ?
                  </AccordionTrigger>
                  <AccordionContent className="text-[16px]">
                    Un système d'antivol intelligent et sécurisé est intégré pour
                    limiter au maximum les risques de fraude ou de vol.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-[20px] font-medium">
                    Comment remettre un article en rayon après l'avoir scanné ?
                  </AccordionTrigger>
                  <AccordionContent className="text-[16px]">
                    Il suffit de supprimer l'article du panier virtuel tant que
                    vous êtes encore dans le magasin.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-[20px] font-medium">
                    Et si mon téléphone détecte un article par erreur ?
                  </AccordionTrigger>
                  <AccordionContent className="text-[16px]">
                    Pas d'inquiétude, vous pouvez retirer l'article à tout moment
                    depuis votre panier virtuel avant de quitter le magasin.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Partie droite : infos et réseaux */}
        <div className="relative flex items-start lg:w-1/3 mt-8 lg:mt-0">
          <div className="absolute left-0 top-0 h-full w-[1px] bg-[#6A6A73]/20"></div>

          <div className="pl-16 sticky top-24 space-y-6">
            <div>
              <h3 className="font-bold text-[16px]">Horaires d'ouvertures</h3>
              <p className="font-regular text-[20px] leading-6">
                lundi - vendredi
                <br />
                9h00 - 18h00
                <br />
                samedi
                <br />
                10h00 - 18h00
              </p>
            </div>

            <div>
              <h3 className="font-bold text-[16px]">Informations de contact</h3>
              <p className="font-regular text-[20px] leading-6">
                (+33) 4 95 66 24 85
                <br />
                (+33) 6 04 65 35 49
                <br />
                orbit@gmail.com
              </p>
            </div>

            <div>
              <h3 className="font-bold text-[16px]">Adresse</h3>
              <p className="font-regular text-[20px]">
                20 route de cala rossa
                <br />
                20137
                <br />
                Porto-Vecchio
              </p>
            </div>

            <Separator />

            <div className="flex space-x-3">
              <a
                href="https://www.instagram.com/orbit_off?igsh=MWZ1N3Zwa2NscDQxeQ=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/icons/instagram.svg"
                  alt="Instagram"
                  width={30}
                  height={30}
                  className="opacity-80 hover:opacity-100 transition"
                />
              </a>
              <Image
                src="/icons/tiktok.svg"
                alt="Tiktok"
                width={30}
                height={30}
                className="opacity-80 hover:opacity-100 transition"
              />
              <Image
                src="/icons/x.svg"
                alt="X"
                width={30}
                height={30}
                className="opacity-80 hover:opacity-100 transition"
              />
              <Image
                src="/icons/linkedin.svg"
                alt="Linkedin"
                width={30}
                height={30}
                className="opacity-80 hover:opacity-100 transition"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
