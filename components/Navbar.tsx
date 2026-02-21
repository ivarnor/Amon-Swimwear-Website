import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Collections', href: '#collections' },
    { name: 'Lookbook', href: '#lookbook' },
    { name: 'About', href: '#about' },
    { name: 'Designer', href: '#designer' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className={`font-serif text-2xl tracking-widest font-bold ${isScrolled ? 'text-stone-900' : 'text-stone-900 md:text-white'}`}>
          AMON
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm uppercase tracking-widest hover:text-gold-500 transition-colors ${
                isScrolled ? 'text-stone-600' : 'text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <button className={`p-2 rounded-full hover:bg-white/20 transition-colors ${isScrolled ? 'text-stone-900' : 'text-white'}`}>
            <ShoppingBag size={20} />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-stone-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} color={isScrolled ? 'black' : 'black'} />} 
          {/* Note: In transparent hero state on mobile, text might need to be visible against image. Usually mobile nav button is consistent color or adaptive. For simplicity, ensuring visibility. */}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg py-8 flex flex-col items-center space-y-6 md:hidden animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-stone-800 text-lg font-serif hover:text-gold-600 tracking-wider"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};