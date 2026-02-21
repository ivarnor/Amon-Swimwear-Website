import React, { useState, useRef, useEffect } from 'react';
import { GalleryImage } from '../types';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

const galleryItems: GalleryImage[] = [
  { id: '1', src: 'https://images.unsplash.com/photo-1574015974293-817f0ebebb74?q=80&w=1200&auto=format&fit=crop', alt: 'Golden Sands Bikini', category: 'campaign' },
  { id: '2', src: 'https://images.unsplash.com/photo-1616091093747-4797dc032d9f?q=80&w=1200&auto=format&fit=crop', alt: 'Azure One Piece', category: 'lookbook' },
  { id: '3', src: 'https://images.unsplash.com/photo-1596206018314-e598713d7d4a?q=80&w=1200&auto=format&fit=crop', alt: 'Noir Minimalist', category: 'editorial' },
  { id: '4', src: 'https://images.unsplash.com/photo-1566421966482-ad8076104d8e?q=80&w=1200&auto=format&fit=crop', alt: 'Poolside Luxury', category: 'campaign' },
  { id: '5', src: 'https://images.unsplash.com/photo-1582650085885-3c48006497f1?q=80&w=1200&auto=format&fit=crop', alt: 'Sunset Glow', category: 'lookbook' },
  { id: '6', src: 'https://images.unsplash.com/photo-1545199589-3224495764d1?q=80&w=1200&auto=format&fit=crop', alt: 'White Linen Wrap', category: 'editorial' },
  { id: '7', src: 'https://images.unsplash.com/photo-1594602928135-c35777490209?q=80&w=1200&auto=format&fit=crop', alt: 'Ocean Breeze', category: 'campaign' },
  { id: '8', src: 'https://images.unsplash.com/photo-1588697967980-826720f4c01d?q=80&w=1200&auto=format&fit=crop', alt: 'Coral Reef', category: 'lookbook' },
];

const categories = ['all', 'campaign', 'lookbook', 'editorial'];

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [filter, setFilter] = useState<string>('all');
  const scrollRef = useRef<HTMLDivElement>(null);

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  // Reset scroll position when filter changes
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, [filter]);

  const openLightbox = (img: GalleryImage) => setSelectedImage(img);
  const closeLightbox = () => setSelectedImage(null);

  const navigateLightbox = (direction: 'next' | 'prev') => {
    if (!selectedImage) return;
    const currentIndex = filteredItems.findIndex(i => i.id === selectedImage.id);
    
    if (currentIndex === -1) return;

    let newIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
    
    if (newIndex >= filteredItems.length) newIndex = 0;
    if (newIndex < 0) newIndex = filteredItems.length - 1;
    
    setSelectedImage(filteredItems[newIndex]);
  };

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="collections" className="py-20 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h3 className="text-sm uppercase tracking-[0.2em] text-gold-600 mb-2">The Collection</h3>
          <h2 className="font-serif text-4xl md:text-5xl text-stone-900">Summer Essence</h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center flex-wrap gap-8 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`uppercase tracking-widest text-xs pb-2 border-b-2 transition-all duration-300 ${
                filter === cat 
                  ? 'border-stone-900 text-stone-900' 
                  : 'border-transparent text-stone-400 hover:text-stone-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Carousel Container */}
        <div className="relative group/carousel">
          {/* Navigation Arrows (Desktop) */}
          <button 
            onClick={() => scrollCarousel('left')}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-20 bg-white p-3 rounded-full shadow-lg text-stone-900 hover:text-gold-600 hover:scale-110 transition-all disabled:opacity-50"
          >
            <ChevronLeft size={24} strokeWidth={1.5} />
          </button>
          
          <button 
            onClick={() => scrollCarousel('right')}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-20 bg-white p-3 rounded-full shadow-lg text-stone-900 hover:text-gold-600 hover:scale-110 transition-all disabled:opacity-50"
          >
            <ChevronRight size={24} strokeWidth={1.5} />
          </button>

          {/* Scrollable Track */}
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 snap-x snap-mandatory no-scrollbar pb-10"
          >
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                className="flex-shrink-0 w-[85vw] md:w-[400px] aspect-[3/4] snap-center relative group cursor-pointer overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500"
                onClick={() => openLightbox(item)}
              >
                <img 
                  src={item.src} 
                  alt={item.alt} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                   <div className="bg-white/90 p-4 rounded-full backdrop-blur-md transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <Maximize2 size={24} className="text-stone-900" strokeWidth={1.5} />
                   </div>
                </div>

                {/* Caption */}
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/60 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-white font-serif text-2xl tracking-wide">{item.alt}</p>
                  <p className="text-white/80 text-xs uppercase tracking-wider mt-1">{item.category}</p>
                </div>
              </div>
            ))}
            
            {filteredItems.length === 0 && (
              <div className="w-full py-20 text-center text-stone-400 font-light italic">
                No items found in this category.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 animate-fade-in backdrop-blur-sm">
          <button 
            onClick={closeLightbox} 
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2"
          >
            <X size={32} strokeWidth={1} />
          </button>

          <button 
            onClick={(e) => { e.stopPropagation(); navigateLightbox('prev'); }} 
            className="absolute left-2 md:left-8 text-white/50 hover:text-white transition-colors p-4 hover:bg-white/5 rounded-full"
          >
            <ChevronLeft size={40} strokeWidth={1} />
          </button>

          <div className="relative max-h-[85vh] max-w-[90vw]">
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="max-h-[85vh] max-w-[90vw] object-contain shadow-2xl animate-slide-up"
            />
          </div>

          <button 
            onClick={(e) => { e.stopPropagation(); navigateLightbox('next'); }} 
            className="absolute right-2 md:right-8 text-white/50 hover:text-white transition-colors p-4 hover:bg-white/5 rounded-full"
          >
            <ChevronRight size={40} strokeWidth={1} />
          </button>
          
          <div className="absolute bottom-6 left-0 w-full text-center">
            <h4 className="text-white font-serif text-2xl mb-1 tracking-wide">{selectedImage.alt}</h4>
            <p className="text-gold-400 text-xs uppercase tracking-[0.2em]">{selectedImage.category}</p>
          </div>
        </div>
      )}
    </section>
  );
};