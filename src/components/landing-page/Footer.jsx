import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Footer = () => {
  const [showCookies, setShowCookies] = useState(false);

  // Afficher une seule fois si pas encore choisi
  useEffect(() => {
    const consent = localStorage.getItem("jx_cookie_consent");
    if (!consent) setShowCookies(true);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("jx_cookie_consent", "accepted");
    setShowCookies(false);
  };
  const refuseCookies = () => {
    localStorage.setItem("jx_cookie_consent", "refused");
    setShowCookies(false);
  };

  const legalLinks = [
    { label: "À propos", to: "/about" },
    { label: "Mentions légales", to: "/mentions-legales" },
    { label: "Données personnelles et confidentialité", to: "/privacy" }, // ta page Privacy.jsx
    { label: "CGV", to: "/cgv" },
    { label: "CGU", to: "/cgu" },
  ];

  const resourceLinks = [
    { label: "Mode d’emploi", to: "/about" },        // rattache à À propos
    { label: "FAQ", to: "/#faq" },                   // ancre sur la LP
    { label: "Partenaires", to: "/contact" },    // page partenaire conservée
    { label: "Centre d’aide", to: "/contact" },      // fusionné
    { label: "Nous contacter", to: "/contact" },     // fusionné
    { label: "Newsletter", to: "/contact" },         // redirige vers contact si pas de page
  ];

  return (
    <footer className="pt-12 pb-8 bg-black sm:pt-16 lg:pt-20 relative">
      <div className="px-4 mx-auto lg:px-8 sm:px-6 max-w-7xl">
        <div className="grid grid-cols-2 gap-y-12 gap-x-8 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 lg:gap-x-12 xl:gap-x-16">
          {/* Logo + description */}
          <div className="lg:col-span-2 sm:col-span-3 xl:col-span-3">
            <div className="lg:max-w-sm">
              <Link
                to="/"
                title="Logo Juri-X-Immo"
                className="inline-flex rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
              >
                <img className="w-auto h-12" src={logo} alt="Juri-X-Immo Logo" />
              </Link>
              <p className="mt-8 text-sm leading-6 text-gray-300">
                Juri-X-Immo, <strong>votre</strong> assistant juridique alimenté par l’IA, est là pour
                <strong> simplifier</strong> la gestion de vos projets immobiliers.
                Obtenez des réponses rapides et précises, 24/7, et faites de chaque
                décision une réussite.
              </p>
            </div>
          </div>

          {/* Légal */}
          <div>
            <p className="text-xs font-bold tracking-widest text-white uppercase">
              Légal
            </p>
            <ul className="mt-8 space-y-5">
              {legalLinks.map(({ label, to }) => (
                <li key={label}>
                  {to.startsWith("/#") ? (
                    <a
                      href={to}
                      className="inline-flex text-sm text-gray-300 hover:text-white hover:translate-x-1 transition-all"
                    >
                      {label}
                    </a>
                  ) : (
                    <Link
                      to={to}
                      className="inline-flex text-sm text-gray-300 hover:text-white hover:translate-x-1 transition-all"
                    >
                      {label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Ressources / Aide */}
          <div className="xl:col-span-2">
            <p className="text-xs font-bold tracking-widest text-white uppercase">
              Ressources
            </p>
            <ul className="mt-8 grid gap-y-5 sm:gap-x-8 sm:grid-cols-1">
              {resourceLinks.map(({ label, to }) => (
                <li key={label}>
                  {to.startsWith("/#") ? (
                    <a
                      href={to}
                      className="inline-flex text-sm text-gray-300 hover:text-white hover:translate-x-1 transition-all"
                    >
                      {label}
                    </a>
                  ) : (
                    <Link
                      to={to}
                      className="inline-flex text-sm text-gray-300 hover:text-white hover:translate-x-1 transition-all"
                    >
                      {label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="mt-12 border-gray-700 sm:mt-16 lg:mt-20" />

        <div className="flex flex-col mt-8 sm:flex-row sm:justify-between sm:items-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Juri-X-Immo. Tous droits réservés.
          </p>
          <div className="mt-6 sm:mt-0">
            <img
              className="w-auto h-6"
              src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/footer/1/payment-methods.png"
              alt="Moyens de paiement"
            />
          </div>
        </div>
      </div>

      {/* Pop-up cookies */}
      {showCookies && (
        <div className="fixed bottom-4 right-4 bg-white shadow-2xl rounded-xl p-4 max-w-xs z-50 border border-gray-200">
          <p className="text-sm text-gray-700">
            Juri-X-Immo utilise des cookies pour améliorer votre expérience.
          </p>
          <div className="mt-2 text-xs">
            <Link to="/privacy" className="text-blue-700 hover:underline">
              En savoir plus
            </Link>
          </div>
          <div className="flex justify-end mt-3 space-x-2">
            <button
              onClick={acceptCookies}
              className="px-4 py-1 text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              Accepter
            </button>
            <button
              onClick={refuseCookies}
              className="px-4 py-1 text-sm text-gray-700 border rounded-lg hover:bg-gray-100"
            >
              Refuser
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
