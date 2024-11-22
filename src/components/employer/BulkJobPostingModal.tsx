import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Upload, AlertCircle } from 'lucide-react';

interface BulkJobPostingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpload: (file: File) => Promise<void>;
}

const BulkJobPostingModal = ({ isOpen, onClose, onUpload }: BulkJobPostingModalProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string>('');
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.type !== 'application/json') {
        setError('Please upload a JSON file');
        return;
      }
      setFile(selectedFile);
      setError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    setIsUploading(true);
    try {
      await onUpload(file);
      onClose();
    } catch (err) {
      setError('Failed to upload jobs. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white rounded-lg max-w-md w-full p-6"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Bulk Job Upload</h2>
              <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                <X className="h-6 w-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Upload JSON File
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="flex text-sm text-gray-600">
                      <label className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500">
                        <span>Upload a file</span>
                        <input
                          type="file"
                          accept=".json"
                          onChange={handleFileChange}
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      JSON file up to 10MB
                    </p>
                  </div>
                </div>
              </div>

              {error && (
                <div className="flex items-center text-red-600 text-sm">
                  <AlertCircle className="h-4 w-4 mr-2" />
                  {error}
                </div>
              )}

              <div className="bg-blue-50 p-4 rounded-md">
                <h3 className="text-sm font-medium text-blue-800 mb-2">JSON Format Example:</h3>
                <pre className="text-xs text-blue-700 overflow-x-auto">
{`{
  "jobs": [
    {
      "title": "Software Engineer",
      "description": "...",
      "requirements": ["..."],
      "location": "Remote",
      "salary": {"min": "100k", "max": "150k"}
    }
  ]
}`}
                </pre>
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-gray-700 hover:text-gray-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={!file || isUploading}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-blue-300"
                >
                  {isUploading ? 'Uploading...' : 'Upload Jobs'}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BulkJobPostingModal;