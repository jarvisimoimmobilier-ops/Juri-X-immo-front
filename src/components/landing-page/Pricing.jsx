import React, { useEffect, useState } from 'react';
import { Check, Star, Zap, Shield, Users } from 'lucide-react';

// Mock auth service - replace with your actual implementation
const mockApiService = {
  get: (endpoint) => {
    // Simulate API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate no token case - change this to test different scenarios
        const hasToken = localStorage.getItem('authToken');
        if (hasToken) {
          resolve({
            data: {
              user: {
                auth_user: {
                  username: 'John Doe',
                  email: 'john@example.com'
                }
              }
            }
          });
        } else {
          reject(new Error('No token'));
        }
      }, 100);
    });
  },
  post: (endpoint, data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: {
            session: {
              url: `https://checkout.stripe.com/pay/${data.plan}`
            }
          }
        });
      }, 500);
    });
  }
};

const basicAndIndividualFeatures = [
  'Information et veille juridique',
  'Analyse juridique',
  'Expertise juridique',
  'Simulation de scénarios juridique et administratif',
  'Capacité à traiter des questions complexes',
  'Des réponses précises et simplifiées',
  'Conseils personnalisés adaptés à chaque situation',
  'Base de connaissances juridiques actualisées',
  'Outils interactifs : simulateur, générateur de documents',
  {
    title: 'Spécialisations :',
    items: [
      'Vente et achat de biens immobiliers',
      'Location immobilière',
      'Copropriété',
      'Construction immobilière',
      'Urbanisme et aménagement'
    ],
  },
];

const proFeatures = [
  'Analyse approfondie des besoins',
  {
    title: 'Information, Expertise, Simulation et Optimisation :',
    items: [
      'Juridique',
      'Administratif',
      'Économique',
      'Fiscal',
      'Financier',
      'Comptable',
      'Urbanistique',
      'Environnemental',
    ],
  },
  {
    title: 'Génération et rédaction de documents techniques :',
    items: ['Contrats', 'Recours / requêtes', 'Études / Rapports', 'Courriers / Notes'],
  },
  'Réponses plus précises et détaillées à des questions complexes',
  'Conseils personnalisés adaptés aux besoins spécifiques',
  'Base de connaissances juridiques et fiscales actualisées',
  'Outils interactifs avancés : simulateurs, calculateurs',
  {
    title: 'Spécialisations étendues :',
    items: [
      'Droit immobilier complet',
      'Fiscalité immobilière et optimisation',
      'Financement immobilier',
      'Gestion de patrimoine',
      'Contentieux de l\'immobilier',
    ],
  },
];

const plans = [
  {
    id: 'ChatbotBasic',
    label: 'Basic',
    subtitle: '5 messages par tranche de 3h',
    price: '0',
    period: 'Gratuit',
    features: basicAndIndividualFeatures.slice(0, 6),
    icon: Shield,
    popular: false,
    description: 'Parfait pour découvrir notre plateforme',
    highlight: 'Essai gratuit'
  },
  {
    id: 'ChatbotIndividual',
    label: 'Individual',
    subtitle: 'Messages illimités',
    price: '19,99',
    period: '/ mois',
    features: basicAndIndividualFeatures,
    icon: Users,
    popular: true,
    description: 'Idéal pour les particuliers et petites entreprises',
    highlight: 'Le plus populaire'
  },
  {
    id: 'ChatbotPro',
    label: 'Professionnel',
    subtitle: 'Messages illimités',
    price: '99,99',
    period: '/ mois',
    features: proFeatures,
    icon: Zap,
    popular: false,
    description: 'Pour les professionnels exigeants',
    highlight: 'Complet'
  },
];

