
import React from 'react';
import { SITE_INFO } from '../constants';

const GeotechnicalSection: React.FC = () => {
  const specs = [
    { label: "Site Classification", value: "Tirana Syncline", icon: "🌍" },
    { label: "Water Table", value: SITE_INFO.waterTable.depth, sub: "Seasonal Cycle", icon: "💧" },
    { label: "Seismic Design", value: SITE_INFO.seismic.hazard, sub: "Type D Ground", icon: "⚡" },
    { label: "Foundation Req", value: "Piles Recommended", icon: "🏗️" },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">Geotechnical & Seismic</h2>
            <h3 className="text-3xl font-bold text-slate-900 mb-6 leading-tight">Sedimentary Basin Foundation Analysis.</h3>
            <p className="text-slate-600 mb-10 leading-relaxed">
              The Kashar/Mëzez zone is part of the <strong>Tirana Depression</strong>. Stratigraphy consists of Holocene alluvial gravels transitioning into compressible Pliocene plastic clays. Seismic risks are significant, necessitating deep structural ties to the underlying Oligocene flysch or substantial soil solidification.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {specs.map((spec, i) => (
                <div key={i} className="p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:shadow-md transition-shadow">
                  <div className="text-3xl mb-3">{spec.icon}</div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{spec.label}</div>
                  <div className="text-lg font-bold text-slate-900">{spec.value}</div>
                  {spec.sub && <div className="text-xs font-semibold text-slate-500">{spec.sub}</div>}
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative">
             <div className="bg-slate-900 rounded-3xl p-8 text-white shadow-2xl">
                <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <span className="w-2 h-8 bg-blue-500 rounded-full"></span>
                  Tirana Plain Stratigraphy
                </h4>
                <div className="space-y-1">
                  {SITE_INFO.soil.stratigraphy.map((layer, idx) => (
                    <div 
                      key={idx} 
                      className={`h-20 bg-slate-800 border-x border-slate-700 flex items-center px-4 relative overflow-hidden group transition-all
                        ${idx === 0 ? 'rounded-t-lg bg-slate-700' : ''}
                        ${idx === 3 ? 'rounded-b-lg border-b border-slate-700 bg-slate-900' : ''}
                      `}
                    >
                      <div className="w-16 flex flex-col">
                        <span className="text-[10px] font-bold text-slate-500 uppercase">Layer {idx + 1}</span>
                        <span className="text-xs text-blue-400 font-bold">{idx * 5}m</span>
                      </div>
                      <div className="flex-grow">
                        <span className="text-xs font-semibold text-slate-200 block">{layer}</span>
                        <div className="w-full bg-slate-800 h-1 mt-2 rounded-full overflow-hidden">
                          <div className={`h-full bg-blue-500/40 w-[${80 - idx * 20}%]`}></div>
                        </div>
                      </div>
                      {idx === 1 && (
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] text-blue-400 uppercase font-black tracking-widest bg-blue-900/40 px-2 py-1 rounded">
                          Compressible Zone
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex items-start gap-3 bg-blue-900/30 border border-blue-800/50 p-4 rounded-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <span className="text-sm font-bold text-blue-300">Groundwater Notice</span>
                    <p className="text-xs text-blue-200/80 mt-1">{SITE_INFO.waterTable.significance}</p>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeotechnicalSection;
