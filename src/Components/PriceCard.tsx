import React from 'react';

interface PricingFeature {
  text: string;
}

interface PricingCardProps {
  type: string;
  title: string;
  price: number;
  features: PricingFeature[];
  highlighted?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  type,
  title,
  price,
  features,
  highlighted = false,
}) => {
  return (
    <div className={`bg-white rounded-3xl p-8 ${highlighted ? 'scale-105 shadow-xl' : ''}`}>
      <div className="mb-6">
        <p className="text-sm text-gray-600 mb-2">{type}</p>
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
      </div>
      
      <div className="mb-8">
        <p className="text-4xl font-bold mb-2">
          ksh{price}
          <span className="text-sm font-normal text-gray-600">/monthly</span>
        </p>
      </div>

      <div className="mb-8">
        <p className="font-medium mb-4">What's included</p>
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-3">
              <svg className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-600">{feature.text}</span>
            </li>
          ))}
        </ul>
      </div>

      <button className={`w-full py-3 px-6 rounded-lg text-center transition-colors ${
        highlighted 
          ? 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50' 
          : 'bg-blue-600 text-white hover:bg-blue-700'
      }`}>
        Get started
      </button>
    </div>
  );
};

export default PricingCard;