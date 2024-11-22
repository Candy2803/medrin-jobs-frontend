import { useState, useEffect } from 'react';
import { Search, MapPin, Filter } from 'lucide-react';
import JobList from '../components/jobs/JobList';
import JobFilters from '../components/jobs/JobFilters';
import { Job } from '../types';

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  useEffect(() => {
    // Load recent searches from localStorage
    const savedSearches = localStorage.getItem('recentSearches');
    if (savedSearches) {
      setRecentSearches(JSON.parse(savedSearches));
    }
  }, []);

  const handleSearch = () => {
    if (searchTerm.trim()) {
      const newSearches = [
        searchTerm,
        ...recentSearches.filter(s => s !== searchTerm)
      ].slice(0, 5);
      
      setRecentSearches(newSearches);
      localStorage.setItem('recentSearches', JSON.stringify(newSearches));
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Search Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-5 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Job title, keywords, or company"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {searchTerm && recentSearches.length > 0 && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                {recentSearches.map((search, index) => (
                  <button
                    key={index}
                    onClick={() => setSearchTerm(search)}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    {search}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="md:col-span-5 relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="City or postcode"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="md:col-span-2 flex gap-2">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200 transition-colors flex items-center justify-center"
            >
              <Filter className="h-5 w-5 mr-2" />
              Filters
            </button>
            <button 
              onClick={handleSearch}
              className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
              Search
            </button>
          </div>
        </div>

        {/* Filters Section */}
        {showFilters && <JobFilters />}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Job Listings */}
        <div className="lg:col-span-3">
          <JobList />
        </div>

        {/* Recommendations */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4">Recommended for You</h3>
            <div className="space-y-4">
              <div className="border-b pb-4">
                <h4 className="font-medium text-blue-600 hover:underline cursor-pointer">Senior React Developer</h4>
                <p className="text-sm text-gray-600">Based on your profile</p>
                <p className="text-sm text-gray-500 mt-1">$120k - $150k • Remote</p>
              </div>
              <div className="border-b pb-4">
                <h4 className="font-medium text-blue-600 hover:underline cursor-pointer">Frontend Team Lead</h4>
                <p className="text-sm text-gray-600">Based on your searches</p>
                <p className="text-sm text-gray-500 mt-1">$130k - $160k • New York</p>
              </div>
              <div className="pb-4">
                <h4 className="font-medium text-blue-600 hover:underline cursor-pointer">Full Stack Engineer</h4>
                <p className="text-sm text-gray-600">Similar to saved jobs</p>
                <p className="text-sm text-gray-500 mt-1">$100k - $130k • San Francisco</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4">Recent Searches</h3>
            <div className="space-y-2">
              {recentSearches.map((search, index) => (
                <button
                  key={index}
                  onClick={() => setSearchTerm(search)}
                  className="block w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 text-gray-700"
                >
                  {search}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;