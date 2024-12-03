import React from 'react';
import { Container } from '../layout/Container';
import { SectionTitle } from '../ui/SectionTitle';
import { Button } from '../ui/Button';

const listings = [
  {
    id: 1,
    title: 'Luxury Senior Living Villa',
    price: '$425,000',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80',
    features: ['3 Bedrooms', '2 Bathrooms', 'Single Story', 'Community Pool']
  },
  {
    id: 2,
    title: 'Cozy Retirement Cottage',
    price: '$375,000',
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80',
    features: ['2 Bedrooms', '2 Bathrooms', 'Garden', 'Gated Community']
  },
  {
    id: 3,
    title: 'Modern Senior Apartment',
    price: '$299,000',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80',
    features: ['2 Bedrooms', '1 Bathroom', 'Elevator Access', 'Fitness Center']
  }
];

export function FeaturedListings() {
  return (
    <section className="py-16 bg-white">
      <Container>
        <SectionTitle>Featured Listings</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {listings.map((listing) => (
            <div key={listing.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div 
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${listing.image})` }}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{listing.title}</h3>
                <p className="text-blue-600 font-bold mb-4">{listing.price}</p>
                <ul className="space-y-2 mb-4">
                  {listing.features.map((feature, index) => (
                    <li key={index} className="text-gray-600 text-sm">
                      • {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="secondary" showArrow>
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}