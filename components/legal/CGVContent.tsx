/* eslint-disable react/no-unescaped-entities */

export default function CGVContent() {
  return (
    <>
      <div className="mb-8 pb-6 border-b border-gray-100">
        <h2 className="text-2xl font-bold text-black">Conditions Générales de Vente</h2>
        <p className="text-sm text-gray-400 mt-1">Dernière mise à jour : 21 avril 2026</p>
      </div>

      <div className="space-y-8 text-sm leading-relaxed text-gray-600">

        <section>
          <h3 className="font-semibold text-sm text-black mb-2">Objet</h3>
          <p>Les présentes Conditions Générales de Vente (CGV) régissent les ventes réalisées via l'application <strong className="font-medium text-black">Orbit</strong>, dans le cadre d'achats effectués en magasins partenaires à l'aide de la technologie NFC et du système de débit automatique RFID.</p>
          <p className="mt-2">Toute utilisation du service vaut acceptation sans réserve des présentes CGV par l'utilisateur.</p>
        </section>

        <section>
          <h3 className="font-semibold text-sm text-black mb-2">Produits</h3>
          <p>Les produits proposés à la vente sont ceux disponibles dans les magasins partenaires d'Orbit au moment de la visite du client. Les caractéristiques, prix et disponibilités des articles sont définis par chaque magasin partenaire.</p>
          <p className="mt-2">Orbit agit en tant qu'intermédiaire technique et n'est pas vendeur des produits. Le vendeur reste le magasin dans lequel l'achat est effectué.</p>
        </section>

        <section>
          <h3 className="font-semibold text-sm text-black mb-2">Prix</h3>
          <p>Les prix des articles sont affichés en euros, toutes taxes comprises (TTC). Le prix appliqué est celui affiché en magasin au moment du scan de l'article via NFC.</p>
          <p className="mt-2">Orbit ne saurait être tenu responsable d'une erreur d'affichage ou de tarification relevant du magasin partenaire.</p>
        </section>

        <section>
          <h3 className="font-semibold text-sm text-black mb-2">Commande et paiement</h3>
          <p>L'utilisateur constitue son panier en scannant les articles choisis via la technologie NFC. Le passage dans la zone de paiement déclenche automatiquement le débit du montant total sur la carte bancaire enregistrée dans l'application.</p>
          <p className="mt-2">Les transactions sont sécurisées et traitées via un prestataire de paiement tiers certifié PCI-DSS. Une notification de confirmation est envoyée après chaque débit.</p>
        </section>

        <section>
          <h3 className="font-semibold text-sm text-black mb-2">Preuve d'achat</h3>
          <p>Chaque transaction génère un reçu électronique consultable dans l'application Orbit. Ce reçu fait office de preuve d'achat et peut être présenté en magasin en cas de retour, d'échange ou de réclamation.</p>
        </section>

        <section>
          <h3 className="font-semibold text-sm text-black mb-2">Retours et remboursements</h3>
          <p>Les achats étant réalisés en magasin physique, le droit de rétractation prévu pour la vente à distance ne s'applique pas (article L221-28 du Code de la consommation).</p>
          <p className="mt-2">Les conditions de retour, d'échange ou de remboursement relèvent de la politique commerciale propre à chaque magasin partenaire. L'utilisateur est invité à se rapprocher directement du magasin concerné.</p>
        </section>

        <section>
          <h3 className="font-semibold text-sm text-black mb-2">Garanties légales</h3>
          <p>Les produits vendus via Orbit bénéficient de la garantie légale de conformité (articles L217-4 et suivants du Code de la consommation) et de la garantie contre les vices cachés (articles 1641 et suivants du Code civil).</p>
          <p className="mt-2">Ces garanties sont mises en œuvre directement par le magasin partenaire vendeur du produit.</p>
        </section>

        <section>
          <h3 className="font-semibold text-sm text-black mb-2">Responsabilité</h3>
          <p>Orbit ne saurait être tenu responsable de la qualité, de la conformité ou de la disponibilité des produits vendus par ses partenaires. Sa responsabilité est limitée au bon fonctionnement du service technique de scan et de paiement.</p>
          <p className="mt-2">En cas de dysfonctionnement imputable à l'application, l'utilisateur peut contacter le support à l'adresse <a href="mailto:orbit@gmail.com" className="text-[#8C1111] hover:underline">orbit@gmail.com</a>.</p>
        </section>

        <section>
          <h3 className="font-semibold text-sm text-black mb-2">Litiges et droit applicable</h3>
          <p>Les présentes CGV sont soumises au droit français. En cas de litige, une solution amiable sera recherchée en priorité. À défaut, les tribunaux français seront seuls compétents.</p>
          <p className="mt-2">Conformément à l'article L612-1 du Code de la consommation, l'utilisateur peut recourir gratuitement à un médiateur de la consommation.</p>
        </section>

      </div>
    </>
  )
}