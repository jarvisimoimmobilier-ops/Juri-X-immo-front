import React from 'react';

// PricingCard component
function PricingCard({ title, price, description, features, buttonColor, textColor, bgColor, buttonBgColor }) {
  return (
    <div className={`overflow-hidden border border-gray-200 rounded-2xl ${bgColor}`}>
      <div className="p-6 lg:px-10 lg:py-8">
        <h3 className={`text-lg font-bold ${textColor} font-pj`}>{title}</h3>
        <p className={`mt-3 text-5xl font-bold ${textColor} font-pj`}>{price}</p>
        <p className={`mt-5 text-base font-normal leading-7 ${textColor} font-pj`}>{description}</p>
        <a
          href="#"
          title=""
        //   className={`
        //     inline-flex items-center justify-center px-8 py-3.5 w-full mt-8 text-base font-bold transition-all
        //     duration-200 border-2 ${buttonColor} rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 ${buttonBgColor}
        //   `}
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


export default PricingCard

