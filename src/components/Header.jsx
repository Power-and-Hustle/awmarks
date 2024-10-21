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
          <svg width="200" height="50" viewBox="0 0 800 200" xmlns="http://www.w3.org/2000/svg" className="h-12 w-auto mx-auto object-cover">
            <g fill="#000000">
              <path d="M0 100 C0 44.8 44.8 0 100 0 L150 0 L150 50 L100 50 C72.4 50 50 72.4 50 100 C50 127.6 72.4 150 100 150 L150 150 L150 200 L100 200 C44.8 200 0 155.2 0 100 Z"/>
              <path d="M100 50 L150 0 L200 50 L150 100 Z"/>
              <path d="M150 100 L200 50 L250 100 L200 150 Z"/>
            </g>
            <text x="300" y="130" fontSize="80" fontFamily="Arial, sans-serif" fontWeight="bold">AW MARKS</text>
            <text x="300" y="180" fontSize="40" fontFamily="Arial, sans-serif">MARKETING</text>
          </svg>
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