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
                <rect x="20" y="10" width="8" height="12" fill="black"/>
                <rect x="30" y="6" width="8" height="16" fill="black"/>
                <rect x="40" y="2" width="8" height="20" fill="black"/>
                {/* Curved arrow */}
                <path d="M10 20 C10 10 15 8 20 8" stroke="black" fill="none" strokeWidth="2"/>
                <path d="M18 6 L20 8 L18 10" stroke="black" fill="none" strokeWidth="2"/>
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