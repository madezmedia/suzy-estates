import React from 'react';
import { LucideIcon, ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  ctaText: string;
  onClick: () => void;
}

export function ServiceCard({ title, description, Icon, ctaText, onClick }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <button
        onClick={onClick}
        className="text-blue-600 font-medium flex items-center gap-2 hover:text-blue-700"
      >
        {ctaText}
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}