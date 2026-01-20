
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs">DC</span>
            </div>
            <span className="text-xl font-bold text-slate-800 tracking-tight">TEDA Tirana Survey</span>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
            <a href="#overview" className="hover:text-blue-600 transition-colors">Overview</a>
            <a href="#map" className="hover:text-blue-600 transition-colors">Site Map</a>
            <a href="#climate" className="hover:text-blue-600 transition-colors">Climate</a>
            <a href="#geotech" className="hover:text-blue-600 transition-colors">Geotechnical</a>
            <a href="#recommendations" className="hover:text-blue-600 transition-colors">Recommendations</a>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-700 transition-colors">
            Download PDF
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
