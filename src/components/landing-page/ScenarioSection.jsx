import React from 'react';

const ScenarioSection = () => {
  const token = localStorage.getItem('token');

  const handleSimulate = () => {
    window.location.href = token ? '/scenarios' : '/login';
  };

  const handleDownload = () => {
    // replace with actual download logic
    alert('Téléchargement en cours...');
  };

  const handleModify = () => {
    // replace with actual modify flow
    alert('Ouverture de l’éditeur pour modifier le scénario...');
  };

  return (
    <section className="py-16 bg-gray-50 sm:py-20 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-x-16">
          {/* Left preview */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-1">
                <div
                  className="w-full h-full mx-auto opacity-30 blur-lg filter"
                  style={{
                    background:
                      'linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)',
                  }}
                ></div>
              </div>
              <div className="relative overflow-hidden bg-white rounded-2xl shadow-xl">
                <div className="p-8">
                  <div className="space-y-6">
                    <div className="text-center">
                      <h3 className="text-lg font-bold text-gray-900">
                        Simulation de Scénarios
                      </h3>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-blue-50 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-blue-900">
                            Scénario Juridique
                          </span>
                          <span className="text-xs text-blue-600">Analysé</span>
                        </div>
                        <div className="mt-2 w-full bg-blue-200 rounded-full h-2">
                          <div
                            className="bg-blue-600 h-2 rounded-full"
                            style={{ width: '85%' }}
                          ></div>
                        </div>
                      </div>
                      <div className="bg-green-50 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-green-900">
                            Impact Fiscal
                          </span>
                          <span className="text-xs text-green-600">Calculé</span>
                        </div>
                        <div className="mt-2 w-full bg-green-200 rounded-full h-2">
                          <div
                            className="bg-green-600 h-2 rounded-full"
                            style={{ width: '92%' }}
                          ></div>
                        </div>
                      </div>
                      <div className="bg-purple-50 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-purple-900">
                            Contraintes Environnementales
                          </span>
                          <span className="text-xs text-purple-600">Évaluées</span>
                        </div>
                        <div className="mt-2 w-full bg-purple-200 rounded-full h-2">
                          <div
                            className="bg-purple-600 h-2 rounded-full"
                            style={{ width: '78%' }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <svg
                        className="w-12 h-12 mx-auto text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <p className="mt-2 text-sm text-gray-600">
                        Tous les scénarios analysés
                      </p>
                    </div>

               
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              Projette un scénario juridique, fiscal, environnemental…
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Visualisez les conséquences de vos choix futurs et prenez des
              décisions éclairées en toute sérénité en simulant les différents
              scénarios possibles pour votre projet.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start">
                <svg
                  className="w-6 h-6 text-blue-600 flex-shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
                <p className="ml-4 text-lg text-gray-800">
                  <strong>Analyse juridique complète</strong> de votre situation
                </p>
              </div>
              <div className="flex items-start">
                <svg
                  className="w-6 h-6 text-green-600 flex-shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  />
                </svg>
                <p className="ml-4 text-lg text-gray-800">
                  <strong>Optimisation fiscale</strong> personnalisée
                </p>
              </div>
              <div className="flex items-start">
                <svg
                  className="w-6 h-6 text-purple-600 flex-shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="ml-4 text-lg text-gray-800">
                  <strong>Respect des normes environnementales</strong>
                </p>
              </div>
            </div>

            <div className="mt-10">
              <button
                onClick={handleSimulate}
                className="inline-flex items-center px-6 py-3 text-base font-semibold text-white transition-all duration-200 bg-purple-600 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-600"
              >
                Simuler un scénario
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScenarioSection;
