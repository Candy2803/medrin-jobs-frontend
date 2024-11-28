/** @format */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import JobDetailsForm from "./forms/JobDetailsForm";
import ApplicationProcessForm from "./forms/ApplicationProcessForm";
import ReviewSubmit from "./forms/ReviewSubmit";
import WizardProgress from "./WizardProgress";
import { JobPostingData } from "../../types/employer";
import axios from "axios";
import { toast } from "react-toastify";

const PostJobWizard = () => {
	const [step, setStep] = useState(1);
	const [isLoading, setIsLoading] = useState(false);
	const [jobData, setJobData] = useState<JobPostingData>({
		title: "",
		description: "",
		company: "",
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

	const handleNext = () => {
		setStep((prev) => Math.min(prev + 1, 3));
	};

	const handleBack = () => {
		setStep((prev) => Math.max(prev - 1, 1));
	};

	const handleSubmit = async (data: JobPostingData) => {
		setIsLoading(true);
		try {
			const authData = JSON.parse(
				localStorage.getItem("persist:auth") || "{}"
			);
			const token = authData.auth
				? JSON.parse(authData.auth)?.token
				: null;

			if (!token) {
				throw new Error("Authentication token is missing.");
			}

			const response = await axios.post(
				"https://medrin-jobs-backend-nn38.onrender.com/job/postJob",
				jobData,
				{
					headers: {
						Authorization: `Bearer ${token}`,
						"Content-Type": "application/json",
					},
				}
			);

			if (!response.data) {
				const errorData = await response.data.json();
				throw new Error(errorData.error || "Failed to post job.");
			}

			const data = await response.data;
			console.log(data);
			if (response.status === 201) {
				toast.success("Job posted successfully!");
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
			if (error.response) {
				console.error("Error response:", error.response);
				toast.error(error.response.data.error || "Failed to post job.");
			} else if (error.request) {
				console.error("No response received:", error.request);
				toast.error("No response from server. Please try again.");
			} else {
				console.error("Error during job submission:", error.message);
				toast.error(error.message || "Something went wrong.");
			}
		} finally {
			setIsLoading(false);
		}
	};

	const steps = [
		{ number: 1, title: "Job Details" },
		{ number: 2, title: "Application Process" },
		{ number: 3, title: "Review & Submit" },
	];

	return (
		<div className='max-w-4xl mx-auto px-4 py-8'>
			<WizardProgress currentStep={step} steps={steps} />

			<div className='mt-8'>
				<AnimatePresence mode='wait'>
					{step === 1 && (
						<motion.div
							key='step1'
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -20 }}>
							<JobDetailsForm
								data={jobData}
								onChange={setJobData}
								onNext={handleNext}
							/>
						</motion.div>
					)}

					{step === 2 && (
						<motion.div
							key='step2'
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -20 }}>
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
							key='step3'
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -20 }}>
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
