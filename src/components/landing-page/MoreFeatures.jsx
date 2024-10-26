import React from 'react';

const MoreFeatureSection = () => {
    return (
        <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-xl mx-auto text-center xl:max-w-2xl">
                    <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-pj">Optimisez vos recherches avec le pouvoir Magique de JARVISIMO</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8 mt-8 lg:mt-20">
                   
                    <div className="overflow-hidden bg-white shadow-md rounded-xl">
                    {/* <div className="absolute -inset-1">
                            <div className="w-full h-full rotate-180 opacity-30 blur-lg filter" style={{ background: "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)" }}></div>
                        </div>   */}
                             <div className="p-9">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-puzzle" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff4500" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
</svg>
                            <h3 className="mt-8 text-2xl font-bold text-gray-900 sm:mt-20 font-pj">Jouez avec les scénarios</h3>
                            <p className="mt-6 text-base text-gray-600 font-pj">Découvrez le potentiel de votre projet. Visualisez les conséquences de vos choix futurs et prenez des décisions éclairées en toute sérénité en simulant les différents scénarios possibles pour votre projet.</p>
                        </div>
                    </div>

                    <div className="overflow-hidden bg-white shadow-md rounded-xl">
                        <div className="p-9">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-alarm-average" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff4500" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M5 13a7 7 0 1 0 14 0a7 7 0 0 0 -14 0" />
  <path d="M7 4l-2.75 2" />
  <path d="M17 4l2.75 2" />
  <path d="M8 13h1l2 3l2 -6l2 3h1" />
</svg>
                            <h3 className="mt-8 text-2xl font-bold text-gray-900 sm:mt-20 font-pj">Soyez proactif dans votre Veille juridique</h3>
                            <p className="mt-6 text-base text-gray-600 font-pj">Ayez directement accès à une base de données juridiques à jour, pour être au fait des évolutions législatives et réglementaires.</p>
                        </div>
                    </div>

                    <div className="relative overflow-hidden bg-white shadow-md rounded-xl">
                      
                        <div className="relative p-9">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-type-doc" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff4500" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M14 3v4a1 1 0 0 0 1 1h4" />
  <path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4" />
  <path d="M5 15v6h1a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2h-1z" />
  <path d="M20 16.5a1.5 1.5 0 0 0 -3 0v3a1.5 1.5 0 0 0 3 0" />
  <path d="M12.5 15a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1 -3 0v-3a1.5 1.5 0 0 1 1.5 -1.5z" />
</svg>
                            <h3 className="mt-8 text-2xl font-bold text-gray-900 sm:mt-20 font-pj">Générez des documents professionnels</h3>
                            <p className="mt-6 text-base text-gray-600 font-pj">Contrats, Baux, États des lieux, et bien d’autres… Générez des documents techniques et professionnels prêts à l'emploi, comme le ferait un spécialiste du droit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MoreFeatureSection;
