import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ParticularServices from "./components/ParticularServices";
import SectionHeader from "./components/SectionHeader";
import CorporateServices from "./components/CorporateServices";
import NewsSection from "./components/NewsSection";
import hackathon from "./assets/hackathon.jpg";
import minister from "./assets/minister.jpg";
function App() {
  const dummyNews = [
    {
      slug: "new-space-discovery",
      title: "New Space Discovery",
      description:
        "Scientists have discovered a new planet in a nearby galaxy, sparking excitement in the space community.",
      date: "2024-11-30",
      imageUrl: hackathon
    },
    {
      slug: "tech-breakthrough",
      title: "Tech Breakthrough",
      description:
        "A groundbreaking AI model is revolutionizing the way businesses analyze customer behavior.",
      date: "2024-11-29",
      imageUrl: minister
    }
  ];

  return (
    <div>
      <SectionHeader
        title="Actualité"
        description="Suivez au quotidien toute l'actualité d'Algérie Poste"
      />

      <NewsSection news={dummyNews} />
      <SectionHeader
        title="services particuliers"
        description="DÈCOUVREZ LES SERVICES DESTINÉS AU GRAND PUBLIC"
      />
      <ParticularServices />
      <SectionHeader
        title="services corporate"
        description="SERVICES DESTINÉS AUX PROFESSIONNELS & AUX ENTREPRISES"
      />

      <CorporateServices />

      <SectionHeader
        title="Philatélie"
        description="Toutes les émissions des timbres de l'Algérie depuis 1962"
      />

      <SectionHeader
        title="Appels d'offres"
        description="Consultez les tous derniers appels d'offres"
      />
    </div>
  );
}

export default App;
