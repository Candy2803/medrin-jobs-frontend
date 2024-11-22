import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Search, MapPin, Filter } from 'lucide-react';
import { categories } from '../data/categories';
import JobList from '../components/jobs/JobList';
import JobFilters from '../components/jobs/JobFilters';

const CategoryJobs = () => {
  const { slug } = useParams();
  const category = categories.find(c => c.slug === slug);
  const [showFilters, setShowFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');

  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Category Header */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{category.name} Jobs</h1>
        <p className="text-gray-600 mb-4">{category.description}</p>
        <p className="text-blue-600 font-semibold">
          {category.openPositions} open positions
        </p>
      </div>

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
          </div>
        </div>

        {showFilters && <JobFilters />}
      </div>

      {/* Job Listings */}
      <JobList category={category.slug} />
    </div>
  );
};

export default CategoryJobs;