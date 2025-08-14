import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, ArrowLeft, Search, HelpCircle } from 'lucide-react';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <section className="min-h-screen py-4 sm:py-8 lg:py-16 bg-gray-50 relative overflow-hidden">
            {/* Animated background blobs */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -inset-10 opacity-50">
                    <div className="absolute top-0 -left-4 w-40 h-40 md:w-72 md:h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
                    <div className="absolute top-0 -right-4 w-40 h-40 md:w-72 md:h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
                    <div className="absolute -bottom-8 left-20 w-40 h-40 md:w-72 md:h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
                    <div className="absolute bottom-0 right-20 w-40 h-40 md:w-72 md:h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
                </div>
            </div>

            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-10">
                <div className="relative max-w-lg mx-auto">
                    {/* Animated gradient border */}
                    <div className="absolute -inset-2 sm:-inset-4">
                        <div
                            className="w-full h-full mx-auto rounded-2xl sm:rounded-3xl opacity-75 blur-lg filter animate-gradient"
                            style={{
                                background: 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
                                backgroundSize: '400% 400%',
                            }}
                        ></div>
                    </div>

                    <div className="relative overflow-hidden bg-white/95 backdrop-blur-lg shadow-xl rounded-xl sm:rounded-2xl border border-white/20">
                        <div className="p-6 sm:px-8 sm:py-12 text-center">
                            {/* 404 Number */}
                            <div className="mb-6">
                                <h1 className="text-6xl sm:text-8xl lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-pj">
                                    404
                                </h1>
                            </div>


                            {/* Title */}
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 font-pj mb-4">
                                Page introuvable
                            </h2>

                            {/* Description */}
                            <p className="text-base sm:text-lg text-gray-600 font-pj mb-8 max-w-md mx-auto">
                                Désolé, la page que vous recherchez n'existe pas ou a été déplacée. 
                                Vérifiez l'URL ou retournez à l'accueil.
                            </p>

                            {/* Action Buttons */}
                            <div className="space-y-3 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
                                {/* Back Button */}
                                <button
                                    onClick={() => navigate(-1)}
                                    className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 text-sm sm:text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all duration-200"
                                >
                                    <ArrowLeft className="w-4 h-4 mr-2" />
                                    Retour
                                </button>

                                {/* Home Button */}
                                <button
                                    onClick={() => navigate('/')}
                                    className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 text-sm sm:text-base font-bold text-white bg-gradient-to-r from-gray-900 to-gray-700 hover:from-gray-800 hover:to-gray-600 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 font-pj transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                                >
                                    <Home className="w-4 h-4 mr-2" />
                                    Accueil
                                </button>
                            </div>

                            {/* Help Section */}
                            <div className="mt-8 pt-6 border-t border-gray-200">
                                <div className="flex items-center justify-center text-sm text-gray-500">
                                    <HelpCircle className="w-4 h-4 mr-2" />
                                    <span>
                                        Besoin d'aide? {' '}
                                        <a 
                                            href="mailto:support@jarvisimo.com" 
                                            className="text-blue-600 hover:text-blue-700 hover:underline font-medium"
                                        >
                                            Contactez-nous
                                        </a>
                                    </span>
                                </div>
                            </div>

                            {/* Suggestions */}
                            <div className="mt-6">
                                <p className="text-sm text-gray-500 mb-3">Pages populaires :</p>
                                <div className="flex flex-wrap justify-center gap-2">
                                    <button
                                        onClick={() => navigate('/')}
                                        className="px-3 py-1 text-xs bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition-colors duration-200"
                                    >
                                        Accueil
                                    </button>
                                    <button
                                        onClick={() => navigate('/login')}
                                        className="px-3 py-1 text-xs bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition-colors duration-200"
                                    >
                                        Connexion
                                    </button>
                                    <button
                                        onClick={() => navigate('/register')}
                                        className="px-3 py-1 text-xs bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition-colors duration-200"
                                    >
                                        Inscription
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NotFound;