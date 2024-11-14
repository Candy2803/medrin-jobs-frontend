import { useState } from 'react';
import PricingCard from './PriceCard';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const pricingPlans = [
    {
      type: 'For individuals',
      title: 'Basic',
      price: 200,
      features: [
        { text: '20 Job postings' },
        { text: '4 Featured jobs' },
        { text: 'Jobs can be displayed 15 days' },
        { text: 'Customer support' },
      ],
    },
    {
      type: 'For startup',
      title: 'Pro',
      price: 500,
      features: [
        { text: 'All analytics features' },
        { text: '50 Job postings' },
        { text: 'Jobs can be displayed 15 days' },
        { text: 'Premium support 24/7' },
      ],
      highlighted: true,
    },
    {
      type: 'For big companies',
      title: 'Enterprise',
      price: 1000,
      features: [
        { text: 'All analytics features' },
        { text: '50 Job posting' },
        { text: 'Jobs can be displayed 15 day' },
        { text: '10 featured jobs' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-16">
          <div className="text-2xl font-bold">LOGO</div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            Not connected
          </button>
        </div>

        {/* Pricing Header */}
        <div className="text-center mb-16">
          <p className="text-blue-600 uppercase tracking-wide font-medium mb-4">
            PRICING
          </p>
          <h2 className="text-4xl font-bold text-gray-900">
            Simple, transparent pricing
          </h2>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-16">
          <div className="relative inline-flex">
            <div className={`w-14 h-7 bg-blue-600 rounded-full p-1 duration-300 ease-in-out ${
              isAnnual ? 'bg-opacity-100' : 'bg-opacity-30'
            }`}>
              <div
                className={`bg-white w-5 h-5 rounded-full shadow-md transform duration-300 ease-in-out ${
                  isAnnual ? 'translate-x-7' : ''
                }`}
                onClick={() => setIsAnnual(!isAnnual)}
              ></div>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">LOGO</div>
          <p className="text-sm text-gray-600">
            2024 Medrin Jobs. All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;