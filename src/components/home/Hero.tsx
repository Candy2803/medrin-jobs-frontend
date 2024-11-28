import { Search, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            There Are 93,178 Postings Here For you!
          </h1>
          <p className="text-xl text-blue-100">
            Find Jobs, Employment & Career Opportunities
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-4 md:p-6">
          <form className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-5 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Job title, keywords, or company"
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
              />
            </div>
            <div className="md:col-span-5 relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="City or postcode"
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
              />
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                Find Jobs
              </button>
            </div>
          </form>

          <div className="mt-4 text-gray-600">
            <span className="font-semibold">Popular Searches:</span>
            <span className="ml-2">
              Designer, Developer, Web, IOS, PHP, Senior, Engineer
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;