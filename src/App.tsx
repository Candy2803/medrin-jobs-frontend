import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import Login from './Components/Login';
import EmployerSignUp from './Components/EmployerSignup';
import JobSeekerSignup from './Components/JobSeekerSignup';
import About from './Components/About';
import PageTitle from './Components/PageTitle';
import AdminDashboard from './Components/AdminDashboard';
import DetailedAdminDashboard from './Components/DetailedAdminDashboard';
import Blogs from '../src/Components/Blogs';
import BlogPage from './Components/BlogPage';
import BlogForm from './Components/BlogForm';
import EmployerHomepage from './Components/EmployerHomepage';
import JobPostingForm from './Components/JobPostingForm';
import AdminJobs from './pages/admin/AdminJobs';
import AdminDashboard2 from './pages/admin/AdminDashboard2';
import AdminUsers from './pages/admin/AdminUsers';
import AdminSettings from './pages/admin/AdminSettings';

const App: React.FC = () => {
  return (
    <Router>
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
              <PageTitle title="Employer SIgn Up Page" />
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
        <Route
          path="/admin"
          element={
            <>
              <PageTitle title="" />
              <AdminDashboard2 />
            </>
          }
        />
        <Route
          path="/admin/jobs"
          element={
            <>
              <PageTitle title="" />
              <AdminJobs />
            </>
          }
        />
        <Route
          path="/admin/users"
          element={
            <>
              <PageTitle title="" />
              <AdminUsers />
            </>
          }
        />
        <Route
          path="/admin/settings"
          element={
            <>
              <PageTitle title="" />
              <AdminSettings />
            </>
          }
        />
        <Route
          path="/blogs"
          element={
            <>
              <PageTitle title="Blogs Page" />
              <Blogs />
            </>
          }
        />
        <Route
          path="/blogs/:id"
          element={
            <>
              <PageTitle title="Blog Page" />
              <BlogPage />
            </>
          }
        />
        <Route
          path="/write-blog"
          element={
            <>
              <PageTitle title="Write Blog Form" />
              <BlogForm />
            </>
          }
        />
        <Route
          path="/employer-homepage"
          element={
            <>
              <PageTitle title="Home Page" />
              <EmployerHomepage />
            </>
          }
        />
        <Route
          path="/job-post-form"
          element={
            <>
              <PageTitle title="Post a Job" />
              <JobPostingForm />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
