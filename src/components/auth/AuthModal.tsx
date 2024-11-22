import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Mail, Lock, User, Building, Briefcase } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';
import { useEmployerJourney } from '../../hooks/useEmployerJourney';
import { useNavigate } from 'react-router-dom';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialView?: 'login' | 'register' | 'user-type';
}

const AuthModal = ({ isOpen, onClose, initialView = 'login' }: AuthModalProps) => {
  const navigate = useNavigate();
  const [view, setView] = useState<'login' | 'register' | 'user-type'>(initialView);
  const [userType, setUserType] = useState<'jobseeker' | 'employer' | null>(null);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    company: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const { registerEmployer, loginEmployer, isLoading } = useEmployerJourney();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (view === 'register' && formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      if (view === 'login') {
        await loginEmployer(formData.email, formData.password);
      } else if (view === 'register' && userType === 'employer') {
        await registerEmployer({
          email: formData.email,
          password: formData.password,
          name: formData.name,
          company: formData.company
        });
      }
      onClose();
    } catch (err) {
      setError('Authentication failed. Please try again.');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white rounded-xl max-w-md w-full overflow-hidden"
          >
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-white">
                    {view === 'login' ? 'Welcome Back' : 
                     view === 'register' ? 'Create Account' : 
                     'Choose Account Type'}
                  </h2>
                  <button onClick={onClose} className="text-white hover:text-gray-200">
                    <X className="h-6 w-6" />
                  </button>
                </div>
                <p className="text-blue-100 mt-2">
                  {view === 'login' ? 'Sign in to access your account' :
                   view === 'register' ? 'Join our community today' :
                   'Select how you want to use Medrin Jobs'}
                </p>
              </div>

              <div className="p-6">
                {error && (
                  <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
                    {error}
                  </div>
                )}

                {view === 'user-type' ? (
                  <div className="space-y-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      onClick={() => {
                        setUserType('jobseeker');
                        setView('register');
                      }}
                      className="w-full flex items-center justify-between p-4 rounded-lg border-2 border-gray-200 hover:border-blue-500 group"
                    >
                      <div className="flex items-center">
                        <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-600">
                          <Briefcase className="h-6 w-6 text-blue-600 group-hover:text-white" />
                        </div>
                        <div className="ml-4 text-left">
                          <h3 className="font-semibold text-gray-900">I'm looking for work</h3>
                          <p className="text-sm text-gray-600">Find your dream job</p>
                        </div>
                      </div>
                      <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600" />
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      onClick={() => {
                        setUserType('employer');
                        setView('register');
                      }}
                      className="w-full flex items-center justify-between p-4 rounded-lg border-2 border-gray-200 hover:border-blue-500 group"
                    >
                      <div className="flex items-center">
                        <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-600">
                          <Building className="h-6 w-6 text-blue-600 group-hover:text-white" />
                        </div>
                        <div className="ml-4 text-left">
                          <h3 className="font-semibold text-gray-900">I'm hiring talent</h3>
                          <p className="text-sm text-gray-600">Post jobs and find candidates</p>
                        </div>
                      </div>
                      <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600" />
                    </motion.button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {view === 'register' && (
                      <>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name
                          </label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                              type="text"
                              required
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                              placeholder="John Doe"
                            />
                          </div>
                        </div>

                        {userType === 'employer' && (
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Company Name
                            </label>
                            <div className="relative">
                              <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                              <input
                                type="text"
                                required
                                value={formData.company}
                                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Company Name"
                              />
                            </div>
                          </div>
                        )}
                      </>
                    )}

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Password
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="password"
                          required
                          value={formData.password}
                          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                          className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="••••••••"
                        />
                      </div>
                    </div>

                    {view === 'register' && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Confirm Password
                        </label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                          <input
                            type="password"
                            required
                            value={formData.confirmPassword}
                            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="••••••••"
                          />
                        </div>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:bg-blue-300"
                    >
                      {isLoading ? 'Processing...' : view === 'login' ? 'Sign In' : 'Create Account'}
                    </button>
                  </form>
                )}

                {view !== 'user-type' && (
                  <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                      {view === 'login' ? (
                        <>
                          Don't have an account?{' '}
                          <button
                            onClick={() => setView('user-type')}
                            className="text-blue-600 hover:underline"
                          >
                            Sign up
                          </button>
                        </>
                      ) : (
                        <>
                          Already have an account?{' '}
                          <button
                            onClick={() => setView('login')}
                            className="text-blue-600 hover:underline"
                          >
                            Sign in
                          </button>
                        </>
                      )}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AuthModal;