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

export default function LandingPage() {
  return (
    <div>
        {/* <div class="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#f3ad8f_100%)]"></div> */}
        {/* <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div> */}

      <Header />
      <Hero />
      <div class="pb-12 bg-white">
            <div class="relative">
                <div class="absolute inset-0 h-2/3 bg-gray-50"></div>
                <div class="relative mx-auto">
                    <div class="lg:max-w-6xl lg:mx-auto">
                        <img class="transform scale-110" src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/2/illustration.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
      <Features />
     <FeaturesSection />
     <HowItWorks />
     <MoreFeatureSection />
     <BackToTopButton />
     {/* <PricingSection /> */}
      <FAQ />
      <Footer />
 {/* header
      footer
      hero
      pricing
      Our Avatars - Feature
      RoadMap  */}
    </div>
  )
}
