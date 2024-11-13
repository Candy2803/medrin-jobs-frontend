// import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex space-x-2 mt-4">
      <div className="h-2 w-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
      <div className="h-2 w-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '200ms' }} />
      <div className="h-2 w-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '400ms' }} />
    </div>
  );
};

export default LoadingSpinner;