import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import Login from './Components/Login';
import EmployerSignUp from './Components/EmployerSignup';
import JobSeekerSignup from './Components/JobSeekerSignup';
import About from './Components/About';
import PageTitle from './Components/PageTitle';
import AdminDashboard from './Components/AdminDashboard';
import DetailedAdminDashboard from './Components/DetailedAdminDashboard';
import LoadingPage from './Components/LoadingPage';
import PaymentForm from './Components/PaymentForm';
import ProfilePage from './Components/ProfilePage';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <Router>
      <div className="animate-fade-in">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <PageTitle title="Landing Page" />
                <LandingPage />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <PageTitle title="Login Page" />
                <Login />
              </>
            }
          />
          <Route
            path="/employer-signup"
            element={
              <>
                <PageTitle title="Employer Sign Up Page" />
                <EmployerSignUp />
              </>
            }
          />
          <Route
            path="/job-seeker-signup"
            element={
              <>
                <PageTitle title="Job Seeker Signup Page" />
                <JobSeekerSignup />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <PageTitle title="About Page" />
                <About />
              </>
            }
          />
          <Route
            path="/payment"
            element={
              <>
                <PageTitle title='Payment' />
                <PaymentForm />
              </>
            }
            />
            <Route
            path="/profile"
            element={
              <>
                <PageTitle title='Profile' />
                <ProfilePage />
              </>
            }
            />
          <Route
            path="/admin-dashboard"
            element={
              <>
                <PageTitle title="Admin Dashboard" />
                <AdminDashboard />
              </>
            }
          />
          <Route
            path="/admin-dashboard/:type"
            element={
              <>
                <PageTitle title="Detailed Admin Dashboard" />
                <DetailedAdminDashboard />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;