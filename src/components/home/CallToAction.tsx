import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          A Million Jobs. Find Yours.
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Join millions of people who have found their dream jobs using Medrin Jobs. Your next opportunity is waiting.
        </p>
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