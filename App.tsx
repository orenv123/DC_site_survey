
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GeoOverview from './components/GeoOverview';
import MapSection from './components/MapSection';
import ClimateSection from './components/ClimateSection';
import GeotechnicalSection from './components/GeotechnicalSection';
import TechnicalRecommendations from './components/TechnicalRecommendations';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <div id="overview">
          <GeoOverview />
        </div>
        <div id="map">
          <MapSection />
        </div>
        <div id="climate">
          <ClimateSection />
        </div>
        <div id="geotech">
          <GeotechnicalSection />
        </div>
        <div id="recommendations">
          <TechnicalRecommendations />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
