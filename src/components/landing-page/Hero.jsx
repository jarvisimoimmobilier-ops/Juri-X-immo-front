import React, { useState, useEffect } from "react";

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [hasReplied, setHasReplied] = useState(false);

  const token = localStorage.getItem("token");
  const authHref = token ? "/conversations" : "/login";

  const rotatingTexts = [
    "Quelle est la fiscalité de mon investissement locatif ?",
    "Comment rédiger un bail conforme à la loi ?",
    "Quels sont mes droits en tant que propriétaire ?",
    "Comment optimiser ma stratégie d'acquisition ?",
    "Quelles démarches pour une mise en location ?"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentText((prev) => (prev + 1) % rotatingTexts.length);
        setIsVisible(true);
      }, 300);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleTryFree = () => {
    window.location.href = authHref;
  };

  const handleSeeDemo = () => {
    scrollTo("demo");
  };

  // send once → then redirect to connexion if not authenticated
  const handleSend = () => {
    if (!chatInput.trim()) return;

    // push user message
    const userMsg = {
      role: "user",
      text: chatInput.trim(),
    };
    setMessages((m) => [...m, userMsg]);
    setChatInput("");

    if (!hasReplied) {
      // simple canned reply (one time)
      const reply = {
        role: "ai",
        text:
          "Merci ! Voici un aperçu rapide. Pour une réponse complète et personnalisée, connectez-vous.",
      };
      setMessages((m) => [...m, reply]);
      setHasReplied(true);

      // redirect after short delay
      setTimeout(() => {
        window.location.href = token ? "/conversations" : "/login";
      }, 1200);
    }
  };
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full opacity-10 blur-3xl transform translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-orange-400 to-purple-500 rounded-full opacity-10 blur-3xl transform -translate-x-32 translate-y-32"></div>

      <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 pt-8 pb-8 sm:pt-12 sm:pb-12 lg:pt-16 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8">

            {/* Main heading (new tagline with same gradient style) */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                L’IA spécialisée dans l'immobilier
              </span>{" "}
              qui vous répond et vous assiste dans vos projets et au quotidien,{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                24/7
              </span>.
            </h1>

            {/* Star Rating (kept) */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <span className="text-2xl font-bold text-gray-900">4.5</span>
                <div className="flex">
                  {[...Array(4)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927a1 1 0 011.902 0l1.07 3.292a1 1 0 00.95.69h3.462a1 1 0 01.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292a1 1 0 01-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034a1 1 0 01-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72a1 1 0 01.588-1.81h3.462a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <defs>
                      <linearGradient id="half">
                        <stop offset="50%" stopColor="#FBBF24" />
                        <stop offset="50%" stopColor="#E5E7EB" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M9.049 2.927a1 1 0 011.902 0l1.07 3.292a1 1 0 00.95.69h3.462a1 1 0 01.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292a1 1 0 01-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034a1 1 0 01-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72a1 1 0 01.588-1.81h3.462a1 1 0 00.951-.69l1.07-3.292z"
                      fill="url(#half)"
                    />
                  </svg>
                </div>
              </div>
              <span className="text-gray-600">Noté par 500+ utilisateurs</span>
            </div>

            {/* Rotating Questions */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-500 mb-2 font-medium">Questions fréquentes :</p>
                  <p className={`text-gray-800 font-medium text-lg transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    "{rotatingTexts[currentText]}"
                  </p>
                </div>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {["Réponses instantanées", "Génération de documents", "Conformité légale"].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons (now functional) */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleTryFree}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Essayer gratuitement
                <svg className="w-5 h-5 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <a
                href="#demo"
                // onClick={handleSeeDemo}
                className="inline-flex items-center justify-center px-6 py-4 text-lg font-semibold text-gray-700 bg-white border-2 border-gray-200 rounded-xl hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all duration-200 shadow-md"
              >
                <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M12 5v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Voir la démo
              </a>
                
            </div>
          </div>

          {/* Right Visual - Chat Interface */}
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden max-w-md mx-auto">
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Juri-X-Immo</h3>
                      <p className="text-blue-100 text-sm">Assistant Juridique Immobilier</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-white text-xs">En ligne</span>
                  </div>
                </div>
              </div>
              
              {/* Chat Messages */}
              <div className="p-6 space-y-4 h-80 overflow-y-auto bg-gray-50">
                {/* User message */}
                <div className="flex justify-end">
                  <div className="bg-blue-600 text-white rounded-2xl rounded-tr-sm px-4 py-3 max-w-xs">
                    <p className="text-sm">
                      Je veux acheter mon premier appartement. Quelles sont les étapes <strong>à suivre</strong> et la fiscalité <strong>applicable</strong> ?
                    </p>
                  </div>
                </div>
                
                {/* AI Response (static preview + dynamic one on send) */}
                {messages.length === 0 && (
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 flex-1 shadow-sm">
                      <p className="text-sm text-gray-800 mb-3">
                        Parfait ! Je vais vous accompagner dans votre projet d'acquisition. Voici les étapes clés :
                      </p>
                      <div className="space-y-2">
                        {[
                          "Évaluation de votre capacité d'emprunt",
                          "Recherche et visite de biens",
                          "Négociation et offre d'achat"
                        ].map((step, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <div className={`w-4 h-4 rounded-full flex items-center justify-center ${
                              index === 0 ? 'bg-green-500' : index === 1 ? 'bg-blue-500' : 'bg-purple-500'
                            }`}>
                              <span className="text-white text-xs font-bold">{index + 1}</span>
                            </div>
                            <span className="text-xs text-gray-600">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Render dynamic chat */}
                {messages.map((m, i) => (
                  <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "items-start space-x-3"}`}>
                    {m.role === "ai" && (
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                    )}
                    <div className={`${m.role === "user" ? "bg-blue-600 text-white rounded-2xl rounded-tr-sm" : "bg-white rounded-2xl rounded-tl-sm"} px-4 py-3 max-w-xs shadow-sm`}>
                      <p className="text-sm">{m.text}</p>
                    </div>
                  </div>
                ))}

              </div>

              {/* Input area */}
              <div className="bg-white px-6 py-4 border-t border-gray-100">
                <div className="flex items-center space-x-3">
                  <input
                    type="text"
                    placeholder="Posez votre question …"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    className="flex-1 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                  />
                  <button
                    onClick={handleSend}
                    className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
                    aria-label="Envoyer"
                  >
                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg animate-pulse">
              ✓ Conforme aux lois 2025
            </div>
            <div className="absolute -bottom-4 -left-4 bg-orange-500 text-white rounded-lg shadow-lg p-3">
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-xs font-medium">Réponse instantanée</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
