import React, { useState } from 'react';
import { Container } from './Container';
import { Button } from '../ui/Button';
import { Menu, Phone } from 'lucide-react';
import { MobileMenu } from './MobileMenu';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="py-4 bg-white shadow-sm fixed w-full top-0 z-50">
      <Container>
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-900">
            Suzanne Estates
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-600 hover:text-gray-900">Services</a>
            <a href="#listings" className="text-gray-600 hover:text-gray-900">Listings</a>
            <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
            <a href="#testimonials" className="text-gray-600 hover:text-gray-900">Testimonials</a>
          </nav>

          <Button className="hidden md:flex">
            <Phone className="w-4 h-4 mr-2" />
            (803) 555-0123
          </Button>

          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </Container>

      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </header>
  );
}