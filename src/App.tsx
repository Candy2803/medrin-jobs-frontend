import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import Login from './Components/Login';
import EmployerSignUp from './Components/EmployerSignup';
import JobSeekerSignup from './Components/JobSeekerSignup';
import About from './Components/About'

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/employer" element={<EmployerSignUp />} />
        <Route path="/job-seeker" element={<JobSeekerSignup />} />
        <Route path="/about" element={<About />} />
        <Route path="/medrin" element={<LandingPage />} />
      </Routes>
    </Router>
  );
};

export default App;
