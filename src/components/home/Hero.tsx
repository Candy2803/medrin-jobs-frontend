import { Search, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { use } from 'framer-motion/client';
import { useEffect, useState } from 'react';
import Jobs from '../../pages/Jobs';


const Hero = () => {
 const [jobs, setJobs] = useState<any[]>([]);
 const [loading, setLoading] = useState(false);
 const [searchTerm, setSearchTerm] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [jobsAmount, setJobsAmount] = useState(0);


  useEffect(() => {
    setLoading(true);
    const fetchJobs = async () => {
      try {
        const response = await fetch("http://localhost:5000/job");
        const data = await response.json();
        setJobsAmount(data.length || []);
      } catch (error) {
        console.error("Error fetching jobs data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchJobs()
  }, []);
  const searchJobs = async (query: string, location: string) => {
		setLoading(true);
		try {
			const response = await fetch(
				`http://localhost:5000/job/search?query=${query}&location=${location}`
			);
			const data = await response.json();
			setJobs(data || []);
		} catch (error) {
			console.error("Error fetching jobs data:", error);
		} finally {
			setLoading(false);
		}
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		searchJobs(searchTerm, location);
  };
  return (
		<div className='bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 md:py-32'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='text-center mb-8 md:mb-12'>
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className='text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6'>
            There Are {jobsAmount } Postings Here For you!
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className='text-xl md:text-2xl text-blue-100'>
						Find Jobs, Employment & Career Opportunities
					</motion.p>
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}
					className='bg-white rounded-lg shadow-lg p-4 md:p-6 lg:p-8'>
					<form className='grid grid-cols-1 md:grid-cols-12 gap-4'>
						<div className='md:col-span-5 relative'>
							<Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
							<input
								type='text'
								placeholder='Job title, keywords, or company'
								className='w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900'
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
							/>
						</div>
						<div className='md:col-span-5 relative'>
							<MapPin className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
							<input
								type='text'
								placeholder='City or postcode'
								className='w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900'
								value={location}
								onChange={(e) => setLocation(e.target.value)}
							/>
						</div>
						<div className='md:col-span-2'>
							<button
								type='submit'
								onClick={(
									e: React.MouseEvent<HTMLButtonElement>
								) =>
									handleSubmit(
										e as unknown as React.FormEvent<HTMLFormElement>
									)
								}
								className='w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors text-lg font-semibold'>
								Find Jobs
							</button>
						</div>
					</form>

					{/* Loading Indicator */}
					{loading && (
						<p className='mt-6 text-center text-gray-600'>
							Loading...
						</p>
					)}

					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.6 }}
						className='mt-6 text-gray-600 text-sm md:text-base'>
						<span className='font-semibold'>Popular Searches:</span>
						<span className='ml-2'>
							Designer, Developer, Web, IOS, PHP, Senior, Engineer
						</span>
					</motion.div>
				</motion.div>

				<div className='mt-10'>
					{loading ? (
						<p>Loading...</p>
					) : jobs.length > 0 ? (
						<ul className='grid grid-rows-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
							{jobs.map((job) => (
								<li
									key={job.id}
									className='bg-white p-2 rounded shadow'>
									<h3 className='text-lg font-bold text-gray-900 '>
										{job.title}
									</h3>
									<p className='text-sm text-gray-600'>
										{job.location}
									</p>
								</li>
							))}
						</ul>
					) : (
						<p className='text-center text-white'></p>
					)}
				</div>
			</div>
		</div>
  );
};

export default Hero;