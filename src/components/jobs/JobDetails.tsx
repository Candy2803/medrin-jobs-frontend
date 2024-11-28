import { X, MapPin, Clock, DollarSign, Building, Calendar } from 'lucide-react';
//@ts-ignore
import { Job } from '../../types';

import { formatDistanceToNow } from "date-fns";
interface JobDetailsProps {
  job: Job;
  onClose: () => void;
  onApply: () => void;
}
    const formatSalary = (salary: number) => {
		return (salary / 1000).toFixed(0) + "k";
    };
  
  const formatDateDistance = (date: string) => {
		return formatDistanceToNow(new Date(date)).replace(/^about\s/, "");
  };
const JobDetails = ({ job, onClose, onApply }: JobDetailsProps) => {
  return (
		<div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
			<div className='bg-white rounded-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto'>
				<div className='sticky top-0 bg-white border-b p-4 flex justify-between items-center'>
					<h2 className='text-xl font-semibold'>Job Details</h2>
					<button
						onClick={onClose}
						className='text-gray-500 hover:text-gray-700'>
						<X className='h-6 w-6' />
					</button>
				</div>

				<div className='p-6'>
					{/* Header */}
					<div className='flex items-center space-x-4 mb-6'>
						<img
							src={job.logo}
							alt={job.company}
							className='w-16 h-16 rounded-lg'
						/>
						<div>
							<h1 className='text-2xl font-bold text-gray-900'>
								{job.title}
							</h1>
							<p className='text-gray-600'>{job.company}</p>
						</div>
					</div>

					{/* Job Info */}
					<div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-6'>
						<div className='flex items-center text-gray-600'>
							<MapPin className='h-5 w-5 mr-2' />
							<span>{job.location}</span>
						</div>
						<div className='flex items-center text-gray-600'>
							<Clock className='h-5 w-5 mr-2' />
							<span>
								{" "}
								{job.employmentType
									? job.employmentType
											.charAt(0)
											.toUpperCase() +
									  job.employmentType.slice(1)
									: ""}
							</span>
						</div>
						<div className='flex items-center text-gray-600'>
							<DollarSign className='h-5 w-5 mr-2' />
							<span>
								{" "}
								{formatSalary(job.salaryRange.min)} -{" "}
								{formatSalary(job.salaryRange.max)}
							</span>
						</div>
						<div className='flex items-center text-gray-600'>
							<Calendar className='h-5 w-5 mr-2' />
							<span>{formatDateDistance(job.createdAt)} ago</span>
						</div>
					</div>

					{/* Job Description */}
					<div className='prose max-w-none'>
						<h3 className='text-lg font-semibold mb-4'>
							Job Description
						</h3>
						<p className='text-gray-600 mb-6'>{job.description}</p>

						<h3 className='text-lg font-semibold mb-4'>
							Requirements
						</h3>
						<ul className='list-disc pl-5 mb-6 text-gray-600'>
							{job.requirements.map((req: any, index: any) => (
								<li key={index}>{req}</li>
							))}
						</ul>

						<h3 className='text-lg font-semibold mb-4'>Benefits</h3>
						<ul className='list-disc pl-5 mb-6 text-gray-600'>
							<li>Competitive salary and equity package</li>
							<li>Health, dental, and vision insurance</li>
							<li>Flexible working hours and remote options</li>
							<li>Professional development budget</li>
						</ul>
					</div>

					{/* Action Buttons */}
					<div className='mt-8 flex justify-end space-x-4'>
						<button
							onClick={onClose}
							className='px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50'>
							Cancel
						</button>
						<button
							onClick={onApply}
							className='px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700'>
							Apply Now
						</button>
					</div>
				</div>
			</div>
		</div>
  );
};

export default JobDetails;