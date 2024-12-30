import React, { useState,useEffect } from 'react';
import ChatbotCards from '../components/avatars/ChatbotCards';
import ChatInterface from '../components/avatars/ChatInterface';
import avatartpro from './../assets/images/avatartpro.png';
import avatarindividual from './../assets/images/avatarindividual.png';
import axios from 'axios';
import { apiService } from '../services/authService';

export default function Avatars() {
  // State to store the active tab and the assistant_id value
  const [activeTab, setActiveTab] = useState('ChatbotIndividuel');
  const [assistantId, setAssistantId] = useState("1"); // Default to assistant_id = 1
  const [userData, setUserData] = useState(null);


  // Function to handle tab change and set the corresponding assistant_id
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (tab === 'ChatbotIndividuel') {
      setAssistantId("1"); // Set assistant_id to 1 for ChatbotIndividuel
    } else if (tab === 'ChatbotPro') {
      setAssistantId("2"); // Set assistant_id to 2 for ChatbotPro
    }
  };

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


    // Find the balance based on the selected avatar_id
    const selectedBalance = userData?.app_user?.balances.find(
      (balance) => balance.avatar_id === assistantId
    )?.balance;

  return (
    <main className="flex w-full min-h-screen flex-col">
      {/* <ChatbotCards /> */}
      <div className="w-full flex md:justify-between md:flex-row flex-col  pb-1 md:px-2 px-1 overflow-x-auto mb-2">
        <div className="border-b">
          <nav className="flex space-x-10">
            <button
              onClick={() => handleTabChange('ChatbotIndividuel')}
              className={`py-4 text-sm flex justify-between font-medium ${activeTab === 'ChatbotIndividuel' ? 'text-customBlue border-b-2 border-customBlue' : 'text-gray-500 hover:border-gray-300'} transition-all duration-200 whitespace-nowrap`}
            >
               <img className='w-8 h-8' src={avatarindividual} alt="Avatar Individual Logo" />
            <span className='mt-2 ml-2'> Chatbot Individuel </span>
            </button>

            <button
              onClick={() => handleTabChange('ChatbotPro')}
              className={`py-4 text-sm flex justify-between  font-medium ${activeTab === 'ChatbotPro' ? 'text-customBlue border-b-2 border-customBlue' : 'text-gray-500 hover:border-gray-300'} transition-all duration-200 whitespace-nowrap`}
            >
              <img className='w-8 h-8' src={avatartpro} alt="Avatar Pro Logo" />
              <span className='mt-2 ml-2'>              Chatbot Pro </span>
            </button>
          </nav>
        </div>

        <div className="flex md:my-0 my-3   justify-center items-center">
        <span className='font-bold mr-2'>Solde:</span> 
        {selectedBalance !== undefined ? `${selectedBalance.toFixed(2)} $` : 'Loading...'}
        </div>
      </div>

      {/* Pass the assistantId to ChatInterface */}
      <ChatInterface assistantId={assistantId} />
    </main>
  );
}
