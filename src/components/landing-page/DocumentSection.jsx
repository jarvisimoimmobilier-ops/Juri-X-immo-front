import React from 'react';

const DocumentSection = () => {
    return (
        <section className="py-16 bg-white sm:py-20 lg:py-24">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-x-16">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl font-pj">
                            Génère vos documents
                        </h2>
                        <p className="mt-6 text-lg text-gray-600 font-pj">
                            Contrats, baux, états des lieux, et bien d'autres… Générez des documents techniques et professionnels prêts à l'emploi.
                        </p>
                        <div className="mt-8 grid grid-cols-2 gap-4">
                            <div className="bg-blue-50 rounded-lg p-4 text-center">
                                <svg className="w-8 h-8 mx-auto text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                <p className="mt-2 text-sm font-medium text-blue-900">Contrats</p>
                            </div>
                            <div className="bg-green-50 rounded-lg p-4 text-center">
                                <svg className="w-8 h-8 mx-auto text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                                <p className="mt-2 text-sm font-medium text-green-900">Baux</p>
                            </div>
                            <div className="bg-purple-50 rounded-lg p-4 text-center">
                                <svg className="w-8 h-8 mx-auto text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                </svg>
                                <p className="mt-2 text-sm font-medium text-purple-900">États des lieux</p>
                            </div>
                            <div className="bg-orange-50 rounded-lg p-4 text-center">
                                <svg className="w-8 h-8 mx-auto text-orange-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                                <p className="mt-2 text-sm font-medium text-orange-900">Documents légaux</p>
                            </div>
                        </div>
                        {/* <div className="mt-10">
                            <button className="inline-flex items-center px-6 py-3 text-base font-semibold text-white transition-all duration-200 bg-green-600 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600">
                                Générer un document
                            </button>
                        </div> */}
                    </div>
                    <div>
                        <div className="relative">
                            <div className="absolute -inset-1">
                                <div className="w-full h-full mx-auto opacity-30 blur-lg filter" style={{ background: "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)" }}></div>
                            </div>
                            <div className="relative overflow-hidden bg-white rounded-2xl shadow-xl">
                                <div className="bg-gray-50 px-6 py-4 border-b">
                                    <div className="flex justify-between items-center">
                                        <h3 className="text-lg font-semibold text-gray-900">Contrat de Bail.pdf</h3>
                                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Généré</span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="space-y-4">
                                        <div className="border-l-4 border-blue-500 pl-4">
                                            <h4 className="font-semibold text-gray-900">Article 1 - Objet du contrat</h4>
                                            <p className="text-sm text-gray-600 mt-1">Le bailleur loue au locataire l'appartement situé...</p>
                                        </div>
                                        <div className="border-l-4 border-green-500 pl-4">
                                            <h4 className="font-semibold text-gray-900">Article 2 - Durée et renouvellement</h4>
                                            <p className="text-sm text-gray-600 mt-1">Le présent bail est conclu pour une durée de...</p>
                                        </div>
                                        <div className="border-l-4 border-purple-500 pl-4">
                                            <h4 className="font-semibold text-gray-900">Article 3 - Loyer et charges</h4>
                                            <p className="text-sm text-gray-600 mt-1">Le montant du loyer s'élève à...</p>
                                        </div>
                                        <div className="border-l-4 border-orange-500 pl-4">
                                            <h4 className="font-semibold text-gray-900">Article 4 - Dépôt de garantie</h4>
                                            <p className="text-sm text-gray-600 mt-1">Un dépôt de garantie équivalent à un mois de loyer...</p>
                                        </div>
                                    </div>
                                    <div className="mt-6 flex justify-between items-center">
                                        <div className="flex space-x-2">
                                            <button className="bg-blue-600 text-white px-3 py-1 rounded text-xs hover:bg-blue-700">Télécharger</button>
                                            <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded text-xs hover:bg-gray-300">Modifier</button>
                                        </div>
                                        <span className="text-xs text-gray-500">Conforme aux lois en vigueur</span>
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

export default DocumentSection;