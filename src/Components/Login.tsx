import React, { useState } from 'react';
import loginPageImage from '../assets/login-page-image.jpeg';
import medrinJobsLogo from '../assets/medrin-jobs-logo.jpeg';
const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [rememberMe, setRememberMe] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login Data:', formData, 'Remember Me:', rememberMe);
    // Add login logic here
  };

  return (
    <div className="flex flex-col justify-center items-center lg:flex-row h-screen bg-gray-100 p-12">
      {/* Left section with Login Form*/}
      <div className="lg:grid grid-cols-2  bg-white">
        <div className="flex flex-col justify-center items-end h-full">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-lg w-full max-w-md"
          >
            {/* Medrin Jobs Logo */}
            <div className="flex justify-between">
              <img
                src={medrinJobsLogo}
                alt="medrin-jobs-logo"
                className="w-40"
              />
              <div className="flex flex-col">
                <h2 className="text-2xl font-bold text-left mt-6 mb-6">
                  Welcome Back
                </h2>
                <p className="text-left text-sm text-gray-600 mb-6">
                  Please enter your details to log in
                </p>
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
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
                id="hs-toggle-password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center text-sm text-gray-600">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  className="mr-2"
                />
                Remember me
              </label>
              <a href="#" className="text-sm text-blue-500 hover:underline">
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Sign in
            </button>
            <div className="text-center text-sm text-gray-600 mt-4">
              Don't have an account?{' '}
              <a
                href="http://localhost:5173/job-seeker-signup"
                className="text-red-500 hover:underline"
              >
                Sign up
              </a>
            </div>
          </form>
        </div>

        {/* Right section with an image */}
        <div className="hidden lg:flex h-full border-l-2">
          {/* Login Page Image*/}
          <img
            src={loginPageImage}
            alt="login-page-image"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
