// This is the third part of the code  
import { useNavigate } from 'react-router-dom';
import { MapPin, Clock, DollarSign } from 'lucide-react';
import { Job } from '../../types';

const featuredJobs: Job[] = [
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
    postedAt: '2 days ago',
    category: 'development'
  },
  {
    id: '2',
    title: 'Product Designer',
    company: 'Airbnb',
    location: 'San Francisco, USA',
    type: 'Full Time',
    salary: '$90k - $120k',
    description: 'Join our design team to create beautiful and intuitive user experiences.',
    featured: true,
    logo: 'https://images.unsplash.com/photo-1496200186974-4293800e2c20?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
    postedAt: '3 days ago',
    category: 'design'
  },
  {
    id: '3',
    title: 'Marketing Manager',
    company: 'Microsoft',
    location: 'Seattle, USA',
    type: 'Full Time',
    salary: '$85k - $110k',
    description: 'Lead our marketing initiatives and drive growth.',
    featured: true,
    logo: 'https://images.unsplash.com/photo-1617042375876-a13e36732a04?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
    postedAt: '1 week ago',
    category: 'marketing'
  }
];

const FeaturedJobs = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* This is the initial heading of the page */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Jobs</h2>
          <p className="text-gray-600">Know your worth and find the job that qualifies your life</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredJobs.map((job) => (
            <div key={job.id} className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                {/* This is the logo as well as the initial */}
                <div className="flex items-center mb-4">
                  <img src={job.logo} alt={job.company} className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                    <p className="text-gray-600">{job.company}</p>
                  </div>
                </div>
                {/* This is the short description of the job location , type,salary range */}
                <div className="space-y-2">
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
                {/* This is the div that contains the date of when the job was posted  as well as the button for applying*/}
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-sm text-gray-500">{job.postedAt}</span>
                  <button 
                    onClick={() => navigate(`/jobs/${job.id}`)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* This will take someone to jobs */}
        <div className="text-center mt-8">
          <button 
            onClick={() => navigate('/jobs')}
            className="bg-white text-blue-600 px-6 py-3 rounded-md border-2 border-blue-600 hover:bg-blue-50 transition-colors"
          >
            View All Jobs
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;