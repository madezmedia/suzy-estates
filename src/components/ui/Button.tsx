import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  className?: string;
  showArrow?: boolean;
}

export function Button({ 
  children, 
  variant = 'primary', 
  onClick, 
  className = '',
  showArrow = false 
}: ButtonProps) {
  const baseStyles = 'px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-colors';
  const variants = {
    primary: 'bg-white text-gray-900 hover:bg-gray-100',
    secondary: 'text-blue-600 hover:text-blue-700'
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
      {showArrow && <ArrowRight className="w-4 h-4" />}
    </button>
  );
}