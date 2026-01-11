import React from 'react';
import { Instagram, Facebook, Heart, MessageCircle, ExternalLink, Hash } from 'lucide-react';

const socialPosts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=600&auto=format&fit=crop',
    likes: 142,
    comments: 18,
    caption: 'Master Ashish demonstrating the precision of the Dragon form. 🐉 #ShaolinKungFu #MartialArts',
    date: '2 Days ago'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1606335543042-57c525922c33?q=80&w=600&auto=format&fit=crop',
    likes: 89,
    comments: 12,
    caption: 'Congratulations to our Kids Batch for clearing their Level 1 Grading! 🥋 So proud of these little warriors. #KidsTraining #Mumbai',
    date: '4 Days ago'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1555597673-c971696ddb30?q=80&w=600&auto=format&fit=crop',
    likes: 210,
    comments: 34,
    caption: 'Sunday Sparring Session was intense! 🥊 MMA conditioning at its peak. Join us next week. #MMA #Fitness',
    date: '1 Week ago'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1518376458097-40081d5f22f5?q=80&w=600&auto=format&fit=crop',
    likes: 156,
    comments: 8,
    caption: 'Meditation and Qi Gong are just as important as the punch. Finding inner peace in the chaos. 🧘‍♂️',
    date: '1 Week ago'
  }
];

const SocialFeed: React.FC = () => {
  return (
    <section className="py-20 bg-shaolin-dark border-t border-white/5">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="text-center md:text-left w-full md:w-auto">
            <span className="text-shaolin-red font-bold tracking-widest uppercase text-sm flex items-center justify-center md:justify-start gap-2">
              <Hash size={14} /> Social Community
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold mt-2 text-white">
              Latest Updates
            </h2>
          </div>
          
          <div className="flex gap-4 w-full md:w-auto justify-center md:justify-end">
             <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-bold hover:opacity-90 transition-opacity"
             >
                <Instagram size={20} />
                <span className="hidden sm:inline">Follow on Instagram</span>
             </a>
             <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-[#1877F2] rounded-lg text-white font-bold hover:opacity-90 transition-opacity"
             >
                <Facebook size={20} />
                <span className="hidden sm:inline">Follow on Facebook</span>
             </a>
          </div>
        </div>

        {/* Feed Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialPosts.map((post) => (
            <div key={post.id} className="group relative aspect-square bg-gray-900 rounded-xl overflow-hidden border border-white/5 cursor-pointer">
              {/* Image */}
              <img 
                src={post.image} 
                alt="Social Post" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Instagram-style Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-center">
                
                <div className="flex items-center gap-6 mb-4 text-white">
                  <div className="flex items-center gap-2 font-bold">
                    <Heart className="fill-white" size={24} />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-2 font-bold">
                    <MessageCircle className="fill-white" size={24} />
                    <span>{post.comments}</span>
                  </div>
                </div>

                <p className="text-white text-sm line-clamp-3 mb-4 font-medium">
                  {post.caption}
                </p>

                <div className="mt-auto pt-4 border-t border-white/20 w-full flex justify-between items-center text-xs text-gray-300">
                  <span>{post.date}</span>
                  <ExternalLink size={14} />
                </div>
              </div>
              
              {/* Icon Badge (Visible when not hovering) */}
              <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-md p-2 rounded-full text-white opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                <Instagram size={16} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialFeed;