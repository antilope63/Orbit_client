/* eslint-disable react/no-unescaped-entities */
"use client"

export default function ConditionsPage() {
  return (
    <main className="bg-[#f5f5f8] min-h-screen flex justify-center items-start pt-24 pb-16 px-4">
      <div className="bg-white rounded-2xl shadow-sm w-full max-w-3xl p-10">

        <div className="mb-8 pb-6 border-b border-gray-100">
          <h2 className="text-2xl font-bold text-black">Conditions générales d'utilisation</h2>
          <p className="text-sm text-gray-400 mt-1">Dernière mise à jour : 21 avril 2026</p>
        </div>

        <div className="space-y-8 text-sm leading-relaxed text-gray-600">

          <section>
            <h3 className="font-semibold text-sm text-black mb-2">1. Objet</h3>
            <p>Les présentes Conditions Générales d'Utilisation (ci-après « CGU ») ont pour objet de définir les modalités et conditions d'utilisation de l'application <strong className="font-medium text-black">Orbit</strong> (ci-après « l'Application »), éditée par la société Orbit.</p>
            <p className="mt-2">Orbit propose à ses utilisateurs une solution permettant de scanner via la technologie NFC les articles sélectionnés en magasin partenaire, de constituer un panier numérique, puis d'être débité automatiquement à la sortie du magasin grâce à la détection RFID.</p>
          </section>

          <section>
            <h3 className="font-semibold text-sm text-black mb-2">2. Acceptation des CGU</h3>
            <p>L'utilisation de l'Application implique l'acceptation pleine et entière des présentes CGU par l'utilisateur. En créant un compte, l'utilisateur reconnaît avoir lu, compris et accepté sans réserve les présentes conditions.</p>
            <p className="mt-2">Orbit se réserve le droit de modifier les CGU à tout moment. Les utilisateurs seront informés de toute modification substantielle.</p>
          </section>

          <section>
            <h3 className="font-semibold text-sm text-black mb-2">3. Inscription et compte utilisateur</h3>
            <p>L'accès aux fonctionnalités d'Orbit nécessite la création d'un compte utilisateur. L'utilisateur doit être âgé d'au moins 18 ans et disposer de la capacité juridique pour contracter.</p>
            <p className="mt-2">L'utilisateur s'engage à fournir des informations exactes, complètes et à jour. Il est seul responsable de la confidentialité de ses identifiants et de toute activité effectuée depuis son compte.</p>
          </section>

          <section>
            <h3 className="font-semibold text-sm text-black mb-2">4. Fonctionnement du service</h3>
            <p>L'utilisation d'Orbit en magasin partenaire se déroule en plusieurs étapes :</p>
            <ul className="mt-2 space-y-1 pl-4 border-l-2 border-gray-100">
              <li>Scan des articles via NFC avec le téléphone de l'utilisateur ;</li>
              <li>Ajout ou suppression des articles dans le panier numérique ;</li>
              <li>Passage dans la zone de paiement déclenchant le débit automatique ;</li>
              <li>Passage dans la zone de vérification RFID à la sortie du magasin.</li>
            </ul>
            <p className="mt-2">Tout article non scanné ou non payé détecté en zone de vérification déclenchera une alarme et pourra entraîner l'intervention du personnel du magasin.</p>
          </section>

          <section>
            <h3 className="font-semibold text-sm text-black mb-2">5. Paiement automatique</h3>
            <p>L'utilisateur doit enregistrer une carte bancaire valide dans l'Application pour pouvoir utiliser le service. En acceptant les présentes CGU, l'utilisateur autorise expressément Orbit à prélever automatiquement le montant de son panier sur la carte enregistrée lors du passage dans la zone de paiement.</p>
            <p className="mt-2">Une notification confirmant le débit est envoyée à l'utilisateur après chaque achat. Le traitement des paiements est assuré par un prestataire tiers certifié (Stripe). Orbit ne stocke pas directement les données bancaires complètes.</p>
          </section>

          <section>
            <h3 className="font-semibold text-sm text-black mb-2">6. Droit de rétractation et retours</h3>
            <p>Conformément à l'article L221-28 du Code de la consommation, le droit de rétractation ne s'applique pas aux achats effectués en magasin physique. Les conditions de retour, d'échange ou de remboursement relèvent de la politique commerciale du magasin partenaire dans lequel l'achat a été réalisé.</p>
            <p className="mt-2">En cas de litige sur une transaction, l'utilisateur est invité à se rapprocher en premier lieu du magasin concerné, muni de la preuve d'achat disponible dans l'Application.</p>
          </section>

          <section>
            <h3 className="font-semibold text-sm text-black mb-2">7. Responsabilité de l'utilisateur</h3>
            <p>L'utilisateur s'engage à :</p>
            <ul className="mt-2 space-y-1 pl-4 border-l-2 border-gray-100">
              <li>Scanner l'ensemble des articles qu'il souhaite emporter ;</li>
              <li>Ne pas tenter de contourner ou altérer les dispositifs NFC et RFID ;</li>
              <li>Disposer d'un téléphone fonctionnel équipé de la technologie NFC ;</li>
              <li>S'assurer que sa carte bancaire enregistrée est valide et approvisionnée.</li>
            </ul>
            <p className="mt-2">Toute tentative de fraude, de vol ou d'utilisation détournée du service pourra entraîner la suspension immédiate du compte et des poursuites.</p>
          </section>

          <section>
            <h3 className="font-semibold text-sm text-black mb-2">8. Responsabilité d'Orbit</h3>
            <p>Orbit s'engage à mettre en œuvre les moyens nécessaires pour garantir la disponibilité et la sécurité du service. Toutefois, Orbit ne saurait être tenu responsable :</p>
            <ul className="mt-2 space-y-1 pl-4 border-l-2 border-gray-100">
              <li>D'une interruption temporaire du service pour maintenance ou cas de force majeure ;</li>
              <li>D'un dysfonctionnement lié à l'équipement de l'utilisateur (téléphone non compatible, batterie déchargée, etc.) ;</li>
              <li>De la qualité des produits vendus par les magasins partenaires ;</li>
              <li>Des litiges entre l'utilisateur et le magasin partenaire.</li>
            </ul>
          </section>

          <section>
            <h3 className="font-semibold text-sm text-black mb-2">9. Propriété intellectuelle</h3>
            <p>L'ensemble des éléments de l'Application, notamment les textes, images, graphismes, logos, icônes, sons et logiciels, sont la propriété exclusive d'Orbit ou de ses partenaires, et sont protégés par les lois en vigueur au titre de la propriété intellectuelle.</p>
            <p className="mt-2">Toute reproduction, représentation, modification ou adaptation, totale ou partielle, est interdite sans autorisation écrite préalable.</p>
          </section>

          <section>
            <h3 className="font-semibold text-sm text-black mb-2">10. Données personnelles</h3>
            <p>Les informations recueillies par Orbit sont traitées dans le respect du Règlement Général sur la Protection des Données (RGPD) et de la loi Informatique et Libertés.</p>
            <p className="mt-2">L'utilisateur dispose d'un droit d'accès, de rectification, de suppression, de portabilité et d'opposition concernant les données le concernant. Ces droits peuvent être exercés à l'adresse <a href="mailto:orbit@gmail.com" className="text-[#8C1111] hover:underline">orbit@gmail.com</a>.</p>
            <p className="mt-2">Pour plus d'informations, l'utilisateur est invité à consulter la <a href="/confidentialite" className="text-[#8C1111] hover:underline">Politique de confidentialité</a>.</p>
          </section>

          <section>
            <h3 className="font-semibold text-sm text-black mb-2">11. Suspension et résiliation</h3>
            <p>L'utilisateur peut supprimer son compte à tout moment depuis les paramètres de l'Application. Orbit se réserve le droit de suspendre ou résilier un compte en cas de manquement aux présentes CGU, notamment en cas de fraude, de tentative de contournement du système ou de comportement frauduleux en magasin.</p>
          </section>

          <section>
            <h3 className="font-semibold text-sm text-black mb-2">12. Droit applicable et juridiction</h3>
            <p>Les présentes CGU sont soumises au droit français. En cas de litige, et à défaut de résolution amiable, les tribunaux français seront seuls compétents.</p>
            <p className="mt-2">Conformément à l'article L612-1 du Code de la consommation, l'utilisateur consommateur peut recourir gratuitement à un médiateur de la consommation en vue d'une résolution amiable.</p>
          </section>

          <section>
            <h3 className="font-semibold text-sm text-black mb-2">13. Contact</h3>
            <p>Pour toute question relative aux présentes CGU, l'utilisateur peut contacter Orbit à l'adresse suivante : <a href="mailto:orbit@gmail.com" className="text-[#8C1111] hover:underline">orbit@gmail.com</a>.</p>
          </section>

        </div>
      </div>
    </main>
  )
}