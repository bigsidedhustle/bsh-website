import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Story from './components/sections/Story';
import System from './components/sections/System';
import Tool from './components/sections/Tool';
import Roadmap from './components/sections/Roadmap';
import Community from './components/sections/Community';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary/20 selection:text-primary scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <Story />
        <System />
        <Tool />
        <Roadmap />
        <Community />
      </main>
      <Footer />
    </div>
  );
}

export default App;
