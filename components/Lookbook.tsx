import React, { useRef } from 'react';

const looks = [
  { id: 1, img: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=600&auto=format&fit=crop', title: 'The Resort Set' },
  { id: 2, img: 'https://images.unsplash.com/photo-1544376798-89aa6b82c6cd?q=80&w=600&auto=format&fit=crop', title: 'Midnight Dive' },
  { id: 3, img: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&w=600&auto=format&fit=crop', title: 'Golden Hour' },
  { id: 4, img: 'https://images.unsplash.com/photo-1499939667766-4afceb292d05?q=80&w=600&auto=format&fit=crop', title: 'Tulum Vibes' },
  { id: 5, img: 'https://images.unsplash.com/photo-1550974068-d6139a044db4?q=80&w=600&auto=format&fit=crop', title: 'Riviera Classic' },
];

export const Lookbook: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="lookbook" className="py-24 bg-stone-100 overflow-hidden">
      <div className="container mx-auto px-6 mb-12 flex justify-between items-end">
        <div>
           <h2 className="font-serif text-4xl text-stone-900 mb-2">Lookbook 2025</h2>
           <p className="text-stone-500 font-light">Curated styles for your next escape.</p>
        </div>
        <div className="hidden md:flex gap-2">
            {/* Scroll indicators could go here */}
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex overflow-x-auto space-x-8 px-6 pb-8 no-scrollbar snap-x snap-mandatory"
        style={{ scrollBehavior: 'smooth' }}
      >
        {looks.map((look) => (
          <div 
            key={look.id} 
            className="flex-shrink-0 w-[80vw] md:w-[400px] snap-center group cursor-pointer"
          >
            <div className="relative aspect-[3/4] overflow-hidden mb-6">
              <img 
                src={look.img} 
                alt={look.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 border-[1px] border-white/0 group-hover:border-white/20 transition-all duration-300 m-4"></div>
            </div>
            <h3 className="font-serif text-2xl text-stone-900 group-hover:text-gold-600 transition-colors">{look.title}</h3>
            <span className="text-xs uppercase tracking-widest text-stone-400 group-hover:text-stone-600 transition-colors">View Look</span>
          </div>
        ))}
      </div>
    </section>
  );
};