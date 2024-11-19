import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
  AreaChart,
  Area,
  ResponsiveContainer
} from 'recharts';
import {
  Users,
  Briefcase,
  DollarSign,
  TrendingUp,
  Eye,
  UserCheck,
  Building,
  Clock
} from 'lucide-react';

const monthlyData = [
  { name: 'Jan', applications: 4000, jobs: 2400, revenue: 2400 },
  { name: 'Feb', applications: 3000, jobs: 1398, revenue: 2210 },
  { name: 'Mar', applications: 2000, jobs: 9800, revenue: 2290 },
  { name: 'Apr', applications: 2780, jobs: 3908, revenue: 2000 },
  { name: 'May', applications: 1890, jobs: 4800, revenue: 2181 },
  { name: 'Jun', applications: 2390, jobs: 3800, revenue: 2500 }
];

const jobCategories = [
  { name: 'Technology', value: 400 },
  { name: 'Marketing', value: 300 },
  { name: 'Sales', value: 300 },
  { name: 'Design', value: 200 },
  { name: 'Finance', value: 278 },
  { name: 'Other', value: 189 }
];

const AdminDashboard = () => {
  const [timeRange, setTimeRange] = useState('month');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-600">Welcome back, Admin</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Total Users</p>
              <h3 className="text-2xl font-bold">12,345</h3>
            </div>
            <Users className="h-8 w-8 text-blue-600" />
          </div>
          <p className="text-green-600 text-sm mt-2">↑ 12% from last month</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Active Jobs</p>
              <h3 className="text-2xl font-bold">1,234</h3>
            </div>
            <Briefcase className="h-8 w-8 text-blue-600" />
          </div>
          <p className="text-green-600 text-sm mt-2">↑ 8% from last month</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Revenue</p>
              <h3 className="text-2xl font-bold">$45,678</h3>
            </div>
            <DollarSign className="h-8 w-8 text-blue-600" />
          </div>
          <p className="text-green-600 text-sm mt-2">↑ 15% from last month</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Applications</p>
              <h3 className="text-2xl font-bold">3,456</h3>
            </div>
            <TrendingUp className="h-8 w-8 text-blue-600" />
          </div>
          <p className="text-red-600 text-sm mt-2">↓ 3% from last month</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Monthly Overview</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="applications" fill="#3B82F6" />
              <Bar dataKey="jobs" fill="#10B981" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Revenue Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="revenue" fill="#3B82F6" stroke="#2563EB" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between py-2 border-b">
            <div className="flex items-center">
              <Eye className="h-5 w-5 text-gray-400 mr-3" />
              <span>New job posting: Senior Developer at Google</span>
            </div>
            <span className="text-gray-500">2 minutes ago</span>
          </div>
          <div className="flex items-center justify-between py-2 border-b">
            <div className="flex items-center">
              <UserCheck className="h-5 w-5 text-gray-400 mr-3" />
              <span>New user registration: John Doe</span>
            </div>
            <span className="text-gray-500">15 minutes ago</span>
          </div>
          <div className="flex items-center justify-between py-2 border-b">
            <div className="flex items-center">
              <Building className="h-5 w-5 text-gray-400 mr-3" />
              <span>New company registration: Tech Corp</span>
            </div>
            <span className="text-gray-500">1 hour ago</span>
          </div>
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center">
              <Clock className="h-5 w-5 text-gray-400 mr-3" />
              <span>Job posting expired: Junior Designer</span>
            </div>
            <span className="text-gray-500">2 hours ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;