const PricingSection = () => {
  const [userData, setUserData] = useState({ name: '', email: '' });
  const [loading, setLoading] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);

  // Check authentication status
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await mockApiService.get('/user');
        const { username, email } = res.data.user.auth_user;
        setUserData({ name: username, email });
        setIsAuthenticated(true);
      } catch (err) {
        setIsAuthenticated(false);
      } finally {
        setCheckingAuth(false);
      }
    };
    checkAuth();
  }, []);

  // Remove the checkout function since we're not using it
  // const sendPlanToCheckout = async (planId) => { ... }

  const handleChoose = (planId) => {
    if (!isAuthenticated) {
      // Redirect to login page
      window.location.href = '/login';
      return;
    }

    // If user is authenticated, always redirect to payout page
    window.location.href = '/payout';
  };

  if (checkingAuth) {
    return (
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="flex justify-center items-center">
          <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-base font-semibold text-blue-600 mb-4">
            Plans tarifaires
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Choisissez votre
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 ml-2">
              abonnement
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            + de 500 sources juridiques dont Légifrance
          </p>
          
          {/* Auth status indicator */}
          {isAuthenticated && (
            <div className="mt-4 inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              Connecté en tant que {userData.name}
            </div>
          )}
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan) => {
            const Icon = plan.icon;
            const isPopular = plan.popular;
            const isLoading = loading[plan.id];
            
            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:scale-[1.02] ${
                  isPopular
                    ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white ring-4 ring-blue-200 shadow-2xl transform scale-[1.05]'
                    : 'bg-white border border-gray-200 shadow-lg hover:shadow-xl'
                }`}
              >
                {/* Popular badge */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-orange-400 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      {plan.highlight}
                    </div>
                  </div>
                )}

                {/* Card content */}
                <div className="text-center mb-6 lg:mb-8">
                  <div className="flex justify-center mb-4">
                    <div className={`p-3 rounded-full ${isPopular ? 'bg-white/20' : 'bg-blue-100'}`}>
                      <Icon className={`w-6 h-6 lg:w-8 lg:h-8 ${isPopular ? 'text-white' : 'text-blue-600'}`} />
                    </div>
                  </div>
                  
                  <h3 className={`text-xl lg:text-2xl font-bold mb-2 ${isPopular ? 'text-white' : 'text-gray-900'}`}>
                    {plan.label}
                  </h3>
                  
                  <p className={`text-sm mb-4 ${isPopular ? 'text-white/80' : 'text-gray-600'}`}>
                    {plan.description}
                  </p>
                  
                  <div className="flex items-baseline justify-center gap-1 mb-2">
                    <span className={`text-3xl lg:text-4xl font-bold ${isPopular ? 'text-white' : 'text-gray-900'}`}>
                      {plan.price}€
                    </span>
                    <span className={`text-base lg:text-lg ${isPopular ? 'text-white/80' : 'text-gray-600'}`}>
                      {plan.period}
                    </span>
                  </div>
                  
                  <p className={`text-sm ${isPopular ? 'text-white/80' : 'text-gray-600'}`}>
                    {plan.subtitle}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-3 lg:space-y-4 mb-6 lg:mb-8 max-h-64 overflow-y-auto">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className={`w-4 h-4 lg:w-5 lg:h-5 mt-0.5 flex-shrink-0 ${
                        isPopular ? 'text-white' : 'text-green-500'
                      }`} />
                      <div className="min-w-0">
                        {typeof feature === 'string' ? (
                          <span className={`text-sm ${isPopular ? 'text-white' : 'text-gray-700'}`}>
                            {feature}
                          </span>
                        ) : (
                          <div>
                            <span className={`text-sm font-semibold ${
                              isPopular ? 'text-white' : 'text-gray-900'
                            }`}>
                              {feature.title}
                            </span>
                            {feature.items && (
                              <ul className="mt-2 space-y-1 ml-4">
                                {feature.items.map((item, i) => (
                                  <li key={i} className={`text-xs ${
                                    isPopular ? 'text-white/80' : 'text-gray-600'
                                  }`}>
                                    • {item}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => handleChoose(plan.id)}
                  disabled={isLoading}
                  className={`w-full py-3 lg:py-4 px-6 rounded-xl font-semibold text-base lg:text-lg transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed ${
                    isPopular
                      ? 'bg-white text-blue-600 hover:bg-gray-50 shadow-lg'
                      : plan.id === 'ChatbotPro'
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                      Chargement...
                    </div>
                  ) : (
                    <>
                      {!isAuthenticated ? (
                        'Se connecter'
                      ) : (
                        'Voir les tarifs'
                      )}
                    </>
                  )}
                </button>
              </div>
            );
          })}
        </div>

        {/* Bottom section */}
        <div className="mt-12 lg:mt-16 text-center">
          <p className="text-gray-600 mb-4 text-sm lg:text-base">
            Toutes les formules incluent un accès à notre base de données juridiques actualisées
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>Sécurisé</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4" />
              <span>Sans engagement</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              <span>Activation immédiate</span>
            </div>
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default PricingSection;