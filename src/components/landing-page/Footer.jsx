import React from 'react';
import logo from '../../assets/images/logo.png';

const Footer = () => {
  return (
    <footer className="pt-12 pb-8 bg-black sm:pt-16 lg:pt-20">
      <div className="px-4 mx-auto lg:px-8 sm:px-6 max-w-7xl">
        <div className="grid grid-cols-1 gap-y-12 sm:gap-x-8 sm:gap-y-16 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 lg:gap-x-12 xl:gap-x-16">
          <div className="lg:col-span-2 sm:col-span-3 xl:col-span-3">
            <div className="lg:max-w-sm">
              <a
                href="#"
                title="Logo"
                className="inline-flex rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
              >
                <img
                  className="w-auto h-12"
                  src={logo}
                  alt="Logo"
                />
              </a>
              <p className="mt-8 text-sm font-normal leading-6 text-gray-300">
                JARVISIMO, votre assistant juridique alimenté par l'IA, est là pour vous simplifier la gestion de vos projets immobiliers. Obtenez des réponses rapides et précises, 24/7, et faites de chaque décision une réussite.
              </p>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold tracking-widest text-white uppercase">
              Company
            </p>
            <ul className="mt-8 space-y-5">
              {['About Us', 'Features', 'How It Works', 'Careers'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    title={item}
                    className="inline-flex text-sm font-normal text-gray-300 transition-all duration-200 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white hover:translate-x-1 hover:text-white"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold tracking-widest text-white uppercase">
              Support
            </p>
            <ul className="mt-8 space-y-5">
              {[
                'Help Center',
                'FAQs',
                'Terms & Conditions',
                'Privacy Policy',
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    title={item}
                    className="inline-flex text-sm font-normal text-gray-300 transition-all duration-200 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white hover:translate-x-1 hover:text-white"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold tracking-widest text-white uppercase">
              Resources
            </p>
            <ul className="mt-8 space-y-5">
              {[
                'Legal Guides',
                'Blog',
                'Webinars',
                'Case Studies',
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    title={item}
                    className="inline-flex text-sm font-normal text-gray-300 transition-all duration-200 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white hover:translate-x-1 hover:text-white"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="mt-12 border-gray-700 sm:mt-16 lg:mt-20" />

        <div className="flex flex-col mt-8 sm:items-center sm:flex-row sm:justify-between">
          <p className="text-sm font-normal text-gray-400">
            © {new Date().getFullYear()} JARVISIMO. All Rights Reserved.
          </p>

          <div className="mt-6 sm:mt-0">
            <img
              className="w-auto h-6"
              src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/footer/1/payment-methods.png"
              alt="Payment Methods"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
