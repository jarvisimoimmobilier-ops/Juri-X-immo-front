import React from 'react';
import { useNavigate } from 'react-router-dom';

const BannerSection = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    const redirectToLogin = () => {
        if (!token) {
            navigate("/login");
        } else {
            navigate("/avatars");
        }
    }

    return (
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 sm:py-20 lg:py-24">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-white sm:text-5xl xl:text-6xl font-pj">
                        L'IA spécialisée dans l'immobilier qui vous répond et vous assiste dans vos projets et au quotidien
                    </h2>
                    <p className="mt-6 text-xl text-blue-100">
                        Votre assistant intelligent pour tous vos besoins immobiliers
                    </p>
                    <div onClick={redirectToLogin} className="mt-10">
                        <button className="inline-flex items-center px-8 py-4 text-lg font-semibold text-blue-600 transition-all duration-200 bg-white rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
                            Commencer maintenant
                            <svg className="w-6 h-6 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BannerSection;