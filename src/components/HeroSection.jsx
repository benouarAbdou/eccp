import React from "react";
import { MdCelebration } from "react-icons/md";

export default function HeroSection() {
  return (
    <div className="relative py-20 px-6 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-yellow-400 rounded-full filter blur-3xl opacity-30 "></div>
      <div className="absolute top-0 right-0 w-45 h-32 bg-purple-500 rounded-full filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-1/3 left-1/4 w-40 h-40 bg-blue-400 rounded-full filter blur-3xl opacity-30"></div>

      {/* Hero Content */}
      <div className="relative max-w-3xl mx-auto text-center z-10">
        {/* Top small text */}
        <p className="text-sm font-semibold uppercase mb-4 text-gray-800 bg-white px-4 py-2 inline-block rounded-full">
          <MdCelebration className="inline-block mr-2" /> Un nouveau design pour
          l'ECCP
        </p>

        {/* Cool slogan */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-gray-900">
          Révolutionner les Services Postaux
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl mb-6 text-gray-700">
          Adoptez la prochaine phase technologique et améliorez la façon dont
          les entreprises postales se connectent avec leurs clients.
        </p>

        {/* Call to action button */}
        <button
          onClick={() =>
            (window.location.href = "https://github.com/benouarAbdou/eccp")
          }
          className="px-6 py-3 bg-blue-400 text-white font-semibold rounded-md hover:bg-blue-500"
        >
          Voir les detailles
        </button>
      </div>
    </div>
  );
}
