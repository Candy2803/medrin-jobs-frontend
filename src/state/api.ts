import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define the response type
interface UserData {
  id: string;
  name: string;
  email: string;
  image: string | null;
  role: string;
  subscriptionPlan: string;
  jobPostQuota: number;
  subscriptionStartDate: string | null;
  subscriptionEndDate: string | null;
  stripeCustomerId: string | null;
  profile: string | null;
  lastLogin: string;
  isVerified: boolean;
  resetPasswordToken: string | null;
  resetPasswordExpiresAt: string | null;
  verificationToken: string | null;
  verificationTokenExpiresAt: string;
}

interface LoginResponse {
  userData: UserData;
  accessToken: string;
  refreshToken: string;
}

// request payload for registration
interface RegisterPayload {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
  role?: string;
}

// response type for registration
interface RegisterResponse {
  userData: UserData;
  accessToken: string;
  message: string;
}

// Payload for verification
interface VerifyEmailPayload {
  email: string;
  code: string;
}

// Response for verification
interface VerifyEmailResponse {
  message: string;
}

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_BASE_URL }),
  reducerPath: "api",
  tagTypes: [],
  endpoints: (build) => ({
    login: build.mutation<LoginResponse, { email: string; password: string }>({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
      }),
      transformResponse: (response: LoginResponse) => {
        if (response?.userData?.role) {
          response.userData.role = response.userData.role.toLowerCase();
        }
        return response;
      },
    }),
    register: build.mutation<RegisterResponse, RegisterPayload>({
      query: (registerData) => {
        const transformedData = {
          email: registerData.email.toLowerCase(), // Example transformation
          name: registerData.name.trim(),
          role: registerData.role?.toUpperCase(),
          password: registerData.password,
          confirmPassword: registerData.confirmPassword,
        };

        return {
          url: "/register",
          method: "POST",
          body: transformedData,
        };
      },
    }),
    verifyEmail: build.mutation<VerifyEmailResponse, VerifyEmailPayload>({
      query: (verificationData) => ({
        url: "/verify-email",
        method: "POST",
        body: verificationData,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useVerifyEmailMutation } =
  api;
