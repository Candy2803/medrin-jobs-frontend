import { useState } from 'react';
import PostJobWizard from '../../components/employer/PostJobWizard';
import BulkJobPostingModal from '../../components/employer/BulkJobPostingModal';
import { bulkJobService } from '../../services/bulkJobService';
import { Upload } from 'lucide-react';
import { employerService } from '../../services/mockEmployerService';
import { useNavigate } from 'react-router-dom';

const PostJob = () => {
  const [showBulkModal, setShowBulkModal] = useState(false);
  const navigate = useNavigate();
  const employer = employerService.getCurrentUser();

  const handleBulkUpload = async (file: File) => {
    try {
      const result = await bulkJobService.uploadJobs(file);
      if (result.success) {
        // Show success message
        alert(`Successfully created ${result.jobsCreated} jobs`);
        navigate('/employer/jobs');
      } else {
        // Show error message
        alert('Failed to upload jobs: ' + result.errors?.join('\n'));
      }
    } catch (error) {
      alert('Failed to process job upload');
    }
  };

  const canBulkUpload = employer?.subscription?.plan !== 'free';

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Post a New Job</h1>
            <p className="mt-2 text-gray-600">
              Create a detailed job posting to attract the best candidates
            </p>
          </div>
          {canBulkUpload && (
            <button
              onClick={() => setShowBulkModal(true)}
              className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              <Upload className="h-5 w-5 mr-2" />
              Bulk Upload
            </button>
          )}
        </div>
        
        <PostJobWizard />

        <BulkJobPostingModal
          isOpen={showBulkModal}
          onClose={() => setShowBulkModal(false)}
          onUpload={handleBulkUpload}
        />
      </div>
    </div>
  );
};

export default PostJob;