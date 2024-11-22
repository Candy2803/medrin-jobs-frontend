import { useState, useEffect } from 'react';
import { employerService, EmployerUser } from '../../services/mockEmployerService';
import { useNavigate } from 'react-router-dom';
import { Briefcase, AlertCircle } from 'lucide-react';

const EmployerDashboard = () => {
  const [employer, setEmployer] = useState<EmployerUser | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = employerService.getCurrentUser();
    if (!user) {
      navigate('/login');
      return;
    }
    setEmployer(user);
  }, [navigate]);

  if (!employer) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Welcome, {employer.name}</h1>
            <p className="text-gray-600">{employer.company}</p>
          </div>
          <button
            onClick={() => navigate('/employer/post-job')}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Post a Job
          </button>
        </div>

        <div className="mt-6 p-4 bg-blue-50 rounded-md flex items-start">
          <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
          <div className="ml-3">
            <h3 className="text-sm font-medium text-blue-800">Subscription Status</h3>
            <p className="mt-1 text-sm text-blue-600">
              Plan: {employer.subscription.plan.charAt(0).toUpperCase() + employer.subscription.plan.slice(1)}
              <br />
              Job Posts Remaining: {employer.jobPostsRemaining}
              <br />
              Expires: {new Date(employer.subscription.expiresAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button
            onClick={() => navigate('/employer/post-job')}
            className="p-4 border rounded-lg hover:bg-gray-50 flex items-center"
          >
            <Briefcase className="h-5 w-5 text-blue-600 mr-2" />
            Post a New Job
          </button>
          <button
            onClick={() => navigate('/pricing')}
            className="p-4 border rounded-lg hover:bg-gray-50 text-left"
          >
            Upgrade Plan
          </button>
          <button
            onClick={() => navigate('/employer/jobs')}
            className="p-4 border rounded-lg hover:bg-gray-50 text-left"
          >
            View Active Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployerDashboard;