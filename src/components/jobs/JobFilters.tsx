import { useState } from 'react';

const JobFilters = () => {
  const [salary, setSalary] = useState('');
  const [jobType, setJobType] = useState<string[]>([]);
  const [experience, setExperience] = useState('');

  const handleJobTypeChange = (type: string) => {
    setJobType(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  };

  return (
    <div className="mt-6 p-6 border-t">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Salary Range */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Salary Range
          </label>
          <select
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2"
          >
            <option value="">Any</option>
            <option value="0-50000">$0 - $50,000</option>
            <option value="50000-100000">$50,000 - $100,000</option>
            <option value="100000-150000">$100,000 - $150,000</option>
            <option value="150000+">$150,000+</option>
          </select>
        </div>

        {/* Job Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Job Type
          </label>
          <div className="space-y-2">
            {['Full Time', 'Part Time', 'Contract', 'Remote'].map((type) => (
              <label key={type} className="flex items-center">
                <input
                  type="checkbox"
                  checked={jobType.includes(type)}
                  onChange={() => handleJobTypeChange(type)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-gray-700">{type}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Experience Level */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Experience Level
          </label>
          <select
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2"
          >
            <option value="">Any</option>
            <option value="entry">Entry Level</option>
            <option value="mid">Mid Level</option>
            <option value="senior">Senior Level</option>
            <option value="executive">Executive</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default JobFilters;