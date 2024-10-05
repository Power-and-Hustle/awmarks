import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Differentiators from '../components/Differentiators';
import ContactCTA from '../components/ContactCTA';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main>
        <Hero />
        <Services />
        <Differentiators />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;