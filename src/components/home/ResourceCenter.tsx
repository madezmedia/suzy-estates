import React from 'react';
import { Container } from '../layout/Container';
import { SectionTitle } from '../ui/SectionTitle';
import { FileText, Download } from 'lucide-react';
import { Button } from '../ui/Button';

const resources = [
  {
    title: "Senior Living Guide",
    description: "Complete guide to choosing the right retirement home in Fort Mill.",
    downloadText: "Download Guide (PDF)"
  },
  {
    title: "Estate Planning Checklist",
    description: "Essential checklist for organizing your estate planning documents.",
    downloadText: "Download Checklist (PDF)"
  },
  {
    title: "Family Discussion Guide",
    description: "How to have productive conversations about senior living with family.",
    downloadText: "Download Guide (PDF)"
  }
];

export function ResourceCenter() {
  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <SectionTitle>Free Resources</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md">
              <FileText className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
              <p className="text-gray-600 mb-4">{resource.description}</p>
              <Button variant="secondary" className="w-full justify-center">
                <Download className="w-4 h-4 mr-2" />
                {resource.downloadText}
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}