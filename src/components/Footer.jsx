import React from "react";

const Footer = () => {
  return (
    <footer className=" text-gray-700 py-8">
      <div className="container    grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Postal Presence Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Présence Postale</h3>
          <ul className="space-y-2">
            {[
              "Liste des Bureaux de Poste",
              "Liste des Bureaux de Poste Itinérants",
              "Liste des GAB",
              "Liste des CDD",
              "Liste des CTR, CPX, CTNI"
            ].map((item, index) => (
              <li key={index}>
                <button className="w-full text-left bg-gray-200 text-gray-700 rounded-md px-3 py-2 hover:bg-gray-300">
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">À Propos</h3>
          <ul className="space-y-2">
            {[
              "Présentation",
              "Historique de la Poste",
              "Téléchargez la Charte Graphique",
              "Politique Qualité d’Algérie Poste",
              "Recueil de textes législatifs"
            ].map((item, index) => (
              <li key={index}>
                <button className="w-full text-left bg-gray-200 text-gray-700 rounded-md px-3 py-2 hover:bg-gray-300">
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Employee Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Espace Postier</h3>
          <ul className="space-y-2">
            {["Appels à Candidature interne", "e-Learning"].map(
              (item, index) => (
                <li key={index}>
                  <button className="w-full text-left bg-gray-200 text-gray-700 rounded-md px-3 py-2 hover:bg-gray-300">
                    {item}
                  </button>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <div className="text-sm space-y-2 text-left">
            <p>
              <strong>Adresse:</strong> Quartier des affaires, 16024, Bab
              Ezzouar, Algérie
            </p>
            <p>
              <strong>NIF:</strong> 000216002104442
            </p>
            <p>
              <strong>RC:</strong> 16 /0000210444 B 02
            </p>
            <p>
              <strong>Tél:</strong> 023 92 32 00 &nbsp; | &nbsp;{" "}
              <strong>Fax:</strong> 023 92 31 70
            </p>
            <p>
              <strong>E-Mail:</strong>{" "}
              <a
                href="mailto:clientap@poste.dz"
                className="text-gray-800 underline hover:text-gray-600"
              >
                clientap@poste.dz
              </a>
            </p>
            <p>
              Pour toute réclamation, appelez notre :{" "}
              <button className="text-white bg-gray-700 rounded-full px-4 py-1 hover:bg-gray-600">
                CENTRE D’APPEL 1530
              </button>
            </p>
            <div className="mt-4">
              <p className="italic text-sm text-gray-500">
                Impossible de charger Google Maps correctement sur cette page.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
