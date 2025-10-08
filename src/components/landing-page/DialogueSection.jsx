import React, { useRef, useState } from 'react';

const DialogueSection = () => {
  const [messages, setMessages] = useState([
    {
      role: 'user',
      text:
        "Bonjour ! Je souhaite réaliser mon premier investissement immobilier. Quelles sont les démarches à effectuer et quelles sont les règles fiscales en vigueur ?",
    },
    {
      role: 'ai',
      text:
        "Bonjour ! Félicitations pour votre projet d'investissement immobilier. Je vais vous donner une vue d'ensemble des démarches à suivre ainsi que des principales règles fiscales en vigueur.",
    },
  ]);
  const [input, setInput] = useState('');
  const [hasReplied, setHasReplied] = useState(false);

  const token = localStorage.getItem('token');
  const chatInputRef = useRef(null);

  const scrollToChat = () => {
    chatInputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    chatInputRef.current?.focus();
  };

  const handlePrimaryCTA = () => {
    if (token) {
      window.location.href = '/conversations';
    } else {
      window.location.href = '/login';
    }
  };

  const handleSend = () => {
    const text = input.trim();
    if (!text) return;

    setMessages((m) => [...m, { role: 'user', text }]);
    setInput('');

    if (!hasReplied) {
      setMessages((m) => [
        ...m,
        {
          role: 'ai',
          text:
            "Merci ! Voici un aperçu rapide. Pour une réponse complète et personnalisée, connectez-vous à votre espace.",
        },
      ]);
      setHasReplied(true);

      // Redirection pour tous les cas
      setTimeout(() => {
        window.location.href = token ? '/conversations' : '/login';
      }, 1200);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <section id="dialogue" className="py-16 bg-white sm:py-20 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-x-16">
          {/* Left copy */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              Dialogue avec vous
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Créez une nouvelle conversation, posez votre question ou donnez vos instructions,
              l’IA répond ou exécute…
            </p>

            <div className="mt-8 space-y-4">
              {[
                'Conversations naturelles et intuitives',
                'Réponses spécialisées en immobilier',
                'Assistance 24h/24, 7j/7',
              ].map((t) => (
                <div key={t} className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full">
                      <svg
                        className="w-4 h-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-lg text-gray-800">{t}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <button
                onClick={handlePrimaryCTA}
                className="inline-flex items-center px-6 py-3 text-base font-semibold text-white transition-all duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
              >
                Commencer la conversation
              </button>
            </div>
          </div>

          {/* Right panel - chat preview + input */}
          <div>
            <div className="relative">
              <div className="absolute -inset-1">
                <div
                  className="w-full h-full mx-auto opacity-30 blur-lg filter"
                  style={{
                    background:
                      'linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)',
                  }}
                ></div>
              </div>

              <div className="relative overflow-hidden bg-white rounded-2xl shadow-xl">
                {/* Chat body */}
                <div className="p-6 sm:p-8 space-y-4 max-h-80 overflow-y-auto">
                  {messages.map((m, i) =>
                    m.role === 'user' ? (
                      <div key={i} className="flex items-start space-x-3">
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 bg-gray-300 rounded-full" />
                        </div>
                        <div className="flex-1">
                          <div className="bg-gray-100 rounded-lg p-3">
                            <p className="text-sm text-gray-800">{m.text}</p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div key={i} className="flex items-start space-x-3 justify-end">
                        <div className="flex-1">
                          <div className="bg-blue-600 rounded-lg p-3">
                            <p className="text-sm text-white">{m.text}</p>
                          </div>
                        </div>
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                            <svg
                              className="w-4 h-4 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>

                {/* Input area (functional) */}
                <div className="px-6 sm:px-8 py-4 border-t border-gray-100">
                  <div ref={chatInputRef} className="flex items-center space-x-3">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="Posez votre question …"
                      className="flex-1 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                    />
                    <button
                      onClick={handleSend}
                      className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
                      aria-label="Envoyer"
                    >
                      <svg
                        className="w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Badge */}
              <div className="absolute -bottom-4 -left-4 bg-orange-500 text-white rounded-lg shadow-lg p-3">
                <div className="flex items-center space-x-2">
                  <svg
                    className="w-4 h-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="text-xs font-medium">Réponse unique gratuite</span>
                </div>
              </div>
            </div>
          </div>
          {/* End right */}
        </div>
      </div>
    </section>
  );
};

export default DialogueSection;
