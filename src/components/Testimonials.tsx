import React from 'react';
import { Quote } from 'lucide-react';
import { Container } from './layout/Container';
import { SectionTitle } from './ui/SectionTitle';

const testimonials = [
  {
    text: "Suzanne's expertise in both real estate and estate planning made our transition seamless. We couldn't be happier!",
    author: "Mary Johnson",
    role: "Retired Teacher"
  },
  {
    text: "The combined services saved us so much time and stress. Suzanne truly understands seniors' needs.",
    author: "Robert Smith",
    role: "Retired Executive"
  }
];

export function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <Container>
        <SectionTitle>What Our Clients Say</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl relative">
              <Quote className="w-8 h-8 text-blue-600 mb-4" />
              <p className="text-gray-700 mb-4">{testimonial.text}</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-gray-600 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}