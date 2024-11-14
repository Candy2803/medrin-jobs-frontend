import { useState } from 'react';
import { MapPin, Clock, DollarSign, Bookmark, Share2 } from 'lucide-react';
import { Job } from '../../types';
import JobDetails from './JobDetails';
import ApplicationForm from './ApplicationForm';

const jobs: Job[] = [
  {
    id: '1',
    title: 'Senior Full Stack Developer',
    company: 'Google LLC',
    location: 'New York, USA',
    type: 'Full Time',
    salary: '$120k - $150k',
    description: 'We are looking for an experienced full stack developer to join our team.',
    featured: true,
    logo: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
    postedAt: '2 days ago'
  },
  {
    id: '2',
    title: 'UX/UI Designer',
    company: 'Apple Inc.',
    location: 'San Francisco, USA',
    type: 'Full Time',
    salary: '$100k - $130k',
    description: 'Join our design team to create exceptional user experiences.',
    featured: true,
    logo: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
    postedAt: '3 days ago'
  },
  {
    id: '3',
    title: 'DevOps Engineer',
    company: 'Amazon',
    location: 'Seattle, USA',
    type: 'Full Time',
    salary: '$130k - $160k',
    description: 'Help us build and maintain our cloud infrastructure.',
    featured: false,
    logo: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
    postedAt: '1 week ago'
  },
  {
    id: '4',
    title: 'Product Manager',
    company: 'Microsoft',
    location: 'Remote',
    type: 'Full Time',
    salary: '$110k - $140k',
    description: 'Lead product development and strategy for our cloud services.',
    featured: false,
    logo: 'https://images.unsplash.com/photo-1617042375876-a13e36732a04?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
    postedAt: '5 days ago'
  },
  {
    id: '5',
    title: 'Frontend Developer',
    company: 'Meta',
    location: 'Remote',
    type: 'Contract',
    salary: '$90k - $120k',
    description: 'Create engaging user interfaces for our social media platforms.',
    featured: false,
    logo: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
    postedAt: '1 week ago'
  }
];

const JobList = () => {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [showApplication, setShowApplication] = useState(false);
  const [savedJobs, setSavedJobs] = useState<string[]>([]);

  const toggleSaveJob = (jobId: string) => {
    setSavedJobs(prev => 
      prev.includes(jobId) 
        ? prev.filter(id => id !== jobId)
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
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="space-y-6">
      {jobs.map((job) => (
        <div key={job.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src={job.logo} alt={job.company} className="w-12 h-12 rounded-full" />
              <div>
                <h3 
                  className="text-lg font-semibold text-blue-600 cursor-pointer hover:underline"
                  onClick={() => setSelectedJob(job)}
                >
                  {job.title}
                </h3>
                <p className="text-gray-600">{job.company}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => toggleSaveJob(job.id)}
                className={`p-2 ${savedJobs.includes(job.id) ? 'text-blue-600' : 'text-gray-400'} hover:text-blue-600`}
              >
                <Bookmark className="h-5 w-5" />
              </button>
              <button 
                onClick={() => handleShare(job)}
                className="p-2 text-gray-400 hover:text-blue-600"
              >
                <Share2 className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-4">
            <div className="flex items-center text-gray-600">
              <MapPin className="h-4 w-4 mr-2" />
              {job.location}
            </div>
            <div className="flex items-center text-gray-600">
              <Clock className="h-4 w-4 mr-2" />
              {job.type}
            </div>
            <div className="flex items-center text-gray-600">
              <DollarSign className="h-4 w-4 mr-2" />
              {job.salary}
            </div>
          </div>

          <div className="mt-4 flex justify-between items-center">
            <span className="text-sm text-gray-500">{job.postedAt}</span>
            <button 
              onClick={() => {
                setSelectedJob(job);
                setShowApplication(true);
              }}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
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