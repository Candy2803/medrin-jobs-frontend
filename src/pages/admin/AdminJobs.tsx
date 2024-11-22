import { useState } from 'react';
import { Briefcase, Edit, Trash2, Plus, Search, Ban, Star, AlertCircle } from 'lucide-react';

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  status: 'active' | 'expired' | 'draft' | 'banned';
  featured: boolean;
  postedAt: string;
}

const AdminJobs = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  const handleBanJob = (jobId: string) => {
    setJobs(prev => prev.map(job => 
      job.id === jobId ? { ...job, status: job.status === 'banned' ? 'active' : 'banned' } : job
    ));
  };

  const handleToggleFeatured = (jobId: string) => {
    setJobs(prev => prev.map(job => 
      job.id === jobId ? { ...job, featured: !job.featured } : job
    ));
  };

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || job.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Manage Jobs</h1>
          <p className="text-gray-600">View and manage all job postings</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center">
          <Plus className="h-5 w-5 mr-2" />
          Add New Job
        </button>
      </div>

      {/* Filters */}
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
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full md:w-48 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="expired">Expired</option>
            <option value="draft">Draft</option>
            <option value="banned">Banned</option>
          </select>
        </div>
      </div>

      {/* Jobs Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Job</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Posted</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredJobs.map((job) => (
              <tr key={job.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div>
                    <div className="font-medium text-gray-900">{job.title}</div>
                    <div className="text-sm text-gray-500">{job.company}</div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">{job.location}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{job.type}</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                    job.status === 'active' ? 'bg-green-100 text-green-800' :
                    job.status === 'expired' ? 'bg-red-100 text-red-800' :
                    job.status === 'banned' ? 'bg-red-100 text-red-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {job.status}
                  </span>
                  {job.featured && (
                    <span className="ml-2 inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                      Featured
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">{job.postedAt}</td>
                <td className="px-6 py-4 text-right space-x-2">
                  <button 
                    onClick={() => handleToggleFeatured(job.id)}
                    className={`text-yellow-600 hover:text-yellow-800 ${job.featured ? 'text-yellow-500' : ''}`}
                    title={job.featured ? 'Remove from featured' : 'Mark as featured'}
                  >
                    <Star className="h-5 w-5" />
                  </button>
                  <button className="text-blue-600 hover:text-blue-800">
                    <Edit className="h-5 w-5" />
                  </button>
                  <button 
                    onClick={() => handleBanJob(job.id)}
                    className={`text-red-600 hover:text-red-800 ${job.status === 'banned' ? 'text-red-500' : ''}`}
                    title={job.status === 'banned' ? 'Unban job' : 'Ban job'}
                  >
                    <Ban className="h-5 w-5" />
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

export default AdminJobs;