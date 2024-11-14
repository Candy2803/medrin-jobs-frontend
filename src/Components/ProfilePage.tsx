// import React from 'react';
import profile from './img/download (2).jpeg'

const ProfilePage = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Header */}
            <header className="bg-white shadow-md py-4 px-6">
                <div className="max-w-6xl mx-auto flex justify-between items-center">
                    <h1 className="text-lg font-bold">Medrin Jobs</h1>
                    <nav className="space-x-6">
                        <a href="#" className="text-gray-600 hover:text-black">Home</a>
                        <a href="http://localhost:5173/about" className="text-gray-600 hover:text-black">About</a>
                        <a href="http://localhost:5173/admin-dashboard" className="text-gray-600 hover:text-black">Admin</a>
                        <a href="http://localhost:5173/payment" className="text-gray-600 hover:text-black">Payment</a>
                        <a href="#" className="text-gray-600 hover:text-black">Blog</a>
                    </nav>
                    <div className="text-gray-600">
                        Welcome, <span className="font-semibold">User</span>
                    </div>
                </div>
            </header>

            {/* Profile Section */}
            <div className="bg-gradient-to-r from-blue-100 to-yellow-100 py-8 px-6">
                <div className="max-w-6xl mx-auto flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <img
                            src={profile}
                            alt="User Profile"
                            className="w-20 h-20 rounded-full object-cover shadow-md"
                        />
                        <div>
                            <h2 className="text-xl font-semibold">Alexa Rowles</h2>
                            <p className="text-gray-600">alexarowles@gmail.com</p>
                        </div>
                    </div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                        Edit
                    </button>
                </div>
            </div>

            {/* Form Section */}
            <div className="max-w-6xl mx-auto mt-8 bg-white shadow-md rounded-lg p-8">
                <form>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Full Name */}
                        <div>
                            <label className="block text-gray-600 mb-1">Full Name</label>
                            <input
                                type="text"
                                placeholder="Your First Name"
                                className="w-full border border-gray-300 rounded-lg p-3"
                            />
                        </div>

                        {/* Nick Name */}
                        <div>
                            <label className="block text-gray-600 mb-1">Nick Name</label>
                            <input
                                type="text"
                                placeholder="Your First Name"
                                className="w-full border border-gray-300 rounded-lg p-3"
                            />
                        </div>

                        {/* Gender */}
                        <div>
                            <label className="block text-gray-600 mb-1">Gender</label>
                            <select
                                className="w-full border border-gray-300 rounded-lg p-3"
                            >
                                <option value="">Your Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        {/* Country */}
                        <div>
                            <label className="block text-gray-600 mb-1">Country</label>
                            <select
                                className="w-full border border-gray-300 rounded-lg p-3"
                            >
                                <option value="">Country</option>
                                <option value="us">United States</option>
                                <option value="ke">Kenya</option>
                                <option value="ke">Tanzania</option>
                                <option value="ke">Uganda</option>
                                <option value="ke">Rwanda</option>
                                <option value="ke">United Kingdom</option>
                                <option value="ke">Congo</option>
                                {/* Add more countries */}
                            </select>
                        </div>

                        {/* Language */}
                        <div>
                            <label className="block text-gray-600 mb-1">Language</label>
                            <input
                                type="text"
                                placeholder="Your First Name"
                                className="w-full border border-gray-300 rounded-lg p-3"
                            />
                        </div>

                        {/* Time Zone */}
                        <div>
                            <label className="block text-gray-600 mb-1">Time Zone</label>
                            <input
                                type="text"
                                placeholder="Your First Name"
                                className="w-full border border-gray-300 rounded-lg p-3"
                            />
                        </div>
                    </div>

                    {/* Email Address */}
                    <div className="mt-6">
                        <h3 className="font-semibold text-lg mb-2">My Email Address</h3>
                        <div className="flex items-center space-x-4">
                            <input
                                type="radio"
                                name="email"
                                id="email1"
                                className="h-4 w-4"
                            />
                            <label htmlFor="email1" className="text-gray-600">
                                alexarowles@gmail.com
                            </label>
                        </div>
                    </div>

                    {/* Upload Resume */}
                    <div className="mt-6">
                        <h3 className="font-semibold text-lg mb-2">Upload your Resume</h3>
                        <label
                            className="border border-gray-300 rounded-lg w-full h-20 flex items-center justify-center text-gray-500 cursor-pointer"
                        >
                            <span className="flex items-center space-x-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 10h2m4 0h2m4 0h2m4 0h2m-7 4h-6m6 0v6m0-6h6m0-4a2 2 0 10-4 0h4z"
                                    />
                                </svg>
                                <span>Upload your Resume</span>
                            </span>
                            <input type="file" className="hidden" />
                        </label>
                    </div>

                    {/* Submit Button */}
                    <div className="mt-8 text-right">
                        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProfilePage;
