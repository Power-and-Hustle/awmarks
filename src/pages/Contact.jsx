import React from 'react';
import Header from '../components/Header';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main className="py-10">
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;