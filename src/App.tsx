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
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
