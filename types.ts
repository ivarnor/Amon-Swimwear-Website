export interface SwimwearItem {
  id: string;
  title: string;
  category: string;
  price: string;
  imageUrl: string;
  description: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: 'campaign' | 'lookbook' | 'editorial';
  span?: string; // For masonry layout hints
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}