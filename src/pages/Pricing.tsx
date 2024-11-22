import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Info } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAuthStore } from '../store/authStore';
import { employerService } from '../services/mockEmployerService';
import { paymentService } from '../services/paymentService';
import { convertToKES, formatKES, formatUSD } from '../utils/currency';
import PricingCard from '../components/pricing/PricingCard';
import PaymentModal from '../components/pricing/PaymentModal';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [currency, setCurrency] = useState<'USD' | 'KES'>('USD');
  const { isAuthenticated } = useAuthStore();
  const navigate = useNavigate();
  const employer = employerService.getCurrentUser();

  const plans = [
    {
      name: 'Free Trial',
      subtitle: 'For new employers',
      price: 0,
      period: '',
      features: [
        '3 Free job posts',
        'Basic job listing',
        'Standard support',
        '15 days listing duration'
      ],
      color: 'white',
      buttonColor: 'blue'
    },
    {
      name: 'One Off',
      subtitle: 'Single job post',
      price: 15,
      period: '',
      features: [
        '1 Job posting',
        'Standard listing',
        'Basic support',
        '30 days listing duration'
      ],
      color: 'white',
      buttonColor: 'blue'
    },
    {
      name: 'Starter',
      subtitle: 'Most popular',
      price: isAnnual ? 85 : 100, // 15% off for annual
      period: isAnnual ? '/year' : '/month',
      features: [
        '20 Job postings',
        '5 Featured jobs',
        'Jobs displayed for 30 days',
        'Priority support'
      ],
      color: 'blue',
      buttonColor: 'white',
      popular: true
    },
    {
      name: 'Pro',
      subtitle: 'For growing teams',
      price: isAnnual ? 127.5 : 150, // 15% off for annual
      period: isAnnual ? '/year' : '/month',
      features: [
        'Unlimited job postings',
        '15 Featured jobs',
        'Jobs displayed for 45 days',
        '24/7 Premium support',
        'Advanced analytics'
      ],
      color: 'white',
      buttonColor: 'blue'
    },
    {
      name: 'Enterprise',
      subtitle: 'For large organizations',
      price: 1000,
      period: '/year',
      features: [
        'Unlimited job postings',
        'Unlimited featured jobs',
        'Custom listing duration',
        'Dedicated account manager',
        'Custom integration options',
        'Advanced reporting & analytics'
      ],
      color: 'white',
      buttonColor: 'blue',
      annualOnly: true,
      tooltip: 'Enterprise plan is only available with annual billing'
    }
  ];

  const handlePlanSelect = (planName: string) => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    setSelectedPlan(planName);
    setShowPaymentModal(true);
  };

  const handlePayment = async (paymentMethod: 'card' | 'mpesa', phoneNumber?: string) => {
    setIsProcessing(true);
    try {
      const selectedPlanData = plans.find(p => p.name === selectedPlan);
      if (!selectedPlanData) return;

      if (paymentMethod === 'card') {
        const response = await paymentService.processCardPayment(
          selectedPlanData.price,
          currency
        );
        console.log('Payment processed:', response);
      } else if (paymentMethod === 'mpesa' && phoneNumber) {
        const amount = currency === 'KES' ? 
          convertToKES(selectedPlanData.price) : 
          selectedPlanData.price;
        
        const response = await paymentService.initiateMpesaPayment(
          phoneNumber,
          amount
        );
        console.log('M-Pesa payment initiated:', response);
      }
      
      await employerService.upgradePlan(selectedPlan?.toLowerCase() as 'basic' | 'pro');
      setShowPaymentModal(false);
    } catch (error) {
      console.error('Payment failed:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  const formatPrice = (price: number) => {
    return currency === 'KES' ? 
      formatKES(convertToKES(price)).replace('KES', 'Ksh') : 
      formatUSD(price).replace('$', '');
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Simple, transparent pricing</h1>
          <p className="text-lg text-gray-600 mb-8">Choose the perfect plan for your hiring needs</p>

          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setCurrency('USD')}
                className={`px-4 py-2 rounded-md ${
                  currency === 'USD' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                USD
              </button>
              <button
                onClick={() => setCurrency('KES')}
                className={`px-4 py-2 rounded-md ${
                  currency === 'KES' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                KES
              </button>
            </div>

            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={isAnnual}
                onChange={() => setIsAnnual(!isAnnual)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              <span className="ml-3 text-sm font-medium text-gray-900">Annual Billing (15% OFF)</span>
            </label>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-none mx-auto">
          {plans.map((plan) => (
            <PricingCard
              key={plan.name}
              plan={plan}
              currency={currency}
              onSelect={handlePlanSelect}
              formattedPrice={formatPrice(plan.price)}
              currentPlan={employer?.subscription?.plan === plan.name.toLowerCase()}
              remainingPosts={employer?.jobPostsRemaining}
              isAnnual={isAnnual}
            />
          ))}
        </div>

        <PaymentModal
          isOpen={showPaymentModal}
          onClose={() => setShowPaymentModal(false)}
          onPayment={handlePayment}
          planName={selectedPlan || ''}
          amount={formatPrice(plans.find(p => p.name === selectedPlan)?.price || 0)}
          currency={currency}
          isProcessing={isProcessing}
        />

        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-blue-50 rounded-lg p-6">
            <div className="flex items-start">
              <Info className="h-6 w-6 text-blue-600 mt-0.5" />
              <div className="ml-3">
                <h3 className="text-lg font-semibold text-blue-900">New Employer Benefit</h3>
                <p className="mt-2 text-blue-700">
                  All new employers receive 3 free job posts upon registration. This offer is automatically applied to your account when you sign up.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;