import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-200 text-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="hover:opacity-80 transition-opacity">
          <div className="flex items-center">
            <svg width="60" height="40" viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg">
              <g transform="translate(0, 5)">
                {/* Curved arrow */}
                <path d="M0 20 C0 10 5 0 15 0 L20 0 A10 10 0 0 1 25 15" stroke="#000000" fill="none" strokeWidth="3"/>
                {/* Bar chart */}
                <rect x="15" y="15" width="8" height="15" fill="#000000"/>
                <rect x="25" y="10" width="8" height="20" fill="#000000"/>
                <rect x="35" y="5" width="8" height="25" fill="#000000"/>
              </g>
            </svg>
            <div className="ml-3 flex flex-col">
              <span className="text-2xl font-bold tracking-wider leading-none">AW MARKS</span>
              <span className="text-sm tracking-widest leading-none text-gray-600">MARKETING</span>
            </div>
          </div>
        </Link>
        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
          <DropdownMenuTrigger asChild>
            <Menu className="h-6 w-6 cursor-pointer" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuItem asChild>
              <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/contact" onClick={() => setIsOpen(false)}>Contact Form</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;