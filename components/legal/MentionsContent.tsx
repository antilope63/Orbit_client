/* eslint-disable react/no-unescaped-entities */

export default function PrivacyContent() {
    return (
        <>
        <div className="mb-8 pb-6 border-b border-gray-100">
            <h2 className="text-2xl font-bold text-black">Mentions légales</h2>
            <p className="text-sm text-gray-400 mt-1">Dernière mise à jour : 21 avril 2026</p>
        </div>

        
        <div className="space-y-6 text-gray-800 text-sm leading-relaxed">
            <section>
                <h3 className="font-semibold text-base mb-1">Éditeur du site</h3>
                <p>
                    Le présent site est édité par <strong>Orbit</strong>, entreprise immatriculée au Registre du Commerce et des Sociétés sous le numéro <strong>09486572</strong>.<br />
                    Siège social : 20 route de cala rossa<br />
                    Email de contact : <a href="mailto:orbit@gmail.com" className="text-[#8c1111] hover:underline">orbit@gmail.com</a><br />
                    Directeur de la publication : Goncalves Baptiste
                </p>
                </section>

                <section>
                <h3 className="font-semibold text-base mb-1">Hébergement</h3>
                <p>
                    Le site est hébergé par : <strong>Hostinger</strong><br />
                    Adresse : <a href="https://hostinger.com" target="_blank" className="text-[#8c1111] hover:underline">https://hostinger.com</a><br />
                    Site web : <a href="https://takeitgoout.com" target="_blank" className="text-[#8c1111] hover:underline">https://takeitgoout.com</a><br />
                    Téléphone : 06 04 65 35 49
                </p>
                </section>

                <section>
                <h3 className="font-semibold text-base mb-1">Propriété intellectuelle</h3>
                <p>
                    L'ensemble des éléments accessibles sur le site, notamment les textes, images, graphismes, logos, icônes, sons et logiciels, sont protégés par les lois en vigueur au titre de la propriété intellectuelle.
                </p>
                <p>
                    Toute reproduction, représentation, modification, publication ou adaptation totale ou partielle de ces éléments, quel que soit le moyen ou le procédé utilisé, est interdite sans autorisation écrite préalable de l'éditeur.
                </p>
                </section>

                <section>
                <h3 className="font-semibold text-base mb-1">Données personnelles</h3>
                <p>
                    Les informations recueillies via le site sont traitées dans le respect du Règlement Général sur la Protection des Données (RGPD).
                </p>
                <p>
                    L'utilisateur dispose d'un droit d'accès, de rectification, de suppression et d'opposition concernant les données le concernant.
                </p>
            </section>
        </div>
    </>
    )
}