import { useState } from 'react';
import { Check, ArrowRight, Info } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';

interface PricingCardProps {
  plan: {
    name: string;
    subtitle: string;
    price: number;
    period: string;
    features: string[];
    color: string;
    buttonColor: string;
    popular?: boolean;
    annualOnly?: boolean;
    tooltip?: string;
  };
  currency: 'USD' | 'KES';
  onSelect: (planName: string) => void;
  formattedPrice: string;
  currentPlan?: boolean;
  remainingPosts?: number;
  isAnnual?: boolean;
}

const PricingCard = ({ 
  plan, 
  currency, 
  onSelect, 
  formattedPrice, 
  currentPlan,
  remainingPosts,
  isAnnual
}: PricingCardProps) => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthStore();
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = () => {
    if (plan.name === 'Free Trial' && isAuthenticated) {
      navigate('/employer/post-job');
    } else {
      onSelect(plan.name);
    }
  };

  const isDisabled = plan.annualOnly && !isAnnual;

  // Determine font sizes based on currency and price length
  const currencyFontSize = currency === 'KES' ? 'text-sm' : 'text-lg';
  const priceFontSize = currency === 'KES' ? 'text-2xl' : 'text-4xl';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className={`relative w-full rounded-2xl shadow-lg overflow-hidden ${
        currentPlan ? 'ring-2 ring-green-500' : plan.popular ? 'ring-2 ring-blue-500' : ''
      }`}
    >
      {currentPlan && (
        <div className="absolute top-0 right-0 bg-green-500 text-white px-3 py-1 text-sm font-medium">
          Current Plan
        </div>
      )}
      {!currentPlan && plan.popular && (
        <div className="absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 text-sm font-medium">
          Popular
        </div>
      )}
      <div className={`p-6 ${plan.color === 'blue' ? 'bg-blue-600 text-white' : 'bg-white'}`}>
        <div className="mb-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">{plan.name}</h3>
            {plan.tooltip && (
              <div className="relative">
                <button
                  onMouseEnter={() => setShowTooltip(true)}
                  onMouseLeave={() => setShowTooltip(false)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <Info className="h-5 w-5" />
                </button>
                {showTooltip && (
                  <div className="absolute right-0 mt-2 w-48 bg-gray-900 text-white text-sm rounded-md py-2 px-3 z-10">
                    {plan.tooltip}
                  </div>
                )}
              </div>
            )}
          </div>
          <p className={`text-sm ${plan.color === 'blue' ? 'text-blue-100' : 'text-gray-500'}`}>
            {plan.subtitle}
          </p>
        </div>
        <div className="mb-6">
          <div className="flex items-baseline">
            <span className={`${currencyFontSize} font-semibold`}>{currency}</span>
            <span className={`${priceFontSize} font-bold ml-1`}>{formattedPrice}</span>
          </div>
          <span className={`text-sm ${plan.color === 'blue' ? 'text-blue-100' : 'text-gray-500'}`}>
            {plan.period}
          </span>
          {currentPlan && remainingPosts !== undefined && (
            <div className="mt-2 text-sm text-green-600">
              {remainingPosts} job posts remaining
            </div>
          )}
        </div>
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={handleClick}
          disabled={isDisabled}
          className={`w-full py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center ${
            isDisabled ? 'bg-gray-300 text-gray-500 cursor-not-allowed' :
            plan.buttonColor === 'blue'
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-white text-blue-600 hover:bg-blue-50'
          } ${plan.color === 'blue' ? 'border-2 border-white' : ''}`}
        >
          {currentPlan ? 'Current Plan' : 'Get Started'}
          <ArrowRight className="ml-2 h-4 w-4" />
        </motion.button>
      </div>
      <div className="p-6 bg-white border-t h-full">
        <p className="font-medium text-gray-900 mb-4">What's included:</p>
        <ul className="space-y-4">
          {plan.features.map((feature, index) => (
            <motion.li 
              key={index} 
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Check className="h-5 w-5 text-green-500 mt-0.5" />
              <span className="ml-3 text-gray-600">{feature}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default PricingCard;