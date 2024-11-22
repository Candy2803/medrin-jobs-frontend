import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';

interface ProtectedRouteProps {
  children: React.ReactNode;
  userType: 'admin' | 'employer' | 'jobseeker';
}

const ProtectedRoute = ({ children, userType }: ProtectedRouteProps) => {
  const { isAuthenticated, user } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (user?.type !== userType) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;