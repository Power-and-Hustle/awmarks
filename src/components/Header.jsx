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
  const [imageError, setImageError] = useState(false);

  return (
    <header className="bg-gray-200 text-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="hover:opacity-80 transition-opacity">
          {!imageError ? (
            <img 
              src="/aw-marks-logo.png" 
              alt="AW MARKS Marketing" 
              className="h-12 w-auto object-contain"
              onError={() => setImageError(true)}
            />
          ) : (
            <div>
              <h1 className="text-2xl font-bold text-gray-800">AW MARKS</h1>
              <p className="text-sm text-gray-600">Marketing</p>
            </div>
          )}
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