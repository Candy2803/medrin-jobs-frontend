import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Search, Filter } from 'lucide-react';
import { JobPostingData } from '../../types/employer';

const mockJobs: JobPostingData[] = [
  {
    title: 'Senior React Developer',
    company: 'Tech Corp',
    description: 'We are looking for an experienced React developer...',
    requirements: ['5+ years experience', 'Strong TypeScript skills'],
    location: 'Remote',
    salaryRange: { min: '100000', max: '150000' },
    employmentType: 'full-time',
    applicationDeadline: '2024-04-15',
    applicationInstructions: 'Apply with resume and cover letter',
    requiredDocuments: ['Resume', 'Cover Letter'],
    status: 'published'
  },
  // Add more mock jobs as needed
];

const EmployerJobs = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState<JobPostingData[]>(mockJobs);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'published' | 'draft' | 'closed'>('all');

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
          <h1 className="text-2xl font-bold text-gray-900">My Job Postings</h1>
          <p className="text-gray-600">Manage your job listings</p>
        </div>
        <button
          onClick={() => navigate('/employer/post-job')}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center"
        >
          <Plus className="h-5 w-5 mr-2" />
          Post New Job
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
            onChange={(e) => setStatusFilter(e.target.value as any)}
            className="w-full md:w-48 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Status</option>
            <option value="published">Published</option>
            <option value="draft">Draft</option>
            <option value="closed">Closed</option>
          </select>
        </div>
      </div>

      {/* Jobs List */}
      <div className="space-y-6">
        {filteredJobs.map((job, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                <p className="text-gray-600">{job.company}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                job.status === 'published' ? 'bg-green-100 text-green-800' :
                job.status === 'draft' ? 'bg-gray-100 text-gray-800' :
                'bg-red-100 text-red-800'
              }`}>
                {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
              </span>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="text-gray-900">{job.location}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Employment Type</p>
                <p className="text-gray-900">{job.employmentType}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Salary Range</p>
                <p className="text-gray-900">${job.salaryRange.min} - ${job.salaryRange.max}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Application Deadline</p>
                <p className="text-gray-900">{new Date(job.applicationDeadline).toLocaleDateString()}</p>
              </div>
            </div>

            <div className="mt-6 flex justify-end space-x-4">
              <button className="text-gray-600 hover:text-gray-900 px-4 py-2">
                View Applications
              </button>
              <button className="text-blue-600 hover:text-blue-700 px-4 py-2">
                Edit
              </button>
              <button className="text-red-600 hover:text-red-700 px-4 py-2">
                Close Job
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployerJobs;