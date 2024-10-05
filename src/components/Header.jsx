import React from 'react';
import { Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">AW MARKS</div>
        <Menu className="h-6 w-6 cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;