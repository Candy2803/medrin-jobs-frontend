import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, Check } from 'lucide-react';

interface UpgradePromptProps {
  currentPlan: string;
  targetPlan: string;
  priceDifference: number;
  currency: 'USD' | 'KES';
  onUpgrade: () => void;
}

const UpgradePrompt = ({
  currentPlan,
  targetPlan,
  priceDifference,
  currency,
  onUpgrade
}: UpgradePromptProps) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="fixed bottom-8 right-8 max-w-md bg-white rounded-lg shadow-xl p-6 border border-blue-100"
      >
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <div className="bg-blue-100 rounded-full p-3">
              <TrendingUp className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Upgrade to {targetPlan}
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              You're currently on the {currentPlan} plan. Upgrade to {targetPlan} for just {currency} {priceDifference} more and get:
            </p>
            <ul className="mt-3 space-y-2">
              <motion.li 
                className="flex items-center text-sm text-gray-600"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Check className="h-4 w-4 text-green-500 mr-2" />
                Unlimited job postings
              </motion.li>
              <motion.li 
                className="flex items-center text-sm text-gray-600"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Check className="h-4 w-4 text-green-500 mr-2" />
                Premium support
              </motion.li>
              <motion.li 
                className="flex items-center text-sm text-gray-600"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Check className="h-4 w-4 text-green-500 mr-2" />
                Advanced analytics
              </motion.li>
            </ul>
            <div className="mt-4 flex justify-end">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onUpgrade}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Upgrade Now
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default UpgradePrompt;