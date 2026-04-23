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

                {/* Liens — gauche */}
                <nav className="flex items-center gap-6 text-[18px]">
                    <Link
                        href="/fonctionalities"
                        className="text-[16px] font-medium text-[#6A6A73] transition-colors hover:text-black"
                    >
                        Fonctionnalités
                    </Link>
                    <Link
                        href="/tarifs"
                        className="text-[16px] font-medium text-[#6A6A73] transition-colors hover:text-black"
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
                        className="text-[16px] font-medium text-[#6A6A73] transition-colors hover:text-black"
                    >
                        Contact
                    </Link>
                    <Link
                        href="/connexion"
                        className="text-[16px] font-medium text-[#6A6A73] transition-colors hover:text-black"
                    >
                        Se connecter
                    </Link>
                </div>

            </div>
        </header>
    );
}