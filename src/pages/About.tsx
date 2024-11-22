import { motion } from 'framer-motion';
import { Users, Globe, Award, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-blue-600 text-white py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            About Medrin Jobs
          </motion.h1>
          <motion.p 
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto"
          >
            Connecting talent with opportunity across Kenya and beyond
          </motion.p>
        </div>
      </motion.div>

      {/* Mission Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              To revolutionize the job search experience in Kenya by creating meaningful connections between employers and job seekers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <motion.div 
              whileHover={{ y: -10 }}
              className="text-center"
            >
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community First</h3>
              <p className="text-gray-600">Building strong relationships within the Kenyan job market</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="text-center"
            >
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
              <p className="text-gray-600">Connecting local talent with international opportunities</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="text-center"
            >
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">Maintaining high standards in recruitment services</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="text-center"
            >
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Passion</h3>
              <p className="text-gray-600">Dedicated to helping people find their dream careers</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2024, Medrin Jobs emerged from a vision to transform the job search experience in Kenya. We recognized the need for a modern, efficient platform that could bridge the gap between talented professionals and growing businesses.
              </p>
              <p className="text-gray-600">
                Today, we're proud to be one of Kenya's fastest-growing job platforms, serving thousands of companies and job seekers. Our commitment to innovation and excellence continues to drive our mission forward.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Team collaboration" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
            <p className="text-gray-600">Meet the people driving our mission forward</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'John Doe',
                role: 'CEO & Founder',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80'
              },
              {
                name: 'Jane Smith',
                role: 'Head of Operations',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80'
              },
              {
                name: 'Mike Johnson',
                role: 'Technical Director',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80'
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;