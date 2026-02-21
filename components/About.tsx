import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-sand-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 relative">
             <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1596483253502-3c354746f394?q=80&w=1600&auto=format&fit=crop" 
                  alt="Model in AMON swimwear" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
                />
             </div>
             <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-gold-100 hidden md:block -z-10"></div>
          </div>
          
          <div className="w-full md:w-1/2">
            <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-8 leading-tight">
              Where Luxury Meets <br/> <span className="italic text-gold-600">The Ocean</span>
            </h2>
            <p className="text-stone-600 leading-relaxed mb-6 font-light text-lg">
              AMON Swim Wear was born from a desire to bridge the gap between high fashion and resort wear. Founded by visionary designer Anne Marie, our pieces are crafted not just to be worn, but to be experienced.
            </p>
            <p className="text-stone-600 leading-relaxed mb-8 font-light text-lg">
              Every curve, stitch, and fabric choice is a tribute to the modern woman who commands attention with subtle elegance. Inspired by the golden sands of the Mediterranean and the deep blues of the Pacific.
            </p>
            <div className="flex items-center space-x-4">
              <div className="h-px w-12 bg-stone-900"></div>
              <span className="font-serif italic text-xl text-stone-900">Anne Marie, Founder</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};