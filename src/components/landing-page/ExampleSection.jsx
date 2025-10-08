import React from 'react';

const ExampleSection = () => {
    const token = localStorage.getItem("token");

    const handleTestFeature = () => {
        window.location.href = token ? "/conversations" : "/login";
    };

    return (
        <section id='features' className="py-16 bg-gradient-to-br from-blue-50 to-purple-50 sm:py-20 lg:py-24">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl font-pj">
                            Exemple de fonctionnalité
                        </h2>
                    </div>
                    
                    <div className="mt-12">
                        <div className="relative">
                            <div className="absolute -inset-1">
                                <div className="w-full h-full mx-auto opacity-30 blur-lg filter" style={{ background: "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)" }}></div>
                            </div>
                            <div className="relative overflow-hidden bg-white rounded-2xl shadow-xl">
                                <div className="p-8 lg:p-12">
                                    <div className="text-center mb-8">
                                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4">
                                            <svg className="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                            Vous êtes un jeune couple trentenaire, vous souhaitez faire votre première acquisition :
                                        </h3>
                                        <p className="text-xl text-blue-600 font-semibold">
                                            Juri-X-Immo établit votre plan de financement, vous informe sur votre future fiscalité et rédige votre offre d'achat…
                                        </p>
                                    </div>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        <div className="text-center">
                                            <div className="bg-green-100 rounded-full p-4 inline-flex items-center justify-center mb-4">
                                                <svg className="w-8 h-8 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                            <h4 className="text-lg font-semibold text-gray-900 mb-2">Plan de financement</h4>
                                            <p className="text-gray-600">Calcul de votre capacité d'emprunt, simulation des mensualités et optimisation de votre dossier</p>
                                        </div>
                                        
                                        <div className="text-center">
                                            <div className="bg-purple-100 rounded-full p-4 inline-flex items-center justify-center mb-4">
                                                <svg className="w-8 h-8 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                                </svg>
                                            </div>
                                            <h4 className="text-lg font-semibold text-gray-900 mb-2">Fiscalité personnalisée</h4>
                                            <p className="text-gray-600">Analyse des avantages fiscaux, calcul des droits de mutation et optimisation fiscale</p>
                                        </div>
                                        
                                        <div className="text-center">
                                            <div className="bg-blue-100 rounded-full p-4 inline-flex items-center justify-center mb-4">
                                                <svg className="w-8 h-8 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                </svg>
                                            </div>
                                            <h4 className="text-lg font-semibold text-gray-900 mb-2">Offre d'achat</h4>
                                            <p className="text-gray-600">Rédaction automatique de votre offre d'achat avec toutes les clauses protectrices</p>
                                        </div>
                                    </div>
                                    
                                    <div className="mt-8 bg-gray-50 rounded-lg p-6">
                                        <div className="flex items-start space-x-4">
                                            <div className="flex-shrink-0">
                                                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                                                    <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div>
                                                <h5 className="font-semibold text-gray-900 mb-2">Résultat en quelques minutes :</h5>
                                                <p className="text-gray-600 text-sm">
                                                    ✓ Dossier de financement complet<br/>
                                                    ✓ Stratégie fiscale optimisée<br/>
                                                    ✓ Offre d'achat juridiquement sécurisée<br/>
                                                    ✓ Calendrier des démarches à suivre
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="mt-8 text-center">
                                        <button
                                            onClick={handleTestFeature}
                                            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white transition-all duration-200 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
                                        >
                                            Tester cette fonctionnalité
                                            <svg className="w-5 h-5 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ExampleSection;