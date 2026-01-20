
import React from 'react';
import { SITE_INFO } from '../constants';

const TechnicalRecommendations: React.FC = () => {
  return (
    <section className="py-24 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-sm font-bold text-blue-200 uppercase tracking-widest mb-2">Engineering Roadmap</h2>
          <h3 className="text-4xl font-bold mb-8">Structural & Environmental Mitigation</h3>
          <p className="text-xl text-blue-100 mb-12 leading-relaxed">
            Standard spread footings are high-risk due to compressible Pliocene clays. We recommend a <span className="text-white font-bold underline underline-offset-4 decoration-blue-300">combined deep foundation and elevated platform</span> approach.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl">
              <div className="text-blue-200 font-bold mb-3 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-500/50 flex items-center justify-center text-xs border border-blue-400">1</div>
                Deep Foundations
              </div>
              <p className="text-sm text-blue-50 leading-relaxed">Driven or bored piles anchored into Miocene sandstones to bypass shallow compressible alluvial layers.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl">
              <div className="text-blue-200 font-bold mb-3 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-500/50 flex items-center justify-center text-xs border border-blue-400">2</div>
                Elevated Slab (FFL)
              </div>
              <p className="text-sm text-blue-50 leading-relaxed">Finished Floor Level (FFL) should be raised +1.5m above natural grade to mitigate pluvial flood accumulation.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl">
              <div className="text-blue-200 font-bold mb-3 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-500/50 flex items-center justify-center text-xs border border-blue-400">3</div>
                Seismic Shielding
              </div>
              <p className="text-sm text-blue-50 leading-relaxed">Structural design must assume strong ground motion (Mw 6.4) with high-ductility frames per Eurocode 8.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl">
              <div className="text-blue-200 font-bold mb-3 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-500/50 flex items-center justify-center text-xs border border-blue-400">4</div>
                Dual Drainage
              </div>
              <p className="text-sm text-blue-50 leading-relaxed">Perimeter French drains combined with high-capacity retention basins for slow discharge into municipal lines.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalRecommendations;
