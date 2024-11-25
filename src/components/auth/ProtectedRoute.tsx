import { AuthState } from "@/state";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
  userType: "admin" | "employer" | "jobseeker";
}

const ProtectedRoute = ({ children, userType }: ProtectedRouteProps) => {
  const { isAuthenticated, user } = useSelector(
    (state: { auth: AuthState }) => state.auth,
  );
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (user?.role !== userType) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;

