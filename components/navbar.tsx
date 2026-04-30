"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LogOut } from "lucide-react";

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

    const user = authSession?.user;
    const isAuthenticated = !!authSession;
    const firstName = user?.user_metadata?.first_name?.trim() ?? "";
    const lastName = user?.user_metadata?.last_name?.trim() ?? "";
    const initials =
        `${firstName.charAt(0)}${lastName.charAt(0)}`.trim().toUpperCase() ||
        user?.email?.charAt(0)?.toUpperCase() ||
        "OR";
    const avatarUrl = user?.user_metadata?.avatar_url;
    const displayName =
        [firstName, lastName].filter(Boolean).join(" ") ||
        user?.email ||
        "Compte Orbit";
    const navTextClass = "text-[18px] font-medium transition-colors";

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
        <header className="fixed z-50 h-[72px] w-full border-b border-gray-200 bg-[#fafafc]">
            <div className="grid h-full w-full grid-cols-[1fr_auto_1fr] items-center gap-6 px-6">
                <nav className="flex items-center gap-6 text-[18px]">
                    <Link
                        href="/fonctionalities"
                        className={[
                            navTextClass,
                            pathname === "/fonctionalities"
                                ? "text-black"
                                : "text-[#6A6A73] hover:text-black",
                        ].join(" ")}
                    >
                        Fonctionnalités
                    </Link>
                    <Link
                        href="/tarifs"
                        className={[
                            navTextClass,
                            pathname === "/tarifs"
                                ? "text-black"
                                : "text-[#6A6A73] hover:text-black",
                        ].join(" ")}
                    >
                        Tarifs
                    </Link>
                </nav>

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

                <div className="flex h-10 items-center justify-end gap-6">
                    <Link
                        href="/contact"
                        className={[
                            navTextClass,
                            pathname === "/contact"
                                ? "text-black"
                                : "text-[#6A6A73] hover:text-black",
                        ].join(" ")}
                    >
                        Contact
                    </Link>
                    {isAuthenticated ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <button
                                    type="button"
                                    className="transition-transform hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C1111]/30"
                                    aria-label="Ouvrir le menu du compte"
                                >
                                    <Avatar className="size-10 border border-gray-200">
                                        <AvatarImage src={avatarUrl} />
                                        <AvatarFallback className="bg-[#8C1111] text-white text-sm font-semibold">
                                            {initials}
                                        </AvatarFallback>
                                    </Avatar>
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
                        <>
                            <Link
                                href="/connexion"
                                className={`${navTextClass} text-[#6A6A73] hover:text-black`}
                            >
                                Se connecter
                            </Link>
                        </>
                    )}
                </div>

            </div>
        </header>
    );
}
