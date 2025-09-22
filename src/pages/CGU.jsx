import React from "react";
import Header from "../components/landing-page/Header";
import Footer from "../components/landing-page/Footer";

const CGU = () => {
  return (
    <div className="bg-white text-gray-800">
      <Header />

      {/* Hero / Title */}
      <section className="py-10 sm:py-12 lg:py-14 bg-gradient-to-br from-blue-50 via-white to-purple-50 border-b">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Conditions Générales d’Utilisation
          </h1>
          <p className="mt-3 text-sm sm:text-base text-gray-600">
            Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="py-10 sm:py-12 lg:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Local table of contents */}
          <nav className="mb-8 p-4 rounded-xl bg-gray-50 border border-gray-200">
            <p className="text-sm font-semibold text-gray-700 mb-3">Sommaire</p>
            <ul className="grid sm:grid-cols-2 gap-y-2 text-sm">
              {[
                ["Article 1. Préambule", "#article-1"],
                ["Article 2. Objet du service", "#article-2"],
                ["Article 3. Conditions d’utilisation", "#article-3"],
                ["Article 4. Modification des CGU", "#article-4"],
                ["Article 5. Résiliation", "#article-5"],
                ["Article 6. Droit applicable et juridiction", "#article-6"],
                ["Article 7. Politique de confidentialité", "#article-7"],
                ["Article 8. Collecte et traitement des données", "#article-8"],
                ["Article 9. Droits des utilisateurs", "#article-9"],
                ["Article 10. Cookies", "#article-10"],
                ["Article 11. Changement de profil", "#article-11"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-blue-700 hover:text-blue-900 hover:underline"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="prose prose-gray max-w-none">
            {/* Article 1 */}
            <h2 id="article-1">Article 1. Préambule</h2>
            <p>
              Les présentes Conditions Générales d’Utilisation (CGU) régissent
              les conditions d’utilisation du service <strong>Juri-X-Immo</strong>, un
              assistant juridique en ligne spécialisé dans l’immobilier, mis à
              disposition par <strong>My EXPRESS</strong>. En utilisant Juri-X-Immo,
              vous acceptez sans réserve les présentes CGU.
            </p>

            {/* Article 2 */}
            <h2 id="article-2">Article 2. Objet du service</h2>
            <p>
              Juri-X-Immo est un outil d’orientation et d’assistance juridique
              conçu pour fournir des informations générales ou spécifiques sur le
              droit immobilier. Il ne constitue pas un conseil juridique au sens
              strict.
            </p>

            {/* Article 3 */}
            <h2 id="article-3">Article 3. Conditions d’utilisation</h2>
            <h3>3.1. Création de compte</h3>
            <p>
              Pour utiliser Juri-X-Immo, vous devez créer un compte en
              fournissant des informations personnelles exactes et complètes.
            </p>

            <h3>3.2. Utilisation conforme</h3>
            <p>
              Vous vous engagez à utiliser Juri-X-Immo conformément à la
              réglementation en vigueur et aux présentes CGU. Toute utilisation
              à des fins illégales ou contraires aux bonnes mœurs est
              strictement interdite.
            </p>

            <h3>3.3. Données personnelles</h3>
            <p>
              Les données personnelles que vous nous fournissez sont traitées
              conformément à la réglementation applicable et à notre politique de
              confidentialité.
            </p>

            <h3>3.4. Propriété intellectuelle</h3>
            <p>
              Tous les contenus de Juri-X-Immo (logiciels, bases de données,
              textes, images, modèles de documents, etc.) sont protégés par les
              droits de propriété intellectuelle. Ils constituent la propriété
              exclusive de Juri-X-Immo ou de ses concédants. Vous disposez d’un
              droit d’utilisation personnel et non exclusif. Toute
              reproduction, modification, diffusion ou utilisation à des fins
              commerciales sans autorisation écrite préalable est interdite.
            </p>
            <p>
              Les éléments du site (structure, arborescence, contenus textuels,
              graphiques, iconographiques, audiovisuels, etc.) sont protégés par
              le droit d’auteur (articles L.111-1 et s. du CPI). Toute
              reproduction, représentation, adaptation ou traduction, partielle
              ou intégrale, sans autorisation écrite de Juri-X-Immo est
              interdite et peut constituer une contrefaçon (articles L.335-2 et
              s. du CPI).
            </p>
            <p>
              Les bases de données figurant sur le site sont protégées par les
              dispositions relatives à la protection juridique des bases de
              données (articles L.341-1 et s. du CPI).
            </p>
            <p>
              Les marques, logos et signes distinctifs présents sur le site
              appartiennent à Juri-X-Immo ou à ses partenaires et sont protégés
              par le droit des marques (articles L.711-1 et s. du CPI). Toute
              utilisation non autorisée peut engager la responsabilité de son
              auteur (articles L.716-1 et s. du CPI).
            </p>

            <h3>3.5. Responsabilité</h3>
            <p>
              <strong>Informations non exhaustives.</strong> Les informations
              communiquées par Juri-X-Immo sont fournies à titre indicatif et
              n’ont pas vocation à se substituer à l’avis d’un professionnel du
              droit. En cas de doute ou de situation particulière, vérifiez
              l’exactitude des informations auprès d’un juriste compétent.
            </p>
            <p>
              Juri-X-Immo, chatbot conversationnel d’IA, s’appuie sur des
              sources juridiques (notamment la législation en vigueur) pour
              proposer des réponses et des pistes d’action selon la nature de
              votre demande. Certaines réponses peuvent être incomplètes ou
              inadaptées à un cas d’espèce. Avant toute décision, il est
              recommandé de consulter un avocat ou un juriste spécialisé.
              Juri-X-Immo se dégage de toute responsabilité en cas d’utilisation
              inexacte ou erronée des informations fournies.
            </p>
            <p>
              <strong>Limitation de responsabilité.</strong> Notre
              responsabilité est limitée aux dommages directs et prévisibles
              résultant d’une faute prouvée qui nous serait imputable. Nous ne
              saurions être tenus responsables des dommages indirects (perte de
              profits, de clientèle, préjudice d’image, etc.).
            </p>
            <p>
              <strong>Absence de garantie.</strong> Juri-X-Immo est fourni “en
              l’état”, sans garantie expresse ou implicite.
            </p>

            {/* Article 4 */}
            <h2 id="article-4">Article 4. Modification des CGU</h2>
            <p>
              Nous nous réservons le droit de modifier les présentes CGU à tout
              moment. Toute modification sera publiée sur notre site et, le cas
              échéant, notifiée par email. En continuant à utiliser nos
              services après l’entrée en vigueur des modifications, vous
              acceptez les nouvelles CGU.
            </p>

            {/* Article 5 */}
            <h2 id="article-5">Article 5. Résiliation</h2>
            <p>
              Vous pouvez résilier votre compte à tout moment en nous écrivant
              à <a href="mailto:support@juriximmo.ai">support@juriximmo.ai</a>.
              Nous pouvons également résilier votre compte en cas de violation
              des présentes CGU ou d’inactivité prolongée.
            </p>

            {/* Article 6 */}
            <h2 id="article-6">Article 6. Droit applicable et juridiction</h2>
            <p>
              Les présentes CGU sont régies par le <strong>droit français</strong>. Tout
              litige relatif à leur interprétation ou exécution sera soumis à la
              compétence exclusive des <strong>tribunaux de Paris</strong>.
            </p>

            {/* Article 7 */}
            <h2 id="article-7">Article 7. Politique de confidentialité</h2>
            <p>
              Veuillez consulter notre politique de confidentialité pour en
              savoir plus sur la collecte, l’utilisation et la protection de vos
              données personnelles.
            </p>

            {/* Article 8 */}
            <h2 id="article-8">Article 8. Collecte et traitement des données</h2>
            <p>
              Nous collectons, lors de la création de compte et de l’utilisation
              de nos services, les données suivantes : nom, adresse électronique,
              adresse IP et données d’usage de la plateforme. Elles servent à
              fournir nos services, améliorer l’expérience, personnaliser les
              contenus et réaliser des analyses statistiques.
            </p>

            {/* Article 9 */}
            <h2 id="article-9">Article 9. Droits des utilisateurs</h2>
            <p>
              Conformément au RGPD, vous disposez d’un droit d’accès, de
              rectification, d’effacement, de portabilité, d’opposition et de
              limitation du traitement. Pour exercer ces droits, contactez-nous
              à <a href="mailto:support@juriximmo.ai">support@juriximmo.ai</a>.
            </p>

            {/* Article 10 */}
            <h2 id="article-10">Article 10. Cookies</h2>
            <p>
              Nous utilisons des cookies et technologies similaires pour
              améliorer votre expérience (mesure d’audience, sécurité,
              personnalisation). Vous pouvez configurer votre navigateur pour
              refuser les cookies, mais cela peut altérer certaines
              fonctionnalités.
            </p>

            {/* Article 11 */}
            <h2 id="article-11">Article 11. Changement de profil</h2>
            <p>
              Les profils <strong>Albert</strong> et <strong>René</strong> sont associés à
              des tarifs distincts. Tout changement de profil entraîne
              l’application des tarifs du nouveau profil. Vérifiez vos
              informations avant de confirmer tout changement. Pour plus de
              détails, consultez nos conditions tarifaires ou contactez le
              support.
            </p>
          </div>

          {/* Back to top */}
          <div className="mt-10">
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-700 hover:text-blue-900 hover:underline"
            >
              ↑ Haut de page
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CGU;
