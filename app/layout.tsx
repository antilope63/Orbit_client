import type { Metadata } from "next";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
    title: "Orbit",
    description: "Orbit app",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="fr">
            <body className="bg-[#fafafc]">
                <Navbar />
                <main className="pt-[65px]">
                    {children}
                </main>
            </body>
        </html>
    );
}