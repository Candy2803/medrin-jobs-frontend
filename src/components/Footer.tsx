import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp, Phone, MapPin, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-gray-900">Medrin Jobs</span>
            </Link>
            <div className="flex items-start space-x-2">
              <Phone className="h-5 w-5 text-gray-600 mt-1 flex-shrink-0" />
              <p className="text-gray-600">+254712345678</p>
            </div>
            <div className="flex items-start space-x-2">
              <MapPin className="h-5 w-5 text-gray-600 mt-1 flex-shrink-0" />
              <p className="text-gray-600">Ngong Lane Plaza, First Floor, Room 103, Ngong Road, Nairobi, Kenya</p>
            </div>
            <div className="flex items-start space-x-2">
              <Mail className="h-5 w-5 text-gray-600 mt-1 flex-shrink-0" />
              <p className="text-gray-600">support@medrinjobs.com</p>
            </div>
          </div>

          {/* For Candidates */}
          <div>
            <h3 className="text-lg font-semibold mb-4">For Candidates</h3>
            <ul className="space-y-2">
              <li><Link to="/jobs" className="text-gray-600 hover:text-blue-600">Browse Jobs</Link></li>
              <li><Link to="/jobs/categories" className="text-gray-600 hover:text-blue-600">Browse Categories</Link></li>
              <li><Link to="/candidate/dashboard" className="text-gray-600 hover:text-blue-600">Candidate Dashboard</Link></li>
              <li><Link to="/jobs/alerts" className="text-gray-600 hover:text-blue-600">Job Alerts</Link></li>
              <li><Link to="/candidate/bookmarks" className="text-gray-600 hover:text-blue-600">My Bookmarks</Link></li>
            </ul>
          </div>

          {/* For Employers */}
          <div>
            <h3 className="text-lg font-semibold mb-4">For Employers</h3>
            <ul className="space-y-2">
              <li><Link to="/employers" className="text-gray-600 hover:text-blue-600">Post a Job</Link></li>
              <li><Link to="/employers/dashboard" className="text-gray-600 hover:text-blue-600">Employer Dashboard</Link></li>
              <li><Link to="/employers/candidates" className="text-gray-600 hover:text-blue-600">Browse Candidates</Link></li>
              <li><Link to="/pricing" className="text-gray-600 hover:text-blue-600">Pricing Plans</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-gray-600 hover:text-blue-600">Blog</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-blue-600">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-blue-600">Contact Us</Link></li>
              <li><Link to="/privacy" className="text-gray-600 hover:text-blue-600">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-600 hover:text-blue-600">Terms of Service</Link></li>
              <li><Link to="/faq" className="text-gray-600 hover:text-blue-600">FAQ</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-center md:text-left mb-4 md:mb-0">© 2024 Medrin Jobs. All Rights Reserved.</p>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
              <Linkedin className="h-5 w-5" />
            </a>
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