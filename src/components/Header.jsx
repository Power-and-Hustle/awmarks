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
            <svg width="80" height="40" viewBox="0 0 80 40" xmlns="http://www.w3.org/2000/svg">
              <g transform="translate(5, 5)">
                {/* Oval base */}
                <ellipse cx="30" cy="15" rx="30" ry="15" fill="none" stroke="black" strokeWidth="2"/>
                {/* Bar chart */}
                <rect x="15" y="8" width="8" height="14" fill="black"/>
                <rect x="25" y="5" width="8" height="17" fill="black"/>
                <rect x="35" y="2" width="8" height="20" fill="black"/>
                {/* Curved arrow */}
                <path d="M5 20 C5 12 8 8 15 8 L15 8" stroke="black" fill="none" strokeWidth="2"/>
                <path d="M13 6 L15 8 L13 10" stroke="black" fill="none" strokeWidth="2"/>
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