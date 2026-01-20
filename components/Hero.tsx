
import React from 'react';
import { SITE_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[80vh] flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1920" 
          alt="Tirana Plain Industrial Context" 
          className="w-full h-full object-cover filter brightness-[0.4]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/40 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-2xl">
          <div className="inline-block px-3 py-1 bg-blue-600/30 border border-blue-500 rounded-full text-blue-300 text-xs font-bold tracking-widest uppercase mb-4">
            Technical Site Report
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
            <span className="text-blue-400">Tirana Plain</span> <br/>
            Data Center Survey
          </h1>
          <div className="flex items-center gap-2 mb-6 text-slate-400 font-mono text-sm bg-slate-800/50 w-fit px-3 py-1.5 rounded border border-slate-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            {SITE_INFO.coordinates.decimal}
          </div>
          <p className="text-lg text-slate-300 mb-8 leading-relaxed">
            Geographic and geologic assessment of the <span className="text-white font-medium">{SITE_INFO.location}</span>. Part of Albania’s strategic Western Lowlands corridor.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-lg">
              <span className="block text-xs text-slate-400 uppercase font-bold mb-1 tracking-wider">Survey Elevation</span>
              <span className="text-2xl font-bold">{SITE_INFO.elevation.exact}</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-lg">
              <span className="block text-xs text-slate-400 uppercase font-bold mb-1 tracking-wider">Temp Range</span>
              <span className="text-2xl font-bold">{SITE_INFO.climate.extremes}</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-lg">
              <span className="block text-xs text-slate-400 uppercase font-bold mb-1 tracking-wider">Topography</span>
              <span className="text-2xl font-bold">Flat</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
