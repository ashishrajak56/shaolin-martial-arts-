import React from 'react';
import { Quote, Star } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Rajesh Sharma',
    role: 'Parent of Aarav (Age 9)',
    content: "The transformation in my son is incredible. He was shy and lacked focus, but after 6 months with Master Ashish, he is disciplined, confident, and physically active. The Kids Warrior Training is the best investment for his future."
  },
  {
    id: '2',
    name: 'Priya Patel',
    role: 'Student (MMA)',
    content: "I joined for fitness but fell in love with the martial arts culture here. The female trainer is amazing and makes the self-defense classes very empowering. It's a safe and motivating environment for women."
  },
  {
    id: '3',
    name: 'Vikram Singh',
    role: 'Student (Shaolin Kung Fu)',
    content: "Authentic Shaolin training in Mumbai! The focus on traditional forms and Qi Gong has helped me improve my flexibility and mental clarity. Highly recommend this academy to anyone serious about martial arts."
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-shaolin-gray border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
           <span className="text-shaolin-red font-bold tracking-widest uppercase text-sm">Success Stories</span>
           <h2 className="font-serif text-3xl md:text-5xl font-bold mt-2 mb-6">Voices of the Academy</h2>
           <p className="text-gray-400">Hear from our students and parents about their journey with us.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-shaolin-dark p-8 rounded-2xl border border-white/5 relative hover:border-shaolin-red/30 transition-colors group">
              <Quote className="text-shaolin-gold w-10 h-10 mb-6 opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="flex text-shaolin-red mb-4">
                 {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed italic">"{t.content}"</p>
              <div className="mt-auto border-t border-white/5 pt-4">
                <h4 className="text-white font-bold text-lg">{t.name}</h4>
                <p className="text-shaolin-gold text-xs uppercase tracking-wider font-bold">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;