
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-[10px]">DC</span>
            </div>
            <span className="text-lg font-bold text-white tracking-tight">TEDA Tirana Survey</span>
          </div>
          
          <div className="flex space-x-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Contact Engineering</a>
          </div>
          
          <div className="text-xs">
            &copy; {new Date().getFullYear()} Site Survey Technical Report. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
