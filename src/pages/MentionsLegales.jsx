import React from "react";
import Header from "../components/landing-page/Header";
import Footer from "../components/landing-page/Footer";

const MentionsLegales = () => {
  return (
    <div className="bg-white text-gray-800">
      <Header />

      {/* Title */}
      <section className="py-10 sm:py-12 lg:py-14 bg-gradient-to-br from-blue-50 via-white to-purple-50 border-b">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Mentions légales
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
                ["1. Éditeur", "#editeur"],
                ["2. Objet", "#objet"],
                ["3. Données personnelles", "#donnees"],
                ["4. Cookies", "#cookies"],
                ["5. Sécurité", "#securite"],
                ["6. Propriété intellectuelle", "#pi"],
                ["7. Responsabilité", "#responsabilite"],
                ["8. Liens hypertextes", "#liens"],
                ["9. Abonnement", "#abonnement"],
                ["10. Loi applicable", "#loi"],
                ["11. Modifications", "#modifs"],
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
            {/* 1. Éditeur */}
            <h2 id="editeur">1. Éditeur</h2>
            <p>
              <strong>Nom et forme juridique :</strong> My EXPRESS – Auto-Entreprise<br />
              <strong>Adresse :</strong> Avenue Jean Jaurès, 63400 Chamalières – France<br />
              <strong>Adresse électronique :</strong>{" "}
              <a href="mailto:support@juriximmo.ai">support@juriximmo.ai</a><br />
              <strong>Numéro de SIRET :</strong> 884 753 245
            </p>
            <h3>Hébergeur</h3>
            <p>
              <strong>DigitalOcean, LLC</strong><br />
              Siège social (USA) : 101 Avenue of the Americas, New York, NY 10013, USA<br />
              Entité européenne (Pays-Bas) : ZEKERINSTRAAT 17A, 1014 Amsterdam, Pays-Bas<br />
              Site web :{" "}
              <a href="https://www.digitalocean.com/" target="_blank" rel="noreferrer">
                https://www.digitalocean.com/
              </a><br />
              Téléphone (général) : +1 888 890 6714<br />
              E-mail confidentialité :{" "}
              <a href="mailto:privacy@digitalocean.com">privacy@digitalocean.com</a>
            </p>

            {/* 2. Objet */}
            <h2 id="objet">2. Objet</h2>
            <p>
              <strong>Juri-X-Immo</strong> est un service en ligne d’orientation et
              d’assistance juridique, basé sur l’intelligence artificielle et accessible
              par abonnement. Il fournit des informations légales à titre indicatif,
              générées à partir d’une analyse de données juridiques. Ces informations ne
              constituent <strong>pas</strong> un avis juridique spécialisé. Il est
              recommandé de consulter un avocat pour toute question spécifique.
            </p>

            {/* 3. Données personnelles */}
            <h2 id="donnees">3. Données personnelles</h2>
            <p>
              Lors de votre inscription et de l’utilisation de Juri-X-Immo, nous collectons
              notamment : votre adresse IP, les questions posées, documents téléversés,
              adresse électronique, mode de paiement et informations techniques d’usage.
              Ces données sont traitées conformément à la loi Informatique & Libertés et au
              RGPD. Elles servent à :
            </p>
            <ul>
              <li>fournir le service (gestion d’abonnement, réponses, support) ;</li>
              <li>améliorer nos algorithmes et développer des fonctionnalités ;</li>
              <li>personnaliser l’expérience (réponses/suggestions) ;</li>
              <li>assurer la sécurité et prévenir la fraude.</li>
            </ul>
            <p>
              Vous disposez de droits d’accès, rectification, effacement, limitation,
              opposition et portabilité. Pour exercer vos droits :{" "}
              <a href="mailto:support@juriximmo.ai">support@juriximmo.ai</a>.
            </p>

            {/* 4. Cookies */}
            <h2 id="cookies">4. Cookies</h2>
            <p>
              Juri-X-Immo utilise des cookies/traceurs pour améliorer l’expérience
              (préférences, mesure d’audience, personnalisation, éventuellement publicité).
              Vous pouvez configurer votre navigateur pour les refuser ; certaines
              fonctionnalités pourraient alors être limitées.
            </p>

            {/* 5. Sécurité */}
            <h2 id="securite">5. Sécurité</h2>
            <p>
              Nous mettons en œuvre des mesures techniques et organisationnelles adaptées
              (chiffrement, contrôles d’accès, sauvegardes, journalisation, mises à jour)
              pour garantir la sécurité et la confidentialité de vos données.
            </p>

            {/* 6. Propriété intellectuelle */}
            <h2 id="pi">6. Propriété intellectuelle</h2>
            <p>
              Tous les éléments constituant Juri-X-Immo (textes, images, logos, marques,
              logiciels, bases de données, etc.) sont protégés par la propriété
              intellectuelle. Toute reproduction, représentation, modification, publication
              ou adaptation, totale ou partielle, est interdite sans autorisation écrite
              préalable.
            </p>
            <p>
              Les éléments du site sont protégés par le droit d’auteur (CPI, art. L.111-1
              et s.) ; toute reproduction ou adaptation non autorisée peut constituer une
              contrefaçon (CPI, art. L.335-2 et s.). Les bases de données sont protégées
              (CPI, art. L.341-1 et s.). Les marques et signes distinctifs sont protégés
              (CPI, art. L.711-1 et s. ; L.716-1 et s.).
            </p>

            {/* 7. Responsabilité */}
            <h2 id="responsabilite">7. Responsabilité</h2>
            <p>
              Les informations fournies par Juri-X-Immo le sont à titre indicatif. Nous ne
              garantissons ni leur exhaustivité ni leur exactitude absolue/actualité, et
              notre responsabilité ne saurait être engagée pour leur usage.
            </p>

            {/* 8. Liens hypertextes */}
            <h2 id="liens">8. Liens hypertextes</h2>
            <p>
              Juri-X-Immo peut contenir des liens vers d’autres sites. Nous n’assumons
              aucune responsabilité quant à leur contenu.
            </p>

            {/* 9. Abonnement */}
            <h2 id="abonnement">9. Abonnement</h2>
            <p>
              L’accès au service est soumis à un abonnement mensuel. Les modalités de
              paiement et de résiliation sont précisées dans nos CGU/CGV.
            </p>

            {/* 10. Loi applicable */}
            <h2 id="loi">10. Loi applicable</h2>
            <p>
              Les présentes mentions sont régies par le <strong>droit français</strong> et
              le droit de l’Union européenne. Tout litige sera, à titre principal, de la
              compétence des juridictions françaises et, le cas échéant, des juridictions
              européennes.
            </p>

            {/* 11. Modifications */}
            <h2 id="modifs">11. Modifications</h2>
            <p>
              Nous nous réservons le droit de modifier les présentes mentions légales à tout
              moment. La version à jour est publiée sur ce site.
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

export default MentionsLegales;
