
import React from 'react';

const SiteGallery: React.FC = () => {
  const images = [
    { title: "Satellite Overview", url: "https://picsum.photos/id/111/800/600", tag: "Survey View" },
    { title: "Terrain Topology", url: "https://picsum.photos/id/114/800/600", tag: "Elevation" },
    { title: "Surrounding Industry", url: "https://picsum.photos/id/123/800/600", tag: "Logistics" },
    { title: "Climate Assessment", url: "https://picsum.photos/id/124/800/600", tag: "Environmental" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">Visual Assessment</h2>
            <h3 className="text-3xl font-bold text-slate-900">Site Visuals & Mapping</h3>
          </div>
          <p className="text-slate-500 text-sm max-w-sm">
            Satellite imagery and terrain maps showing the TEDA Tirana development boundary and neighboring infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((img, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl bg-slate-100 aspect-[4/5] shadow-sm hover:shadow-xl transition-all duration-300">
              <img 
                src={img.url} 
                alt={img.title} 
                className="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-110 group-hover:rotate-1"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block px-2 py-1 bg-blue-600 text-white text-[10px] font-bold rounded mb-2 uppercase tracking-wider">{img.tag}</span>
                <h4 className="text-white font-bold text-lg leading-tight">{img.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SiteGallery;
