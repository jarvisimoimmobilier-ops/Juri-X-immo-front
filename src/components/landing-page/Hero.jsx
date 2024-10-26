import React from "react";

const Hero = () => {
  return (
    <section className="pt-16 md:mt-0 h-auto md:h-screen ">
      <div className="absolute top-0 -z-10 h-full w-full bg-white"><div class="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div></div>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
        <h1 className="px-6 text-lg text-gray-700 font-inter">
  Imaginez-vous avoir à votre disposition un assistant juridique permanent, disponible 24/7, qui répond en quelques secondes à toutes vos questions en droit immobilier !
</h1>
<p className="mt-5 text-4xl font-bold leading-tight text-gray-800 sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight font-pj">
  Simplifiez la conduite de tous vos projets immobiliers avec <br />
  <span className="relative inline-flex sm:inline">
    <span className="relative text-gray-800">
      <span className="absolute inset-0 bg-gradient-to-r from-customOrange via-orange-300 to-customOrange opacity-80 rounded-lg blur-lg"></span>
      <span className="relative bg-opacity-80">JARVISIMO</span> 
    </span>
  </span>
</p>


          {/* Star Rating Section */}
          <div className="flex justify-center items-center mt-4">
            <span className="text-gray-700 text-xl font-bold mr-2">4.5/5</span>
            <div className="flex items-center">
              {[...Array(4)].map((_, index) => (
                <svg key={index} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927a1 1 0 011.902 0l1.07 3.292a1 1 0 00.95.69h3.462a1 1 0 01.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292a1 1 0 01-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034a1 1 0 01-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72a1 1 0 01.588-1.81h3.462a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <defs>
                  <linearGradient id="half">
                    <stop offset="50%" stopColor="#FBBF24" />
                    <stop offset="50%" stopColor="gray" />
                  </linearGradient>
                </defs>
                <path
                  d="M9.049 2.927a1 1 0 011.902 0l1.07 3.292a1 1 0 00.95.69h3.462a1 1 0 01.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292a1 1 0 01-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034a1 1 0 01-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72a1 1 0 01.588-1.81h3.462a1 1 0 00.951-.69l1.07-3.292z"
                  fill="url(#half)"
                />
              </svg>
            </div>
          </div>

          <div className="px-8 sm:items-center sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9">
            <a
              href="#"
              title=""
              className="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-blue-600 border-2 border-transparent sm:w-auto rounded-xl font-pj hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              role="button"
            >
              Get Started
            </a>
          </div>

          <p className="mt-8 text-base  text-gray-600 font-black">
            3 Days free trial · No credit card required
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
