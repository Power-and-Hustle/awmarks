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
          <svg width="300" height="60" viewBox="0 0 300 60" xmlns="http://www.w3.org/2000/svg" className="h-16 w-auto mx-auto object-cover">
            <path d="M0 30 C0 13.4 13.4 0 30 0 L45 0 L45 15 L30 15 C21.7 15 15 21.7 15 30 C15 38.3 21.7 45 30 45 L45 45 L45 60 L30 60 C13.4 60 0 46.6 0 30 Z" fill="#000000"/>
            <text x="60" y="35" fontSize="32" fontFamily="Arial, sans-serif" fontWeight="bold" fill="#000000">AW MARKS</text>
            <text x="60" y="52" fontSize="16" fontFamily="Arial, sans-serif" fill="#000000">MARKETING</text>
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