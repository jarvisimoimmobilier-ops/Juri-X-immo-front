import React from 'react';

const DialogueSection = () => {
    return (
        <section className="py-16 bg-white sm:py-20 lg:py-24">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-x-16">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl font-pj">
                            Dialogue avec vous
                        </h2>
                        <p className="mt-6 text-lg text-gray-600 font-pj">
                            Créez une nouvelle conversation, posez votre question ou donnez vos instructions, l'IA vous répond ou exécute…
                        </p>
                        <div className="mt-8 space-y-4">
                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full">
                                        <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <p className="text-lg text-gray-800">Conversations naturelles et intuitives</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full">
                                        <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <p className="text-lg text-gray-800">Réponses spécialisées en immobilier</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full">
                                        <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <p className="text-lg text-gray-800">Assistance 24h/24, 7j/7</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10">
                            <button  className="inline-flex items-center px-6 py-3 text-base font-semibold text-white transition-all duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600">
                                Commencer la conversation
                            </button>
                        </div>
                    </div>
                    <div>
                        <div className="relative">
                            <div className="absolute -inset-1">
                                <div className="w-full h-full mx-auto opacity-30 blur-lg filter" style={{ background: "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)" }}></div>
                            </div>
                            <div className="relative overflow-hidden bg-white rounded-2xl shadow-xl">
                                <div className="p-8">
                                    <div className="space-y-4">
                                        <div className="flex items-start space-x-3">
                                            <div className="flex-shrink-0">
                                                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                                            </div>
                                            <div className="flex-1">
                                                <div className="bg-gray-100 rounded-lg p-3">
                                                    <p className="text-sm text-gray-800">Bonjour ! Je souhaite acheter mon premier appartement. Quelles sont les étapes ?</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-3 justify-end">
                                            <div className="flex-1">
                                                <div className="bg-blue-600 rounded-lg p-3">
                                                    <p className="text-sm text-white">Parfait ! Je vais vous guider étape par étape. Commençons par définir votre budget et vos critères de recherche...</p>
                                                </div>
                                            </div>
                                            <div className="flex-shrink-0">
                                                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                                                    <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
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

export default DialogueSection;