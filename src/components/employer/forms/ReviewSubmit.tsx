import { JobPostingData } from '../../../types/employer';
import { Check } from 'lucide-react';
import { useEmployerJourney } from '../../../hooks/useEmployerJourney';

interface ReviewSubmitProps {
  data: JobPostingData;
  onBack: () => void;
  onSubmit: (data: JobPostingData) => Promise<void>;
}

const ReviewSubmit = ({ data, onBack, onSubmit }: ReviewSubmitProps) => {
  const { isLoading } = useEmployerJourney(); // Keep isLoading logic scoped to the parent or refactor here if needed

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault(); // Prevent default browser behavior
    try {
      await onSubmit(data); // Delegate the submission logic to the parent
    } catch (error) {
      console.error('Error submitting job:', error); // Handle error if necessary
    }
  };


  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* ... rest of the review form remains the same ... */}
      
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
          disabled={isLoading}
          className="flex items-center rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-blue-300"
        >
          <Check className="h-5 w-5 mr-2" />
          {isLoading ? 'Publishing...' : 'Publish Job'}
        </button>
      </div>
    </form>
  );
};

export default ReviewSubmit;