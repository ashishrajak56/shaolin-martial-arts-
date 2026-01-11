import React, { useState } from 'react';
import { Facebook, Instagram, Youtube, Share2, Check } from 'lucide-react';

const Footer: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: 'Shaolin Martial Arts Academy Mumbai',
      text: 'Check out this premier martial arts academy in Kandivali Lokhandwala!',
      url: window.location.href
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback to clipboard
      try {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.log('Error copying to clipboard', err);
      }
    }
  };

  return (
    <footer className="bg-shaolin-dark text-gray-400 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-shaolin-red rounded-full flex items-center justify-center font-serif font-bold text-white text-xs border border-shaolin-gold">
                SM
              </div>
              <span className="font-serif text-xl font-bold text-white">SHAOLIN ACADEMY</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs mb-4">
              Forging warriors in Mumbai through the discipline of Shaolin Kung Fu and the intensity of MMA. Join the legacy.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-shaolin-red transition-colors"><Instagram size={20} /></a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-shaolin-red transition-colors"><Facebook size={20} /></a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-shaolin-red transition-colors"><Youtube size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-shaolin-gold transition-colors">Home</a></li>
              <li><a href="#programs" className="hover:text-shaolin-gold transition-colors">Programs</a></li>
              <li><a href="#about" className="hover:text-shaolin-gold transition-colors">About Us</a></li>
              <li><a href="#instructors" className="hover:text-shaolin-gold transition-colors">Instructors</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Spread the Word</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <button 
                  onClick={handleShare}
                  className="flex items-center gap-2 text-white bg-white/10 px-4 py-2 rounded-lg hover:bg-shaolin-red transition-colors w-full md:w-auto justify-center md:justify-start group"
                >
                  {copied ? <Check size={16} /> : <Share2 size={16} />}
                  <span>{copied ? 'Link Copied!' : 'Share Website'}</span>
                </button>
              </li>
              <li className="text-xs text-gray-500">
                Help your friends discover discipline and strength.
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; {new Date().getFullYear()} Shaolin Martial Arts Academy Mumbai. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed with Discipline.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;