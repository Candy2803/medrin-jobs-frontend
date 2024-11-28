import { useState } from 'react';
import { Star, Search, Filter } from 'lucide-react';
import { Job } from './AdminJobs';

const AdminFeatured = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleToggleFeatured = (jobId: string) => {
    setJobs(prev => prev.map(job => 
      job.id === jobId ? { ...job, featured: !job.featured } : job
    ));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Featured Jobs</h1>
          <p className="text-gray-600">Manage featured job listings</p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search jobs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Jobs List */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Job
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Company
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Posted Date
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {jobs.map((job) => (
              <tr key={job.id}>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <img
                      src={job.logo}
                      alt={job.company}
                      className="h-10 w-10 rounded-full"
                    />
                    <div className="ml-4">
                      <div className="font-medium text-gray-900">{job.title}</div>
                      <div className="text-sm text-gray-500">{job.location}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {job.company}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {job.postedAt}
                </td>
                <td className="px-6 py-4 text-right">
                  <button
                    onClick={() => handleToggleFeatured(job.id)}
                    className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                      job.featured
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    <Star className="h-4 w-4 mr-1" />
                    {job.featured ? 'Featured' : 'Make Featured'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminFeatured;