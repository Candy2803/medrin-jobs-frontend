import { useState, useEffect } from 'react';
import { employerService, EmployerUser } from '../../services/mockEmployerService';
import { useNavigate } from 'react-router-dom';
import { Briefcase, AlertCircle, Users, BarChart, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';

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

  const stats = [
    {
      label: 'Active Jobs',
      value: '5',
      icon: Briefcase,
      change: '+2 this month',
      positive: true
    },
    {
      label: 'Total Applications',
      value: '127',
      icon: Users,
      change: '+48 this week',
      positive: true
    },
    {
      label: 'Views',
      value: '1,234',
      icon: BarChart,
      change: '+15% vs last month',
      positive: true
    },
    {
      label: 'Spent',
      value: '$350',
      icon: DollarSign,
      change: 'This month',
      positive: null
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Welcome Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Welcome, {employer.name}</h1>
            <p className="text-gray-600">{employer.company}</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/employer/post-job')}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Post a Job
          </motion.button>
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

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600">{stat.label}</p>
                <h3 className="text-2xl font-bold">{stat.value}</h3>
              </div>
              <stat.icon className="h-8 w-8 text-blue-600" />
            </div>
            <p className={`text-sm mt-2 ${
              stat.positive === true ? 'text-green-600' :
              stat.positive === false ? 'text-red-600' :
              'text-gray-500'
            }`}>
              {stat.change}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            onClick={() => navigate('/employer/post-job')}
            className="p-4 border rounded-lg hover:bg-gray-50 flex items-center"
          >
            <Briefcase className="h-5 w-5 text-blue-600 mr-2" />
            Post a New Job
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            onClick={() => navigate('/pricing')}
            className="p-4 border rounded-lg hover:bg-gray-50 text-left"
          >
            Upgrade Plan
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            onClick={() => navigate('/employer/jobs')}
            className="p-4 border rounded-lg hover:bg-gray-50 text-left"
          >
            View Active Jobs
          </motion.button>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mt-8 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {[
            { text: 'New application received for Senior Developer position', time: '2 hours ago' },
            { text: 'Job posting "UI/UX Designer" is expiring soon', time: '5 hours ago' },
            { text: 'Candidate John Doe viewed your message', time: '1 day ago' }
          ].map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex justify-between items-center py-3 border-b last:border-0"
            >
              <span className="text-gray-600">{activity.text}</span>
              <span className="text-sm text-gray-500">{activity.time}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmployerDashboard;