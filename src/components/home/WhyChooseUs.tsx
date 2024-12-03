import React from 'react';
import { Container } from '../layout/Container';
import { SectionTitle } from '../ui/SectionTitle';
import { Award, Shield, Clock, HeartHandshake } from 'lucide-react';

const benefits = [
  {
    icon: Award,
    title: "15+ Years Experience",
    description: "Dedicated expertise in both real estate and estate planning, specifically serving the Fort Mill senior community."
  },
  {
    icon: Shield,
    title: "Licensed Professional",
    description: "Fully licensed in real estate and estate planning with continuous education in senior living solutions."
  },
  {
    icon: Clock,
    title: "Timely Service",
    description: "Quick response times and flexible scheduling to accommodate your needs and timeline."
  },
  {
    icon: HeartHandshake,
    title: "Family-Focused Approach",
    description: "Including family members in decisions while respecting our clients' independence and wishes."
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-16 bg-blue-50">
      <Container>
        <SectionTitle>Why Choose Suzanne?</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <benefit.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}