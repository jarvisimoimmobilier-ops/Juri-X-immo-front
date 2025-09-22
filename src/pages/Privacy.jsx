import React from "react";
import Header from "../components/landing-page/Header";
import Footer from "../components/landing-page/Footer";

const Privacy = () => {
  return (
    <div className="bg-white text-gray-800">
      <Header />

      {/* Title */}
      <section className="py-10 sm:py-12 lg:py-14 bg-gradient-to-br from-blue-50 via-white to-purple-50 border-b">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Données personnelles et confidentialité
          </h1>
          <p className="mt-3 text-sm sm:text-base text-gray-600">
            Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="py-10 sm:py-12 lg:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Sommaire */}
          <nav className="mb-8 p-4 rounded-xl bg-gray-50 border border-gray-200">
            <p className="text-sm font-semibold text-gray-700 mb-3">Sommaire</p>
            <ul className="grid sm:grid-cols-2 gap-y-2 text-sm">
              {[
                ["ARTICLE 1 : Renseignements personnels recueillis", "#art-1"],
                ["ARTICLE 2 : Consentement", "#art-2"],
                ["ARTICLE 3 : Finalités du traitement", "#art-3"],
                ["ARTICLE 4 : Divulgation", "#art-4"],
                ["ARTICLE 5 : Sécurité", "#art-5"],
                ["ARTICLE 6 : Durée de conservation", "#art-6"],
                ["ARTICLE 7 : Droits des utilisateurs", "#art-7"],
                ["ARTICLE 8 : Modifications", "#art-8"],
                ["ARTICLE 9 : Cookies", "#art-9"],
                ["ARTICLE 10 : Loi applicable et juridiction", "#art-10"],
                ["ARTICLE 11 : Changement de profil", "#art-11"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="text-blue-700 hover:text-blue-900 hover:underline">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="prose prose-gray max-w-none">
            <h2 id="art-1">ARTICLE 1 : RENSEIGNEMENTS PERSONNELS RECUEILLIS</h2>
            <p>
              Lorsque vous utilisez <strong>Juri-X-Immo</strong>, nous collectons les
              renseignements personnels que vous nous fournissez (nom, adresse
              électronique, informations saisies pour obtenir une assistance juridique).
              Nous collectons également des données d’usage (questions posées, fonctionnalités
              utilisées, journaux techniques).
            </p>

            <h2 id="art-2">ARTICLE 2 : CONSENTEMENT</h2>
            <p>
              En utilisant Juri-X-Immo, vous consentez à la collecte et au traitement de
              vos données personnelles conformément à la législation en vigueur et à la
              présente politique de confidentialité.
            </p>

            <h2 id="art-3">ARTICLE 3 : FINALITÉS DU TRAITEMENT</h2>
            <ul>
              <li>
                <strong>Fournir nos services&nbsp;:</strong> vous assister dans vos démarches
                juridiques en répondant à vos questions.
              </li>
              <li>
                <strong>Améliorer nos services&nbsp;:</strong> analyser l’usage de Juri-X-Immo
                pour améliorer les fonctionnalités et en développer de nouvelles.
              </li>
              <li>
                <strong>Personnaliser votre expérience&nbsp;:</strong> adapter nos réponses à
                vos besoins.
              </li>
            </ul>

            <h2 id="art-4">ARTICLE 4 : DIVULGATION</h2>
            <p>
              Nous ne partageons vos données personnelles avec des tiers que dans les cas
              suivants :
            </p>
            <ul>
              <li>
                <strong>Prestataires de services&nbsp;:</strong> hébergeurs, fournisseurs cloud
                ou outils nécessaires à la fourniture du service, soumis à des obligations de
                confidentialité.
              </li>
              <li>
                <strong>Obligation légale&nbsp;:</strong> pour répondre à une demande légale
                ou faire valoir nos droits.
              </li>
            </ul>

            <h2 id="art-5">ARTICLE 5 : SÉCURITÉ</h2>
            <p>
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées
              pour protéger vos données personnelles contre l’accès non autorisé, la perte,
              l’altération ou la destruction (contrôles d’accès, chiffrement, sauvegardes,
              journalisation et mises à jour régulières).
            </p>

            <h2 id="art-6">ARTICLE 6 : DURÉE DE CONSERVATION</h2>
            <p>
              Les données sont conservées pendant la durée nécessaire aux finalités pour
              lesquelles elles ont été collectées, puis archivées/supprimées conformément
              aux délais légaux applicables.
            </p>

            <h2 id="art-7">ARTICLE 7 : DROITS DES UTILISATEURS</h2>
            <p>
              Conformément à la réglementation, vous disposez des droits d’accès, de
              rectification, d’effacement, d’opposition, de limitation et de portabilité.
              Pour exercer ces droits, contactez&nbsp;:
              {" "}
              <a href="mailto:support@juriximmo.ai">support@juriximmo.ai</a>.
            </p>

            <h2 id="art-8">ARTICLE 8 : MODIFICATIONS</h2>
            <p>
              Nous pouvons modifier la présente politique à tout moment. Toute modification
              sera publiée sur notre site. En continuant à utiliser nos services après
              l’entrée en vigueur des modifications, vous acceptez la version mise à jour.
            </p>

            <h2 id="art-9">ARTICLE 9 : COOKIES</h2>
            <p>
              Nous utilisons des cookies pour améliorer votre expérience utilisateur
              (mesures d’audience, sécurité, personnalisation). Pour en savoir plus,
              veuillez consulter notre politique de cookies. Vous pouvez configurer votre
              navigateur pour refuser les cookies ; certaines fonctionnalités peuvent alors
              être limitées.
            </p>

            <h2 id="art-10">ARTICLE 10 : LOI APPLICABLE ET JURIDICTION</h2>
            <p>
              La présente politique est régie par le <strong>droit français</strong> et
              conforme au <strong>RGPD</strong>. Tout litige relatif à son interprétation
              ou à son exécution sera soumis à la compétence des <strong>tribunaux de Paris</strong>.
            </p>

            <h2 id="art-11">ARTICLE 11 : CHANGEMENT DE PROFIL</h2>
            <p>
              Les profils <strong>Albert</strong> et <strong>René</strong> sont associés à des
              tarifs distincts. Tout changement de profil peut entraîner l’application des
              tarifs du nouveau profil et/ou la réinitialisation du solde associé. Vérifiez
              vos informations avant confirmation. Pour toute question, contactez le support.
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

export default Privacy;
