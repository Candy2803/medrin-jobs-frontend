import { Search, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6"
          >
            There Are 93,178 Postings Here For you!
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-blue-100"
          >
            Find Jobs, Employment & Career Opportunities
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-lg shadow-lg p-4 md:p-6 lg:p-8"
        >
          <form className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-5 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Job title, keywords, or company"
                className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
              />
            </div>
            <div className="md:col-span-5 relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="City or postcode"
                className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
              />
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors text-lg font-semibold"
              >
                Find Jobs
              </button>
            </div>
          </form>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-6 text-gray-600 text-sm md:text-base"
          >
            <span className="font-semibold">Popular Searches:</span>
            <span className="ml-2">
              Designer, Developer, Web, IOS, PHP, Senior, Engineer
            </span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;