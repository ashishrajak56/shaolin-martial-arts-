import React from 'react';
import { Award, Clock, Star, Users } from 'lucide-react';

const Instructors: React.FC = () => {
  return (
    <section id="instructors" className="py-20 bg-shaolin-dark relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-shaolin-red/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-shaolin-red font-bold tracking-widest uppercase text-sm">The Leadership</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mt-2 mb-6">Meet the Masters</h2>
        </div>

        <div className="flex flex-col gap-8">
          
          {/* Master Ashish */}
          <div className="max-w-5xl mx-auto bg-shaolin-gray rounded-2xl overflow-hidden shadow-2xl border border-white/5">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/5 relative h-96 md:h-auto">
                <div className="absolute inset-0 bg-shaolin-red/10 z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=800&auto=format&fit=crop" 
                  alt="Master Ashish Rajak" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-shaolin-gold text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Head Master</span>
                  <span className="bg-white/10 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Owner</span>
                </div>
                <h3 className="font-serif text-3xl md:text-4xl font-bold text-white mb-2">Ashish Rajak</h3>
                <p className="text-shaolin-red font-medium mb-6">Shaolin Kung Fu & MMA Expert</p>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Dedicated to molding the next generation of warriors. With a focus on children's development, Master Ashish combines strict discipline with modern training methodologies.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <Clock className="text-shaolin-gold w-5 h-5" />
                    <div><span className="block font-bold text-white">7+ Years</span><span className="text-xs text-gray-500">Experience</span></div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="text-shaolin-gold w-5 h-5" />
                    <div><span className="block font-bold text-white">4+ Years</span><span className="text-xs text-gray-500">Business</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Female Trainer Card */}
          <div className="max-w-5xl mx-auto bg-shaolin-gray rounded-2xl overflow-hidden shadow-xl border border-white/5">
            <div className="flex flex-col md:flex-row-reverse">
              <div className="md:w-2/5 relative h-80 md:h-auto">
                 <div className="absolute inset-0 bg-shaolin-red/10 z-10"></div>
                 {/* Placeholder for Female Trainer Image */}
                 <img 
                   src="https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?q=80&w=800&auto=format&fit=crop" 
                   alt="Senior Certified Trainer" 
                   className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                 />
              </div>
              <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-shaolin-red text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Senior Instructor</span>
                  <span className="bg-white/10 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Certified</span>
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-2">Certified Female Trainer</h3>
                <p className="text-shaolin-gold font-medium mb-6">Women's Self Defense & Kids Specialist</p>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Empowering women and children through focused training. Our certified female instructor brings a wealth of knowledge and a nurturing yet disciplined approach to martial arts.
                </p>
                <div className="flex items-center gap-3">
                  <Clock className="text-shaolin-red w-5 h-5" />
                  <div><span className="block font-bold text-white">4+ Years</span><span className="text-xs text-gray-500">Teaching Experience</span></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Instructors;