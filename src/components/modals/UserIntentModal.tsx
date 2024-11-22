import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Briefcase, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface UserIntentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (intent: 'hire' | 'work') => void;
}

const UserIntentModal = ({ isOpen, onClose, onSelect }: UserIntentModalProps) => {
  const navigate = useNavigate();
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
    navigate(intent === 'hire' ? '/register?type=employer' : '/register?type=jobseeker');
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
              <motion.button
                whileHover={{ scale: 1.02 }}
                onClick={() => handleSelect('work')}
                className="w-full flex items-center justify-between p-4 rounded-lg border-2 border-gray-200 hover:border-blue-500 group"
              >
                <div className="flex items-center">
                  <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-600">
                    <Search className="h-6 w-6 text-blue-600 group-hover:text-white" />
                  </div>
                  <div className="ml-4 text-left">
                    <h3 className="font-semibold text-gray-900">I'm looking for work</h3>
                    <p className="text-sm text-gray-600">Find your dream job</p>
                  </div>
                </div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                onClick={() => handleSelect('hire')}
                className="w-full flex items-center justify-between p-4 rounded-lg border-2 border-gray-200 hover:border-blue-500 group"
              >
                <div className="flex items-center">
                  <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-600">
                    <Briefcase className="h-6 w-6 text-blue-600 group-hover:text-white" />
                  </div>
                  <div className="ml-4 text-left">
                    <h3 className="font-semibold text-gray-900">I'm hiring talent</h3>
                    <p className="text-sm text-gray-600">Post jobs and find candidates</p>
                  </div>
                </div>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default UserIntentModal;