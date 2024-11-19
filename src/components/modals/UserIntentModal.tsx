import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface UserIntentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (intent: 'hire' | 'work') => void;
}

const UserIntentModal = ({ isOpen, onClose, onSelect }: UserIntentModalProps) => {
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    if (hasInteracted) {
      localStorage.setItem('userIntentShown', 'true');
    }
  }, [hasInteracted]);

  const handleSelect = (intent: 'hire' | 'work') => {
    setHasInteracted(true);
    onSelect(intent);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-lg max-w-md w-full p-6"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Welcome to Medrin Jobs!</h2>
              <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                <X className="h-6 w-6" />
              </button>
            </div>

            <p className="text-gray-600 mb-8">
              Help us personalize your experience. What brings you to Medrin Jobs today?
            </p>

            <div className="space-y-4">
              <button
                onClick={() => handleSelect('work')}
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
              >
                I'm looking for work
              </button>
              <button
                onClick={() => handleSelect('hire')}
                className="w-full bg-white text-blue-600 py-3 px-4 rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors"
              >
                I'm looking to hire talent
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default UserIntentModal;