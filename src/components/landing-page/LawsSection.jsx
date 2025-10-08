import React from "react";

const LawsSection = () => {
  const handleTestFree = () => {
    // Redirect to login if not authenticated
    const token = localStorage.getItem("token");
    window.location.href = token ? "/conversations" : "/login";
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 sm:py-20 lg:py-24">
      <div className="px-4 mx-auto max-w-5xl text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
          Toutes les lois,
          <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            même les plus récentes
          </span>
        </h2>

        <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-600">
        Avec Juri-X-Immo, vous avez directement accès à une base de données juridiques à jour, pour être au fait des évolutions législatives, réglementaires et jurisprudentielles.
        </p>

        <div className="mt-10">
          <button
            onClick={handleTestFree}
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform hover:scale-105 transition-all duration-200"
          >
            Testez-le gratuitement
          </button>
        </div>
      </div>
    </section>
  );
};

export default LawsSection;
