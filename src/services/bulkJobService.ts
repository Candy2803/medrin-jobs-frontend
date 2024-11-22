import { JobPostingData } from '../types/employer';

interface BulkJobUploadResponse {
  success: boolean;
  jobsCreated: number;
  errors?: string[];
}

class BulkJobService {
  async validateJobData(jobData: any): Promise<string[]> {
    const errors: string[] = [];
    
    if (!Array.isArray(jobData.jobs)) {
      errors.push('Invalid format: jobs array is required');
      return errors;
    }

    jobData.jobs.forEach((job: any, index: number) => {
      if (!job.title) errors.push(`Job ${index + 1}: Title is required`);
      if (!job.description) errors.push(`Job ${index + 1}: Description is required`);
      if (!job.location) errors.push(`Job ${index + 1}: Location is required`);
      if (!job.requirements || !Array.isArray(job.requirements)) {
        errors.push(`Job ${index + 1}: Requirements must be an array`);
      }
    });

    return errors;
  }

  async uploadJobs(file: File): Promise<BulkJobUploadResponse> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      
      reader.onload = async (e) => {
        try {
          const content = e.target?.result as string;
          const jobData = JSON.parse(content);
          
          // Validate job data
          const errors = await this.validateJobData(jobData);
          if (errors.length > 0) {
            resolve({ success: false, jobsCreated: 0, errors });
            return;
          }

          // Simulate API call to create jobs
          await new Promise(resolve => setTimeout(resolve, 2000));
          
          resolve({
            success: true,
            jobsCreated: jobData.jobs.length
          });
        } catch (error) {
          reject(new Error('Failed to process job data'));
        }
      };

      reader.onerror = () => {
        reject(new Error('Failed to read file'));
      };

      reader.readAsText(file);
    });
  }
}

export const bulkJobService = new BulkJobService();