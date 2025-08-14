import React, { useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';
import { Plus, MessageCircle, Edit3, Trash2, Send, X, Bot, User, Menu, Search } from 'lucide-react';

// Import your API service
import { apiService } from '../../services/authService.js';

// Conversations Modal Component
const ConversationsModal = ({ 
  isOpen, 
  onClose, 
  conversations, 
  selectedThreadId, 
  onSelectConversation, 
  onCreateNew, 
  onDeleteConversation 
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newConversationName, setNewConversationName] = useState('');

  const filteredConversations = conversations.filter(conv =>
    conv.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCreateConversation = () => {
    if (newConversationName.trim()) {
      onCreateNew(newConversationName);
      setNewConversationName('');
      setShowCreateModal(false);
      onClose();
    }
  };

  const handleSelectConversation = (conversation) => {
    onSelectConversation(conversation);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 lg:hidden">
        {/* Modal Container */}
        <div className="fixed inset-x-0 top-0 bottom-0 bg-white flex flex-col animate-in slide-in-from-bottom duration-300">
          {/* Header */}
          <div className="flex-shrink-0 px-4 py-4 border-b border-gray-200 bg-white">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900">Conversations</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            {/* Search Bar */}
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher une conversation..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border-0 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
              />
            </div>

            {/* New Chat Button */}
            <button
              onClick={() => setShowCreateModal(true)}
              className="w-full flex items-center justify-center px-4 py-3 bg-[#223E66] text-white rounded-xl hover:bg-blue-700 transition-colors font-medium shadow-sm"
            >
              <Plus className="w-5 h-5 mr-2" />
              Nouveau Chat
            </button>
          </div>

          {/* Conversations List */}
          <div className="flex-1 overflow-y-auto px-2 py-2">
            {filteredConversations.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <MessageCircle className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {searchTerm ? 'Aucun résultat' : 'Aucune conversation'}
                </h3>
                <p className="text-gray-500 text-sm px-4">
                  {searchTerm 
                    ? 'Essayez avec un autre terme de recherche' 
                    : 'Créez votre première conversation pour commencer'
                  }
                </p>
              </div>
            ) : (
              <div className="space-y-2">
                {filteredConversations.map((conversation) => (
                  <div
                    key={conversation._id}
                    className="group relative"
                  >
                    <div
                      onClick={() => handleSelectConversation(conversation)}
                      className={`
                        w-full p-4 rounded-xl cursor-pointer transition-all duration-200 border
                        ${conversation._id === selectedThreadId 
                          ? 'bg-blue-50 border-blue-200 shadow-sm' 
                          : 'bg-white border-gray-100 hover:bg-gray-50 hover:border-gray-200'
                        }
                      `}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1 min-w-0">
                          <h4 className={`font-medium text-sm mb-1 line-clamp-2 ${
                            conversation._id === selectedThreadId ? 'text-blue-900' : 'text-gray-900'
                          }`}>
                            {conversation.name}
                          </h4>
                          <p className="text-xs text-gray-500">
                            {new Date(conversation.creation_date).toLocaleDateString('fr-FR', {
                              day: 'numeric',
                              month: 'short',
                              hour: '2-digit',
                              minute: '2-digit'
                            })}
                          </p>
                        </div>
                        
                        <div className="flex items-center space-x-1 ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              // Handle edit - you can implement this later
                            }}
                            className="p-2 hover:bg-gray-200 rounded-lg"
                          >
                            <Edit3 className="w-4 h-4 text-gray-500" />
                          </button>
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              onDeleteConversation(conversation._id, e);
                            }}
                            className="p-2 hover:bg-red-100 rounded-lg"
                          >
                            <Trash2 className="w-4 h-4 text-red-500" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Create New Conversation Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/80 flex items-end justify-center p-4 z-60 lg:hidden">
          <div className="bg-white rounded-t-3xl w-full max-w-md animate-in slide-in-from-bottom duration-300">
            <div className="p-6">
              <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-6"></div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                Nouvelle conversation
              </h3>
              
              <input
                type="text"
                placeholder="Nom de la conversation"
                value={newConversationName}
                onChange={(e) => setNewConversationName(e.target.value)}
                className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-6 text-base"
                onKeyDown={(e) => e.key === 'Enter' && handleCreateConversation()}
                autoFocus
              />
              
              <div className="flex space-x-3">
                <button
                  onClick={() => setShowCreateModal(false)}
                  className="flex-1 px-4 py-3 text-gray-700 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors font-medium"
                >
                  Annuler
                </button>
                <button
                  onClick={handleCreateConversation}
                  disabled={!newConversationName.trim()}
                  className="flex-1 px-4 py-3 bg-[#223E66] text-white rounded-xl hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
                >
                  Créer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// Main Chat Interface Component
const ChatInterface = ({ assistantId }) => {
  const [conversations, setConversations] = useState([]);
  const [messages, setMessages] = useState([]);
  const [selectedThreadId, setSelectedThreadId] = useState(null);
  const [userInput, setUserInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [conversationsModalOpen, setConversationsModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newConversationName, setNewConversationName] = useState('');
  const messageListRef = useRef(null);
  const textareaRef = useRef(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, [messages]);

  // Auto-resize textarea
  const adjustTextareaHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 120)}px`;
    }
  };

  useEffect(() => {
    adjustTextareaHeight();
  }, [userInput]);

  // Fetch conversations
  const fetchConversations = async () => {
    const headers = { Authorization: localStorage.getItem("token") };
    try {
      const response = await axios.post(
        'https://lionfish-app-9xylm.ondigitalocean.app/api/v1/conversation',
        { assistant_id: assistantId },
        { headers }
      );
      const sortedConversations = response.data.sort((a, b) => new Date(b.creation_date) - new Date(a.creation_date));
      setConversations(sortedConversations);

      if (sortedConversations[0]) {
        setSelectedThreadId(sortedConversations[0]._id);
        fetchMessages(sortedConversations[0]._id);
      }
    } catch (error) {
      console.error('Error fetching conversations:', error);
    }
  };

  useEffect(() => {
    if (assistantId) {
      fetchConversations();
    }
  }, [assistantId]);

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

  // Create new conversation (original modal functionality)
  const createNewConversation = async () => {
    if (!newConversationName.trim()) return;
    setIsModalOpen(false);
    try {
      const requestData = {
        name: newConversationName,
        assistant_id: Number(assistantId),
      };
      const response = await apiService.post('/conversation/start', requestData);
      await fetchConversations();
      setSelectedThreadId(response.data?.thread_id);
      fetchMessages(response.data?.thread_id);
      setMessages([]);
      setNewConversationName('');
    } catch (error) {
      console.error('Error creating new conversation:', error);
    }
  };

  // Create new conversation from mobile modal
  const createNewConversationMobile = async (name) => {
    try {
      const requestData = {
        name: name,
        assistant_id: Number(assistantId),
      };
      const response = await apiService.post('/conversation/start', requestData);
      await fetchConversations();
      setSelectedThreadId(response.data?.thread_id);
      setMessages([]);
    } catch (error) {
      console.error('Error creating new conversation:', error);
    }
  };

  // Send user message
  const handleSendMessage = async () => {
    if (!userInput.trim() || loading) return;
    setLoading(true);

    const userMessage = { message: userInput, type: 'userMessage' };
    setMessages((prev) => [...prev, userMessage]);
    const currentInput = userInput;
    setUserInput('');

    try {
      const requestData = {
        thread_id: selectedThreadId,
        message: currentInput,
      };
      const response = await apiService.post('/conversation/send', requestData);
      setMessages((prev) => [
        ...prev,
        { message: response.data.response, type: 'apiMessage' },
      ]);
    } catch (error) {
      console.error('Error sending message:', error);
      // Remove user message on error
      setMessages((prev) => prev.slice(0, -1));
      setUserInput(currentInput);
    } finally {
      setLoading(false);
    }
  };

  // Delete conversation
  const deleteConversation = async (threadId, e) => {
    e.stopPropagation();
    try {
      await apiService.delete('/conversation', threadId);
      setConversations((prev) => {
        const updated = prev.filter((conv) => conv._id !== threadId);
        setSelectedThreadId(updated[0]?._id || null);
        if (updated[0]) {
          fetchMessages(updated[0]._id);
        } else {
          setMessages([]);
        }
        return updated;
      });
    } catch (error) {
      console.error('Error deleting conversation:', error);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleSelectConversation = (conversation) => {
    fetchMessages(conversation._id);
  };

  const currentConversation = conversations.find(c => c._id === selectedThreadId);

  return (
    <div className="flex h-[calc(94vh-8rem)] bg-white rounded-lg border border-gray-200 overflow-hidden">
      {/* Desktop Sidebar - Hidden on Mobile */}
      <div className="hidden lg:flex w-80 bg-gray-50 border-r border-gray-200 flex-col">
        {/* Desktop Sidebar Content */}
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Conversations</h2>
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full flex items-center justify-center px-4 py-2.5 bg-[#223E66] text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
          >
            <Plus className="w-4 h-4 mr-2" />
            Nouveau Chat
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-2">
          {conversations.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <MessageCircle className="w-12 h-12 mx-auto mb-3 text-gray-400" />
              <p className="text-sm">Aucune conversation</p>
            </div>
          ) : (
            <div className="space-y-1">
              {conversations.map((conversation) => (
                <div
                  key={conversation._id}
                  onClick={() => handleSelectConversation(conversation)}
                  className={`
                    group relative p-3 rounded-lg cursor-pointer transition-all duration-200
                    ${conversation._id === selectedThreadId 
                      ? 'bg-blue-100 border border-blue-200' 
                      : 'hover:bg-gray-100 border border-transparent'
                    }
                  `}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-sm font-medium truncate flex-1 mr-2 ${
                      conversation._id === selectedThreadId ? 'text-blue-900' : 'text-gray-700'
                    }`}>
                      {conversation.name}
                    </span>
                    
                    <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-1 hover:bg-gray-200 rounded">
                        <Edit3 className="w-3 h-3 text-gray-500" />
                      </button>
                      <button 
                        onClick={(e) => deleteConversation(conversation._id, e)}
                        className="p-1 hover:bg-red-100 rounded"
                      >
                        <Trash2 className="w-3 h-3 text-red-500" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col min-w-0 h-full">
        {/* Mobile Header */}
        <div className="lg:hidden flex-shrink-0 flex items-center justify-between p-4 border-b border-gray-200 bg-white">
          <button
            onClick={() => setConversationsModalOpen(true)}
            className="flex items-center space-x-3 flex-1 text-left"
          >
            <div className="p-2 bg-gray-100 rounded-lg">
              <MessageCircle className="w-5 h-5 text-gray-600" />
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-lg font-semibold text-gray-900 truncate">
                {currentConversation?.name || 'Assistant IA'}
              </h1>
              <p className="text-sm text-gray-500">
                Conversations
              </p>
            </div>
          </button>
        </div>

        {/* Desktop Header */}
        <div className="hidden lg:flex flex-shrink-0 items-center justify-between p-3 border-b border-gray-200 bg-white">
          <div>
            <h1 className="text-lg font-semibold text-gray-900">Assistant IA</h1>
            <p className="text-sm text-gray-500">
              {currentConversation?.name || 'Sélectionnez une conversation'}
            </p>
          </div>
        </div>

        {/* Chat Content */}
        {conversations.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <MessageCircle className="w-10 h-10 text-[#223E66]" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Aucune conversation
            </h3>
            <p className="text-gray-500 mb-6 max-w-md">
              Créez votre première conversation pour commencer à discuter avec l'assistant IA.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center px-6 py-3 bg-[#223E66] text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
            >
              <Plus className="w-4 h-4 mr-2" />
              Créer une conversation
            </button>
          </div>
        ) : (
          <>
            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-gray-50 to-white" ref={messageListRef}>
              {messages.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center px-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Bot className="w-8 h-8 text-[#223E66]" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Commencez une conversation</h3>
                  <p className="text-sm text-gray-500 max-w-sm">
                    Posez une question ou demandez de l'aide à votre assistant IA
                  </p>
                </div>
              ) : (
                messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex items-end space-x-2 ${
                      message.type === 'userMessage' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    {message.type === 'apiMessage' && (
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot className="w-4 h-4 text-[#223E66]" />
                      </div>
                    )}
                    
                    <div
                      className={`max-w-[85%] sm:max-w-[70%] px-4 py-3 rounded-2xl ${
                        message.type === 'userMessage'
                          ? 'bg-[#223E66] text-white rounded-br-md'
                          : 'bg-white text-gray-800 border border-gray-200 rounded-bl-md shadow-sm'
                      }`}
                    >
                      <div className={`prose prose-sm max-w-none ${
                        message.type === 'userMessage' ? 'prose-invert' : ''
                      }`}>
                        <ReactMarkdown>{message.message}</ReactMarkdown>
                      </div>
                    </div>

                    {message.type === 'userMessage' && (
                      <div className="w-8 h-8 bg-[#223E66] rounded-full flex items-center justify-center flex-shrink-0">
                        <User className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
            
            {/* Message Input */}
            <div className="flex-shrink-0 p-4 border-t border-gray-200 bg-white">
              <div className="flex items-end space-x-3 max-w-4xl mx-auto">
                <div className="flex-1 relative">
                  <textarea
                    ref={textareaRef}
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    disabled={loading}
                    placeholder={loading ? "En attente de réponse..." : "Tapez votre message..."}
                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 text-base"
                    style={{ minHeight: '48px', maxHeight: '120px' }}
                    rows={1}
                  />
                </div>
                
                <button
                  onClick={handleSendMessage}
                  disabled={loading || !userInput.trim()}
                  className="flex items-center justify-center w-12 h-12 bg-[#223E66] text-white rounded-xl hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex-shrink-0"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Mobile Conversations Modal */}
      <ConversationsModal
        isOpen={conversationsModalOpen}
        onClose={() => setConversationsModalOpen(false)}
        conversations={conversations}
        selectedThreadId={selectedThreadId}
        onSelectConversation={handleSelectConversation}
        onCreateNew={createNewConversationMobile}
        onDeleteConversation={deleteConversation}
      />
      {/* Original New Conversation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Nouvelle conversation</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1 hover:bg-gray-100 rounded-md"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6">
              <input
                type="text"
                placeholder="Nom de la conversation"
                value={newConversationName}
                onChange={(e) => setNewConversationName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-4"
                onKeyDown={(e) => e.key === 'Enter' && createNewConversation()}
              />
              
              <div className="flex space-x-3">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  Annuler
                </button>
                <button
                  onClick={createNewConversation}
                  disabled={!newConversationName.trim()}
                  className="flex-1 px-4 py-2 bg-[#223E66] text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                >
                  Créer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatInterface;