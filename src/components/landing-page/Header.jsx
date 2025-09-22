import React, { useState } from "react";
import logo from "../../assets/images/jurvlogo.png"; // full logo

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const token = localStorage.getItem("token");
  const trialHref = token ? "/conversations" : "/register"; // CTA target
  const authHref = token ? "/conversations" : "/login";

  const scrollToSection = (sectionId, e) => {
    e.preventDefault();
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setExpanded(false);
  };

  return (
    <header className="py-4 shadow-sm bg-white sm:py-5 relative z-50 sticky top-0">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" title="Juri-X-Immo" className="shrink-0">
            <img className="w-auto h-12" src={logo} alt="Juri-X-Immo - Logo" />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex lg:items-center lg:space-x-2 lg:justify-center">
            <a
              href="/#features"
              title="Fonctionnalités"
              onClick={(e) => scrollToSection("features", e)}
              className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-gray-900 transition-all duration-200 border border-transparent rounded-full hover:bg-blue-50 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Fonctionnalités
            </a>
            <a
              href="#demo"
              title="Démo"
              onClick={(e) => scrollToSection("demo", e)}
              className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-gray-900 transition-all duration-200 border border-transparent rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
            >
              Démo
            </a>
            <a
              href="#tarifs"
              title="Tarifs"
              onClick={(e) => scrollToSection("tarifs", e)}
              className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-gray-900 transition-all duration-200 border border-transparent rounded-full hover:bg-blue-50 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Tarifs
            </a>
            <a
              href="#faq"
              title="FAQ"
              onClick={(e) => scrollToSection("faq", e)}
              className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-gray-900 transition-all duration-200 border border-transparent rounded-full hover:bg-blue-50 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              FAQ
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden ml-auto sm:flex lg:ml-0">
            <a
              href={authHref}
              title="Connexion"
              className="inline-flex items-center justify-center px-6 py-2.5 text-base font-medium text-white transition-all duration-200 rounded-full bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >
              Connexion
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex ml-4 lg:hidden">
            <button
              type="button"
              className="inline-flex items-center p-2.5 text-gray-900 duration-200 border-2 border-gray-300 rounded-full hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              onClick={() => setExpanded(!expanded)}
              aria-expanded={expanded}
              aria-label="Ouvrir le menu"
            >
              {!expanded ? (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu panel */}
        {expanded && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setExpanded(false)}
            />
            {/* Panel */}
            <div className="absolute inset-x-0 top-full mt-1 bg-white shadow-2xl rounded-2xl mx-4 lg:hidden z-50 border border-gray-100">
              <div className="py-4 px-4 sm:px-6">
                <ul className="space-y-3">
                  {/* Accueil */}
                  <li>
                    <a
                      href="#hero"
                      onClick={(e) => scrollToSection("hero", e)}
                      className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-blue-50/70 text-blue-700 font-medium"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      Accueil
                    </a>
                  </li>

                  {/* Dialogue IA */}
                  <li>
                    <a
                      href="#dialogue"
                      onClick={(e) => scrollToSection("dialogue", e)}
                      className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-gray-50"
                    >
                      <svg className="w-5 h-5 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      Dialogue IA
                    </a>
                  </li>

                  {/* Scénarios */}
                  <li>
                    <a
                      href="#scenarios"
                      onClick={(e) => scrollToSection("scenarios", e)}
                      className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-gray-50"
                    >
                      <svg className="w-5 h-5 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                      Scénarios
                    </a>
                  </li>

                  {/* Documents */}
                  <li>
                    <a
                      href="#documents"
                      onClick={(e) => scrollToSection("documents", e)}
                      className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-gray-50"
                    >
                      <svg className="w-5 h-5 text-orange-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293L18.707 9.12A1 1 0 0119 9.828V19a2 2 0 01-2 2z" />
                      </svg>
                      Documents
                    </a>
                  </li>

                  {/* Tarifs */}
                  <li>
                    <a
                      href="#tarifs"
                      onClick={(e) => scrollToSection("tarifs", e)}
                      className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-gray-50"
                    >
                      <svg className="w-5 h-5 text-yellow-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                      Tarifs
                    </a>
                  </li>

                  {/* Exemples */}
                  <li>
                    <a
                      href="#features"
                      onClick={(e) => scrollToSection("examples", e)}
                      className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-gray-50"
                    >
                      <svg className="w-5 h-5 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Exemples
                    </a>
                  </li>

                  {/* FAQ */}
                  <li>
                    <a
                      href="#faq"
                      onClick={(e) => scrollToSection("faq", e)}
                      className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-gray-50"
                    >
                      <svg className="w-5 h-5 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      FAQ
                    </a>
                  </li>
                </ul>

                {/* Divider */}
                <hr className="my-4 border-gray-200" />

                {/* CTA big gradient */}
                <a
                  href={trialHref}
                  className="block w-full text-center font-semibold text-white rounded-2xl px-6 py-4 shadow-lg hover:shadow-xl transition-all bg-gradient-to-r from-blue-600 to-purple-600"
                >
                  <span className="inline-flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Commencer gratuitement
                  </span>
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
