import React from 'react';
import propertyManager from '../../assets/images/PropertyManager.png';
import indivAvatar from '../../assets/images/IndAvatar.png';

const FeatureSection = () => {
  const features = [
    {
      title: 'Chatbot pour les Gestionnaires de Propriété',
      description: 'Répond aux questions des locataires, fournit des informations sur les baux et gère les demandes de maintenance pour les gestionnaires de propriété.',
      imageUrl: propertyManager
    },
    {
      title: 'Chatbot pour les Individus',
      description: 'Aide à la recherche de propriétés, offre des conseils juridiques et fournit des tendances du marché pour les utilisateurs individuels.',
      imageUrl: indivAvatar
    }
  ];

  return (
    <section className="py-16 bg-gray-50 lg:py-24">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-xl mx-auto text-center xl:max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl">
            Les Derniers et Meilleurs Assistants Avatars
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Découvrez nos chatbots innovants conçus pour vous assister dans la gestion de propriété et les tâches personnelles avec facilité et efficacité.
          </p>
        </div>

        <div className="grid grid-cols-1 mt-12 sm:grid-cols-2 
        gap-y-10 sm:gap-x-8 
        lg:gap-x-12 lg:mt-20">
          {features.map((feature, index) => (
            <div key={index} className="relative flex flex-col items-center bg-white shadow-lg rounded-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="w-full h-40 bg-gradient-to-r from-customBlue to-customOrange flex items-center justify-center">
                <img src={feature.imageUrl} alt={feature.title} className="w-24 h-24 rounded-full shadow-md bg-white p-2 transform transition duration-300 hover:rotate-12" />
              </div>
              <div className="p-6 lg:p-8">
                <h3 className="text-2xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-4 text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
