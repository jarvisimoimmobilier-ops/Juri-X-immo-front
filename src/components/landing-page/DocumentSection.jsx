import React from 'react';

/**
 * DocumentSection
 * Props (optional):
 * - fileUrl?: string            // absolute/relative URL of the generated doc to download
 * - onDownload?: () => void     // custom download handler (overrides fileUrl flow)
 * - onModify?: () => void       // custom modify handler (overrides default redirect)
 * - editorPath?: string         // default: "/documents/editor"
 */
const DocumentSection = ({
  fileUrl,
  onDownload,
  onModify,
  editorPath = "/documents/editor",
}) => {
  const token = localStorage.getItem("token");

  const ensureAuthOr = (fn) => {
    if (!token) {
      window.location.href = "/login";
      return;
    }
    fn?.();
  };

  const handleDownload = () => {
    if (!token) {
      window.location.href = "/login";
      return;
    }
    window.location.href = "/conversations";
  };

  const handleModify = () => {
    if (!token) {
      window.location.href = "/login";
      return;
    }
    window.location.href = "/conversations";
  };

  return (
    <section className="py-16 bg-white sm:py-20 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-x-16">
          <div>
            {/* Badge */}
            <span className="inline-block mb-4 px-3 py-1 text-xs font-semibold text-orange-800 bg-orange-100 rounded-full">
              🚧 Bientôt disponible
            </span>

            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl font-pj">
              Génère vos documents
            </h2>
            <p className="mt-6 text-lg text-gray-600 font-pj">
              Contrats, baux, états des lieux, et bien d'autres… Générez des documents techniques et professionnels prêts à l'emploi.
            </p>

            {/* grid of document types */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-xl flex flex-col items-center py-6">
                <svg className="w-8 h-8 text-blue-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293L18.707 9.12A1 1 0 0119 9.828V19a2 2 0 01-2 2z" />
                </svg>
                <span className="font-semibold text-blue-700">Contrats</span>
              </div>
              <div className="bg-green-50 rounded-xl flex flex-col items-center py-6">
                <svg className="w-8 h-8 text-green-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v4a1 1 0 001 1h3v9h8v-9h3a1 1 0 001-1V7a1 1 0 00-1-1H4a1 1 0 00-1 1z" />
                </svg>
                <span className="font-semibold text-green-700">Baux</span>
              </div>
              <div className="bg-purple-50 rounded-xl flex flex-col items-center py-6">
                <svg className="w-8 h-8 text-purple-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 17l4-4 4 4m0-8l-4 4-4-4" />
                </svg>
                <span className="font-semibold text-purple-700">États des lieux</span>
              </div>
              <div className="bg-orange-50 rounded-xl flex flex-col items-center py-6">
                <svg className="w-8 h-8 text-orange-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
                <span className="font-semibold text-orange-700">Documents légaux</span>
              </div>
            </div>
          </div>

          <div>
            <div className="relative">
              <div className="absolute -inset-1">
                <div
                  className="w-full h-full mx-auto opacity-30 blur-lg filter"
                  style={{
                    background:
                      "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
                  }}
                ></div>
              </div>
              <div className="relative overflow-hidden bg-white rounded-2xl shadow-xl">
                <div className="bg-gray-50 px-6 py-4 border-b flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Contrat de Bail.pdf
                  </h3>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Généré
                  </span>
                </div>
                <div className="p-6">
                  <div>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="w-1.5 h-6 rounded-full mr-3" style={{background:'#3B82F6'}}></span>
                        <div>
                          <span className="font-semibold text-gray-900">Article 1 – Objet du contrat</span>
                          <p className="text-sm text-gray-600">Le bailleur loue au locataire l'appartement situé…</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="w-1.5 h-6 rounded-full mr-3" style={{background:'#10B981'}}></span>
                        <div>
                          <span className="font-semibold text-gray-900">Article 2 – Durée et renouvellement</span>
                          <p className="text-sm text-gray-600">Le présent bail est conclu pour une durée de…</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="w-1.5 h-6 rounded-full mr-3" style={{background:'#8B5CF6'}}></span>
                        <div>
                          <span className="font-semibold text-gray-900">Article 3 – Loyer et charges</span>
                          <p className="text-sm text-gray-600">Le montant du loyer s'élève à…</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="w-1.5 h-6 rounded-full mr-3" style={{background:'#F97316'}}></span>
                        <div>
                          <span className="font-semibold text-gray-900">Article 4 – Dépôt de garantie</span>
                          <p className="text-sm text-gray-600">Un dépôt de garantie équivalent à un mois de loyer…</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex justify-between items-center">
                    <div className="flex space-x-2">
                      <button
                        onClick={handleDownload}
                        className="bg-blue-600 text-white px-3 py-1 rounded text-xs font-semibold hover:bg-blue-700"
                      >
                        Télécharger
                      </button>
                      <button
                        onClick={handleModify}
                        className="bg-gray-200 text-gray-700 px-3 py-1 rounded text-xs font-semibold hover:bg-gray-300"
                      >
                        Modificateur
                      </button>
                    </div>
                    <span className="text-xs text-gray-500">
                      Conforme aux lois en vigueur
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentSection;
