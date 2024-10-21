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
          <svg width="200" height="50" viewBox="0 0 200 50" xmlns="http://www.w3.org/2000/svg" className="h-12 w-auto mx-auto object-cover">
            <path d="M0 25 C0 11.2 11.2 0 25 0 L37.5 0 L37.5 12.5 L25 12.5 C18.1 12.5 12.5 18.1 12.5 25 C12.5 31.9 18.1 37.5 25 37.5 L37.5 37.5 L37.5 50 L25 50 C11.2 50 0 38.8 0 25 Z" fill="#000000"/>
            <text x="50" y="30" fontSize="24" fontFamily="Arial, sans-serif" fontWeight="bold" fill="#000000">AW MARKS</text>
            <text x="50" y="45" fontSize="12" fontFamily="Arial, sans-serif" fill="#000000">MARKETING</text>
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