import React, { useState } from 'react';
import medrinJobsLogo from '../assets/medrin-jobs-logo.jpeg';
import employerSignupImage from '../assets/employer-signup-page-image.jpeg';
const EmployerSignup: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    address: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Add form submission logic here
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gray-100">
      {/* Left section */}
      <div className="lg:w-1/2 bg-blue-500 lg:flex flex-col justify-between items-start p-10 text-white hidden ">
        <div className="">
          <a href="http://localhost:5173/"><img
            src={medrinJobsLogo}
            alt="medrin-jobs-logo"
            className="w-40 rounded-lg"
          /></a>
          <div className="text-2xl font-bold mb-4 mt-4">
            Welcome to Medrin Jobs
          </div>
          <div className="text-sm">
            Create your account to start posting jobs and finding the right
            talent
          </div>
          <img
            src={employerSignupImage}
            className="mt-28 object-contain size-96 rounded-sm"
          />
        </div>
      </div>

      {/* Right section */}
      <div className="lg:w-1/2 flex flex-col justify-center items-center p-10 h-screen">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
        >
          <h2 className="text-2xl font-bold text-center mb-6">
            Create Employer Account
          </h2>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="name"
            >
              Company Name / Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your company or full name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email address"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="address"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your address"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Create Account
          </button>
          <div className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{' '}
            <a
              href="http://localhost:5173/login"
              className="text-blue-500 hover:underline"
            >
              Log in
            </a>
          </div>
          <div className="text-center text-sm text-gray-600 mt-2">-OR-</div>
          <div className="text-center text-sm text-gray-600 mt-2">
            Are you a job seeker?{' '}
            <a
              href="http://localhost:5173/job-seeker-signup"
              className="text-blue-500 hover:underline"
            >
              Sign up for job seeker
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployerSignup;
