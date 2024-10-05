import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">AW MARKS</h2>
        <p>&copy; {new Date().getFullYear()} AW Marks Marketing. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;