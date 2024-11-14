import { useState } from 'react';
import { Link } from 'react-router-dom';
// import { Menu, X, Briefcase } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Briefcase className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Medrin Jobs</span>
            </Link>
            
            <div className="hidden md:ml-8 md:flex md:space-x-6">
              <Link to="/" className="text-gray-700 hover:text-blue-600 px-3 py-2">Home</Link>
              <Link to="/jobs" className="text-gray-700 hover:text-blue-600 px-3 py-2">Find a job</Link>
              <Link to="/employers" className="text-gray-700 hover:text-blue-600 px-3 py-2">Employers</Link>
              <Link to="/pricing" className="text-gray-700 hover:text-blue-600 px-3 py-2">Pricing</Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600 px-3 py-2">Contact</Link>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login" className="text-gray-700 hover:text-blue-600 px-4 py-2">
              Login / Register
            </Link>
            <Link
              to="/post-job"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Post a Job
            </Link>
          </div>

          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Home</Link>
            <Link to="/jobs" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Find a job</Link>
            <Link to="/employers" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Employers</Link>
            <Link to="/pricing" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Pricing</Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contact</Link>
            <Link to="/login" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Login / Register</Link>
            <Link
              to="/post-job"
              className="block px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Post a Job
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;