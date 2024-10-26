import React, { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
// import CircularProgress from '@mui/material/CircularProgress';


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

  // Auto scroll chat to bottom
  useEffect(() => {
    const messageList = messageListRef.current;
    messageList.scrollTop = messageList.scrollHeight;
  }, [messages]);

  // Focus on text field on load
  useEffect(() => {
    textAreaRef.current.focus();
  }, []);

  // Handle form submission (Front-end only)
  const handleSubmit = (e) => {
    e.preventDefault();

    if (userInput.trim() === '') {
      return;
    }

    setLoading(true);

    // Add the user's message to the message list
    setMessages((prevMessages) => [
      ...prevMessages,
      { message: userInput, type: 'userMessage' },
    ]);

    // Simulate a delay for the bot response
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

    // Clear the input field
    setUserInput('');
  };

  // Prevent blank submissions and allow for multiline input
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
    <div className="flex flex-col h-screen bg-gray-300">
      <div className="flex-grow p-6 overflow-y-auto" ref={messageListRef}>
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
                src="/logo.png"
                alt="User"
                width={30}
                height={30}
                className="ml-3"
              />
            )}
          </div>
        ))}
      </div>
      <div className="p-4 border-t border-gray-200 bg-white">
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
            className="flex-grow p-2 border  focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button
            type="submit"
            disabled={loading}
            className="ml-4 p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            {loading ? (
             <div>
                Loading
                {/* <CircularProgress color="inherit" size={20} /> */}
             </div>
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

export default ChatComponent;
