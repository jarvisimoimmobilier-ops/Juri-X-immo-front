import React, { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
// import CircularProgress from '@mui/material/CircularProgress';
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { RiChatNewFill } from "react-icons/ri";

const ChatComponent = () => {
  const [userInput, setUserInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([
    {
      message: 'Hi there! How can I help?',
      type: 'apiMessage',
    },
  ]);

  const messageListRef = useRef(null);
  const textAreaRef = useRef(null);

  useEffect(() => {
    const messageList = messageListRef.current;
    messageList.scrollTop = messageList.scrollHeight;
  }, [messages]);

  useEffect(() => {
    textAreaRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userInput.trim() === '') {
      return;
    }

    setLoading(true);

    setMessages((prevMessages) => [
      ...prevMessages,
      { message: userInput, type: 'userMessage' },
    ]);

    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          message: "This is a simulated response. The actual response would come from an API.",
          type: "apiMessage"
        }
      ]);
      setLoading(false);
    }, 1500);

    setUserInput('');
  };

  const handleEnter = (e) => {
    if (e.key === 'Enter' && userInput) {
      if (!e.shiftKey && userInput) {
        handleSubmit(e);
      }
    } else if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

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
                src="/parroticon.png"
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
                src="/usericon.png"
                alt="User"
                width={30}
                height={30}
                className="ml-3"
              />
            )}
          </div>
        ))}
      </div>
      <div className="p-4 border-t bg-white rounded-b-lg">
        <form onSubmit={handleSubmit} className="flex items-center">
          <textarea
            disabled={loading}
            onKeyDown={handleEnter}
            ref={textAreaRef}
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
            {loading ? (
              <div>Loading</div>
            ) : (
              <svg viewBox="0 0 20 20" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
              </svg>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

const ChatInterface = () => {
  return (
    <div className="flex h-[600px] bg-gray-100 w-full">
      {/* Sidebar */}
      <div className="w-1/4 bg-blue-50 p-4">
        <button className="flex items-center w-full p-3 mb-6 border border-[#223E66] text-white rounded-lg shadow-md  transition duration-300">
          <span className="text-lg font-semibold text-[#223E66] flex justify-start items-center"> <RiChatNewFill size={24} className="mr-2"/>
          New Chat</span>
        </button>
        <div className="text-gray-700 font-semibold mb-4">Chat History</div>
        <div className="bg-[#223E66] text-[rgba(245, 33, 33, 0.133)KD] text-white p-4 rounded-lg flex items-center justify-between mb-4 shadow-lg hover:bg-blue-700 transition duration-300">
          <span>Chat Title Here</span>
          <div className="flex space-x-2">
       <button className='cursor-pointer'><CiEdit size={24}/></button>   
        <button className='cursor-pointer'>  <MdDeleteOutline size={24} color="#3232KD" /></button>
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-grow flex flex-col p-6 bg-gray-50">
        {/* Chat Component */}
        <ChatComponent />
      </div>
    </div>
  );
};

export default ChatInterface;
