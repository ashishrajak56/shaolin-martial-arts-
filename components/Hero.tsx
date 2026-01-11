import React from 'react';
import { ArrowRight, Flame } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1518376458097-40081d5f22f5?q=80&w=1920&auto=format&fit=crop" 
          alt="Shaolin Martial Arts Background" 
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-shaolin-dark via-shaolin-dark/80 to-transparent"></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-shaolin-red/20 border border-shaolin-red/40 text-shaolin-red text-sm font-semibold tracking-wide mb-6 backdrop-blur-sm">
          <Flame size={14} className="fill-current" />
          <span>LOKHANDWALA'S PREMIER DOJO</span>
        </div>
        
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
          DISCIPLINE.<br />
          STRENGTH.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-shaolin-red to-shaolin-gold">SHAOLIN.</span>
        </h1>

        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Master the ancient art of Shaolin Kung Fu and modern Mixed Martial Arts right here in Kandivali. 
          Unlock your potential, build confidence, and learn self-defense.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#contact" 
            className="group w-full sm:w-auto px-8 py-4 bg-shaolin-red hover:bg-red-700 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2"
          >
            Start Your Journey
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#programs" 
            className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-shaolin-dark text-white font-bold rounded-lg transition-all"
          >
            Explore Programs
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-500">
         <span className="text-xs uppercase tracking-widest">Scroll</span>
      </div>
    </section>
  );
};

export default Hero;