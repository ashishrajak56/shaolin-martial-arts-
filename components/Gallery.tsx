import React from 'react';

const Gallery: React.FC = () => {
  // These placeholders match the types of images you shared:
  // 1. Students with Trophies/Medals
  // 2. Flexibility/Splits
  // 3. Group Training
  // 4. Master Demonstrations
  const images = [
    {
      url: "https://images.unsplash.com/photo-1544367563-12123d8965cd?q=80&w=800&auto=format&fit=crop",
      title: "Champions",
      subtitle: "Winning Medals & Trophies",
      size: "large" 
    },
    {
      url: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=600&auto=format&fit=crop",
      title: "Flexibility",
      subtitle: "Perfect Splits",
      size: "small"
    },
    {
      url: "https://images.unsplash.com/photo-1623947159800-2d8869c9b634?q=80&w=600&auto=format&fit=crop",
      title: "Group Training",
      subtitle: "Discipline in Unity",
      size: "small"
    },
    {
      url: "https://images.unsplash.com/photo-1555597673-c971696ddb30?q=80&w=600&auto=format&fit=crop",
      title: "Sparring",
      subtitle: "MMA Techniques",
      size: "medium"
    },
    {
      url: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=600&auto=format&fit=crop",
      title: "Dojo Life",
      subtitle: "Daily Practice",
      size: "small"
    },
    {
      url: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=600&auto=format&fit=crop",
      title: "Master Class",
      subtitle: "Guidance",
      size: "small"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-shaolin-red font-bold tracking-widest uppercase text-sm">Hall of Fame</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mt-2 mb-6">Our Warriors in Action</h2>
          <p className="text-gray-400">
            From winning gold medals to achieving perfect splits. See our students shine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {images.map((img, idx) => (
            <div 
              key={idx} 
              className={`relative rounded-xl overflow-hidden group border border-white/5 ${
                img.size === 'large' ? 'md:col-span-2 md:row-span-2' : 
                img.size === 'medium' ? 'md:col-span-2' : ''
              }`}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-500 z-10"></div>
              <img 
                src={img.url} 
                alt={img.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transform group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute bottom-0 left-0 p-6 z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black to-transparent w-full">
                <h4 className="text-white font-serif font-bold text-lg">{img.title}</h4>
                <p className="text-shaolin-gold text-xs font-bold uppercase tracking-wider">{img.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center bg-shaolin-gray/50 p-4 rounded-lg border border-white/5">
            <p className="text-sm text-gray-400">
                <span className="text-shaolin-red font-bold">Note:</span> We have updated our gallery structure to showcase your students' medals, flexibility, and group photos.
            </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;