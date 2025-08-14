import React from 'react'
import Header from '../components/landing-page/Header'
import Hero from '../components/landing-page/Hero'
import FAQ from '../components/landing-page/FAQ'
import Features from '../components/landing-page/Features'
import Footer from '../components/landing-page/Footer'
import FeaturesSection from '../components/landing-page/FeaturesSection'
import HowItWorks from '../components/landing-page/HowItWorks'
import PricingSection from '../components/landing-page/Pricing'
import MoreFeatureSection from '../components/landing-page/MoreFeatures'
import BackToTopButton from '../components/landing-page/BackToTopButton'

import DialogueSection from '../components/landing-page/DialogueSection'
import ScenarioSection from '../components/landing-page/ScenarioSection'
import DocumentSection from '../components/landing-page/DocumentSection'
import IntroSection from '../components/landing-page/IntroSection'
import VideoSection from '../components/landing-page/VideoSection'
import ExampleSection from '../components/landing-page/ExampleSection'
import BannerSection from '../components/landing-page/BannerSection'

export default function LandingPage() {

  return (
    <div>
        {/* <div class="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#f3ad8f_100%)]"></div> */}
        {/* <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div> */}

      <Header />
     
      {/* Hero Section */}
      <div id="hero">
        <Hero />
      </div>
      
      {/* Section 2: Banner - L'IA spécialisé dans l'immobilier */}
      <BannerSection />
      
      {/* Section 3: Dialogue avec vous - image à droite */}
      <div id="dialogue">
        <DialogueSection />
      </div>
      
      {/* Section 4: Projette un scénario - image à gauche */}
      <div id="scenarios">
        <ScenarioSection />
      </div>
      
      {/* Section 5: Génère vos documents - image à droite */}
      <div id="documents">
        <DocumentSection />
      </div>
      
      {/* Section 6: On a tous une question sur l'habitat */}
      <IntroSection />
      
      {/* Section 7: Scroll Stopper Video */}
      <VideoSection />
      
      {/* Section 8: Exemple de fonctionnalité */}
      <div id="examples">
        <ExampleSection />
      </div>

      {/* Pricing Section */}
      <div id='tarifs'>
        <PricingSection />
      </div>

      {/* FAQ Section */}
      <div id="faq">
        <FAQ />
      </div>

      <Footer />
      
      {/* Back to top button if you're using it */}
      {/* <BackToTopButton /> */}
    </div>
  )
}