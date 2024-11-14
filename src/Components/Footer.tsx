import { Link } from 'react-router-dom';
import { Briefcase, Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <Briefcase className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Medrin Jobs</span>
            </Link>
            <p className="text-gray-600">123 456 7890</p>
            <p className="text-gray-600">329 Queensberry Street, North Melbourne VIC 3051, Australia</p>
            <p className="text-gray-600">support@medrinjobs.com</p>
          </div>

          {/* For Candidates */}
          <div>
            <h3 className="text-lg font-semibold mb-4">For Candidates</h3>
            <ul className="space-y-2">
              <li><Link to="/browse-jobs" className="text-gray-600 hover:text-blue-600">Browse Jobs</Link></li>
              <li><Link to="/browse-categories" className="text-gray-600 hover:text-blue-600">Browse Categories</Link></li>
              <li><Link to="/candidate-dashboard" className="text-gray-600 hover:text-blue-600">Candidate Dashboard</Link></li>
              <li><Link to="/job-alerts" className="text-gray-600 hover:text-blue-600">Job Alerts</Link></li>
              <li><Link to="/bookmarks" className="text-gray-600 hover:text-blue-600">My Bookmarks</Link></li>
            </ul>
          </div>

          {/* For Employers */}
          <div>
            <h3 className="text-lg font-semibold mb-4">For Employers</h3>
            <ul className="space-y-2">
              <li><Link to="/browse-candidates" className="text-gray-600 hover:text-blue-600">Browse Candidates</Link></li>
              <li><Link to="/employer-dashboard" className="text-gray-600 hover:text-blue-600">Employer Dashboard</Link></li>
              <li><Link to="/add-job" className="text-gray-600 hover:text-blue-600">Add Job</Link></li>
              <li><Link to="/job-packages" className="text-gray-600 hover:text-blue-600">Job Packages</Link></li>
            </ul>
          </div>

          {/* Helpful Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Helpful Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/site-map" className="text-gray-600 hover:text-blue-600">Site Map</Link></li>
              <li><Link to="/terms" className="text-gray-600 hover:text-blue-600">Terms of Use</Link></li>
              <li><Link to="/privacy" className="text-gray-600 hover:text-blue-600">Privacy Center</Link></li>
              <li><Link to="/security" className="text-gray-600 hover:text-blue-600">Security Center</Link></li>
              <li><Link to="/accessibility" className="text-gray-600 hover:text-blue-600">Accessibility Center</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600">© 2024 Medrin Jobs. All Rights Reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-600 hover:text-blue-600"><Facebook className="h-5 w-5" /></a>
            <a href="#" className="text-gray-600 hover:text-blue-600"><Twitter className="h-5 w-5" /></a>
            <a href="#" className="text-gray-600 hover:text-blue-600"><Instagram className="h-5 w-5" /></a>
            <a href="#" className="text-gray-600 hover:text-blue-600"><Linkedin className="h-5 w-5" /></a>
          </div>
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-blue-600 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;