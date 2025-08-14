import React, { useState } from 'react';
import { Check, Star, Zap, Shield, Users, ArrowRight, Sparkles } from 'lucide-react';

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      id: 'basic',
      name: 'Découverte',
      subtitle: 'Pour commencer',
      monthlyPrice: 0,
      annualPrice: 0,
      originalMonthlyPrice: null,
      features: [
        '5 questions par jour',
        'Réponses juridiques de base',
        'Accès aux lois essentielles',
        'Chat en temps réel',
        'Support par email'
      ],
      limitations: [
        'Documents limités (3/mois)',
        'Pas de simulations avancées'
      ],
      icon: Shield,
      popular: false,
      cta: 'Commencer gratuitement',
      description: 'Découvrez JARVISIMO sans engagement'
    },
    {
      id: 'individual',
      name: 'Particulier',
      subtitle: 'Pour les propriétaires',
      monthlyPrice: 19.99,
      annualPrice: 16.99,
      originalMonthlyPrice: 24.99,
      features: [
        'Questions illimitées',
        'Tous les domaines immobiliers',
        'Génération de documents (baux, contrats)',
        'Simulations fiscales',
        'Conseils personnalisés',
        'Base juridique complète',
        'Support prioritaire',
        'Alertes réglementaires'
      ],
      limitations: [],
      icon: Users,
      popular: true,
      cta: "Choisir Particulier",
      description: 'Parfait pour gérer votre patrimoine immobilier'
    },
    {
      id: 'professional',
      name: 'Professionnel',
      subtitle: 'Pour les experts',
      monthlyPrice: 99.99,
      annualPrice: 83.99,
      originalMonthlyPrice: 129.99,
      features: [
        'Tout du plan Particulier',
        'Analyses juridiques approfondies',
        'Documents juridiques complexes',
        'Optimisation fiscale avancée',
        'Simulations multi-scénarios',
        'API et intégrations',
        'Support téléphonique dédié',
        'Formation personnalisée',
        'Rapports d\'expertise',
        'Veille juridique personnalisée'
      ],
      limitations: [],
      icon: Zap,
      popular: false,
      cta: "Choisir Professionnel",
      description: 'La solution complète pour les professionnels'
    }
  ];

  const scrollToCTA = () => {
    // Scroll to hero section or signup
    document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id='pricing' className="py-16 bg-gradient-to-br from-gray-50 via-white to-purple-50 sm:py-20 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-800 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Tarifs transparents
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl font-pj mb-6">
            Choisissez votre
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              abonnement JARVISIMO
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 mb-8">
            + de 500 sources juridiques actualisées • Conforme aux lois 2025
          </p>

          {/* Annual/Monthly Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Mensuel
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative inline-flex items-center h-6 rounded-full w-11 bg-gradient-to-r from-blue-600 to-purple-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <span
                className={`${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
              />
            </button>
            <span className={`text-sm font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Annuel
            </span>
            {isAnnual && (
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                -15% de réduction
              </span>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 xl:gap-8">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const currentPrice = isAnnual ? plan.annualPrice : plan.monthlyPrice;
            const isPopular = plan.popular;
            
            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl transition-all duration-300 hover:scale-105 ${
                  isPopular
                    ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-2xl ring-4 ring-blue-200 transform scale-105'
                    : 'bg-white border-2 border-gray-100 shadow-xl hover:shadow-2xl hover:border-blue-200'
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-orange-400 to-pink-400 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
                      <Star className="w-4 h-4" />
                      Le plus populaire
                    </div>
                  </div>
                )}

                <div className="p-8 lg:p-10">
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <div className="flex justify-center mb-4">
                      <div className={`p-4 rounded-2xl ${
                        isPopular ? 'bg-white/20' : 'bg-gradient-to-br from-blue-100 to-purple-100'
                      }`}>
                        <Icon className={`w-8 h-8 ${isPopular ? 'text-white' : 'text-blue-600'}`} />
                      </div>
                    </div>
                    
                    <h3 className={`text-2xl font-bold mb-2 ${isPopular ? 'text-white' : 'text-gray-900'}`}>
                      {plan.name}
                    </h3>
                    
                    <p className={`text-sm mb-6 ${isPopular ? 'text-white/80' : 'text-gray-600'}`}>
                      {plan.description}
                    </p>
                    
                    {/* Pricing */}
                    <div className="mb-4">
                      <div className="flex items-baseline justify-center">
                        <span className={`text-5xl font-bold ${isPopular ? 'text-white' : 'text-gray-900'}`}>
                          {currentPrice}€
                        </span>
                        {currentPrice > 0 && (
                          <span className={`text-lg ml-2 ${isPopular ? 'text-white/80' : 'text-gray-600'}`}>
                            /mois
                          </span>
                        )}
                      </div>
                      
                      {isAnnual && plan.monthlyPrice > 0 && (
                        <p className={`text-sm mt-2 ${isPopular ? 'text-white/70' : 'text-gray-500'}`}>
                          au lieu de {plan.monthlyPrice}€/mois
                        </p>
                      )}
                      
                      {currentPrice === 0 && (
                        <p className={`text-lg font-medium ${isPopular ? 'text-white' : 'text-blue-600'}`}>
                          Gratuit à vie
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-4 mb-8">
                    <h4 className={`font-semibold text-sm uppercase tracking-wide ${
                      isPopular ? 'text-white/90' : 'text-gray-500'
                    }`}>
                      Fonctionnalités incluses
                    </h4>
                    
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                          isPopular ? 'bg-white/20' : 'bg-green-100'
                        }`}>
                          <Check className={`w-3 h-3 ${isPopular ? 'text-white' : 'text-green-600'}`} />
                        </div>
                        <span className={`text-sm ${isPopular ? 'text-white' : 'text-gray-700'}`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                    
                    {plan.limitations.length > 0 && (
                      <>
                        <h4 className={`font-semibold text-sm uppercase tracking-wide mt-6 ${
                          isPopular ? 'text-white/90' : 'text-gray-500'
                        }`}>
                          Limitations
                        </h4>
                        {plan.limitations.map((limitation, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 bg-orange-100">
                              <span className="w-3 h-3 text-orange-600 text-xs">!</span>
                            </div>
                            <span className={`text-sm ${isPopular ? 'text-white/80' : 'text-gray-600'}`}>
                              {limitation}
                            </span>
                          </div>
                        ))}
                      </>
                    )}
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={scrollToCTA}
                    className={`w-full py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2 ${
                      isPopular
                        ? 'bg-white text-blue-600 hover:bg-gray-50 shadow-lg'
                        : plan.id === 'professional'
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg'
                        : 'bg-gray-900 text-white hover:bg-gray-800 shadow-lg'
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  
                  {plan.id === 'basic' && (
                    <p className={`text-center text-xs mt-3 ${isPopular ? 'text-white/70' : 'text-gray-500'}`}>
                      Aucune carte de crédit requise
                    </p>
                  )}
                  
                  {plan.id !== 'basic' && (
                    <p className={`text-center text-xs mt-3 ${isPopular ? 'text-white/70' : 'text-gray-500'}`}>
                      Essai gratuit de 7 jours
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-gray-600">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-500" />
              <span className="text-sm font-medium">Paiement sécurisé</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-500" />
              <span className="text-sm font-medium">Sans engagement</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-green-500" />
              <span className="text-sm font-medium">Activation immédiate</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-green-500" />
              <span className="text-sm font-medium">Support 7j/7</span>
            </div>
          </div>
          
          <div className="mt-8 max-w-2xl mx-auto">
            <p className="text-gray-600 text-sm leading-relaxed">
              Tous nos abonnements incluent un accès complet à notre base de données juridiques actualisées quotidiennement, 
              avec plus de 500 sources officielles incluant Légifrance, codes juridiques, et jurisprudences récentes.
            </p>
          </div>
        </div>

        {/* FAQ Quick Links */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Des questions sur nos tarifs ?
          </h3>
          <p className="text-gray-600 mb-6">
            Consultez notre FAQ ou contactez notre équipe pour obtenir des réponses personnalisées
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center px-6 py-3 text-gray-700 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
            >
              Voir la FAQ
            </button>
            <button
              onClick={scrollToCTA}
              className="inline-flex items-center justify-center px-6 py-3 text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-colors"
            >
              Nous contacter
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;