import React from "react";
import Header from "../components/landing-page/Header";
import Footer from "../components/landing-page/Footer";

const CGV = () => {
  return (
    <div className="bg-white text-gray-800">
      <Header />

      {/* Title */}
      <section className="py-10 sm:py-12 lg:py-14 bg-gradient-to-br from-blue-50 via-white to-purple-50 border-b">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Conditions Générales de Vente (CGV)
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
                ["Article 1 : Objet", "#art-1"],
                ["Article 2 : Définitions", "#art-2"],
                ["Article 3 : Accès au service", "#art-3"],
                ["Article 4 : Utilisation du service", "#art-4"],
                ["Article 5 : Responsabilité de l’Éditeur", "#art-5"],
                ["Article 6 : Propriété intellectuelle", "#art-6"],
                ["Article 7 : Données personnelles", "#art-7"],
                ["Article 8 : Paiement", "#art-8"],
                ["Article 9 : Service client", "#art-9"],
                ["Article 10 : Force majeure", "#art-10"],
                ["Article 11 : Limitation de garantie", "#art-11"],
                ["Article 12 : Politique de remboursement", "#art-12"],
                ["Article 13 : Données d’utilisation", "#art-13"],
                ["Article 14 : Conformité RGPD", "#art-14"],
                ["Article 15 : Sécurité des données", "#art-15"],
                ["Article 16 : Changement de profil", "#art-16"],
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
            <h2 id="art-1">Article 1 : Objet</h2>
            <p>
              Les présentes Conditions Générales de Vente ont pour objet de définir les
              conditions de commercialisation de <strong>Juri-X-Immo</strong>, mis à
              disposition par <strong>MY Express</strong> (ci-après “l’Éditeur”).
            </p>

            <h2 id="art-2">Article 2 : Définitions</h2>
            <p>
              <strong>Juri-X-Immo</strong> : service d’assistance juridique en ligne
              proposé par l’Éditeur, fournissant des informations légales actualisées en
              matière immobilière.
              <br />
              <strong>Utilisateur / Client</strong> : toute personne physique ou morale
              accédant et utilisant Juri-X-Immo.
              <br />
              <strong>Contenu</strong> : ensemble des éléments constituant Juri-X-Immo
              (textes, images, logiciels, bases de données, informations, etc.).
            </p>

            <h2 id="art-3">Article 3 : Accès au service</h2>
            <p>
              L’accès à Juri-X-Immo est réservé aux clients ayant souscrit un
              <strong> abonnement mensuel payant</strong>. L’abonnement est sans
              engagement et peut être résilié à tout moment par l’Utilisateur.
            </p>

            <h2 id="art-4">Article 4 : Utilisation du service</h2>
            <p>
              L’Utilisateur s’engage à utiliser Juri-X-Immo conformément aux présentes
              CGV et à la législation en vigueur. Il est notamment interdit :
            </p>
            <ul>
              <li>de l’utiliser à des fins illégales ou contraires aux bonnes mœurs ;</li>
              <li>de porter atteinte aux droits des tiers (PI, vie privée, etc.) ;</li>
              <li>
                de diffuser des contenus diffamatoires, racistes, xénophobes ou incitant
                à la haine.
              </li>
            </ul>

            <h2 id="art-5">Article 5 : Responsabilité de l’Éditeur</h2>
            <p>
              L’Éditeur fournit des informations légales à titre <strong>indicatif</strong>
              . Elles ne se substituent pas à l’avis d’un spécialiste et ne sauraient être
              ni exhaustives ni absolument exactes. L’Éditeur ne garantit pas l’exhaustivité,
              l’exactitude ou l’actualité absolue des informations. L’utilisation du
              service se fait sous la seule responsabilité du client.
            </p>
            <p>
              L’Éditeur ne pourra être tenu responsable de dommages directs ou indirects
              résultant de l’utilisation personnelle ou de l’impossibilité d’utiliser
              Juri-X-Immo. En cas de doute, l’Utilisateur est invité à vérifier la
              fiabilité et la pertinence des informations ou à consulter un professionnel.
            </p>

            <h2 id="art-6">Article 6 : Propriété intellectuelle</h2>
            <p>
              Tous les éléments de Juri-X-Immo (textes, images, logiciels, bases de
              données, marques, logos, etc.) sont protégés par les droits de propriété
              intellectuelle. Toute reproduction, représentation, modification, publication
              ou adaptation, totale ou partielle, est interdite sans autorisation écrite
              préalable.
            </p>
            <p>
              Les éléments du site sont protégés par le droit d’auteur (CPI, art. L.111-1
              et s.). Toute reproduction, représentation, adaptation ou traduction, sans
              autorisation écrite de Juri-X-Immo, peut constituer une contrefaçon (CPI,
              art. L.335-2 et s.). Les bases de données sont protégées (CPI, art. L.341-1
              et s.). Les marques et signes distinctifs sont protégés (CPI, art. L.711-1
              et s. ; L.716-1 et s.).
            </p>

            <h2 id="art-7">Article 7 : Données personnelles</h2>
            <p>
              Les données personnelles collectées lors de l’utilisation de Juri-X-Immo
              sont traitées conformément à notre politique de confidentialité.
            </p>

            <h2 id="art-8">Article 8 : Paiement</h2>
            <p>
              L’accès au service est soumis à un <strong>abonnement mensuel</strong>,
              sans engagement. Les paiements sont traités via <strong>Stripe</strong>.
            </p>
            <p>
              Une période d’essai de <strong>3 jours</strong> est proposée, activée{" "}
              <strong>sans moyen de paiement</strong>. Elle n’est valable qu’à la{" "}
              <strong>première inscription</strong>. À l’issue de la période d’essai, la
              facturation mensuelle démarre automatiquement si l’Utilisateur choisit de
              poursuivre.
            </p>

            <h2 id="art-9">Article 9 : Service client</h2>
            <p>
              Pour toute question, réclamation ou demande d’assistance :{" "}
              <a href="mailto:support@juriximmo.ai">support@juriximmo.ai</a>.
            </p>

            <h2 id="art-10">Article 10 : Force majeure</h2>
            <p>
              Les obligations de l’Éditeur peuvent être suspendues en cas de force
              majeure (événement imprévisible, irrésistible et extérieur) : catastrophes
              naturelles, pandémies, grèves, incendies, interruptions réseaux, actes de
              terrorisme, guerres, embargos, décisions administratives ou judiciaires,
              etc.
            </p>

            <h2 id="art-11">Article 11 : Limitation de garantie</h2>
            <p>
              L’Éditeur s’efforce d’assurer un service de qualité mais ne garantit pas un
              accès continu et ininterrompu. Il ne saurait être tenu responsable des
              dommages résultant (i) d’une utilisation non conforme aux CGV, (ii) d’une
              indisponibilité indépendante de sa volonté (maintenance, panne, force
              majeure), (iii) d’erreurs ou omissions dans les informations, (iv) d’un
              matériel/logiciel inadapté côté client, ou (v) d’actes de tiers.
            </p>

            <h2 id="art-12">Article 12 : Politique de remboursement</h2>
            <p>
              En cas de dysfonctionnement empêchant l’Utilisateur de bénéficier des
              fonctionnalités, et imputable à l’Éditeur (en dehors des cas visés aux
              articles 10 et 11), l’Éditeur fera ses meilleurs efforts pour résoudre le
              problème dans les meilleurs délais. Si le problème persiste, l’Utilisateur
              peut solliciter le remboursement prorata temporis de la période non
              utilisée, en écrivant à{" "}
              <a href="mailto:support@juriximmo.ai">support@juriximmo.ai</a>.
            </p>

            <h2 id="art-13">Article 13 : Données d’utilisation</h2>
            <p>
              Les données d’utilisation sont exploitées à des fins statistiques et
              d’amélioration du service. Elles sont anonymisées et agrégées avant analyse.
            </p>

            <h2 id="art-14">Article 14 : Conformité RGPD</h2>
            <p>
              Le traitement des données personnelles respecte le RGPD. Vous disposez de
              droits d’accès, rectification, effacement, limitation, opposition et
              portabilité. Pour l’exercice de ces droits, veuillez consulter notre
              politique de confidentialité.
            </p>

            <h2 id="art-15">Article 15 : Sécurité des données</h2>
            <p>
              L’Éditeur met en œuvre des mesures techniques et organisationnelles
              appropriées pour garantir la sécurité et la confidentialité des données :
            </p>
            <ul>
              <li>cryptage des données en transit et au repos ;</li>
              <li>accès restreint aux seuls personnels habilités ;</li>
              <li>sauvegardes régulières et procédures de restauration ;</li>
              <li>surveillance des systèmes et détection d’anomalies ;</li>
              <li>mises à jour régulières des logiciels.</li>
            </ul>
            <p>
              L’Éditeur informera l’Utilisateur de toute violation de données susceptible
              d’impacter ses droits et libertés.
            </p>

            <h2 id="art-16">Article 16 : Changement de profil</h2>
            <p>
              Les profils <strong>Albert</strong> et <strong>René</strong> sont
              associés à des tarifs distincts. Tout changement de profil entraîne
              l’application des tarifs du nouveau profil. Vérifiez vos informations avant
              de confirmer. Pour toute question, contactez le support.
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

export default CGV;
