"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email.trim() || !password) {
      setError("Email et mot de passe sont requis.");
      return;
    }

    setError("La connexion client n'est pas encore branchée.");
  };

  return (
    <main className="grid flex-1 grid-cols-1 md:grid-cols-[1.1fr_1fr]">
      <div className="relative hidden md:block">
        <Image
          src="/images/store.jpg"
          alt="Vitrine"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="flex flex-col items-center justify-center bg-[#F5F5F7] py-16">
        <section className="w-full max-w-md px-10">
          <h1 className="text-center text-3xl font-bold text-black sm:text-4xl">
            Connexion
          </h1>
          <p className="mt-1 text-center text-sm text-gray-500">
            Saisissez vos informations de connexion
          </p>

          <form className="mt-8 space-y-4 text-left" onSubmit={handleLogin}>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Email"
                className="mt-1 border-gray-300"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="password">Mot de passe</Label>
              <div className="relative mt-1">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Mot de passe"
                  className="border-gray-300 pr-10"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((visible) => !visible)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 transition-colors hover:text-gray-700"
                  aria-label={
                    showPassword
                      ? "Masquer le mot de passe"
                      : "Afficher le mot de passe"
                  }
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {error && <p className="text-sm text-red-600">{error}</p>}

            <Button
              type="submit"
              className="mt-2 w-full rounded-md bg-[#8C1711] py-5 text-base font-medium text-white hover:bg-[#5e0a0a]"
            >
              Se connecter
            </Button>

            <p className="mt-6 text-center text-sm text-gray-600">
              Vous n’avez pas de compte ?{" "}
              <Link
                href="/inscription"
                className="font-semibold text-[#8C1711] hover:underline"
              >
                Inscrivez-vous
              </Link>
            </p>
          </form>
        </section>
      </div>
    </main>
  );
}
