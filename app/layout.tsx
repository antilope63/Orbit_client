import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "./globals.css";

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
            <body className="min-h-screen bg-[#fafafc] flex flex-col">
                <Navbar />
                <div className="flex flex-1 flex-col pt-[73px]">
                    {children}
                </div>
                <Footer />
            </body>
        </html>
    );
}
