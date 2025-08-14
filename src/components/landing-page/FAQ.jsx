import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
   const [showMore, setShowMore] = useState(false);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const handleSeeMore = () => {
    setShowMore(!showMore);
  };

  // Show only first 5 items initially, or all if showMore is true
  const displayedItems = showMore ? faqItems : faqItems.slice(0, 5);

  return (
    <section id="faq" className="py-16 bg-white lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl">Frequently Asked Questions</h2>
          <p className="max-w-lg mx-auto mt-6 text-base text-gray-600">With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
        </div>

        <div className="max-w-4xl mx-auto mt-8 sm:mt-14">
     <div>
      <div className="space-y-4">
        {displayedItems.map((item, index) => (
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

      {/* See More / See Less Button */}
      {faqItems.length > 5 && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleSeeMore}
            className="relative px-8 py-3 font-semibold text-black transition-all duration-300 rounded-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            {/* Gradient background */}
            {/* <div className="absolute inset-0 rounded-xl" style={{ background: 'linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)' }}></div> */}
            
            {/* Button content */}
            <span className="relative flex items-center space-x-2">
              <span>{showMore ? 'Voir moins' : 'Voir plus'}</span>
              <svg 
                className={`w-5 h-5 transition-transform duration-300 ${showMore ? 'rotate-180' : ''}`} 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>
        </div>
      )}
    </div>
    </div>
      </div>
    </section>
  );
};

export default FAQ;

const faqItems = [
  {
    question: "Qu'est-ce que Juri X Immo ?",
    answer: "Juri X Immo est un assistant juridique virtuel alimenté par l'intelligence artificielle, spécialisé dans le domaine de l'immobilier. Il est conçu pour répondre à vos questions juridiques de manière claire et concise."
  },
  {
    question: "Comment fonctionne Juri X Immo ?",
    answer: "Juri X Immo est basé sur une technologie d'intelligence artificielle avancée qui lui permet de comprendre le langage naturel et d'accéder à une base de données juridiques constamment mise à jour. Il suffit de lui poser votre question en langage naturel pour obtenir une réponse pertinente."
  },
  {
    question: "Comment poser une question à Juri X Immo ?",
    answer: "Il suffit de rédiger votre question dans la barre de recherche ou dans le champ de discussion. Plus votre question est précise, meilleure sera la réponse."
  },
  {
    question: "Comment puis-je savoir si Juri X Immo est en train de comprendre ma question ?",
    answer: "Juri X Immo vous indiquera s'il a besoin de plus d'informations pour répondre à votre question. Vous pouvez également reformuler votre question si nécessaire."
  },
  {
    question: "Quelles sont les questions juridiques que Juri X Immo peut traiter ?",
    answer: "Juri X Immo peut répondre à un large éventail de questions juridiques liées à l'immobilier."
  },
  {
    question: "Juri X Immo peut-il me donner des conseils juridiques personnalisés ?",
    answer: "Juri X Immo peut vous fournir des informations générales et des explications claires sur les sujets juridiques que vous abordez. Cependant, il ne peut pas remplacer l'avis d'un avocat pour une situation personnelle complexe."
  },
  {
    question: "Puis-je utiliser Juri X Immo pour rédiger un contrat ?",
    answer: "Juri X Immo vous aide à rédiger des documents techniques et professionnels prêts à l'utilisation et vous fournit des informations générales sur les éléments clés d'un contrat et vous aide à comprendre les termes juridiques. Cependant, les informations fournies par Juri X Immo sont à titre indicatif et ne constituent en aucun cas un avis juridique. Pour toute question juridique spécifique, il est recommandé de consulter un avocat."
  },
  {
    question: "Quelles sont les limites de Juri X Immo ?",
    answer: "Juri X Immo est un outil d'aide à la décision, mais il ne peut pas remplacer l'avis d'un professionnel du droit. Il est important de consulter un avocat pour toute situation complexe."
  },
  {
    question: "Juri X Immo est-il disponible 24h/24 et 7j/7 ?",
    answer: "Oui, Juri X Immo est disponible en permanence pour répondre à toutes vos questions."
  },
  {
    question: "Juri X Immo peut-il me tenir informé des évolutions législatives ?",
    answer: "Juri X Immo dispose d'un accès à une base de données juridiques constamment mise à jour, pour être au fait des évolutions législatives et réglementaires."
  },
  {
    question: "Est-ce que mes données sont sécurisées ?",
    answer: "Nous assurons la confidentialité de vos données utilisateur et nous nous engageons à protéger vos informations personnelles."
  },
  {
    question: "Quelles sont les données personnelles que JARVISIMO collecte ?",
    answer: "Les informations que nous recueillons sont principalement : les questions que vous posez (ces données nous permettent d'améliorer continuellement les réponses de JARVISIMO et de développer de nouvelles fonctionnalités adaptées à vos besoins) et vos interactions avec la plateforme (nous enregistrons certaines informations sur votre utilisation de JARVISIMO, telles que les fonctionnalités que vous utilisez le plus souvent, afin de mieux comprendre vos attentes)."
  },
  {
    question: "Quels sont les risques liés à l'achat d'un bien immobilier en viager ?",
    answer: "L'achat en viager présente des risques spécifiques, notamment liés à la durée de vie du vendeur et à l'état du bien. JARVISIMO peut vous expliquer les mécanismes du viager et vous informer sur les précautions à prendre."
  },
  {
    question: "Comment faire une déclaration de travaux ?",
    answer: "Les démarches pour réaliser des travaux varient en fonction de la nature des travaux et de la localisation du bien. JARVISIMO peut vous indiquer les démarches générales à suivre et vous orienter vers les autorités compétentes."
  },
  {
    question: "Quels sont mes droits en tant que copropriétaire ?",
    answer: "En tant que copropriétaire, vous disposez de droits et d'obligations définis par la loi et le règlement de copropriété. JARVISIMO peut vous expliquer vos droits et vous informer sur les règles de la copropriété."
  },
  {
    question: "Comment contester une facture d'eau trop élevée ?",
    answer: "Si vous estimez que votre facture d'eau est trop élevée, vous pouvez contester auprès de votre fournisseur. JARVISIMO peut vous indiquer les démarches à suivre et vous fournir des conseils pour contester efficacement votre facture."
  },
  {
    question: "Puis-je louer mon appartement meublé ?",
    answer: "Oui, il est possible de louer un appartement meublé. Cependant, la location meublée est soumise à des réglementations spécifiques. JARVISIMO peut vous expliquer les différences entre la location meublée et la location nue, et vous informer sur les obligations du bailleur et du locataire."
  },
  {
    question: "Quels sont les impôts liés à la vente d'un bien immobilier ?",
    answer: "La vente d'un bien immobilier est soumise à différents impôts, tels que les droits de mutation, l'impôt sur le revenu et la plus-value immobilière. Les modalités de calcul de ces impôts varient en fonction de votre situation personnelle et du type de bien. JARVISIMO peut vous donner une vue d'ensemble des différents impôts applicables."
  }
];