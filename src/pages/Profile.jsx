import React, { useState, useEffect } from 'react';
import EditUserInfo from '../components/profile/EditUserInfo';
import countries from '../constants/Countries';
import CustomButton from '../components/shared/CustomButton';
import CustomInput from '../components/shared/CustomInput';
import { apiService } from '../services/authService';
import axios from 'axios'
export default function Profile() {

  const [activeTab, setActiveTab] = useState('profile');
  const [userData, setUserData] = useState(null);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  useEffect(() => {

    const fetchUserData = async () => {
      try {
        const response = await apiService.get('/user');
        setUserData(response.data.user);
      } catch (error) {
        console.error("Error fetching user data:", error.message);
      }
    };

    fetchUserData();
  }, []);

  const handlePasswordUpdate = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert('Les mots de passe ne correspondent pas.');
      return;
    }
    
    try {
      await apiService.put('/user/password', undefined, {
        currentPassword,
        newPassword,
      });
      alert('Mot de passe mis à jour avec succès');
    } catch (error) {
      console.error("Error updating password:", error.message);
      alert('Échec de la mise à jour du mot de passe');
    }
  };

  const [isLoading, setIsLoading] = useState(false);
  const handleProfilePictureUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
  
    const formData = new FormData();
    formData.append("profilepicture", file);

    setIsLoading(true); // Stop loading

  
    try {
      const headers = {
        Authorization: localStorage.getItem("token"),
        "Content-Type": "multipart/form-data"
      };
      
      const response = await axios.post(
        `https://lionfish-app-9xylm.ondigitalocean.app/api/v1/user/uploadProfilePicture`,
        formData,
        { headers }
      );
  
      const imageUrl = response.data.image_link;
      setUserData((prevData) => ({
        ...prevData,
        app_user: {
          ...prevData.app_user,
          image_link: imageUrl,
        },
      }));
      setIsLoading(false)
      alert('Photo de profil mise à jour avec succès');
    } catch (error) {
      console.error("Error uploading profile picture:", error.message);
      alert('Échec de la mise à jour de la photo de profil');
      setIsLoading(false)
    }finally{
      setLoading(false)
    }
  };
  
  
  return (
    <div className="w-full h-full">
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

            {activeTab === 'profile' && userData ? (
              <div className="mt-6">
                <p className="text-base font-bold text-gray-900">Profil</p>
                <p className="mt-1 text-sm font-medium text-gray-500">Lorem ipsum dolor sit amet, consectetur adipis.</p>

                <form action="#" method="POST" className="max-w-3xl mt-12">
                  <div className="space-y-8">
                    <div className="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                      <label className="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2">Photo de profil</label>
                      <div className="mt-2 sm:mt-0 sm:col-span-2">
  

  <div className="flex items-center p-4 space-x-4 bg-white border rounded-lg shadow-sm">
      <div className="relative">
        {isLoading ? (
          <div className="w-16 h-16 flex items-center justify-center">
            {/* Loading spinner */}
            <svg className="animate-spin h-6 w-6 text-customBlue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
            </svg>
          </div>
        ) : (
          <img
            className="w-16 h-16 rounded-full object-cover border-2 border-gray-300"
            src={userData.app_user.image_link || 'default-image-url'}
            alt="User profile"
          />
        )}
      </div>

      <div className="flex flex-col space-y-2">
        <label htmlFor="profilePictureInput" className="flex items-center text-sm font-semibold text-gray-500 cursor-pointer hover:text-gray-700 transition-colors duration-200">
          Mettre à jour la photo
        </label>
        <input
          id="profilePictureInput"
          type="file"
          onChange={handleProfilePictureUpload}
          className="hidden"
        />
        <button
          type="button"
          // onClick={handleDeletePicture}
          className="flex items-center text-sm font-semibold text-red-500 hover:text-red-600 transition-colors duration-200"
        >
          Supprimer la photo
        </button>
      </div>
    </div>
                      </div>
                    </div>

                    <div className="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                      <label className="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2">Prénom & Nom</label>
                      <div className="mt-2 sm:mt-0 sm:col-span-2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5">
                          <CustomInput type="text" value={userData.auth_user.username} readOnly />
                        </div>
                      </div>
                    </div>

                    <div className="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                      <label className="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2">Adresse e-mail</label>
                      <div className="mt-2 sm:mt-0 sm:col-span-2">
                        <CustomInput disabled={true} type="email" value={userData.auth_user.email} readOnly />
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
                <p>Loading...</p>
              </div>
            )}

            {activeTab === 'password' && (
              <div className="mt-6">
                <p className="text-base font-bold text-gray-900">Réinitialiser le mot de passe</p>
                <p className="mt-1 text-sm font-medium text-gray-500">Entrez un nouveau mot de passe pour sécuriser votre compte.</p>

                <form onSubmit={handlePasswordUpdate} className="max-w-3xl mt-12">
                  <div className="space-y-8">
                    <div className="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                      <label htmlFor="current-password" className="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2">Mot de passe actuel</label>
                      <div className="mt-2 sm:mt-0 sm:col-span-2">
                        <CustomInput 
                          type="password" 
                          id="current-password" 
                          value={currentPassword}
                          onChange={(e) => setCurrentPassword(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                      <label htmlFor="new-password" className="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2">Nouveau mot de passe</label>
                      <div className="mt-2 sm:mt-0 sm:col-span-2">
                        <CustomInput 
                          type="password" 
                          id="new-password" 
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                      <label htmlFor="confirm-password" className="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2">Confirmer le mot de passe</label>
                      <div className="mt-2 sm:mt-0 sm:col-span-2">
                        <CustomInput 
                          type="password" 
                          id="confirm-password" 
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                        />
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
