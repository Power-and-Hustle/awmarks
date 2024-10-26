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
            <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 20 C0 9 9 0 20 0 L30 0 L30 10 L20 10 C14.5 10 10 14.5 10 20 C10 25.5 14.5 30 20 30 L30 30 L30 40 L20 40 C9 40 0 31 0 20 Z" fill="#000000"/>
            </svg>
            <div className="ml-2 flex flex-col">
              <span className="text-xl font-bold leading-none">AW MARKS</span>
              <span className="text-sm leading-none">MARKETING</span>
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