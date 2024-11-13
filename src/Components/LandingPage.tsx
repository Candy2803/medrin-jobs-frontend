import React from 'react';
import { Link } from 'react-router-dom'; 
import logo from './img/medrin.jpeg'

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col justify-center text-center h-screen w-screen bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
      <img src={ logo } alt="Logo" className='rounded-full h-96 w-96 -mt-20 mb-12 self-center'/>
      <h1 className="text-4xl font-bold mb-12">Welcome to Medrin Jobs</h1>
      <p className="text-xl mb-12 text-center">
        Your platform for connecting employers with talented job seekers. Choose your path below to get started.
      </p>

      <div className="flex gap-10 self-center ">
        <Link
          to="/employer"
          className="group w-96 h-20 flex flex-col items-center justify-center rounded-lg transform transition duration-300 hover:scale-105"
        >
          <button className="text-black h-11 bg-white rounded-xl group-hover:text-indigo-500 transition-colors duration-300 mt-2 text-lg text-center px-4">
            <a href="http://localhost:5173/employer">Looking for Talent?</a>
          </button>
        </Link>

        <Link
          to="/job-seeker"
          className="group w-96 h-20 flex flex-col items-center justify-center rounded-lg transform transition duration-300 hover:scale-105"
        >
          <button className="text-black h-11 rounded-xl bg-white group-hover:text-indigo-500 transition-colors duration-300 mt-2 text-lg text-center px-4">
            <a href="http://localhost:5173/job-seeker-signup">Looking for a job?</a> 
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;