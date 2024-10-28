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

 
  // Fetch conversations on component mount
  useEffect(() => {
   // Fetch conversations
  const fetchConversations = async () => {
    try {
      const response = await apiService.get('/conversation');
      setConversations(response.data);
      if (response.data[0]) {
        setSelectedThreadId(response.data[0]?._id);
        fetchMessages(response.data[0]?._id);
      }
    } catch (error) {
      console.error('Error fetching conversations:', error);
    }
  };

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
      setConversations((prevConversations) => [newConversation, ...prevConversations]);
      setSelectedThreadId(response.data?.thread_id);
      console.log(response.data?.thread_id)


      
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

  return (
    <div className="flex h-[600px] bg-gray-100 w-full">

      {/* Sidebar */}
      <div className="w-1/4 h-screen  bg-blue-50 p-4">

        <button
          className="flex items-center w-full p-3 mb-6 border border-[#223E66] text-white rounded-lg shadow-md transition duration-300"
          onClick={openNewChatModal}
        >
          <span className="text-lg font-semibold text-[#223E66] flex justify-start items-center">
            <RiChatNewFill size={24} className="mr-2" />
            New Chat
          </span>
        </button>

        <div className="text-gray-700 font-semibold mb-4">Chat History</div>

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
              className="ml-4 p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              {loading ? "Loading..." : "Send"}
            </button>
          </form>
        </div>
      </div>

      {/* Modal for Naming New Conversation */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
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
              className="p-2 w-full bg-blue-600 text-white rounded hover:bg-blue-700 transition"
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
