import React, { useState, useEffect } from 'react';
import ChatbotCards from '../components/avatars/ChatbotCards';
import ChatInterface from '../components/avatars/ChatInterface';
import avatartpro from './../assets/images/avatartpro.png';
import avatarindividual from './../assets/images/avatarindividual.png';
import axios from 'axios';
import { apiService } from '../services/authService';
import { Wallet, User, Building2 } from 'lucide-react';

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
    <main className="flex w-full max-h-screen flex-col ">
      {/* Minimal Compact Navigation */}
      <div className="w-full bg-white border-b border-gray-200 sticky top-0">
        <div className="px-3 sm:px-4">
          <div className="flex items-center justify-between py-2">
            
            {/* Compact Tab Navigation */}
            <div className="flex bg-gray-100 rounded-lg py-1 px-0.5">
              {/* Individual Tab */}
              <button
                onClick={() => handleTabChange('ChatbotIndividuel')}
                className={`flex items-center px-3 py-3 rounded-md text-xs font-medium transition-all duration-200 ${
                  activeTab === 'ChatbotIndividuel'
                    ? 'bg-white text-[#223E66] shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <User className="w-3.5 h-3.5 mr-1.5" />
                <span>Individuel</span>
              </button>

              {/* Pro Tab */}
              <button
                onClick={() => handleTabChange('ChatbotPro')}
                className={`flex items-center px-3 py-3 rounded-md text-xs font-medium transition-all duration-200 ${
                  activeTab === 'ChatbotPro'
                    ? 'bg-white text-[#223E66] shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Building2 className="w-3.5 h-3.5 mr-1.5" />
                <span>Pro</span>
              </button>
            </div>

            {/* Compact Balance Display */}
            <div className="flex items-center bg-green-50 border border-green-200 rounded-lg px-3 py-1.5">
              <Wallet className="w-3.5 h-3.5 text-green-600 mr-2" />
              <div className="flex items-center space-x-1">
                <span className="text-xs text-green-600 font-medium">Solde:</span>
                <span className="text-sm font-bold text-green-900">
                  {selectedBalance !== undefined ? `${selectedBalance.toFixed(2)}€` : '--'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pass the assistantId to ChatInterface */}
      <ChatInterface assistantId={assistantId} />
    </main>
  );
}