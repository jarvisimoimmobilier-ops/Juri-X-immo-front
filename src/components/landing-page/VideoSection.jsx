import React from 'react';

const VideoSection = () => {
    return (
        <section className="py-16 bg-black sm:py-20 lg:py-24">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        <div className="absolute -inset-1">
                            <div className="w-full h-full mx-auto opacity-50 blur-lg filter" style={{ background: "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)" }}></div>
                        </div>
                        <div className="relative overflow-hidden bg-gray-900 rounded-2xl">
                            <div className="aspect-w-16 aspect-h-9">
                                {/* Placeholder for video - replace with actual video component */}
                                <div className="flex flex-col items-center justify-center w-full h-96 bg-gray-800">
                                    <div className="relative">
                                        {/* Animated play button */}
                                        <div className="flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg cursor-pointer hover:scale-110 transition-transform duration-300">
                                            <svg className="w-8 h-8 text-gray-800 ml-1" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z"/>
                                            </svg>
                                        </div>
                                        {/* Pulsing ring animation */}
                                        <div className="absolute inset-0 w-20 h-20 border-4 border-white rounded-full animate-ping opacity-20"></div>
                                        <div className="absolute inset-2 w-16 h-16 border-2 border-white rounded-full animate-pulse opacity-40"></div>
                                    </div>
                                    <div className="mt-6 text-center">
                                        <h3 className="text-2xl font-bold text-white">Découvrez Juri-X-Immo en action</h3>
                                        <p className="mt-2 text-gray-300">Voyez comment notre IA révolutionne l'immobilier</p>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Floating elements for visual appeal */}
                            <div className="absolute top-4 left-4">
                                <div className="flex items-center space-x-2 bg-white bg-opacity-10 backdrop-blur-sm rounded-full px-3 py-1">
                                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                                    <span className="text-white text-xs font-medium">EN DIRECT</span>
                                </div>
                            </div>
                            
                            <div className="absolute top-4 right-4">
                                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-full p-2">
                                    <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M9.464 15.536a5 5 0 010-7.072m-2.828 9.9a9 9 0 010-12.728" />
                                    </svg>
                                </div>
                            </div>

            {/* Chat overlay simulation */}
                            <div className="absolute bottom-4 left-4 right-4">
                                <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-lg p-3 max-w-sm">
                                    <div className="flex items-start space-x-2">
                                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm text-gray-800">Comment puis-je calculer les frais de notaire pour mon acquisition ?</p>
                                            <div className="flex items-center mt-1">
                                                <div className="flex space-x-1">
                                                    <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce"></div>
                                                    <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                                    <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                                </div>
                                                <span className="ml-2 text-xs text-gray-500">Juri-X-Immo est en train d'écrire...</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-8 text-center">
                        <p className="text-lg text-gray-300">
                            Découvrez comment Juri-X-Immo transforme vos questions immobilières en solutions concrètes
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default VideoSection;