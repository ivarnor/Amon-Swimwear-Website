import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image - Using a high quality placeholder */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 scale-105 animate-[pulse_10s_ease-in-out_infinite]"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1545959682-a5d6f6e52c95?q=80&w=2648&auto=format&fit=crop")',
          backgroundPosition: 'center 30%'
        }}
      >
        <div className="absolute inset-0 bg-black/30 mix-blend-multiply" />
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <p className="text-sm md:text-base uppercase tracking-[0.3em] mb-4 opacity-0 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Summer Collection 2025
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-wide opacity-0 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          AMON <span className="font-light italic text-gold-400">Swim</span>
        </h1>
        <p className="font-light text-lg md:text-xl tracking-wider mb-10 opacity-0 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          Elegance defined by the sea. Designed by Anne Marie.
        </p>
        <div className="opacity-0 animate-slide-up" style={{ animationDelay: '0.8s' }}>
          <a 
            href="#collections" 
            className="inline-block border border-white px-8 py-3 text-sm uppercase tracking-widest hover:bg-white hover:text-stone-900 transition-all duration-300"
          >
            View Collection
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block text-white/70">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
      </div>
    </section>
  );
};