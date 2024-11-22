import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, BookmarkCheck, ClipboardList, Bell, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { Job } from '../../types';

const JobSeekerDashboard = () => {
  const [recentApplications, setRecentApplications] = useState<any[]>([]);
  const [recommendedJobs, setRecommendedJobs] = useState<Job[]>([]);
  const [savedJobs, setSavedJobs] = useState<Job[]>([]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Welcome Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Welcome back, [Name]</h1>
        <p className="text-gray-600">Here's what's happening with your job search</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Applications</p>
              <h3 className="text-2xl font-bold">12</h3>
            </div>
            <ClipboardList className="h-8 w-8 text-blue-600" />
          </div>
        </motion.div>

        <motion.div
          whileHover={{ y: -5 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Saved Jobs</p>
              <h3 className="text-2xl font-bold">8</h3>
            </div>
            <BookmarkCheck className="h-8 w-8 text-blue-600" />
          </div>
        </motion.div>

        <motion.div
          whileHover={{ y: -5 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Profile Views</p>
              <h3 className="text-2xl font-bold">45</h3>
            </div>
            <Search className="h-8 w-8 text-blue-600" />
          </div>
        </motion.div>

        <motion.div
          whileHover={{ y: -5 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Job Alerts</p>
              <h3 className="text-2xl font-bold">3</h3>
            </div>
            <Bell className="h-8 w-8 text-blue-600" />
          </div>
        </motion.div>
      </div>

      {/* Recent Applications */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Recent Applications</h2>
          <Link to="/jobseeker/applications" className="text-blue-600 hover:text-blue-700">
            View all
          </Link>
        </div>
        <div className="space-y-4">
          {recentApplications.length === 0 ? (
            <p className="text-gray-600">No recent applications</p>
          ) : (
            recentApplications.map((application) => (
              <div key={application.id} className="flex justify-between items-center border-b pb-4">
                <div>
                  <h3 className="font-medium">{application.jobTitle}</h3>
                  <p className="text-sm text-gray-600">{application.company}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  application.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                  application.status === 'approved' ? 'bg-green-100 text-green-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {application.status}
                </span>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Recommended Jobs */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Recommended Jobs</h2>
          <Link to="/jobs" className="text-blue-600 hover:text-blue-700">
            View all jobs
          </Link>
        </div>
        <div className="space-y-4">
          {recommendedJobs.length === 0 ? (
            <p className="text-gray-600">No recommended jobs</p>
          ) : (
            recommendedJobs.map((job) => (
              <div key={job.id} className="flex justify-between items-center border-b pb-4">
                <div>
                  <h3 className="font-medium">{job.title}</h3>
                  <p className="text-sm text-gray-600">{job.company}</p>
                </div>
                <Link
                  to={`/jobs/${job.id}`}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                  Apply Now
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default JobSeekerDashboard;