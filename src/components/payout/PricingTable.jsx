import React, { useEffect, useState } from 'react';
import { Check, Star, Zap, Shield, Users } from 'lucide-react';
import {apiService} from '../../services/authService';

// -----------------------------------------------------------------------------
// 1.  DATA  -------------------------------------------------------------------
const basicAndIndividualFeatures = [
  'Information et veille juridique',
  'Analyse juridique',
  'Expertise juridique',
  'Simulation de scénarios juridique et administratif',
  'Capacité à traiter des questions complexes',
  'Des réponses précises et simplifiées',
  { title: 'Conseils personnalisés : Capacité à adapter les réponses à chaque situation.' },
  'Base de connaissances : Accès à une base de données juridiques actualisées.',
  'Outils interactifs : simulateur, générateur de documents.',
  {
    title: 'Spécialisations :',
    items: [
      'Vente et achat de biens immobiliers',
      'Location immobilière',
      'Copropriété',
      'Construction immobilière',
      'Urbanisme et aménagement',
      'Environnement et droit immobilier',
      'Expertise judiciaire en matière immobilière',
    ],
  },
];

const proFeatures = [
  'Analyse approfondie des besoins',
  {
    title: 'Information, Expertise, Simulation et Optimisation de scénarios :',
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
    title: 'Génération et rédaction de documents juridiques techniques :',
    items: ['Contrats', 'Recours / requêtes', 'Études / Rapports', 'Courriers / Notes'],
  },
  'Des réponses plus précises et détaillées à des questions complexes adaptées aux besoins spécifiques des utilisateurs.',
  { title: 'Conseils personnalisés : Capacité à adapter les réponses à chaque situation.' },
  'Base de connaissances : Accès à une base de données juridiques et fiscales actualisées.',
  'Outils interactifs : simulateurs, calculateurs, générateurs de documents.',
  {
    title: 'Spécialisations :',
    items: [
      'Droit immobilier : propriété, construction, copropriété, urbanisme, location…',
      'Fiscalité immobilière : optimisation fiscale, incitations fiscales, taxation immobilière…',
      'Financement immobilier : prêts, crédits, investissements…',
      // 'Gestion de patrimoine : stratégies d"optimisation fiscale et transmission patrimoniale.',
      'Contentieux de l"immobilier : résolution de litiges, procédures judiciaires et administratives.',
    ],
  },
];

const plans = [
  {
    id: 'ChatbotBasic',
    label: 'Basic',
    subtitle: '5 messages par tranche de 3 h',
    price: '0',
    period: 'Gratuit',
    features: basicAndIndividualFeatures,
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

// -----------------------------------------------------------------------------
// 2.  PAGE  -------------------------------------------------------------------
export default function PricingPage() {
  const [userData, setUserData] = useState({ name: '', email: '' });
  const [loading, setLoading] = useState({});

  // ─── Fetch current user ─────────────────────────────────────────────────────
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await apiService.get('/user');
        const { username, email } = res.data.user.auth_user;
        setUserData({ name: username, email });
      } catch (err) {
        console.error('Error fetching user:', err.message);
      }
    };
    fetchUser();
  }, []);

  // ─── Checkout helpers ───────────────────────────────────────────────────────
  const sendPlanToCheckout = async (planId) => {
    setLoading({ [planId]: true });
    try {
      const res = await apiService.post('/checkout', {
        name: userData.name,
        email: userData.email,
        plan: planId,
      });
      const url = res.data.session?.url;
      if (url) window.location.href = url;
      else console.error('Checkout URL not found in response.');
    } catch (err) {
      console.error('Error during checkout:', err.message);
    } finally {
      setLoading({ [planId]: false });
    }
  };

  const handleChoose = (planId) => {
    if (planId === 'ChatbotBasic') {
      // Free plan – just redirect to the app or dashboard
      window.location.href = '/conversations';
    } else {
      sendPlanToCheckout(planId);
    }
  };

  // ---------------------------------------------------------------------------
  // 3.  RENDER  ----------------------------------------------------------------
  return (
    <section  className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 lg:mb-6">
            Choisissez votre
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 ml-2 lg:ml-3">
              abonnement
            </span>
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            + de 500 sources juridiques dont Légifrance
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-6">
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
                <div className="space-y-3 lg:space-y-4 mb-6 lg:mb-8 max-h-80 lg:max-h-96 overflow-y-auto">
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
                    plan.id === 'ChatbotBasic'
                      ? 'Commencer gratuitement'
                      : `Choisir l'abonnement ${plan.label.toLowerCase()}`
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
}