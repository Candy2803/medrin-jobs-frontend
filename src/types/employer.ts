export interface JobPostingData {
  title: string;
company: string;
  description: string;
  requirements: string[];
  location: string;
  salaryRange: {
    min: string;
    max: string;
  };
  employmentType: string;
  applicationDeadline: string;
  applicationInstructions: string;
  requiredDocuments: string[];
  status: 'draft' | 'published' | 'closed';
  category: string; // Added category field
}