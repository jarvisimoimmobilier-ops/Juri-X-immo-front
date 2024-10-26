import React, { useState } from 'react';
import logo from '../../assets/images/logo.png';

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const scrollToFAQ = (e) => {
    e.preventDefault();
    const faqSection = document.getElementById('faq');
    faqSection.scrollIntoView({ behavior: 'smooth' });
    setExpanded(false); // Close mobile menu if open
  };


  return (
    <header className="py-4 shadow-sm bg-white sm:py-5 relative z-50">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between">
          <div className="shrink-0">
            <a href="#" title="" className="">
              <img className="w-auto h-8" src={logo} alt="Logo" />
            </a>
          </div>

          <div className="hidden lg:flex lg:items-center lg:space-x-4 lg:justify-center">
            <a
              href="#"
              title="Accueil"
              className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-gray-900 transition-all duration-200 border border-transparent rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
            >
              Accueil
            </a>

            <a
              href="#"
              title="Services"
              className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-gray-900 transition-all duration-200 border border-transparent rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
            >
              Services
            </a>

            <a
              href="#"
              title="Guide"
              className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-gray-900 transition-all duration-200 border border-transparent rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
            >
              Guide
            </a>

            <a
              href="#"
              title="Tarifs"
              className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-gray-900 transition-all duration-200 border border-transparent rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
            >
              Tarifs
            </a>

            <a
              href="#"
              title="FAQ"
              onClick={scrollToFAQ}
              className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-gray-900 transition-all duration-200 border border-transparent rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
            >
              FAQ
            </a>

            <a
              href="#"
              title="Nous connaitre"
              className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-gray-900 transition-all duration-200 border border-transparent rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
            >
              Nous connaitre
            </a>

            <a
              href="#"
              title="Nous contacter"
              className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-gray-900 transition-all duration-200 border border-transparent rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
            >
              Nous contacter
            </a>
          </div>

          <div className="hidden ml-auto sm:flex lg:ml-0">
            <a
              href="#"
              title="Start free trial"
              className="inline-flex items-center justify-center px-6 py-2.5 text-base font-medium text-gray-900 transition-all duration-200 border border-gray-900 rounded-full hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              role="button"
            >
              Start free trial
            </a>
          </div>

          <div className="flex ml-4 lg:hidden">
            <button
              type="button"
              className="inline-flex items-center p-2.5 text-gray-900 duration-200 border border-gray-900 rounded-full hover:bg-gray-900 hover:text-white transiton-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 focus:bg-gray-900 focus:text-white"
              onClick={() => setExpanded(!expanded)}
              aria-expanded={expanded}
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

        {/* Mobile menu, show/hide based on menu state */}
        {expanded && (
          <div className="absolute inset-x-0 top-0 p-4 mt-14 bg-white shadow-lg lg:hidden z-50">
            <div className="pt-4 pb-3 space-y-1">
              <a
                href="#"
                className="block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-100"
              >
                Accueil
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-100"
              >
                Services
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-100"
              >
                Guide
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-100"
              >
                Tarifs
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-100"
              >
                FAQ
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-100"
              >
                Nous connaitre
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-base font-medium text-white bg-gray-900 rounded-md hover:bg-gray-700"
              >
                Nous contacter
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
