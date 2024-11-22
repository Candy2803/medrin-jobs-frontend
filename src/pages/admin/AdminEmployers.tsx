import { useState } from 'react';
import { Search, Filter, Mail, Ban, Eye, Building } from 'lucide-react';

interface Employer {
  id: string;
  name: string;
  email: string;
  company: string;
  location: string;
  status: 'active' | 'suspended';
  joinedAt: string;
  jobsPosted: number;
  plan: 'free' | 'basic' | 'pro' | 'enterprise';
}

const AdminEmployers = () => {
  const [employers, setEmployers] = useState<Employer[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'suspended'>('all');
  const [planFilter, setPlanFilter] = useState('all');

  const handleSuspend = (userId: string) => {
    setEmployers(prev => prev.map(user => 
      user.id === userId 
        ? { ...user, status: user.status === 'active' ? 'suspended' : 'active' }
        : user
    ));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Employers</h1>
          <p className="text-gray-600">Manage employer accounts</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search employers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as any)}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="suspended">Suspended</option>
          </select>
          <select
            value={planFilter}
            onChange={(e) => setPlanFilter(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Plans</option>
            <option value="free">Free</option>
            <option value="basic">Basic</option>
            <option value="pro">Pro</option>
            <option value="enterprise">Enterprise</option>
          </select>
        </div>
      </div>

      {/* Employers Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Employer
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Company
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Plan
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Jobs Posted
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Joined
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {employers.map((employer) => (
              <tr key={employer.id}>
                <td className="px-6 py-4">
                  <div>
                    <div className="font-medium text-gray-900">{employer.name}</div>
                    <div className="text-sm text-gray-500">{employer.email}</div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <Building className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-gray-900">{employer.company}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                    employer.plan === 'enterprise' ? 'bg-purple-100 text-purple-800' :
                    employer.plan === 'pro' ? 'bg-blue-100 text-blue-800' :
                    employer.plan === 'basic' ? 'bg-green-100 text-green-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {employer.plan}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {employer.jobsPosted}
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                    employer.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {employer.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {employer.joinedAt}
                </td>
                <td className="px-6 py-4 text-right space-x-2">
                  <button className="text-gray-600 hover:text-gray-900">
                    <Mail className="h-5 w-5" />
                  </button>
                  <button className="text-gray-600 hover:text-gray-900">
                    <Eye className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => handleSuspend(employer.id)}
                    className="text-red-600 hover:text-red-800"
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

export default AdminEmployers;