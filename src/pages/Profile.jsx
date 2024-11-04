import React, { useState } from 'react';
import EditUserInfo from '../components/profile/EditUserInfo';
import countries from '../constants/Countries';
import CustomButton from '../components/shared/CustomButton';
import CustomInput from '../components/shared/CustomInput';

export default function Profile() {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className='w-full h-full'>
      <main>
        <div className="py-6">
          <div className="px-4 mx-auto sm:px-6 md:px-8">
            <h1 className="text-2xl font-bold text-gray-900">Paramètres</h1>
          </div>

          <div className="px-4 mx-auto mt-8 sm:px-6 md:px-8">
            <div className="w-full pb-1 overflow-x-auto">
              <div className="border-b border-gray-200">
              <nav className="flex -mb-px space-x-10">
  <button
    onClick={() => setActiveTab('profile')}
    className={`py-4 text-sm font-medium ${activeTab === 'profile' ? 'text-customBlue border-b-2 border-customBlue' : 'text-gray-500 hover:border-gray-300'} transition-all duration-200 whitespace-nowrap`}
  >
    Profil
  </button>
  <button
    onClick={() => setActiveTab('password')}
    className={`py-4 text-sm font-medium ${activeTab === 'password' ? 'text-customBlue border-b-2 border-customBlue' : 'text-gray-500 hover:border-gray-300'} transition-all duration-200 whitespace-nowrap`}
  >
    Mot de passe
  </button>
</nav>

              </div>
            </div>

            {activeTab === 'profile' ? (
              <div className="mt-6">
                <p className="text-base font-bold text-gray-900">Profil</p>
                <p className="mt-1 text-sm font-medium text-gray-500">Lorem ipsum dolor sit amet, consectetur adipis.</p>

                <form action="#" method="POST" className="max-w-3xl mt-12">
                  <div className="space-y-8">
                    <div className="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                      <label className="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2">Photo de profil</label>
                      <div className="mt-2 sm:mt-0 sm:col-span-2">
                         <div className="flex items-center space-x-6">
                          <img className="flex-shrink-0 object-cover w-12 h-12 rounded-lg" src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/previews/settings/4/avatar-male.png" alt="" />
                          <button type="button" className="text-sm font-semibold text-gray-400 transition-all duration-200 bg-white rounded-md hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600">Supprimer</button>
                          <button type="button" className="text-sm font-semibold text-customBlue transition-all duration-200 bg-white rounded-md hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-customBlue">Mettre à jour</button>
                        </div>
                      </div>
                    </div>

                    <div className="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                      <label className="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2">Prénom & Nom</label>
                      <div className="mt-2 sm:mt-0 sm:col-span-2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5">
                          <CustomInput type="text" value="Martin" />
                          <CustomInput type="text" value="Janiter" />
                        </div>
                      </div>
                    </div>

                    <div className="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                      <label className="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2">Adresse e-mail</label>
                      <div className="mt-2 sm:mt-0 sm:col-span-2">
                        <CustomInput type="email" value="j.martin@gmail.com" />
                      </div>
                    </div>

                    <div className="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                      <label className="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2">Site Web</label>
                      <div className="mt-2 sm:mt-0 sm:col-span-2">
                        <div className="relative flex">
                          <div className="inline-flex items-center px-3 text-gray-900 border border-r-0 border-gray-300 rounded-l-lg bg-gray-50 sm:text-sm">https://</div>
                          <CustomInput type="url" value="postcrafts.co" className="border rounded-none rounded-r-lg" />
                        </div>
                      </div>
                    </div>

                    <div className="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                      <label className="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2">Titre du poste</label>
                      <div className="mt-2 sm:mt-0 sm:col-span-2">
                        <CustomInput type="text" value="Développeur de logiciels" />
                      </div>
                    </div>

                    <div className="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                      <label className="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2">Pays</label>
                      <div className="mt-2 sm:mt-0 sm:col-span-2">
                        <select className="block w-full py-3 pl-4 pr-10 border-gray-300 rounded-lg focus:outline-none focus:ring-customBlue focus:border-customBlue sm:text-sm">
                          {countries.map((country) => (
                            <option key={country}>{country}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 sm:mt-12">
                    <CustomButton type="submit">Mettre à jour</CustomButton>
                  </div>
                </form>
              </div>
            ) : (
              <div className="mt-6">
                <p className="text-base font-bold text-gray-900">Réinitialiser le mot de passe</p>
                <p className="mt-1 text-sm font-medium text-gray-500">Entrez un nouveau mot de passe pour sécuriser votre compte.</p>

                <form action="#" method="POST" className="max-w-3xl mt-12">
                  <div className="space-y-8">
                    <div className="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                      <label htmlFor="new-password" className="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2">Nouveau mot de passe</label>
                      <div className="mt-2 sm:mt-0 sm:col-span-2">
                        <CustomInput type="password" id="new-password" />
                      </div>
                    </div>

                    <div className="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                      <label htmlFor="confirm-password" className="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2">Confirmer le mot de passe</label>
                      <div className="mt-2 sm:mt-0 sm:col-span-2">
                        <CustomInput type="password" id="confirm-password" />
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 sm:mt-12">
                    <CustomButton type="submit">Réinitialiser</CustomButton>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
