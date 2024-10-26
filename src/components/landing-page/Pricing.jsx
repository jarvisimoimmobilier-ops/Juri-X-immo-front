import React from 'react';

const PricingSection = () => {
    return (
        <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-gray-50">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="text-center">
                    <p className="text-base font-semibold text-blue-600">
                        Pricing Plans
                    </p>
                    <h2 className="mt-6 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                        Choose the right plan for you
                    </h2>
                    <p className="mt-4 text-base font-normal leading-7 text-gray-600 lg:text-lg lg:mt-6 lg:leading-8">
                        Flexible pricing options to suit your needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 mt-12 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="bg-white border border-gray-200 shadow-xl rounded-2xl sm:rounded-3xl">
                        <div className="px-4 py-5 sm:px-6 sm:py-8">
                            <h3 className="text-xs font-semibold tracking-widest text-gray-900 uppercase">
                                Free Test
                            </h3>
                            <p className="mt-1 text-sm font-normal text-gray-600">
                                3 jours de test = illimité (mots)
                            </p>

                            <div className="mt-8 border border-gray-200 bg-gray-50 rounded-2xl">
                                <div className="px-4 py-5 sm:p-6">
                                    <div className="flex items-end justify-center space-x-0.5">
                                        <p className="text-5xl font-semibold tracking-tight text-gray-900">
                                            Free
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8">
                                <a href="#" title=""
                                    className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
                                    role="button">
                                    Start Free Trial
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white border border-gray-200 shadow-xl rounded-2xl sm:rounded-3xl">
                        <div className="px-4 py-5 sm:px-6 sm:py-8">
                            <h3 className="text-xs font-semibold tracking-widest text-gray-900 uppercase">
                                Individual
                            </h3>
                            <p className="mt-1 text-sm font-normal text-gray-600">
                             125 000 mots
                            </p>

                            <div className="mt-8 border border-gray-200 bg-gray-50 rounded-2xl">
                                <div className="px-4 py-5 sm:p-6">
                                    <div className="flex items-end justify-center space-x-0.5">
                                        <p className="pb-1 text-xl font-semibold text-gray-900">
                                            $
                                        </p>
                                        <p className="text-5xl font-semibold tracking-tight text-gray-900">
                                            19.99
                                        </p>
                                        <p className="pb-1 text-xl font-semibold text-gray-900">
                                            /mo
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8">
                                <a href="#" title=""
                                    className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
                                    role="button">
                                    Get Started
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white border border-gray-200 shadow-xl rounded-2xl sm:rounded-3xl">
                        <div className="px-4 py-5 sm:px-6 sm:py-8">
                            <h3 className="text-xs font-semibold tracking-widest text-gray-900 uppercase">
                                Professionnel
                            </h3>
                            <p className="mt-1 text-sm font-normal text-gray-600">
                               Illimité
                            </p>

                            <div className="mt-8 border border-gray-200 bg-gray-50 rounded-2xl">
                                <div className="px-4 py-5 sm:p-6">
                                    <div className="flex items-end justify-center space-x-0.5">
                                        <p className="pb-1 text-xl font-semibold text-gray-900">
                                            $
                                        </p>
                                        <p className="text-5xl font-semibold tracking-tight text-gray-900">
                                            99.99
                                        </p>
                                        <p className="pb-1 text-xl font-semibold text-gray-900">
                                            /mo
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8">
                                <a href="#" title=""
                                    className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
                                    role="button">
                                    Get Started
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
