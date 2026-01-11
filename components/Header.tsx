import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Instructors', href: '#instructors' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-shaolin-dark/95 backdrop-blur-sm shadow-lg py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          {/* Logo Placeholder */}
          <div className="w-10 h-10 bg-shaolin-red rounded-full flex items-center justify-center font-serif font-bold text-white border-2 border-shaolin-gold">
            SM
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl font-bold leading-none tracking-wider text-white">SHAOLIN</span>
            <span className="text-xs text-shaolin-gold tracking-widest uppercase">Academy Mumbai</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-gray-300 hover:text-shaolin-red transition-colors uppercase tracking-wide"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="flex items-center gap-2 bg-shaolin-red hover:bg-red-700 text-white px-5 py-2 rounded-full font-bold transition-all transform hover:scale-105"
          >
            <Phone size={16} />
            <span className="hidden lg:inline">Join Now</span>
            <span className="lg:hidden">Join</span>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-shaolin-dark border-t border-gray-800 shadow-2xl py-6 px-4 flex flex-col gap-4 animate-fadeIn">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-white hover:text-shaolin-red py-2 border-b border-gray-800"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="bg-shaolin-red text-white text-center py-3 rounded-lg font-bold mt-2"
          >
            Book Free Trial
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;