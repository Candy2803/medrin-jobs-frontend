/** @format */

import { useEffect, useState } from "react";
import { MapPin, Clock, DollarSign, Bookmark, Share2 } from "lucide-react";
import JobDetails from "./JobDetails";
import ApplicationForm from "./ApplicationForm";
import { toast } from "react-toastify";
import axios from "axios";
import { formatDistanceToNow } from "date-fns";

// Define the Job type
interface Job {
	id: string;
	title: string;
	company: string;
	location: string;
	employmentType: string;
	salaryRange: {
		min: number;
		max: number;
	};
	description: string;
	featured: boolean;
	logo: string;
	createdAt: string;
}

const JobList = () => {
	const [jobs, setJobs] = useState<Job[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);
	const [selectedJob, setSelectedJob] = useState<Job | null>(null);
	const [showApplication, setShowApplication] = useState(false);
	const [savedJobs, setSavedJobs] = useState<string[]>([]);

	// Fetch jobs from the backend API
	useEffect(() => {
		const fetchJobs = async () => {
			setLoading(true);
			try {
				const response = await axios.get(
					"https://medrin-jobs-backend-nn38.onrender.com/job"
				);
				console.log(response.data);

				const fetchedJobs = Array.isArray(response.data)
					? response.data
					: response.data.jobs;
				setJobs(fetchedJobs);
				setError(null);
			} catch (err) {
				console.error(err);
				setError("Failed to load jobs. Please try again later.");
			} finally {
				setLoading(false);
			}
		};

		fetchJobs();
	}, []);

	const toggleSaveJob = (jobId: string) => {
		setSavedJobs((prev) =>
			prev.includes(jobId)
				? prev.filter((id) => id !== jobId)
				: [...prev, jobId]
		);
	};

	const handleShare = async (job: Job) => {
		if (navigator.share) {
			try {
				await navigator.share({
					title: `${job.title} at ${job.company}`,
					text: `Check out this job opportunity: ${job.title} at ${job.company}`,
					url: window.location.href,
				});
			} catch (error) {
				console.log("Error sharing:", error);
			}
		} else {
			// Fallback: copy to clipboard
			navigator.clipboard.writeText(window.location.href);
			toast.success("Link copied to clipboard!", {
				position: "top-center",
				autoClose: 1500,
				hideProgressBar: true,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				theme: "light",
			});
		}
	};

	if (loading) {
		return <div className='text-center'>Loading jobs...</div>;
	}

	if (error) {
		return <div className='text-center text-red-600'>{error}</div>;
	}
	const formatSalary = (salary: number) => {
		return (salary / 1000).toFixed(0) + "k";
	};
	const formatDateDistance = (date: string) => {
		return formatDistanceToNow(new Date(date)).replace(/^about\s/, "");
	};

	return (
		<div className='space-y-6'>
			{jobs.map((job) => (
				<div
					key={job.id}
					className='bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow'>
					<div className='flex items-center justify-between'>
						<div className='flex items-center space-x-4'>
							<img
								src={job.logo}
								alt={job.company}
								className='w-12 h-12 rounded-full'
							/>
							<div>
								<h3
									className='text-lg font-semibold text-blue-600 cursor-pointer hover:underline'
									onClick={() => setSelectedJob(job)}>
									{job.title}
								</h3>
								<p className='text-gray-600'>{job.company}</p>
							</div>
						</div>
						<div className='flex items-center space-x-2'>
							<button
								onClick={() => toggleSaveJob(job.id)}
								className={`p-2 ${
									savedJobs.includes(job.id)
										? "text-blue-600"
										: "text-gray-400"
								} hover:text-blue-600`}>
								<Bookmark className='h-5 w-5' />
							</button>
							<button
								onClick={() => handleShare(job)}
								className='p-2 text-gray-400 hover:text-blue-600'>
								<Share2 className='h-5 w-5' />
							</button>
						</div>
					</div>

					<div className='mt-4 flex flex-wrap gap-4'>
						<div className='flex items-center text-gray-600'>
							<MapPin className='h-4 w-4 mr-2' />
							{job.location}
						</div>
						<div className='flex items-center text-gray-600'>
							<Clock className='h-4 w-4 mr-2' />
							{job.employmentType
								? job.employmentType.charAt(0).toUpperCase() +
								  job.employmentType.slice(1)
								: ""}
						</div>
						<div className='flex items-center text-gray-600'>
							<DollarSign className='h-4 w-4 mr-2' />
							{formatSalary(job.salaryRange.min)} -{" "}
							{formatSalary(job.salaryRange.max)}
						</div>
					</div>

					<div className='mt-4 flex justify-between items-center'>
						<span className='text-sm text-gray-500'>
							{formatDateDistance(job.createdAt)} ago
						</span>
						<button
							onClick={() => {
								setSelectedJob(job);
								setShowApplication(true);
							}}
							className='bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors'>
							Apply Now
						</button>
					</div>
				</div>
			))}

			{/* Job Details Modal */}
			{selectedJob && !showApplication && (
				<JobDetails
					job={selectedJob}
					onClose={() => setSelectedJob(null)}
					onApply={() => setShowApplication(true)}
				/>
			)}

			{/* Application Form Modal */}
			{showApplication && selectedJob && (
				<ApplicationForm
					//@ts-ignore
					job={selectedJob}
					onClose={() => {
						setShowApplication(false);
						setSelectedJob(null);
					}}
				/>
			)}
		</div>
	);
};

export default JobList;
