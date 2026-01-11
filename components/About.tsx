import React from 'react';
import { Target, Users, Shield, Trophy, Star, Award, Scroll } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-shaolin-red" />,
      title: "Self Defense",
      desc: "Practical techniques to protect yourself and your loved ones in real-world scenarios."
    },
    {
      icon: <Target className="w-8 h-8 text-shaolin-red" />,
      title: "Mental Focus",
      desc: "Develop laser-sharp concentration and discipline that translates to all areas of life."
    },
    {
      icon: <Users className="w-8 h-8 text-shaolin-red" />,
      title: "Community",
      desc: "Join a supportive family of martial artists in Kandivali Lokhandwala committed to growth."
    },
    {
      icon: <Trophy className="w-8 h-8 text-shaolin-red" />,
      title: "Fitness",
      desc: "Achieve peak physical condition with high-intensity training sessions."
    }
  ];

  return (
    <section id="about" className="py-20 bg-shaolin-gray text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              More Than Just <span className="text-shaolin-gold">Fighting.</span><br />
              It's a Way of Life.
            </h2>
            <div className="w-20 h-1 bg-shaolin-red mb-8"></div>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Founded in the heart of Mumbai's Kandivali Lokhandwala, our Shaolin Martial Arts Academy bridges the gap between ancient tradition and modern application.
            </p>

            {/* Affiliation Badge */}
            <div className="flex items-center gap-3 mb-6 bg-white/5 p-4 rounded-lg border border-white/10">
              <Scroll className="text-shaolin-gold w-10 h-10" />
              <div>
                <h4 className="font-bold text-white text-sm">Official Affiliation</h4>
                <p className="text-gray-400 text-xs">Associated with the <span className="text-white font-semibold">Ancient Martial Arts Foundation of India</span></p>
              </div>
            </div>
            
            <p className="text-gray-400 mb-8 leading-relaxed">
              We have successfully trained over <span className="text-white font-bold">300+ students</span> till date with <span className="text-white font-bold">110+ glowing reviews</span>. While we train all ages, we <span className="text-shaolin-gold font-bold">specialize in Kids Training</span>, transforming them into great warriors ready to face life's challenges.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-xl bg-shaolin-dark/50 border border-white/5 hover:border-shaolin-red/30 transition-colors">
                  <div className="shrink-0">{feature.icon}</div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-500">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="absolute -inset-4 bg-shaolin-red/20 blur-xl rounded-full"></div>
            {/* Replaced with a placeholder that represents the split image you uploaded */}
            <img 
              src="https://images.unsplash.com/photo-1544367563-12123d8965cd?q=80&w=800&auto=format&fit=crop" 
              alt="Students training in dojo" 
              className="relative rounded-lg shadow-2xl border-2 border-shaolin-gray z-10 grayscale hover:grayscale-0 transition-all duration-700"
            />
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 z-20 bg-shaolin-dark p-6 rounded-lg border border-shaolin-gold shadow-xl hidden md:block min-w-[200px]">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 border-b border-gray-700 pb-3">
                  <div className="text-3xl font-serif font-bold text-shaolin-gold">300+</div>
                  <div className="text-xs text-gray-300 leading-tight uppercase tracking-wider">Students<br/>Trained</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-3xl font-serif font-bold text-shaolin-gold">110+</div>
                  <div className="flex flex-col">
                    <div className="flex text-shaolin-red text-xs mb-1">
                        <Star size={10} fill="currentColor" />
                        <Star size={10} fill="currentColor" />
                        <Star size={10} fill="currentColor" />
                        <Star size={10} fill="currentColor" />
                        <Star size={10} fill="currentColor" />
                    </div>
                    <div className="text-xs text-gray-300 leading-tight uppercase tracking-wider">Reviews</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;