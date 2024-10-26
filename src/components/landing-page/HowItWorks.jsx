import React from 'react';

const HowItWorks = () => {
    return (
        <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="grid items-center max-w-5xl grid-cols-1 mx-auto space-y-8 lg:grid-cols-2 sm:space-y-12 lg:space-x-16 xl:space-x-32">
                    <div className="max-w-xl mx-auto text-center lg:text-left lg:max-w-none">
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
                        Posez votre première question sans plus attendre !  </h2>
                   
                       
                    </div>

                    <div className="relative max-w-md mx-auto lg:max-w-none">
                        <div className="absolute -inset-1.5">
                            <div className="w-full h-full mx-auto opacity-30 blur-lg filter" style={{ background: "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)" }}></div>
                        </div>

                        <div className="relative overflow-hidden bg-white rounded-2xl">
                            <div className="p-8 md:p-11">
                                <div className="space-y-12">
                                    <div className="flex items-start">
                                        <div className="inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-gray-900 rounded-full">
                                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                            </svg>
                                        </div>

                                        <div className="ml-5">
                                            <h3 className="text-lg font-bold text-gray-900 font-pj">Créez votre compte</h3>
                                            <p className="mt-3 text-lg font-normal text-gray-600 font-pj">
                                                Saisissez votre adresse e-mail et votre mot de passe pour accéder à votre espace personnel.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-gray-900 rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-question-mark" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M8 8a3.5 3 0 0 1 3.5 -3h1a3.5 3 0 0 1 3.5 3a3 3 0 0 1 -2 3a3 4 0 0 0 -2 4" />
  <path d="M12 19l0 .01" />
</svg>
                                        </div>

                                        <div className="ml-5">
                                            <h3 className="text-lg font-bold text-gray-900 font-pj">Posez votre question</h3>
                                            <p className="mt-3 text-lg font-normal text-gray-600 font-pj">
                                                Formulez votre question de manière claire et précise dans la barre de chat.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-gray-900 rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-tooltip" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M12 13l-1.707 -1.707a1 1 0 0 0 -.707 -.293h-2.586a2 2 0 0 1 -2 -2v-3a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-2.586a1 1 0 0 0 -.707 .293l-1.707 1.707z" />
</svg>
                                        </div>

                                        <div className="ml-5">
                                            <h3 className="text-lg font-bold text-gray-900 font-pj">Obtenez votre réponse</h3>
                                            <p className="mt-3 text-lg font-normal text-gray-600 font-pj">
                                                Jarvisimo vous fournira une réponse personnalisée et détaillée.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HowItWorks;
