import React from "react";
import Header from "./components/Header/Header";
import "./styles/globals.css";
import MessageSection from "./components/Message/MessageSection";
import WorksSection from "./components/Works/WorksSection";
import DestinySection from "./components/Destiny/DestinySection";
import PricingPackages from "./components/Pricing/PricingPackages";
import FooterSection from "./components/Footer/FooterSection";
import MainSection from "./components/Main/MainSection";

const App: React.FC = () => {
  return (
    <div className="font-sans">
      <Header />
      <main>
        <MainSection />
        <MessageSection />
        <WorksSection />
        <DestinySection />
        <PricingPackages />
        <FooterSection />
      </main>
    </div>
  );
};

export default App;
