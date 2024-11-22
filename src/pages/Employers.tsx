import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Building, Users, BarChart, Shield, ArrowRight, Package, Check, DollarSign, AlertCircle, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAuthStore } from '../store/authStore';
import { employerService } from '../services/mockEmployerService';

const Employers = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthStore();
  const employer = employerService.getCurrentUser();
  const [currentStep, setCurrentStep] = useState(1);

  const handlePostJob = () => {
    if (!isAuthenticated) {
      navigate('/register');
    } else {
      navigate('/employer/post-job');
    }
  };

  const steps = [
    {
      title: "Create Your Account",
      description: "Sign up in minutes and get 3 free job posts",
      icon: Building
    },
    {
      title: "Post Your Jobs",
      description: "Create detailed job listings with our easy-to-use interface",
      icon: Package
    },
    {
      title: "Review Applications",
      description: "Manage and screen candidates efficiently",
      icon: Users
    },
    {
      title: "Hire Great Talent",
      description: "Connect with the best candidates and make great hires",
      icon: Check
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold mb-6"
            >
              Find Your Next Great Hire
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
            >
              Post your jobs to millions of qualified candidates and get started with 3 free job posts
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              onClick={handlePostJob}
              className="bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-50"
            >
              Post a Job Now
            </motion.button>
          </div>
        </div>
      </div>

      {/* User Journey Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Your journey to finding great talent starts here</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* PAS Model Section */}
      {employer?.subscription?.plan === 'free' && (
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Pain */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="text-red-500 mb-4">
                  <AlertCircle className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Limited Reach</h3>
                <p className="text-gray-600">
                  With only 3 free job posts, you're missing out on connecting with thousands of qualified candidates. Don't let great talent slip away.
                </p>
              </motion.div>

              {/* Agitate */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="text-yellow-500 mb-4">
                  <Clock className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Time is Money</h3>
                <p className="text-gray-600">
                  Every day without the right talent costs your business. Competitors are actively hiring while you're limited by free postings.
                </p>
              </motion.div>

              {/* Solution */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="text-green-500 mb-4">
                  <DollarSign className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Unlock Full Potential</h3>
                <p className="text-gray-600 mb-4">
                  Upgrade to a paid plan and get unlimited job posts, bulk uploading, and premium features to streamline your hiring process.
                </p>
                <button
                  onClick={() => navigate('/pricing')}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors w-full"
                >
                  View Pricing Plans
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      )}

      {/* Features Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Medrin Jobs</h2>
            <p className="text-xl text-gray-600">Everything you need to find and hire great talent</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Candidates</h3>
              <p className="text-gray-600">Access a pool of pre-screened, qualified candidates</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <BarChart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Advanced Analytics</h3>
              <p className="text-gray-600">Track your job performance and hiring metrics</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Dedicated Support</h3>
              <p className="text-gray-600">Get help when you need it from our expert team</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employers;