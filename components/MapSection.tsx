
import React from 'react';
import { SITE_INFO } from '../constants';

const MapSection: React.FC = () => {
  // Coordinates provided: 41.33447, 19.74394
  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=19.72,41.32,19.77,41.35&layer=mapnik&marker=${SITE_INFO.coordinates.decimal.replace(', ', ',')}`;

  return (
    <section className="py-24 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">Precision Mapping</h2>
              <h3 className="text-3xl font-bold text-slate-900 leading-tight">Site Location & Boundary Analysis</h3>
              <p className="mt-4 text-slate-600">
                Centrally located at <span className="text-slate-900 font-mono font-bold">{SITE_INFO.coordinates.lat}, {SITE_INFO.coordinates.lng}</span> in the Kashar/Mëzez industrial zone.
              </p>
            </div>
            
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 aspect-video">
              <iframe 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                scrolling="no" 
                marginHeight={0} 
                marginWidth={0} 
                src={mapUrl}
                className="filter contrast-125 saturate-50 grayscale-[20%]"
              ></iframe>
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md p-3 rounded-lg shadow-lg border border-slate-200">
                <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">Satellite Reference</div>
                <div className="text-xs font-bold text-slate-800">Tirana-Durrës Industrial Axis</div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
              <h4 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5V2a1 1 0 00-1-1h-5a1 1 0 00-1 1v1.17a3 3 0 01-1.657 2.683l-4.686 2.343a1 1 0 00-.586.894V14a1 1 0 001 1h5a1 1 0 001-1V7.83a1 1 0 01.17-.553L12 7z" clipRule="evenodd" />
                </svg>
                Terrain Topology Map
              </h4>
              
              <div className="relative h-48 w-full bg-slate-200 rounded-xl overflow-hidden mb-6 flex items-end">
                {/* Visual representation of elevation range 52m to 267m */}
                <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent"></div>
                
                {/* Distance range mock */}
                <div className="w-full h-full flex items-end px-4 gap-1">
                  <div className="w-1/4 h-1/5 bg-slate-300 rounded-t group relative">
                    <div className="absolute -top-6 left-0 text-[10px] text-slate-500 font-bold opacity-0 group-hover:opacity-100 transition-opacity">52m</div>
                  </div>
                  <div className="w-1/2 h-[35%] bg-blue-500 rounded-t relative">
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-center">
                      <span className="text-xs font-black text-blue-600">~94m</span>
                      <div className="w-px h-2 bg-blue-600 mx-auto"></div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-[10px] text-white font-bold uppercase tracking-tighter">Site Plate</span>
                    </div>
                  </div>
                  <div className="w-1/4 h-full bg-slate-400 rounded-t group relative">
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 text-[10px] text-white font-bold uppercase rotate-90">267m Hill</div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Max Local Elevation</span>
                  <span className="font-bold text-slate-900">267m</span>
                </div>
                <div className="flex justify-between items-center text-sm border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Min Local Elevation</span>
                  <span className="font-bold text-slate-900">52m</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-500 font-bold text-blue-600">Survey Point</span>
                  <span className="font-black text-blue-600">94m ASL</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-600 p-8 rounded-3xl text-white shadow-xl group hover:scale-[1.02] transition-transform duration-300 cursor-default">
              <h4 className="text-lg font-bold mb-2">Topographic Stability</h4>
              <p className="text-xs text-blue-100 leading-relaxed mb-6">
                Flat terrain (slopes &lt;3%) significantly reduces earth-moving costs and simplifies structural orientation for multi-hall layouts.
              </p>
              <div className="flex items-center gap-4">
                 <div className="h-1 flex-grow bg-blue-400 rounded-full overflow-hidden">
                    <div className="h-full bg-white w-[95%]"></div>
                 </div>
                 <span className="text-[10px] font-black uppercase">Optimal</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MapSection;
