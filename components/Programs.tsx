import React from 'react';
import { Program } from '../types';
import { CheckCircle2 } from 'lucide-react';

const programs: Program[] = [
  {
    id: 'kids',
    title: 'Kids Warrior Training',
    description: 'Our Specialty. Under the guidance of Master Ashish Rajak, we transform children into great warriors. We focus on building character, discipline, and physical strength from a young age.',
    image: 'https://images.unsplash.com/photo-1606335543042-57c525922c33?q=80&w=600&auto=format&fit=crop',
    features: ['Warrior Mindset', 'Anti-Bullying', 'Discipline & Respect', 'Future Champions']
  },
  {
    id: 'shaolin',
    title: 'Traditional Shaolin Kung Fu',
    description: 'Learn the ancient forms, weaponry, and philosophy of the Shaolin monks. Focus on flexibility, stance work, and internal energy (Qi).',
    image: 'https://images.unsplash.com/photo-1518376458097-40081d5f22f5?q=80&w=600&auto=format&fit=crop',
    features: ['Five Animals Forms', 'Traditional Weaponry', 'Qi Gong Breathing', 'Mental Discipline']
  },
  {
    id: 'mma',
    title: 'Mixed Martial Arts (MMA)',
    description: 'A modern combat sport combining striking and grappling. Perfect for self-defense and high-intensity fitness.',
    image: 'https://images.unsplash.com/photo-1555597673-c971696ddb30?q=80&w=600&auto=format&fit=crop',
    features: ['Muay Thai Striking', 'BJJ Grappling', 'Takedown Defense', 'Sparring Sessions']
  }
];

const Programs: React.FC = () => {
  return (
    <section id="programs" className="py-20 bg-shaolin-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-shaolin-red font-bold tracking-widest uppercase text-sm">Our Curriculum</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mt-2 mb-6">Train Like a Warrior</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We specialize in Kids Warrior Training while offering specialized programs for all ages and skill levels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div key={program.id} className="group bg-shaolin-gray rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-shaolin-red/10 transition-all duration-300 transform hover:-translate-y-2 border border-transparent hover:border-shaolin-red/20">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors z-10"></div>
                {program.id === 'kids' && (
                  <div className="absolute top-3 right-3 z-20 bg-shaolin-gold text-black text-xs font-bold px-2 py-1 rounded">
                    OUR SPECIALTY
                  </div>
                )}
                <img 
                  src={program.image} 
                  alt={program.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
                />
              </div>
              <div className="p-8">
                <h3 className="font-serif text-2xl font-bold mb-3 text-white group-hover:text-shaolin-gold transition-colors">{program.title}</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {program.description}
                </p>
                <ul className="space-y-2 mb-8">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle2 size={16} className="text-shaolin-red" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 border border-gray-600 rounded-lg text-white font-semibold hover:bg-shaolin-red hover:border-shaolin-red transition-all">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;