import { useState, useEffect } from 'react';
import { Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const AdminAccessButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const navigate = useNavigate();

  // Show tooltip after 2 seconds on first visit
  useEffect(() => {
    const hasSeenTooltip = localStorage.getItem('hasSeenAdminTooltip');
    if (!hasSeenTooltip) {
      const timer = setTimeout(() => {
        setShowTooltip(true);
        setTimeout(() => {
          setShowTooltip(false);
          localStorage.setItem('hasSeenAdminTooltip', 'true');
        }, 5000);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="fixed bottom-8 left-8 z-50">
      <AnimatePresence>
        {(showTooltip || isHovered) && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="absolute left-full ml-4 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-lg whitespace-nowrap"
          >
            <div className="relative">
              <div className="absolute -left-6 top-1/2 -translate-y-1/2 border-8 border-transparent border-r-gray-900" />
              Click here for admin access
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => navigate('/admin')}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="bg-gray-900 text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition-all"
        title="Admin Access"
      >
        <Shield className={`h-6 w-6 ${isHovered ? 'animate-pulse' : ''}`} />
      </motion.button>
    </div>
  );
};

export default AdminAccessButton;