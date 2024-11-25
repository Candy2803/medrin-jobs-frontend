import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import JobDetailsForm from './forms/JobDetailsForm';
import ApplicationProcessForm from './forms/ApplicationProcessForm';
import ReviewSubmit from './forms/ReviewSubmit';
import WizardProgress from './WizardProgress';
import { JobPostingData } from '../../types/employer';
import Swal from 'sweetalert2';

const PostJobWizard = () => {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [jobData, setJobData] = useState<JobPostingData>({
    title: '',
    company: '',
    description: '',
    requirements: [],
    location: '',
    salaryRange: { min: '', max: '' },
    employmentType: '',
    applicationDeadline: '',
    applicationInstructions: '',
    requiredDocuments: [],
    status: 'draft',
    category: ''
  });

  const handleNext = () => {
    setStep(prev => Math.min(prev + 1, 3));
  };

  const handleBack = () => {
    setStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
		
		setIsLoading(true);
		try {
			
			const response = await fetch("/api/job/postJob", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
        },
        credentials: "include",
				body: JSON.stringify(jobData),
			});

			if (!response.ok) {
				const errorData = await response.json();
				throw new Error(errorData.error || "Failed to post job.");
			}

			const data = await response.json();

      if (response.status === 201) {
        Swal.fire({
          title: "Success!",
          text: data.message || "Your job has been posted successfully.",
          icon: "success",
          confirmButtonText: "Okay",
        });
      
      }

			// Reset wizard to initial state on success
			setStep(1);
			setJobData({
				title: "",
				company: "",
				description: "",
				requirements: [],
				location: "",
				salaryRange: { min: "", max: "" },
				employmentType: "",
				applicationDeadline: "",
				applicationInstructions: "",
				requiredDocuments: [],
				status: "draft",
				category: "",
			});
		} catch (error: any) {
			// Show error alert using SweetAlert2
			Swal.fire({
				title: "Error!",
				text:
					error.message || "An error occurred while posting the job.",
				icon: "error",
				confirmButtonText: "Retry",
			});
		} finally {
			// Reset loading state
			setIsLoading(false);
		}
  };

  const steps = [
    { number: 1, title: 'Job Details' },
    { number: 2, title: 'Application Process' },
    { number: 3, title: 'Review & Submit' }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <WizardProgress currentStep={step} steps={steps} />

      <div className="mt-8">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <JobDetailsForm
                data={jobData}
                onChange={setJobData}
                onNext={handleNext}
              />
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <ApplicationProcessForm
                data={jobData}
                onChange={setJobData}
                onBack={handleBack}
                onNext={handleNext}
              />
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <ReviewSubmit
                data={jobData}
                onBack={handleBack}
                onSubmit={handleSubmit}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PostJobWizard;