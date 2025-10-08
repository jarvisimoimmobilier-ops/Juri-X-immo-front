import React from "react";
import Header from "../components/landing-page/Header";
import Footer from "../components/landing-page/Footer";

const Contact = () => {
  return (
    <div className="bg-white text-gray-800">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full opacity-10 blur-3xl translate-x-24 -translate-y-20" />
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-gradient-to-tr from-orange-400 to-purple-500 rounded-full opacity-10 blur-3xl -translate-x-20 translate-y-20" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700">
              Contact
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">
              Nous sommes{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                à votre écoute
              </span>
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Une question, une suggestion ou besoin d'aide&nbsp;? N'hésitez pas à nous contacter.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gray-100 rounded-2xl shadow-lg p-8 sm:p-12">
            <div className="text-center mb-10">
              <div className="inline-flex w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Contactez-nous par email
              </h2>
              <p className="mt-3 text-gray-600">
                Notre équipe vous répondra dans les plus brefs délais
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                  </div>
                  <a 
                    href="mailto:contact@juri-x-immo.com" 
                    className="text-lg sm:text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors"
                  >
                    contact@juri-x-immo.com
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-50">
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-emerald-700" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Temps de réponse</h3>
                  <p className="text-sm text-gray-600 mt-1">Sous 24-48 heures</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-50">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-blue-700" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Support</h3>
                  <p className="text-sm text-gray-600 mt-1">Disponible 7j/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="py-14 sm:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Avant de nous écrire
          </h2>
          <p className="mt-4 text-gray-600">
            Consultez notre assistant intelligent Juri-X-Immo pour obtenir des réponses immédiates à vos questions juridiques immobilières.
          </p>
          <div className="mt-8">
            <button
              onClick={() => window.location.href = "/"}
              className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all"
            >
              Essayer l'assistant IA
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;