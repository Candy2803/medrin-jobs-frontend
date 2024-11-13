import React from 'react';
import LoadingSpinner from './LoadingSpinner';
import Logo from './img/medrin.jpeg'
interface LoadingPageProps {
  logo: string;
}

const LoadingPage: React.FC<LoadingPageProps> = ({ logo = Logo }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="relative group">
        {/* Glowing background effect */}
        <div className="absolute inset-0 bg-blue-500/20 rounded-full animate-pulse" />
        
        {/* Logo container */}
        <div className="relative transform transition-transform duration-1000 animate-pulse">
          <img 
            src={logo} 
            alt="Logo" 
            className="relative w-96 h-96 object-contain rounded-full"
          />
        </div>
      </div>

      {/* Loading spinner */}
      <LoadingSpinner />

      {/* Loading text */}
      <p className="mt-4 text-gray-600 text-2xl font-medium animate-pulse">
        Loading Please wait!
      </p>
    </div>
  );
};

export default LoadingPage;