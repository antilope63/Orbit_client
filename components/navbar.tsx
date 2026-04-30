"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LogOut } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    AUTH_SESSION_EVENT,
    clearAuthSession,
    getStoredAuthSession,
    type AuthSession,
} from "@/lib/authSession";
import { orbitApiPath } from "@/lib/orbitApi";

export default function Navbar() {
    const pathname = usePathname();
    const [authSession, setAuthSession] = useState<AuthSession | null>(null);
    const [isLoggingOut, setIsLoggingOut] = useState(false);

    useEffect(() => {
        const syncAuthSession = () => setAuthSession(getStoredAuthSession());

        syncAuthSession();
        window.addEventListener("storage", syncAuthSession);
        window.addEventListener(AUTH_SESSION_EVENT, syncAuthSession);

        return () => {
            window.removeEventListener("storage", syncAuthSession);
            window.removeEventListener(AUTH_SESSION_EVENT, syncAuthSession);
        };
    }, []);

    const navLinkClass = (href: string) =>
        [
            "text-[16px] font-medium transition-colors",
            pathname === href ? "text-black" : "text-[#6A6A73] hover:text-black",
        ].join(" ");

    const user = authSession?.user;
    const firstName = user?.user_metadata?.first_name?.trim() ?? "";
    const lastName = user?.user_metadata?.last_name?.trim() ?? "";
    const initials =
        `${firstName.charAt(0)}${lastName.charAt(0)}`.trim().toUpperCase() ||
        user?.email?.charAt(0)?.toUpperCase() ||
        "OR";
    const displayName =
        [firstName, lastName].filter(Boolean).join(" ") ||
        user?.email ||
        "Compte Orbit";

    const handleLogout = async () => {
        if (isLoggingOut) return;

        setIsLoggingOut(true);
        try {
            await fetch(orbitApiPath("/api/auth/logout"), {
                method: "POST",
                credentials: "same-origin",
            });
        } finally {
            clearAuthSession();
            setAuthSession(null);
            setIsLoggingOut(false);
        }
    };

    return (
        <header className="fixed w-full bg-[#fafafc] border-b border-gray-200 z-50">
            <div className="w-full relative flex items-center justify-between px-6 py-4">

                {/* Liens — gauche */}
                <nav className="flex items-center gap-6 text-[18px]">
                    <Link
                        href="/fonctionalities"
                        className={navLinkClass("/fonctionalities")}
                    >
                        Fonctionnalités
                    </Link>
                    <Link
                        href="/tarifs"
                        className={navLinkClass("/tarifs")}
                    >
                        Tarifs
                    </Link>
                </nav>

                {/* Logo — centré */}
                <div className="flex justify-center">
                    <Link href="/" className="hover:text-black transition-colors">
                        <Image
                            src="/logo_rouge.svg"
                            alt="Orbit Logo"
                            width={85}
                            height={39}
                            className="object-contain"
                        />
                    </Link>
                </div>

                {/* Actions — droite */}
                <div className="flex items-center gap-6">
                    <Link
                        href="/contact"
                        className={navLinkClass("/contact")}
                    >
                        Contact
                    </Link>
                    {authSession ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <button
                                    type="button"
                                    className="flex size-10 items-center justify-center rounded-full border border-gray-200 bg-[#8C1111] text-sm font-semibold text-white transition-transform hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C1111]/30"
                                    aria-label="Ouvrir le menu du compte"
                                >
                                    {initials}
                                </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-56">
                                <DropdownMenuLabel>
                                    <span className="block truncate">{displayName}</span>
                                    {user?.email && displayName !== user.email ? (
                                        <span className="block truncate text-xs font-normal text-muted-foreground">
                                            {user.email}
                                        </span>
                                    ) : null}
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup>
                                    <DropdownMenuItem asChild>
                                        <Button
                                            type="button"
                                            className="h-9 w-full justify-start bg-[#8C1111] text-white hover:bg-[#5e0a0a] focus-visible:ring-[#8C1111]/30"
                                            disabled={isLoggingOut}
                                            onClick={handleLogout}
                                        >
                                            <LogOut />
                                            {isLoggingOut ? "Déconnexion..." : "Se déconnecter"}
                                        </Button>
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <Link
                            href="/connexion"
                            className={navLinkClass("/connexion")}
                        >
                            Se connecter
                        </Link>
                    )}
                </div>

            </div>
        </header>
    );
}
