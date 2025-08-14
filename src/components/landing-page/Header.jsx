import React, { useState } from "react";
import logo from "../../assets/images/logo.png";

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const scrollToSection = (sectionId, e) => {
    e.preventDefault();
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
    setExpanded(false); // Close mobile menu if open
  };

  const token = localStorage.getItem("token");

  return (
    <header className="py-4 shadow-sm bg-white sm:py-5 relative z-50 sticky top-0">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between">
          <div className="shrink-0">
            <a href="#" title="JARVISIMO" className="">
              <img className="w-auto h-8" src={logo} alt="JARVISIMO Logo" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-2 lg:justify-center">
           

            <a
              href="#"
              title="Demo"
              className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-gray-900 transition-all duration-200 border border-transparent rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
            >
              Démo
            </a>

            <a
              href="#tarifs"
              title="Tarifs"
              onClick={(e) => scrollToSection('tarifs', e)}
              className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-gray-900 transition-all duration-200 border border-transparent rounded-full hover:bg-blue-50 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Tarifs
            </a>

            <a
              href="#examples"
              title="Exemples"
              onClick={(e) => scrollToSection('examples', e)}
              className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-gray-900 transition-all duration-200 border border-transparent rounded-full hover:bg-blue-50 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Exemples
            </a>

            <a
              href="#faq"
              title="FAQ"
              onClick={(e) => scrollToSection('faq', e)}
              className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-gray-900 transition-all duration-200 border border-transparent rounded-full hover:bg-blue-50 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              FAQ
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden ml-auto sm:flex lg:ml-0">
            <a
              href={token ? "avatars" : "register"}
              title="Start free trial"
              className="inline-flex items-center justify-center px-6 py-2.5 text-base font-medium text-gray-900 transition-all duration-200 border border-gray-900 rounded-full hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              role="button"
            >
              Connexion
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex ml-4 lg:hidden">
            <button
              type="button"
              className="inline-flex items-center p-2.5 text-gray-900 duration-200 border-2 border-gray-300 rounded-full hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:bg-blue-600 focus:text-white"
              onClick={() => setExpanded(!expanded)}
              aria-expanded={expanded}
              aria-label="Toggle menu"
            >
              {!expanded ? (
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu overlay */}
        {expanded && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
              onClick={() => setExpanded(false)}
            ></div>
            
            {/* Mobile menu panel */}
            <div className="absolute inset-x-0 top-full mt-1 bg-white shadow-2xl rounded-2xl mx-4 lg:hidden z-50 border border-gray-100">
              <div className="py-6 px-6 space-y-1">
                <a
                  href="#hero"
                  onClick={(e) => scrollToSection('hero', e)}
                  className="flex items-center px-4 py-3 text-base font-medium text-gray-900 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
                >
                  <svg className="w-5 h-5 mr-3 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Accueil
                </a>
                
                <a
                  href="#dialogue"
                  onClick={(e) => scrollToSection('dialogue', e)}
                  className="flex items-center px-4 py-3 text-base font-medium text-gray-900 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
                >
                  <svg className="w-5 h-5 mr-3 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Dialogue IA
                </a>
                
                <a
                  href="#scenarios"
                  onClick={(e) => scrollToSection('scenarios', e)}
                  className="flex items-center px-4 py-3 text-base font-medium text-gray-900 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
                >
                  <svg className="w-5 h-5 mr-3 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  Scénarios
                </a>
        
                <a
                  href="#documents"
                  onClick={(e) => scrollToSection('documents', e)}
                  className="flex items-center px-4 py-3 text-base font-medium text-gray-900 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
                >
                  <svg className="w-5 h-5 mr-3 text-orange-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Documents
                </a>
                
                <a
                  href="#tarifs"
                  onClick={(e) => scrollToSection('tarifs', e)}
                  className="flex items-center px-4 py-3 text-base font-medium text-gray-900 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
                >
                  <svg className="w-5 h-5 mr-3 text-yellow-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                  Tarifs
                </a>
                
                <a
                  href="#examples"
                  onClick={(e) => scrollToSection('examples', e)}
                  className="flex items-center px-4 py-3 text-base font-medium text-gray-900 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
                >
                  <svg className="w-5 h-5 mr-3 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Exemples
                </a>
                
                <a
                  href="#faq"
                  onClick={(e) => scrollToSection('faq', e)}
                  className="flex items-center px-4 py-3 text-base font-medium text-gray-900 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
                >
                  <svg className="w-5 h-5 mr-3 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  FAQ
                </a>

                {/* Mobile CTA */}
                <div className="pt-4 border-t border-gray-200">
                  <a
                    href={token ? 'avatars' : 'register'}
                    className="flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 shadow-lg"
                  >
                    <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Commencer gratuitement
                  </a>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;