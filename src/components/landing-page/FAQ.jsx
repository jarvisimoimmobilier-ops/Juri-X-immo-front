import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const handleSeeMore = () => setShowMore(!showMore);

  // Show only first 5 items initially, or all if showMore is true
  const displayedItems = showMore ? faqItems : faqItems.slice(0, 5);

  return (
    <section id="faq" className="py-16 bg-white lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Title in FR, consistent across browsers */}
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl">
            FAQ
          </h2>
          {/* Subtitle removed per spec */}
        </div>

        <div className="max-w-4xl mx-auto mt-8 sm:mt-14">
          <div className="space-y-4">
            {displayedItems.map((item, index) => (
              <div key={index} className="relative">
                <div className="absolute -inset-1">
                  <div
                    className="w-full h-full mx-auto opacity-30 blur-lg filter"
                    style={{
                      background:
                        'linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)',
                    }}
                  />
                </div>

                <div className="relative overflow-hidden bg-white border border-gray-200 rounded-xl">
                  <h3>
                    <button
                      onClick={() => toggleAccordion(index)}
                      aria-expanded={activeIndex === index}
                      className="flex items-center justify-between w-full px-6 py-5 text-xl font-bold text-left text-gray-900 sm:p-8"
                    >
                      <span>{item.question}</span>
                      <span className="ml-4">
                        {activeIndex === index ? (
                          <svg
                            className="w-6 h-6 text-gray-900"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M20 12H4"
                            />
                          </svg>
                        ) : (
                          <svg
                            className="w-6 h-6 text-gray-900"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 4v16m8-8H4"
                            />
                          </svg>
                        )}
                      </span>
                    </button>
                  </h3>

                  {activeIndex === index && (
                    <div className="px-6 pb-6 sm:px-8 sm:pb-8">
                      {item.answer}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* See More / See Less Button */}
          {faqItems.length > 5 && (
            <div className="flex justify-center mt-8">
              <button
                onClick={handleSeeMore}
                className="relative px-8 py-3 font-semibold text-black transition-all duration-300 rounded-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <span className="relative flex items-center space-x-2">
                  <span>{showMore ? 'Voir moins' : 'Voir plus'}</span>
                  <svg
                    className={`w-5 h-5 transition-transform duration-300 ${
                      showMore ? 'rotate-180' : ''
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

// Kept only the first 12 questions; normalized brand to "Juri-X-Immo"
const faqItems = [
  {
    question: "Qu'est-ce que Juri-X-Immo ?",
    answer:
      "Juri-X-Immo est un assistant juridique virtuel alimenté par l'intelligence artificielle, spécialisé dans l'immobilier. Il répond à vos questions juridiques de manière claire et concise.",
  },
  {
    question: "Comment fonctionne Juri-X-Immo ?",
    answer:
      "Juri-X-Immo s’appuie sur une IA avancée et une base de données juridiques régulièrement mise à jour. Posez votre question en langage naturel pour obtenir une réponse pertinente.",
  },
  {
    question: "Comment poser une question à Juri-X-Immo ?",
    answer:
      "Rédigez votre question dans la barre de recherche ou le champ de discussion. Plus votre question est précise, meilleure sera la réponse.",
  },
  {
    question:
      "Comment savoir si Juri-X-Immo a bien compris ma question ?",
    answer:
      "Juri-X-Immo vous indiquera s’il a besoin de précisions pour répondre. Vous pouvez reformuler si nécessaire.",
  },
  {
    question:
      "Quelles questions juridiques Juri-X-Immo peut-il traiter ?",
    answer:
      "Un large éventail de sujets liés à l’immobilier : bail, copropriété, fiscalité, achat/vente, travaux, etc.",
  },
  {
    question:
      "Juri-X-Immo peut-il donner des conseils juridiques personnalisés ?",
    answer:
      "Juri-X-Immo fournit des informations générales et des explications claires. Pour une situation complexe, consultez un avocat.",
  },
  {
    question: "Puis-je utiliser Juri-X-Immo pour rédiger un contrat ?",
    answer:
      "Juri-X-Immo aide à générer des documents prêts à l’emploi et à comprendre les clauses clés. Ces informations sont indicatives et ne remplacent pas l’avis d’un avocat.",
  },
  {
    question: "Quelles sont les limites de Juri-X-Immo ?",
    answer:
      "C’est un outil d’aide à la décision, qui ne remplace pas l’expertise d’un professionnel du droit pour les cas complexes.",
  },
  {
    question:
      "Juri-X-Immo est-il disponible 24h/24 et 7j/7 ?",
    answer:
      "Oui, Juri-X-Immo est disponible en permanence.",
  },
  {
    question:
      "Juri-X-Immo peut-il me tenir informé des évolutions législatives ?",
    answer:
      "Oui, il s’appuie sur une base de données juridiques tenue à jour pour suivre les évolutions législatives et réglementaires.",
  },
  {
    question: "Mes données sont-elles sécurisées ?",
    answer:
      "Nous assurons la confidentialité de vos données et protégeons vos informations personnelles.",
  },
  {
    question:
      "Quelles données personnelles Juri-X-Immo collecte-t-il ?",
    answer:
      "Principalement vos questions (pour améliorer le service) et certaines informations d’usage de la plateforme (fonctionnalités utilisées) afin de mieux comprendre vos besoins.",
  },
  // Removed the last 6 items per request
];
