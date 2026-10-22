import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import CareGrid from './components/CareGrid';
import TrustTimeline from './components/TrustTimeline';
import HealingPathway from './components/HealingPathway';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <CareGrid />
        <TrustTimeline />
        <HealingPathway />
      </main>
      <Footer />
    </div>
  );
}

export default App;
