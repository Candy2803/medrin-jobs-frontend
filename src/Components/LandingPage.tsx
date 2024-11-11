import React from 'react';
import { Link } from 'react-router-dom'; 

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col justify-center h-screen bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
      <h1 className="text-4xl font-bold mb-8">Welcome to Medrin Jobs</h1>
      <p className="text-lg mb-10 text-center max-w-lg">
        Your platform for connecting employers with talented job seekers. Choose your path below to get started.
      </p>

      <div className="flex gap-10 ">
        <Link
          to="/employer"
          className="group w-48 h-48 flex flex-col items-center justify-center bg-white rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
        >
          <button className="text-gray-500 group-hover:text-indigo-500 transition-colors duration-300 mt-2 text-sm text-center px-4">
            Looking for Talent?
          </button>
        </Link>

        <Link
          to="/job-seeker"
          className="group w-48 h-48 flex flex-col items-center justify-center bg-white rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
        >
          <button className="text-gray-500 group-hover:text-indigo-500 transition-colors duration-300 mt-2 text-sm text-center px-4">
            Looking to find your dream job?
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
