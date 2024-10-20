import React from 'react';
import Header from '../components/Header';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-600 to-cyan-500">
      <Header />
      <main className="py-20">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 text-yellow-300">Contact Us</h1>
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;