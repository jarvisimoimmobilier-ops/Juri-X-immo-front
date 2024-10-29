import React, { useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { RiChatNewFill } from "react-icons/ri";
import logo from '../../assets/images/logo.png';
import user from '../../assets/images/user.png';
import { apiService } from '../../services/authService.js'

const ChatComponent = ({ messages }) => {
  const messageListRef = useRef(null);

  useEffect(() => {
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="flex-grow flex flex-col h-full bg-white rounded-lg shadow-lg">
      <div className="flex-grow p-6 overflow-y-auto bg-gray-50 rounded-t-lg" ref={messageListRef}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex items-start mb-4 ${
              message.type === 'userMessage' ? 'justify-end' : 'justify-start'
            }`}
          >
            {message.type === 'apiMessage' && (
              <img
                src={logo}
                alt="AI"
                width={30}
                height={30}
                className="mr-3"
              />
            )}
            <div
              className={`p-3 rounded-lg max-w-sm ${
                message.type === 'userMessage'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              <ReactMarkdown>{message.message}</ReactMarkdown>
            </div>
            {message.type === 'userMessage' && (
              <img
                src={user}
                alt="User"
                width={30}
                height={30}
                className="ml-3"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const ChatInterface = () => {

  const [conversations, setConversations] = useState([]);
  const [messages, setMessages] = useState([]);
  const [selectedThreadId, setSelectedThreadId] = useState(null);
  const [userInput, setUserInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newConversationName, setNewConversationName] = useState('');

// Fetch conversations
const fetchConversations = async () => {
  try {
    const response = await apiService.get('/conversation');
    
    // Sort conversations by creation_date (new to old)
    const sortedConversations = response.data.sort((a, b) => new Date(b.creation_date) - new Date(a.creation_date));
    
    // Update state with sorted conversations
    setConversations(sortedConversations);

    // Set the first conversation as selected if it exists
    if (sortedConversations[0]) {
      setSelectedThreadId(sortedConversations[0]._id);
      fetchMessages(sortedConversations[0]._id);
    }
  } catch (error) {
    console.error('Error fetching conversations:', error);
  }
};

  // Fetch conversations on component mount
  useEffect(() => {
    fetchConversations();
  }, []);

  


  
// Fetch messages for a specific conversation
  const fetchMessages = async (threadId) => {
    try {
      const response = await apiService.get(`/conversation/${threadId}`);
      const messagesData = response.data.messages;
      const formattedMessages = messagesData.map((msg) => ({
        message: msg.content,
        type: msg.sender === 'user' ? 'userMessage' : 'apiMessage',
      }));
      setMessages(formattedMessages);
      setSelectedThreadId(threadId);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  // Open modal to name the new conversation
  const openNewChatModal = () => {
    setIsModalOpen(true);
  };

  // Handle new conversation creation
  const createNewConversation = async () => {
    setIsModalOpen(false);
    try {
      const requestData = {
        name: newConversationName,
        assistant_id: "1",
      };
      const response = await apiService.post('/conversation/start', requestData);
      const newConversation = response.data;
      // setConversations((prevConversations) => [newConversation, ...prevConversations]);

      const conversationsResponse = await apiService.get('/conversation');

       // Sort conversations by creation_date (new to old)
    const sortedConversations = conversationsResponse.data.sort((a, b) => new Date(b.creation_date) - new Date(a.creation_date));

      setConversations(sortedConversations);
      setSelectedThreadId(response.data?.thread_id);
      console.log(response.data)
      fetchMessages(response.data?.thread_id)
      setMessages([]);
      setNewConversationName('');
    } catch (error) {
      console.error('Error creating new conversation:', error);
    }
  };

  // Send user message
  const handleSendMessage = async () => {
    if (!userInput.trim()) return;
    setLoading(true);

    // Append the user's message to the messages list
    setMessages((prevMessages) => [
      ...prevMessages,
      { message: userInput, type: 'userMessage' },
    ]);

    try {
      const requestData = {
        thread_id: selectedThreadId,
        message: userInput,
      };
      const response = await apiService.post('/conversation/send', requestData);
      const assistantResponse = response.data.response;
      setMessages((prevMessages) => [
        ...prevMessages,
        { message: assistantResponse, type: 'apiMessage' },
      ]);
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setUserInput('');
      setLoading(false);
    }
  };

 // Delete a conversation
const deleteConversation = async (threadId) => {
  try {
    await apiService.delete('/conversation', threadId);
    setConversations((prevConversations) => {
      const updatedConversations = prevConversations.filter(
        (conversation) => conversation._id !== threadId
      );

      // Set selectedThreadId to the first conversation's _id if available, else null
      setSelectedThreadId(updatedConversations[0]?._id || null);
      fetchMessages(updatedConversations[0]?._id || null)
      return updatedConversations;
    });

    console.log(`Conversation with thread ID ${threadId} deleted successfully`);
  } catch (error) {
    console.error('Error deleting conversation:', error);
  }
};


  const handleEnter = (e) => {
    if (e.key === 'Enter' && userInput) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const closeModal = () => setIsModalOpen(false);


  return (
    <div className="flex h-[600px] bg-gray-100 w-full">

      {/* Sidebar */}
      <div className="w-1/4 h-screen  bg-blue-50 p-4">

        <button
          className="flex items-center w-full p-3 mb-6 border border-[#223E66] text-white rounded-lg shadow-md transition duration-300"
          onClick={openNewChatModal}
        >
          <span className="text-sm font-semibold text-[#223E66] flex justify-start items-center">
            <RiChatNewFill size={20} className="mr-2" />
            New Chat
          </span>
        </button>

        <div className="text-gray-700 text-sm font-semibold mb-4">Chat History</div>

 {/* Scrollable conversations list */}
 <div className="h-[70vh] overflow-y-auto p-1">
  {/* Map through conversations and display each */}
        {conversations.map((conversation) => (
          <div
            key={conversation._id}
            className={`${conversation._id === selectedThreadId ? "bg-[#223E66] text-white" : "bg-white text-[#223E66] shadow-sm"} p-4 rounded-lg flex items-center justify-between mb-4 shadow-lg transition duration-300 cursor-pointer`}
            onClick={() => fetchMessages(conversation._id)}
          >
            <span className="text-sm">{conversation.name}</span>
            <div className="flex space-x-2">
              <button className="cursor-pointer"><CiEdit size={20} /></button>
              <button onClick={()=>deleteConversation(conversation?._id)} className="cursor-pointer"><MdDeleteOutline size={20} color="#3232KD" /></button>
            </div>
          </div>
        ))}
</div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-grow flex flex-col p-6 bg-blue-50">
        <ChatComponent messages={messages} />

        <div className="p-4 border-t bg-white rounded-b-lg">
          <form onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }} className="flex items-center">
            <textarea
              disabled={loading}
              onKeyDown={handleEnter}
              rows={1}
              maxLength={512}
              placeholder={loading ? "Waiting for response..." : "Type your message..."}
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              className="flex-grow p-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <button
              type="submit"
              disabled={loading}
              className="rounded-full  text-white"
            >
              {loading ? 
              <div className="ml-3 bg-customBlue py-3 px-3 rounded-full">
  <svg  height="10" viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg" fill="#ffffff">
    <circle cx="15" cy="15" r="12">
      <animate attributeName="r" from="12" to="12" begin="0s" dur="0.8s" values="12;6;12" calcMode="linear" repeatCount="indefinite" />
      <animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite" />
    </circle>
    <circle cx="60" cy="15" r="6" fill-opacity="0.3">
      <animate attributeName="r" from="6" to="6" begin="0s" dur="0.8s" values="6;12;6" calcMode="linear" repeatCount="indefinite" />
      <animate attributeName="fill-opacity" from="0.5" to="0.5" begin="0s" dur="0.8s" values=".5;1;.5" calcMode="linear" repeatCount="indefinite" />
    </circle>
    <circle cx="105" cy="15" r="12">
      <animate attributeName="r" from="12" to="12" begin="0s" dur="0.8s" values="12;6;12" calcMode="linear" repeatCount="indefinite" />
      <animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite" />
    </circle>
  </svg>
</div>


 : <span className='text-sm py-2 px-3 ml-3 bg-customBlue rounded-full'>Envoyer</span>
 }
            </button>
          </form>
        </div>
      </div>

      {/* Modal for Naming New Conversation */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
        <div className="bg-white p-6 rounded-lg shadow-lg md:w-1/3 relative">
          {/* Close icon in the top right */}
          <button
            onClick={closeModal} // Function to close the modal
            className="absolute top-2 text-xl right-5 font-bold text-red-500 hover:text-gray-700"
          >
            &times;
          </button>
          
          <h2 className="text-lg font-bold mb-4">Start a New Conversation</h2>
          <input
            type="text"
            placeholder="Enter conversation name"
            value={newConversationName}
            onChange={(e) => setNewConversationName(e.target.value)}
            className="w-full p-2 border rounded mb-4"
          />
          <button
            onClick={createNewConversation}
            className="p-2 w-full bg-customBlue text-white rounded hover:bg-blue-700 transition"
          >
            Start Conversation
          </button>
        </div>
      </div>
      
      )}

    </div>
  );
};

export default ChatInterface;
