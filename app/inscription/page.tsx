"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { persistAuthSession } from "@/lib/authSession";
import { orbitApiPath } from "@/lib/orbitApi";

type Step = "infos" | "password" | "verify";

export default function SignupPage() {
  const router = useRouter();
  const [step, setStep] = useState<Step>("infos");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleInfos = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email.trim() || !firstName.trim() || !lastName.trim() || !birthDate) {
      setError("Tous les champs sont obligatoires.");
      return;
    }

    setError(null);
    setStep("password");
  };

  const handleSignup = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!password || !confirmPassword) {
      setError("Veuillez remplir tous les champs.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(orbitApiPath("/api/auth/signup"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin",
        body: JSON.stringify({
          email: email.trim(),
          password,
          profile: {
            first_name: firstName.trim(),
            last_name: lastName.trim(),
            birth_date: birthDate,
          },
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (
        data?.status === "exists" &&
        data?.reason === "existing_user_confirmed"
      ) {
        setError("Ce compte existe déjà. Connectez-vous.");
        return;
      }

      if (
        data?.status === "pending" &&
        data?.reason === "existing_user_unconfirmed"
      ) {
        setStep("verify");
        return;
      }

      if (!response.ok) {
        setError(data?.description || "Erreur lors de l'inscription.");
        return;
      }

      if (
        data?.status === "confirmed" &&
        data?.session?.access_token &&
        data?.session?.refresh_token
      ) {
        persistAuthSession({
          accessToken: data.session.access_token,
          refreshToken: data.session.refresh_token,
          user: data.user,
        });

        router.replace("/");
        router.refresh();
        return;
      }

      if (data?.status === "confirmed") {
        setError("La session retournée par l'API est invalide.");
        return;
      }

      setStep("verify");
    } catch {
      setError("Erreur de connexion à l'API.");
    } finally {
      setLoading(false);
    }
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
          {step === "infos" && (
            <>
              <h1 className="text-center text-4xl font-bold">Inscription</h1>
              <p className="text-center text-sm text-gray-500">
                Créez votre compte
              </p>

              <form className="mt-8 space-y-4" onSubmit={handleInfos}>
                <Field label="Email" htmlFor="email">
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </Field>

                <Field label="Prénom" htmlFor="firstName">
                  <Input
                    id="firstName"
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                  />
                </Field>

                <Field label="Nom" htmlFor="lastName">
                  <Input
                    id="lastName"
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                  />
                </Field>

                <Field label="Date de naissance" htmlFor="birthDate">
                  <Input
                    id="birthDate"
                    type="date"
                    value={birthDate}
                    onChange={(event) => setBirthDate(event.target.value)}
                  />
                </Field>

                {error && <p className="text-sm text-red-600">{error}</p>}

                <Button
                  type="submit"
                  className="w-full bg-[#8C1711] py-5 text-white hover:bg-[#5e0a0a]"
                >
                  Suivant
                </Button>

                <AuthLink />
              </form>
            </>
          )}

          {step === "password" && (
            <>
              <h1 className="text-center text-4xl font-bold">Sécurité</h1>

              <form className="mt-8 space-y-4" onSubmit={handleSignup}>
                <Field label="Mot de passe" htmlFor="password">
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      className="pr-10"
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
                </Field>

                <Field label="Confirmation" htmlFor="confirmPassword">
                  <Input
                    id="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    onChange={(event) => setConfirmPassword(event.target.value)}
                  />
                </Field>

                {error && <p className="text-sm text-red-600">{error}</p>}

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#8C1711] py-5 text-white hover:bg-[#5e0a0a]"
                >
                  {loading ? "Création..." : "Créer le compte"}
                </Button>

                <AuthLink />
              </form>
            </>
          )}

          {step === "verify" && (
            <>
              <h1 className="text-center text-4xl font-bold">
                Vérifiez vos emails
              </h1>
              <p className="mt-4 text-center text-sm text-gray-600">
                Un email de confirmation vous a été envoyé.
              </p>
            </>
          )}
        </section>
      </div>
    </main>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div>
      <Label htmlFor={htmlFor}>{label}</Label>
      <div className="mt-1">{children}</div>
    </div>
  );
}

function AuthLink() {
  return (
    <p className="mt-6 text-center text-sm text-gray-600">
      Vous avez déjà un compte ?{" "}
      <Link
        href="/connexion"
        className="font-semibold text-[#8C1711] hover:underline"
      >
        Connectez-vous
      </Link>
    </p>
  );
}
