import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import JobDetailsForm from './forms/JobDetailsForm';
import ApplicationProcessForm from './forms/ApplicationProcessForm';
import ReviewSubmit from './forms/ReviewSubmit';
import WizardProgress from './WizardProgress';
import { JobPostingData } from '../../types/employer';

const PostJobWizard = () => {
  const [step, setStep] = useState(1);
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
    status: 'draft'
  });

  const handleNext = () => {
    setStep(prev => Math.min(prev + 1, 3));
  };

  const handleBack = () => {
    setStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    try {
      // API call to save job posting
      console.log('Submitting job posting:', jobData);
      // Redirect to success page or dashboard
    } catch (error) {
      console.error('Error submitting job posting:', error);
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