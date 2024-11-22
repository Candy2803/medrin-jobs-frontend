import { useState } from 'react';
import { Check, Clock, X } from 'lucide-react';
import { JobApplication } from '../../types';

interface ApplicationStatusProps {
  application: JobApplication;
  onUpdateStatus: (id: string, status: 'pending' | 'approved' | 'rejected') => void;
}

const ApplicationStatus = ({ application, onUpdateStatus }: ApplicationStatusProps) => {
  const statusColors = {
    pending: 'bg-yellow-100 text-yellow-800',
    approved: 'bg-green-100 text-green-800',
    rejected: 'bg-red-100 text-red-800'
  };

  const statusIcons = {
    pending: Clock,
    approved: Check,
    rejected: X
  };

  const Icon = statusIcons[application.status];

  return (
    <div className="flex items-center space-x-2">
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[application.status]}`}>
        <Icon className="h-4 w-4 mr-1" />
        {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
      </span>
      
      <select
        value={application.status}
        onChange={(e) => onUpdateStatus(application.id, e.target.value as any)}
        className="ml-2 text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="pending">Pending</option>
        <option value="approved">Approved</option>
        <option value="rejected">Rejected</option>
      </select>
    </div>
  );
};

export default ApplicationStatus;