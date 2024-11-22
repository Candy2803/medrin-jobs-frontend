import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, DollarSign, Trash2 } from 'lucide-react';
import { Job } from '../../types';

const SavedJobs = () => {
  const [savedJobs, setSavedJobs] = useState<Job[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleRemove = (jobId: string) => {
    setSavedJobs(prev => prev.filter(job => job.id !== jobId));
  };

  const filteredJobs = savedJobs.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Saved Jobs</h1>
          <p className="text-gray-600">Jobs you've bookmarked for later</p>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search saved jobs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Jobs List */}
      <div className="space-y-6">
        {filteredJobs.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <p className="text-gray-600">No saved jobs found</p>
          </div>
        ) : (
          filteredJobs.map((job) => (
            <div key={job.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img src={job.logo} alt={job.company} className="w-12 h-12 rounded-full" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                    <p className="text-gray-600">{job.company}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleRemove(job.id)}
                  className="text-gray-400 hover:text-red-500"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-4 flex flex-wrap gap-4">
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-4 w-4 mr-2" />
                  {job.location}
                </div>
                <div className="flex items-center text-gray-600">
                  <DollarSign className="h-4 w-4 mr-2" />
                  {job.salary}
                </div>
              </div>

              <div className="mt-4 flex justify-end">
                <Link
                  to={`/jobs/${job.id}`}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                  View Job
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SavedJobs;