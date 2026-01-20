
import React from 'react';
import { SITE_INFO, CLIMATE_CHART_DATA } from '../constants';
import { CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, XAxis, YAxis } from 'recharts';

const ClimateSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">Climate & Operations</h2>
          <h3 className="text-3xl font-bold text-slate-900 leading-tight">Mediterranean (Csa) Environmental Assessment.</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <div className="flex justify-between items-center mb-8">
                <h4 className="text-lg font-bold text-slate-800">Operational Profile (Temp/Rainfall)</h4>
                <div className="flex gap-4">
                  <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-full bg-blue-500"></div> <span className="text-xs text-slate-500">Temp</span></div>
                  <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-full bg-slate-300"></div> <span className="text-xs text-slate-500">Rainfall</span></div>
                </div>
              </div>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={CLIMATE_CHART_DATA}>
                    <defs>
                      <linearGradient id="colorTemp" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="month" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis yAxisId="left" stroke="#3b82f6" fontSize={12} tickLine={false} axisLine={false} label={{ value: '°C', position: 'insideTopLeft', offset: 0, fill: '#3b82f6', fontSize: 10, fontWeight: 'bold' }} />
                    <YAxis yAxisId="right" orientation="right" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} label={{ value: 'mm', position: 'insideTopRight', offset: 0, fill: '#94a3b8', fontSize: 10, fontWeight: 'bold' }} />
                    <Tooltip 
                      contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                    />
                    <Area yAxisId="left" type="monotone" dataKey="temp" stroke="#3b82f6" fillOpacity={1} fill="url(#colorTemp)" strokeWidth={3} />
                    <Area yAxisId="right" type="step" dataKey="rain" stroke="#cbd5e1" fill="#cbd5e1" fillOpacity={0.2} strokeWidth={1} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-900 p-8 rounded-2xl text-white shadow-lg relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                    <h5 className="text-lg font-bold">Flood Risk Analysis</h5>
                  </div>
                  <p className="text-sm text-blue-100 leading-relaxed mb-4">
                    {SITE_INFO.climate.floodRisk}
                  </p>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-300">
                    <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                    Priority Mitigation Required
                  </div>
                </div>
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-blue-800/30 rounded-full blur-2xl"></div>
              </div>

              <div className="bg-slate-800 p-8 rounded-2xl text-white shadow-lg relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                    <h5 className="text-lg font-bold">Winter Snow & Icing</h5>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    {SITE_INFO.climate.snow}
                  </p>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                    <span className="w-2 h-2 rounded-full bg-slate-500"></span>
                    Occasional Cold Extremes
                  </div>
                </div>
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-slate-700/30 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-red-100 text-red-600 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h5 className="text-sm font-bold text-slate-800">Summer Heat Peak</h5>
                  <p className="text-2xl font-black text-slate-900">Up to 43°C</p>
                </div>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed italic border-t pt-3">
                Full mechanical cooling required during July/August peak cycles. High thermal inertia designs recommended.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.17c0 .66.21 1.306.6 1.837a3.5 3.5 0 005.187 4.195 1 1 0 011.137.089 1 1 0 01.353 1.144c-.66 1.956-2.5 3.315-4.677 3.315a4.502 4.502 0 01-4.223-2.956 1 1 0 01.454-1.222 1 1 0 011.156.121 2.5 2.5 0 003.856-1.572A1 1 0 0116.1 7.15c.66 0 1.306.21 1.837.6a3.5 3.5 0 004.195 5.187 1 1 0 011.144.353c.089.444.02.905-.19 1.315a6 6 0 11-12.75 0c-.21-.41-.28-.87-.19-1.315a1 1 0 011.144-.353 3.5 3.5 0 004.195-5.187c.39-.39.6-.827.6-1.315V3a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h5 className="text-sm font-bold text-slate-800">Winter Humidity</h5>
                  <p className="text-2xl font-black text-slate-900">~1,400mm Rain</p>
                </div>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed italic border-t pt-3">
                Corrosion control needed for outdoor units due to high humidity levels during the wet November-December season.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClimateSection;
