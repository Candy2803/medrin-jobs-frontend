import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import Login from './Components/Login';
import EmployerSignUp from './Components/EmployerSignup';
import JobSeekerSignup from './Components/JobSeekerSignup';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/employer" element={<div>Employer Page</div>} />
        <Route path="/job-seeker" element={<div>Job Seeker Page</div>} />
        <Route path="/login" element={<Login />} />
        <Route path="/employer-signup" element={<EmployerSignUp />} />
        <Route path="/job-seeker-signup" element={<JobSeekerSignup />} />
      </Routes>
    </Router>
  );
};

export default App;
