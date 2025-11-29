import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import TrustBar from './components/TrustBar';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Pricing />
      </main>
      <TrustBar />
    </div>
  );
}

export default App;
