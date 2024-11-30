import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ParticularServices from "./components/ParticularServices";
import SectionHeader from "./components/SectionHeader";
import Philatelie from "./components/Philatelie";
import CorporateServices from "./components/CorporateServices";
import NewsSection from "./components/NewsSection";
import hackathon from "./assets/hackathon.jpg";
import minister from "./assets/minister.jpg";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import JobSection from "./components/JobSection";

function App() {
  const dummyNews = [
    {
      slug: "COMMUNIQUÉ DE PRESSE",
      title: "COMMUNIQUÉ DE PRESSE",
      description:
        "lgérie Poste annonce le lancement officiel d’INNOVPOST, le premier hackathon national dédié à l'innovation technologique dans le...",
      date: "2024-11-30",
      imageUrl: hackathon
    },
    {
      slug: "Mot du Directeur général à l'occasion de l'Aid el...",
      title: "Mot du Directeur général à l'occasion de l'Aid el...",
      description:
        "ةيسرني أن أتقدم إليكم زميلاتي، زملائي عاملات و عمال بريد الجزائر بأسمى التهاني والتبريكات بمناسبة...",
      date: "2024-11-29",
      imageUrl: minister
    }
  ];

  return (
    <div className="relative">
      {/* Blobs */}

      {/* Page Content */}
      <Navbar />
      <HeroSection />

      <SectionHeader
        title="Actualité"
        description="Suivez au quotidien toute l'actualité d'Algérie Poste"
        id="Actualité" // Matching section ID
      />
      <NewsSection news={dummyNews} />

      <SectionHeader
        title="services particuliers"
        description="DÈCOUVREZ LES SERVICES DESTINÉS AU GRAND PUBLIC"
        id="servicespart" // Matching section ID
      />
      <ParticularServices />

      <SectionHeader
        title="services corporate"
        description="SERVICES DESTINÉS AUX PROFESSIONNELS & AUX ENTREPRISES"
        id="servicescor" // Matching section ID
      />
      <CorporateServices />

      <SectionHeader
        title="Philatélie"
        description="Toutes les émissions des timbres de l'Algérie depuis 1962"
        button1Text={"Découvrir"}
        button2Text={"Programme"}
        id="philately" // Matching section ID
      />
      <Philatelie />

      <SectionHeader
        title="Appels d'offres"
        description="Consultez les tous derniers appels d'offres"
        button1Text={"Direction générale"}
        button2Text={"UPW et CFR"}
        id="avis" // Matching section ID
      />
      <JobSection />
      <Footer />
    </div>
  );
}

export default App;
