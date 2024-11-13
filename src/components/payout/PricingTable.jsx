import React from 'react';

export default function PricingSection() {
  return (
    <section className="py-6 w-full sm:py-16 lg:py-6">
      <div className="px-4 mx-auto w-full sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl">Choisissez votre abonnement</h2>
          <p className="mt-5 text-lg font-normal text-gray-900">UI Kit Premium, abordable pour tous</p>
        </div>

        <div className="grid max-w-4xl grid-cols-1 mx-auto mt-8 text-center sm:grid-cols-2 sm:mt-16 gap-y-5 gap-x-10">
          {/* Chatbot Individual Plan */}
          <div className="overflow-hidden bg-white border border-gray-200 rounded-2xl">
            <div className="p-6 md:p-10">
              <p className="text-lg font-bold text-gray-900">Chatbot Individuel</p>
              <p className="mt-4 text-base font-normal leading-7 text-gray-600">
                Part pour l'IA : 16,66 € * 40% ≈ 6,66 €
              </p>
              <p className="mt-8 text-xl font-bold text-gray-900">6,66 €</p>
              
              <ul className="mt-6 space-y-4 text-left">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.285 6.287a1 1 0 010 1.414l-10 10a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414l4.293 4.293 9.293-9.293a1 1 0 011.414 0z" />
                  </svg>
                  <span className="ml-3 text-base font-normal text-gray-600">Inclut 20 000 mots d'utilisation</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.285 6.287a1 1 0 010 1.414l-10 10a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414l4.293 4.293 9.293-9.293a1 1 0 011.414 0z" />
                  </svg>
                  <span className="ml-3 text-base font-normal text-gray-600">Fonctionnalités de base du chatbot</span>
                </li>
              </ul>

              <a
                href="#"
                className="
                  inline-flex items-center justify-center px-8 py-3.5 mt-10 text-base font-bold text-gray-900 
                  transition-all duration-200 border-2 border-gray-400 rounded-xl 
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 
                  hover:bg-gray-900 hover:text-white hover:border-gray-900
                "
                role="button"
              >
                Choisir l'abonnement individuel
              </a>
            </div>
          </div>

          {/* Chatbot Pro Plan */}
          <div className="relative">
            <div className="absolute -inset-2">
              <div
                className="w-full h-full mx-auto rotate-180 opacity-30 blur-lg filter"
                style={{
                  background: 'linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)',
                }}
              ></div>
            </div>

            <div className="relative overflow-hidden bg-white border border-gray-200 rounded-2xl">
              <div className="p-6 md:p-10">
                <p className="text-lg font-bold text-gray-900">Chatbot Pro</p>
                <p className="mt-4 text-base font-normal leading-7 text-gray-600">
                  Prix HT : 99,99 € / 1,2 ≈ 83,33 €
                </p>
                <p className="mt-8 text-xl font-bold text-gray-900">83,33 €</p>

                <ul className="mt-6 space-y-4 text-left">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.285 6.287a1 1 0 010 1.414l-10 10a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414l4.293 4.293 9.293-9.293a1 1 0 011.414 0z" />
                    </svg>
                    <span className="ml-3 text-base font-normal text-gray-600">Inclut 20 000 mots d'utilisation</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.285 6.287a1 1 0 010 1.414l-10 10a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414l4.293 4.293 9.293-9.293a1 1 0 011.414 0z" />
                    </svg>
                    <span className="ml-3 text-base font-normal text-gray-600">Fonctionnalités avancées du chatbot</span>
                  </li>
                </ul>

                <a
                  href="#"
                  className="
                    relative inline-flex items-center justify-center px-8 py-3.5 mt-10 text-base font-bold text-white 
                    transition-all duration-200 bg-gray-900 border border-transparent rounded-xl 
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 
                    hover:bg-opacity-90
                  "
                  role="button"
                >
                  Choisir l'abonnement pro
                </a>
              </div>
            </div>
          </div>
        </div>

        <p className="max-w-md mx-auto mt-10 text-base font-normal leading-7 text-center text-gray-600">
          Vous cherchez un engagement plus important? <a href="#" className="font-bold">Parlons-en</a> et nous vous proposerons une offre adaptée.
        </p>
      </div>
    </section>
  );
}
