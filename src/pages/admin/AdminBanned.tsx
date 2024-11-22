import { useState } from 'react';
import { Ban, Search, AlertTriangle } from 'lucide-react';
import { Job } from '../../types';

const AdminBanned = () => {
  const [bannedItems, setBannedItems] = useState<(Job & { reason: string })[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleUnban = (itemId: string) => {
    setBannedItems(prev => prev.filter(item => item.id !== itemId));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Banned Items</h1>
          <p className="text-gray-600">Manage banned jobs and accounts</p>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search banned items..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Banned Items List */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Item
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Reason
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Banned Date
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {bannedItems.map((item) => (
              <tr key={item.id}>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <AlertTriangle className="h-5 w-5 text-red-500 mr-3" />
                    <div>
                      <div className="font-medium text-gray-900">{item.title}</div>
                      <div className="text-sm text-gray-500">{item.company}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  Job Listing
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {item.reason}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {item.postedAt}
                </td>
                <td className="px-6 py-4 text-right">
                  <button
                    onClick={() => handleUnban(item.id)}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800"
                  >
                    <Ban className="h-4 w-4 mr-1" />
                    Remove Ban
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

export default AdminBanned;