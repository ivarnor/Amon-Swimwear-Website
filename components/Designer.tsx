import React from 'react';

export const Designer: React.FC = () => {
  return (
    <section id="designer" className="py-20 md:py-32 bg-ocean-900 text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-stone-900/50 skew-x-12 translate-x-20 z-0 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-5/12 order-2 md:order-1">
             <div className="relative">
                {/* Styled Image Frame */}
                <div className="absolute -top-6 -left-6 w-full h-full border border-gold-500/30"></div>
                <img 
                  src="https://images.unsplash.com/photo-1485230405346-71acb9518d9c?q=80&w=1200&auto=format&fit=crop" 
                  alt="Anne Marie, Designer" 
                  className="w-full h-auto grayscale contrast-125 shadow-2xl"
                />
             </div>
          </div>

          <div className="w-full md:w-7/12 order-1 md:order-2 text-center md:text-left">
            <p className="text-gold-400 tracking-[0.3em] uppercase text-sm mb-4">The Visionary</p>
            <h2 className="font-serif text-5xl md:text-6xl mb-8 leading-tight">
              Anne Marie
            </h2>
            <blockquote className="font-serif italic text-2xl md:text-3xl font-light leading-relaxed text-stone-300 mb-10 opacity-90">
              "Swimwear should feel like a second skin—empowering, luxurious, and effortlessly chic. I design for the woman who finds her strength in the water."
            </blockquote>
            <p className="text-stone-400 font-light leading-relaxed max-w-xl mx-auto md:mx-0">
              With over 15 years in haute couture, Anne Marie launched AMON to disrupt the resort wear industry. Her designs blend architectural precision with the fluidity of the ocean, creating silhouettes that celebrate the female form in its most natural element.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};