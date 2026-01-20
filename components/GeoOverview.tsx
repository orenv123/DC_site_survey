
import React from 'react';
import { SITE_INFO } from '../constants';

const GeoOverview: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">Geographical Context</h2>
            <h3 className="text-3xl font-bold text-slate-900 mb-6 leading-tight">Optimal Lowland Topography for Large-Scale Data Halls.</h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              The site lies on the <strong>Tirana Plain</strong>, characterized by flat to gently undulating terrain. This geography allows for massive building footprints with minimal cut-and-fill requirements, though it necessitates careful pluvial drainage design.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4 p-5 bg-slate-50 rounded-xl border border-slate-100">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Elevation Verification</h4>
                  <p className="text-sm text-slate-600 mt-1">Confirmed {SITE_INFO.elevation.exact} ASL. Typical local range is {SITE_INFO.elevation.range}.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 bg-slate-50 rounded-xl border border-slate-100">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Stability Profile</h4>
                  <p className="text-sm text-slate-600 mt-1">Very low landslide risk compared to hill zones (Farkë/Petrelë) as slopes are &lt;3%.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-blue-100/50 rounded-2xl blur-lg group-hover:bg-blue-200/50 transition duration-500"></div>
            <div className="relative bg-white p-2 rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
                      <img
                        src="./site_survey.jpg"
                        alt="Tirana Industrial Landscape"
                        className="w-full h-80 object-cover rounded-xl"
                      />
               <div className="p-6">
                 <div className="flex justify-between items-center">
                   <div>
                     <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">Site Context</span>
                     <h4 className="text-lg font-bold text-slate-900">Adriatic Corridor (~25km East)</h4>
                   </div>
                   <div className="bg-slate-900 text-white px-3 py-1 rounded text-xs font-mono">DC-ZONE-TIR</div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeoOverview;
