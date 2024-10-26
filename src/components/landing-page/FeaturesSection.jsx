import React from 'react';

const FeaturesSection = () => {
  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex px-4 py-1.5 mx-auto rounded-full bg-gradient-to-r from-fuchsia-600 to-blue-600">
            <p className="text-xs font-semibold tracking-widest text-white uppercase">Simplifiez le Droit Immobilier</p>
          </div>
          <h2 className="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Naviguez dans la complexité du droit immobilier avec Jarvisimo
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-600">
            Vous vous sentez perdu face à la complexité du droit immobilier et ses subtilités ?
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 mt-12 sm:grid-cols-3 lg:mt-20 lg:gap-x-12">
          <div className="transition-all duration-200 bg-white hover:shadow-xl">
            <div className="py-10 px-9">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-world" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
  <path d="M3.6 9h16.8" />
  <path d="M3.6 15h16.8" />
  <path d="M11.5 3a17 17 0 0 0 0 18" />
  <path d="M12.5 3a17 17 0 0 1 0 18" />
</svg>
              <h3 className="mt-8 text-lg font-semibold text-black">Langage Simplifié</h3>
              <p className="mt-4 text-base text-gray-600">
                Jarvisimo vous permet de naviguer facilement de manière intuitive dans cette complexité de la réglementation immobilière avec un langage simplifié et accessible.
              </p>
            </div>
          </div>

          <div className="transition-all duration-200 bg-white hover:shadow-xl">
            <div className="py-10 px-9">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-up" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
  <path d="M6 21v-2a4 4 0 0 1 4 -4h4" />
  <path d="M19 22v-6" />
  <path d="M22 19l-3 -3l-3 3" />
</svg>
              <h3 className="mt-8 text-lg font-semibold text-black">Accompagnement Expert</h3>
              <p className="mt-4 text-base text-gray-600">
                Éliminez les recherches inutiles, fastidieuses et parfois coûteuses. JARVISIMO vous accompagne dans toutes les étapes de votre projet immobilier.
              </p>
            </div>
          </div>

          <div className="transition-all duration-200 bg-white hover:shadow-xl">
            <div className="py-10 px-9">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trending-up" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M3 17l6 -6l4 4l8 -8" />
  <path d="M14 7l7 0l0 7" />
</svg>
              <h3 className="mt-8 text-lg font-semibold text-black">Productivité Maximisée</h3>
              <p className="mt-4 text-base text-gray-600">
                Simplifiez votre quotidien, boostez votre productivité, devenez autonome avec un accès instantané à toute la réglementation en un clic 24H/7.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
