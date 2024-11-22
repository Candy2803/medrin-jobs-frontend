import { JobPostingData } from '../../../types/employer';
import { Plus, X } from 'lucide-react';

interface ApplicationProcessFormProps {
  data: JobPostingData;
  onChange: (data: JobPostingData) => void;
  onBack: () => void;
  onNext: () => void;
}

const ApplicationProcessForm = ({
  data,
  onChange,
  onBack,
  onNext,
}: ApplicationProcessFormProps) => {
  const handleDocumentAdd = () => {
    onChange({
      ...data,
      requiredDocuments: [...data.requiredDocuments, '']
    });
  };

  const handleDocumentRemove = (index: number) => {
    onChange({
      ...data,
      requiredDocuments: data.requiredDocuments.filter((_, i) => i !== index)
    });
  };

  const handleDocumentChange = (index: number, value: string) => {
    const newDocuments = [...data.requiredDocuments];
    newDocuments[index] = value;
    onChange({
      ...data,
      requiredDocuments: newDocuments
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Application Deadline
        </label>
        <input
          type="date"
          required
          value={data.applicationDeadline}
          onChange={(e) => onChange({ ...data, applicationDeadline: e.target.value })}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Application Instructions
        </label>
        <textarea
          required
          value={data.applicationInstructions}
          onChange={(e) => onChange({ ...data, applicationInstructions: e.target.value })}
          rows={4}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          placeholder="Provide clear instructions for applicants..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Required Documents
        </label>
        <div className="mt-1 space-y-2">
          {data.requiredDocuments.map((document, index) => (
            <div key={index} className="flex gap-2">
              <input
                type="text"
                value={document}
                onChange={(e) => handleDocumentChange(index, e.target.value)}
                className="flex-1 rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="e.g., Resume, Cover Letter"
              />
              <button
                type="button"
                onClick={() => handleDocumentRemove(index)}
                className="rounded-md border border-gray-300 p-2 text-gray-500 hover:bg-gray-50"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={handleDocumentAdd}
            className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-500"
          >
            <Plus className="h-4 w-4" />
            Add Required Document
          </button>
        </div>
      </div>

      <div className="flex justify-between">
        <button
          type="button"
          onClick={onBack}
          className="rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Back
        </button>
        <button
          type="submit"
          className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Next Step
        </button>
      </div>
    </form>
  );
};

export default ApplicationProcessForm;