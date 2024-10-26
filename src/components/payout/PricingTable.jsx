import React from 'react';

// PricingCard component
function PricingCard({ title, price, description, features, buttonStyle, textColor, bgColor }) {
  return (
    <div className={`overflow-hidden border border-gray-200 rounded-2xl ${bgColor}`}>
      <div className="p-6 lg:px-10 lg:py-8">
        <h3 className={`text-lg font-bold ${textColor} font-pj`}>{title}</h3>
        <p className={`mt-3 text-5xl font-bold ${textColor} font-pj`}>{price}</p>
        <p className={`mt-5 text-base font-normal leading-7 ${textColor} font-pj`}>{description}</p>
        <a
          href="#"
          title=""
          className={`
            inline-flex items-center justify-center px-8 py-3.5 w-full mt-8 text-base font-bold transition-all
            duration-200 border-2 rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 ${buttonStyle}
          `}
          role="button"
        >
          Get Started
        </a>
        <p className={`mt-8 text-base font-bold ${textColor} font-pj`}>What's included:</p>
        <ul className={`mt-4 space-y-3 text-base font-medium ${textColor} font-pj`}>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Main PricingTable component
export default function PricingTable() {
  return (
    <div>
      <section className="py-12 bg-white sm:py-10 lg:py-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-xl px-8 mx-auto text-center md:px-0">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
              Make the wise decision for your business
            </h2>
            <p className="mt-6 text-lg font-normal text-gray-600 font-pj">
              Choose from our affordable 3 packages
            </p>
          </div>

          <div className="grid max-w-sm grid-cols-1 gap-6 mx-auto mt-8 text-center md:text-left md:mt-16 md:max-w-6xl md:grid-cols-3">
            <PricingCard
              title="Starter"
              price="$15"
              description="Best for small business owners, startups who need a landing page for their business."
              features={["130+ Coded Blocks", "Best for Developers, Freelancers", "Made with TailwindCSS"]}
              buttonStyle="text-gray-900 border-gray-400 hover:bg-gray-900 focus:bg-gray-900 hover:text-white focus:text-white hover:border-gray-900 focus:border-gray-900"
              textColor="text-gray-900"
              bgColor="bg-white"
            />

            <div className="relative">
              <div className="absolute -inset-4">
                <div
                  className="w-full h-full mx-auto rotate-180 opacity-30 blur-lg filter"
                  style={{
                    background: 'linear-gradient(90deg, #FFA709 -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)',
                  }}
                ></div>
              </div>
              <PricingCard
                title="Standard"
                price="$25"
                description="Best for medium business owners, startups who need a landing page for their business."
                features={["130+ Coded Blocks", "Best for Developers, Freelancers", "Made with TailwindCSS", "Premium Support", "Future Updates"]}
                buttonStyle="text-gray-900 bg-white border-transparent hover:bg-opacity-90"
                textColor="text-white"
                bgColor="bg-customBlue"
              />
            </div>

            <PricingCard
              title="Premium"
              price="$45"
              description="Best for large companies, business owners who need a landing page for their business."
              features={["130+ Coded Blocks", "Best for Developers, Freelancers", "Made with TailwindCSS", "Premium Support", "Future Updates"]}
              buttonStyle="text-gray-900 border-gray-400 hover:bg-gray-900 focus:bg-gray-900 hover:text-white focus:text-white hover:border-gray-900 focus:border-gray-900"
              textColor="text-gray-900"
              bgColor="bg-white"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
