import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-white py-16 border-t border-white/10">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <h2 className="font-serif text-3xl font-bold tracking-widest mb-8">AMON</h2>
        
        <div className="flex space-x-8 mb-10 text-xs uppercase tracking-widest text-stone-400">
          <a href="#" className="hover:text-white transition-colors">Shop</a>
          <a href="#" className="hover:text-white transition-colors">Campaigns</a>
          <a href="#" className="hover:text-white transition-colors">Sustainability</a>
          <a href="#" className="hover:text-white transition-colors">Legal</a>
        </div>

        <p className="text-stone-600 text-xs text-center font-light">
          © {new Date().getFullYear()} AMON Swim Wear. All Rights Reserved. <br/>
          Designed for the sun, made for the soul.
        </p>
      </div>
    </footer>
  );
};