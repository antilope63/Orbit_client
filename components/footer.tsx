/* eslint-disable react/no-unescaped-entities */
export default function Footer() {
    return (
        <footer className="w-full bg-white border-t border-gray-200 py-5 z-10">
            <div className="max-w-8xl mx-auto flex justify-between items-center px-6 text-sm font-regular text-[#525258]">
                <p>© 2026 Orbit. Tous droits réservés.</p>
                <div className="flex space-x-6">
                    <a href="/legal?tab=CGU" className="hover:underline">
                        Conditions d'utilisation
                    </a>
                    <a href="/legal?tab=Politique de confidentialité" className="hover:underline">
                        Politique de confidentialité
                    </a>
                </div>
            </div>
        </footer>
    );
}