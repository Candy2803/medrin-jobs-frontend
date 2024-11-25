import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { employerService } from "../services/mockEmployerService";
import { useLoginMutation } from "../state/api";

export const useEmployerJourney = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const [login] = useLoginMutation();

  const registerEmployer = async (data: {
    email: string;
    name: string;
    company: string;
    password: string;
  }) => {
    setIsLoading(true);
    setError(null);
    try {
      const user = await employerService.register(data);
      login({
        email: user.email,
        password: user.password,
      });
      navigate("/employer/dashboard");
    } catch (err) {
      setError("Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const loginEmployer = async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const user = await employerService.login(email, password);
      login({
        id: user.id,
        email: user.email,
        name: user.name,
        type: "employer",
      });
      navigate("/employer/dashboard");
    } catch (err) {
      setError("Login failed. Please check your credentials.");
    } finally {
      setIsLoading(false);
    }
  };

  const postJob = async (jobData: any) => {
    setIsLoading(true);
    setError(null);
    try {
      const canPost = await employerService.useJobPost();
      if (!canPost) {
        navigate("/pricing");
        return false;
      }
      // Simulate job posting
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return true;
    } catch (err) {
      setError("Failed to post job. Please try again.");
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    registerEmployer,
    loginEmployer,
    postJob,
    isLoading,
    error,
  };
};

