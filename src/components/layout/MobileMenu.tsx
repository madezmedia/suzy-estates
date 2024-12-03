import React from 'react';
import { X } from 'lucide-react';
import { Button } from '../ui/Button';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="fixed right-0 top-0 h-full w-[250px] bg-white p-6 shadow-xl">
        <div className="flex justify-end mb-8">
          <button onClick={onClose}>
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="space-y-4">
          <a 
            href="#services" 
            className="block text-lg text-gray-600 hover:text-gray-900"
            onClick={onClose}
          >
            Services
          </a>
          <a 
            href="#listings" 
            className="block text-lg text-gray-600 hover:text-gray-900"
            onClick={onClose}
          >
            Listings
          </a>
          <a 
            href="#about" 
            className="block text-lg text-gray-600 hover:text-gray-900"
            onClick={onClose}
          >
            About
          </a>
          <a 
            href="#testimonials" 
            className="block text-lg text-gray-600 hover:text-gray-900"
            onClick={onClose}
          >
            Testimonials
          </a>
        </nav>

        <div className="mt-8">
          <Button className="w-full justify-center">
            (803) 555-0123
          </Button>
        </div>
      </div>
    </div>
  );
}