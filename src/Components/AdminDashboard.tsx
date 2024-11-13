import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();

  // Function to navigate to detailed view with a specific type
  const handleNavigate = (type: string) => {
    navigate(`/admin-dashboard/${type}`);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 lg:h-screen bg-white">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-28 w-full max-w-5xl">
        {[
          { title: 'Total Users', count: 1000, type: 'users' },
          { title: 'Total Job Seekers', count: 1000, type: 'job-seekers' },
          { title: 'Total Employers', count: 1000, type: 'employers' },
          { title: 'Total Blogs', count: 1000, type: 'blogs' },
          { title: 'Total Jobs', count: 1000, type: 'jobs' },
          { title: 'Total Payments', count: 1000, type: 'payments' },
          { title: 'Total Applications', count: 1000, type: 'applications' },
          {
            title: 'Approved Applications',
            count: 1000,
            type: 'approved-applications',
          },
          { title: 'Total Notifications', count: 1000, type: 'notifications' },
        ].map((item) => (
          <div
            key={item.type}
            className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition cursor-pointer flex flex-col items-center justify-between"
            onClick={() => handleNavigate(item.type)}
          >
            <p className="text-lg text-center font-semibold">{item.title}</p>
            <p className="text-blue-500 text-3xl font-bold">{item.count}</p>
            <span className="text-gray-500">→</span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default AdminDashboard;
