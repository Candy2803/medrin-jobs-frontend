// This is the sixth part of the code
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
      {/* This is the heading  */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          A Million Jobs. Find Yours.
        </h2>
        {/* This gives the user a small prompt info to use the app */}
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Join millions of people who have found their dream jobs using Medrin Jobs. Your next opportunity is waiting.
        </p>
        {/* This acts like a button that takes users to the signup/loginpage */}
        <Link 
          to="/jobs"
          className="bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-50 inline-block"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;