import { useState } from 'react';
import { JobPostingData } from '../../../types/employer';
import { Plus, X } from 'lucide-react';
import { categories } from '../../../data/categories';

interface JobDetailsFormProps {
  data: JobPostingData;
  onChange: (data: JobPostingData) => void;
  onNext: () => void;
}

const JobDetailsForm = ({ data, onChange, onNext }: JobDetailsFormProps) => {
  const [requirement, setRequirement] = useState('');

  const handleAddRequirement = () => {
    if (requirement.trim()) {
      onChange({
        ...data,
        requirements: [...data.requirements, requirement.trim()]
      });
      setRequirement('');
    }
  };

  const handleRemoveRequirement = (index: number) => {
    onChange({
      ...data,
      requirements: data.requirements.filter((_, i) => i !== index)
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Job Title</label>
        <input
          type="text"
          required
          value={data.title}
          onChange={(e) => onChange({ ...data, title: e.target.value })}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          placeholder="e.g., Senior Software Engineer"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Job Category</label>
        <select
          required
          value={data.category}
          onChange={(e) => onChange({ ...data, category: e.target.value })}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        >
          <option value="">Select category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.slug}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          required
          value={data.description}
          onChange={(e) => onChange({ ...data, description: e.target.value })}
          rows={4}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          placeholder="Describe the role and responsibilities..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Requirements</label>
        <div className="mt-1 space-y-2">
          {data.requirements.map((req, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="flex-1 p-2 bg-gray-50 rounded-md">{req}</span>
              <button
                type="button"
                onClick={() => handleRemoveRequirement(index)}
                className="text-red-500 hover:text-red-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          ))}
          <div className="flex gap-2">
            <input
              type="text"
              value={requirement}
              onChange={(e) => setRequirement(e.target.value)}
              className="flex-1 rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Add a requirement..."
            />
            <button
              type="button"
              onClick={handleAddRequirement}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              <Plus className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Location</label>
          <input
            type="text"
            required
            value={data.location}
            onChange={(e) => onChange({ ...data, location: e.target.value })}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="e.g., Remote, New York, etc."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Employment Type</label>
          <select
            required
            value={data.employmentType}
            onChange={(e) => onChange({ ...data, employmentType: e.target.value })}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option value="">Select type</option>
            <option value="full-time">Full Time</option>
            <option value="part-time">Part Time</option>
            <option value="contract">Contract</option>
            <option value="internship">Internship</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Minimum Salary</label>
          <input
            type="text"
            required
            value={data.salaryRange.min}
            onChange={(e) => onChange({
              ...data,
              salaryRange: { ...data.salaryRange, min: e.target.value }
            })}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="e.g., $50,000"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Maximum Salary</label>
          <input
            type="text"
            required
            value={data.salaryRange.max}
            onChange={(e) => onChange({
              ...data,
              salaryRange: { ...data.salaryRange, max: e.target.value }
            })}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="e.g., $80,000"
          />
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Next Step
        </button>
      </div>
    </form>
  );
};

export default JobDetailsForm;