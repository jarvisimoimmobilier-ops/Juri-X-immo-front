import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-white lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl">Frequently Asked Questions</h2>
          <p className="max-w-lg mx-auto mt-6 text-base text-gray-600">With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
        </div>

        <div className="max-w-4xl mx-auto mt-8 sm:mt-14">
      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <div key={index} className="relative">
            <div className="absolute -inset-1">
              <div className="w-full h-full mx-auto opacity-30 blur-lg filter" style={{ background: 'linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)' }}></div>
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
                      <svg className="w-6 h-6 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                      </svg>
                    ) : (
                      <svg className="w-6 h-6 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
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
    </div>
      </div>
    </section>
  );
};

export default FAQ;


const faqItems = [
  {
    question: "Qu'est-ce que JARVISIMO ?",
    answer: "JARVISIMO est un assistant juridique virtuel, alimenté par l'intelligence artificielle, spécialisé dans le domaine de l'immobilier. Il est conçu pour répondre à vos questions juridiques de manière claire et concise."
  },
  {
    question: "Comment fonctionne JARVISIMO ?",
    answer: "JARVISIMO est basé sur une technologie d'intelligence artificielle avancée qui lui permet de comprendre le langage naturel et d'accéder à une base de données juridiques constamment mise à jour. Il suffit de lui poser votre question en langage naturel pour obtenir une réponse pertinente."
  },
  {
    question: "Comment poser une question à JARVISIMO ?",
    answer: "Il suffit de taper votre question dans la barre de recherche ou dans le champ de discussion. Plus votre question est précise, meilleure sera la réponse."
  },
  {
    question: "Comment puis-je savoir si JARVISIMO est en train de comprendre ma question ?",
    answer: "JARVISIMO vous indiquera s'il a besoin de plus d'informations pour répondre à votre question. Vous pouvez également reformuler votre question si nécessaire."
  },
  {
    question: "Quelles sont les questions juridiques que JARVISIMO peut traiter ?",
    answer: "JARVISIMO peut répondre à un large éventail de questions juridiques liées à l'immobilier."
  },
  {
    question: "JARVISIMO peut-il me donner des conseils juridiques personnalisés ?",
    answer: "JARVISIMO peut vous fournir des informations générales et des explications claires sur les sujets juridiques que vous abordez. Cependant, il ne peut pas remplacer l'avis d'un avocat pour une situation personnelle complexe."
  },
  {
    question: "Puis-je utiliser JARVISIMO pour rédiger un contrat ?",
    answer: "JARVISIMO vous aide à rédiger des documents techniques et professionnels prêts à l'emploi et vous fournit des informations générales sur les éléments clés d'un contrat et vous aide à comprendre les termes juridiques. Cependant, la rédaction d'un contrat est un acte juridique qui nécessite l'intervention d'un professionnel du droit."
  },
  {
    question: "Quelles sont les limites de JARVISIMO ?",
    answer: "JARVISIMO est un outil d'aide à la décision, mais il ne peut pas remplacer l'avis d'un professionnel du droit. Il est important de consulter un avocat pour toute situation complexe."
  },
  {
    question: "JARVISIMO est-il disponible 24h/24 et 7j/7 ?",
    answer: "Oui, JARVISIMO est disponible en permanence pour répondre à toutes vos questions."
  },
  {
    question: "JARVISIMO peut-il me tenir informé des évolutions législatives ?",
    answer: "Jarvisimo dispose d’un accès à une base de données juridiques constamment mis à jour, pour être au fait des évolutions législatives et réglementaires."
  },
];