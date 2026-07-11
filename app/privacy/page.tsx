/* eslint-disable react/no-unescaped-entities */
"use client"

export default function ConfidentialitePage() {
    return (
        <main className="bg-[#f5f5f8] min-h-screen flex justify-center items-start pt-24 pb-16 px-4">
        <div className="bg-white rounded-2xl shadow-sm w-full max-w-3xl p-10">

            <div className="mb-8 pb-6 border-b border-gray-100">
            <h2 className="text-2xl font-bold text-black">Politique de confidentialité</h2>
            <p className="text-sm text-gray-400 mt-1">Dernière mise à jour : 21 avril 2026</p>
            </div>

            <div className="space-y-8 text-sm leading-relaxed text-gray-600">

            <section>
                <h3 className="font-semibold text-sm text-black mb-2">Préambule</h3>
                <p>La présente Politique de confidentialité décrit la manière dont <strong className="font-medium text-black">Orbit</strong> collecte, utilise et protège les données personnelles de ses utilisateurs, conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.</p>
            </section>

            <section>
                <h3 className="font-semibold text-sm text-black mb-2">Responsable du traitement</h3>
                <p>Le responsable du traitement des données est la société <strong className="font-medium text-black">Orbit</strong>, immatriculée au RCS sous le numéro <strong className="font-medium text-black">09486572</strong>.</p>
                <p className="mt-2">Siège social : 20 route de cala rossa<br />Contact : <a href="mailto:orbit@gmail.com" className="text-[#8C1111] hover:underline">orbit@gmail.com</a></p>
            </section>

            <section>
                <h3 className="font-semibold text-sm text-black mb-2">Données collectées</h3>
                <p>Dans le cadre de l'utilisation de l'application Orbit, les données suivantes peuvent être collectées :</p>
                <ul className="mt-2 space-y-1 pl-4 border-l-2 border-gray-100">
                <li>Données d'identification (nom, prénom, adresse e-mail) ;</li>
                <li>Données de paiement (informations bancaires traitées par un prestataire tiers certifié) ;</li>
                <li>Données de transaction (articles scannés, montants, dates d'achat, magasin concerné) ;</li>
                <li>Données techniques (identifiant du téléphone, version de l'application, logs de connexion).</li>
                </ul>
            </section>

            <section>
                <h3 className="font-semibold text-sm text-black mb-2">Finalités du traitement</h3>
                <p>Les données collectées sont utilisées pour :</p>
                <ul className="mt-2 space-y-1 pl-4 border-l-2 border-gray-100">
                <li>Permettre la création et la gestion du compte utilisateur ;</li>
                <li>Assurer le bon fonctionnement du service (scan NFC, débit automatique, vérification RFID) ;</li>
                <li>Traiter les paiements et gérer les éventuels litiges ;</li>
                <li>Améliorer le service et l'expérience utilisateur ;</li>
                <li>Répondre aux obligations légales et comptables.</li>
                </ul>
            </section>

            <section>
                <h3 className="font-semibold text-sm text-black mb-2">Base légale</h3>
                <p>Le traitement des données repose sur l'exécution du contrat liant l'utilisateur à Orbit (CGU), le respect d'obligations légales (facturation, lutte contre la fraude) et, le cas échéant, le consentement explicite de l'utilisateur.</p>
            </section>

            <section>
                <h3 className="font-semibold text-sm text-black mb-2">Destinataires des données</h3>
                <p>Les données personnelles peuvent être partagées avec :</p>
                <ul className="mt-2 space-y-1 pl-4 border-l-2 border-gray-100">
                <li>Les magasins partenaires dans la mesure nécessaire au traitement de la transaction ;</li>
                <li>Les prestataires de paiement pour l'exécution des paiements ;</li>
                <li>L'hébergeur technique de l'application ;</li>
                <li>Les autorités compétentes en cas d'obligation légale.</li>
                </ul>
                <p className="mt-2">Orbit ne revend aucune donnée personnelle à des tiers à des fins commerciales.</p>
            </section>

            <section>
                <h3 className="font-semibold text-sm text-black mb-2">Durée de conservation</h3>
                <p>Les données de compte sont conservées tant que l'utilisateur dispose d'un compte actif. Les données de transaction sont conservées pendant une durée de 10 ans, conformément aux obligations légales en matière comptable et fiscale.</p>
                <p className="mt-2">À la suppression du compte, les données personnelles sont anonymisées ou supprimées, sauf obligation légale de conservation.</p>
            </section>

            <section>
                <h3 className="font-semibold text-sm text-black mb-2">Sécurité des données</h3>
                <p>Orbit met en œuvre les mesures techniques et organisationnelles appropriées pour garantir la sécurité, la confidentialité et l'intégrité des données personnelles (chiffrement, contrôle d'accès, sauvegardes).</p>
                <p className="mt-2">Les données bancaires ne sont pas stockées directement par Orbit : elles sont traitées exclusivement par un prestataire de paiement certifié PCI-DSS.</p>
            </section>

            <section>
                <h3 className="font-semibold text-sm text-black mb-2">Droits de l'utilisateur</h3>
                <p>Conformément au RGPD, l'utilisateur dispose d'un droit d'accès, de rectification, d'effacement (« droit à l'oubli »), de limitation du traitement, de portabilité des données et d'opposition au traitement.</p>
                <p className="mt-2">Ces droits peuvent être exercés en contactant Orbit à l'adresse <a href="mailto:orbit@gmail.com" className="text-[#8C1111] hover:underline">orbit@gmail.com</a>. L'utilisateur dispose également du droit d'introduire une réclamation auprès de la CNIL (<a href="https://www.cnil.fr" target="_blank" className="text-[#8C1111] hover:underline">www.cnil.fr</a>).</p>
            </section>

            <section>
                <h3 className="font-semibold text-sm text-black mb-2">Cookies et traceurs</h3>
                <p>L'application peut utiliser des cookies ou identifiants techniques nécessaires à son bon fonctionnement. L'utilisateur peut à tout moment paramétrer ses préférences depuis les réglages de son appareil ou de l'application.</p>
            </section>

            <section>
                <h3 className="font-semibold text-sm text-black mb-2">Modifications</h3>
                <p>Orbit se réserve le droit de modifier la présente Politique de confidentialité à tout moment. Les utilisateurs seront informés de toute modification substantielle via l'application ou par e-mail.</p>
            </section>

            {/* Mentions légales */}
            <div className="pt-8 mt-8 border-t border-gray-100">
                <h2 className="text-xl font-bold text-black mb-1">Mentions légales</h2>
                <p className="text-sm text-gray-400 mb-6">Dernière mise à jour : 21 avril 2026</p>

                <div className="space-y-8">
                <section>
                    <h3 className="font-semibold text-sm text-black mb-2">Éditeur de l'application</h3>
                    <p>L'application <strong className="font-medium text-black">Orbit</strong> est éditée par la société Orbit, immatriculée au RCS sous le numéro <strong className="font-medium text-black">09486572</strong>.</p>
                    <p className="mt-2">Siège social : 20 route de cala rossa<br />Contact : <a href="mailto:orbit@gmail.com" className="text-[#8C1111] hover:underline">orbit@gmail.com</a></p>
                </section>

                <section>
                    <h3 className="font-semibold text-sm text-black mb-2">Hébergement</h3>
                    <p>L'application est hébergée par un prestataire tiers. Pour toute question relative à l'hébergement, contacter <a href="mailto:orbit@gmail.com" className="text-[#8C1111] hover:underline">orbit@gmail.com</a>.</p>
                </section>

                <section>
                    <h3 className="font-semibold text-sm text-black mb-2">Propriété intellectuelle</h3>
                    <p>L'ensemble des contenus présents sur l'application (textes, images, logos, graphismes) sont la propriété exclusive d'Orbit et sont protégés par les lois relatives à la propriété intellectuelle. Toute reproduction sans autorisation préalable est interdite.</p>
                </section>

                <section>
                    <h3 className="font-semibold text-sm text-black mb-2">Contact</h3>
                    <p>Pour toute question relative aux présentes mentions légales : <a href="mailto:orbit@gmail.com" className="text-[#8C1111] hover:underline">orbit@gmail.com</a>.</p>
                </section>
                </div>
            </div>

            </div>
        </div>
        </main>
    )
}