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
    ensureAuthOr(() => {
      if (typeof onDownload === "function") {
        onDownload();
        return;
      }
      if (fileUrl) {
        const a = document.createElement("a");
        a.href = fileUrl;
        a.download = "";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      } else {
        alert("Téléchargement prêt. Branchez fileUrl quand votre document est généré.");
      }
    });
  };

  const handleModify = () => {
    ensureAuthOr(() => {
      if (typeof onModify === "function") {
        onModify();
        return;
      }
      window.location.href = editorPath;
    });
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
              {/* ... keep your Contrats / Baux / États des lieux / Documents légaux blocks here ... */}
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
                <div className="bg-gray-50 px-6 py-4 border-b">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Contrat de Bail.pdf
                    </h3>
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      Généré
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  {/* articles preview */}
                  <div className="mt-6 flex justify-between items-center">
                    <div className="flex space-x-2">
                      <button
                        onClick={handleDownload}
                        className="bg-blue-600 text-white px-3 py-1 rounded text-xs hover:bg-blue-700"
                      >
                        Télécharger
                      </button>
                      <button
                        onClick={handleModify}
                        className="bg-gray-200 text-gray-700 px-3 py-1 rounded text-xs hover:bg-gray-300"
                      >
                        Modifier
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
