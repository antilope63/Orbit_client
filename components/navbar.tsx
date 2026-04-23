"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
    const pathname = usePathname();
    const [activePage, setActivePage] = useState("");

    useEffect(() => {
        if (pathname.endsWith("/historique")) setActivePage("historique");
        else if (pathname.endsWith("/contact")) setActivePage("contact");
        else setActivePage("");
    }, [pathname]);

    const activeBorderColor = "border-[#8C1111]";
    const linkColor = "text-[#6A6A73]";
    const linkHoverColor = "hover:text-black";

    return (
        <header className="fixed w-full bg-[#fafafc] border-b border-gray-200 z-50">
            <div className="w-full relative flex items-center justify-between px-6 py-4">

                {/* Liens de navigation — gauche */}
                <nav className="flex items-center gap-6 text-[18px]">
                    <Link
                        href="/historique"
                        className={`pb-1 border-b-2 ${
                            activePage === "historique"
                                ? activeBorderColor
                                : "border-transparent"
                        } ${linkColor} ${linkHoverColor} transition-colors`}
                    >
                        Fonctionnalités
                    </Link>
                    <Link
                        href="/contact"
                        className={`pb-1 border-b-2 ${
                            activePage === "contact"
                                ? activeBorderColor
                                : "border-transparent"
                        } ${linkColor} ${linkHoverColor} transition-colors`}
                    >
                        Tarifs
                    </Link>
                </nav>

                {/* Logo — centré absolument */}
                <div className="absolute left-1/2 -translate-x-1/2">
                    <Link href="/" className="hover:opacity-80 transition-opacity">
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
                <div className="flex items-center gap-6 text-[18px]">
                    <Link
                        href="/contact"
                        className={`pb-1 border-b-2 border-transparent ${linkColor} ${linkHoverColor} transition-colors`}
                    >
                        Contact
                    </Link>
                    <Link
                        href="/login"
                        className={`pb-1 border-b-2 border-transparent ${linkColor} ${linkHoverColor} transition-colors`}
                    >
                        Se connecter
                    </Link>
                </div>

            </div>
        </header>
    );
}