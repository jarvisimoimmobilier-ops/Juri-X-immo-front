import React from "react";
import Header from "../components/landing-page/Header";
import Footer from "../components/landing-page/Footer";
const AboutUs = () => {
  const token = localStorage.getItem("token");
  const goTry = () => (window.location.href = token ? "/features" : "/login");
  const goContact = () => (window.location.href = "/contact");

  return (
    <div className="bg-white text-gray-800">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full opacity-10 blur-3xl translate-x-24 -translate-y-20" />
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-gradient-to-tr from-orange-400 to-purple-500 rounded-full opacity-10 blur-3xl -translate-x-20 translate-y-20" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <div className="max-w-3xl">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700">
              Nous connaître
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">
              Juri-X-Immo —{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                votre expert juridique immobilier à portée de main
              </span>
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Notre mission&nbsp;? Simplifier le droit immobilier et le rendre accessible à tous,
              24h/24 et 7j/7.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button
                onClick={goTry}
                className="inline-flex items-center justify-center px-7 py-3 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all"
              >
                Essayer gratuitement
              </button>
              <button
                onClick={goContact}
                className="inline-flex items-center justify-center px-7 py-3 text-base font-semibold text-gray-800 bg-white border-2 border-gray-200 rounded-xl hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-all"
              >
                Nous contacter
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Qui sommes-nous ? */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Qui sommes-nous&nbsp;?
            </h2>
            <p className="mt-5 text-lg text-gray-700">
              Juri-X-Immo est né de la rencontre entre deux univers&nbsp;: le droit immobilier
              et l’intelligence artificielle. Un juriste, expert en droit public et en droit
              immobilier, et un passionné de nouvelles technologies et de l’immobilier ont uni
              leurs forces pour créer un outil au service de tous.
            </p>
            <p className="mt-4 text-lg text-gray-700">
              Nous croyons que chacun doit pouvoir comprendre les enjeux juridiques de son projet
              immobilier, quel que soit son niveau de connaissance. C’est pourquoi nous avons
              développé Juri-X-Immo, votre assistant juridique personnel, toujours à vos côtés pour
              vous guider et vous conseiller.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-1">
                <div
                  className="w-full h-full opacity-30 blur-lg"
                  style={{
                    background:
                      "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
                  }}
                />
              </div>
              <div className="relative bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600" />
                  <div>
                    <p className="text-sm text-gray-600">
                      “Nous voulons que chacun puisse poser une question en langage naturel et
                      obtenir une réponse claire, sourcée et actionnable — sans jargon inutile.”
                    </p>
                    <p className="mt-3 text-sm font-semibold text-gray-900">
                      L’équipe Juri-X-Immo
                    </p>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                  <div className="rounded-xl bg-blue-50 py-4">
                    <p className="text-2xl font-bold text-blue-700">24/7</p>
                    <p className="text-xs text-blue-700/80">Disponibilité</p>
                  </div>
                  <div className="rounded-xl bg-purple-50 py-4">
                    <p className="text-2xl font-bold text-purple-700">+1000</p>
                    <p className="text-xs text-purple-700/80">Réponses/jour*</p>
                  </div>
                  <div className="rounded-xl bg-emerald-50 py-4">
                    <p className="text-2xl font-bold text-emerald-700">Conforme</p>
                    <p className="text-xs text-emerald-700/80">Loi en vigueur</p>
                  </div>
                </div>
                <p className="mt-3 text-[11px] text-gray-400">
                  * Chiffres indicatifs / démonstration
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comment ça marche ? */}
      <section className="py-14 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">
            Comment ça marche&nbsp;?
          </h2>
          <p className="mt-4 text-gray-600 text-center max-w-2xl mx-auto">
            Une IA de pointe, alimentée par une base juridique constamment mise à jour,
            pour des réponses précises et personnalisées en quelques secondes.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Posez votre question",
                desc:
                  "Utilisez votre langage naturel. Inutile de connaître le jargon juridique.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 10h.01M12 10h.01M16 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                ),
              },
              {
                title: "Obtenez une réponse claire",
                desc:
                  "Explications compréhensibles + références utiles. Toujours orienté action.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                ),
              },
              {
                title: "Générez des documents",
                desc:
                  "Baux, lettres, clauses, checklists… prêts à l’emploi et adaptés à votre besoin.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293L18.707 9.12A1 1 0 0119 9.828V19a2 2 0 01-2 2z"
                  />
                ),
              },
            ].map(({ title, desc, icon }) => (
              <div
                key={title}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    {icon}
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
                <p className="mt-2 text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi choisir Juri-X-Immo ? */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">
            Pourquoi choisir Juri-X-Immo&nbsp;?
          </h2>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Expertise juridique reconnue",
                desc:
                  "Des juristes spécialistes du droit immobilier ont contribué à l’entraînement et à la validation des contenus.",
              },
              {
                title: "Technologie de pointe",
                desc:
                  "Algorithmes d’apprentissage automatique en constante évolution pour un service toujours plus performant.",
              },
              {
                title: "Langage clair et accessible",
                desc:
                  "Décryptage du droit immobilier — des notions complexes, expliquées simplement, sans jargon.",
              },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="inline-flex w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 items-center justify-center">
                    ✓
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                </div>
                <p className="mt-3 text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={goTry}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all"
            >
              Tester gratuitement
            </button>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            Un expert juridique à portée de main, 24h/24 et 7j/7
          </h3>
          <p className="mt-2 text-blue-100">
            Posez votre question, obtenez une réponse claire, avancez en confiance.
          </p>
          <div className="mt-6">
            <button
              onClick={goTry}
              className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-blue-600 bg-white rounded-xl shadow hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all"
            >
              Essayer gratuitement
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
