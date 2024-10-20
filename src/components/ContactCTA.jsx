import React from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const ContactCTA = () => {
  return (
    <section className="bg-gradient-to-r from-purple-700 to-indigo-600 text-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-yellow-300">Contact Us For A</h2>
        <h3 className="text-2xl mb-8 text-yellow-300">Free Marketing Consultation</h3>
        <Link to="/contact">
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2 px-4 rounded">
            Yes, I Want That!!
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default ContactCTA;