import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Gallery } from './components/Gallery';
import { Lookbook } from './components/Lookbook';
import { Designer } from './components/Designer';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-sand-50">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Lookbook />
        <Designer />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;