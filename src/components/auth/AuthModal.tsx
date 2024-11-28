// This is the tile that appears if one where to click the sign up/ login if they are a new user or appears when someone scrolls down to the footer
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { useLoginMutation, useRegisterMutation } from "../../state/api";
import { AuthState, setCredentials } from "@/state";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog"; // Update import path to match your project structure
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import VerificationDialog from "../modals/VerificationDialog";
import { Bounce, toast } from "react-toastify";

// Validation schemas
const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const registerSchema = z
  .object({
    email: z
      .string()
      .email("Invalid email address")
      .min(1, "Email is required"),
    password: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .min(1, "Password is required"),
    confirmPassword: z.string().min(1, "Confirm Password is required"),
    name: z
      .string()
      .min(2, "Name must be at least 2 characters")
      .min(1, "Name is required"),
    role: z.enum(["employer", "jobseeker"]),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.confirmPassword) {
      ctx.addIssue({
        code: "custom",
        message: "Passwords must match",
        path: ["confirmPassword"],
      });
    }
  });

type LoginFormValues = z.infer<typeof loginSchema>;
type RegisterFormValues = z.infer<typeof registerSchema>;
type AuthFormValues = LoginFormValues & Partial<RegisterFormValues>;

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialView: "login" | "register" | "user-type";
}

const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  initialView,
}) => {
  const [authMode, setAuthMode] = useState<"login" | "register">(
    initialView === "user-type" ? "login" : initialView
  );
  const [isVerificationDialogOpen, setIsVerificationDialogOpen] =
    useState(false);

  const [loginError, setLoginError] = useState<string | null>(null);
  const [registerErrorMessage, setRegisterErrorMessage] = useState<
    string | null
  >(null);
  const { user } = useSelector((state: { auth: AuthState }) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, { isLoading: isLoggingIn }] = useLoginMutation();
  const [register, { isLoading: isRegistering }] = useRegisterMutation();

  const {
    register: formRegister,
    handleSubmit,
    reset,
    setValue,
    watch,
    clearErrors,
    formState: { errors },
  } = useForm<AuthFormValues>({
    resolver: zodResolver(authMode === "login" ? loginSchema : registerSchema),
  });

  const handleLogin = async (data: LoginFormValues) => {
    try {
      const response = await login({
        email: data.email,
        password: data.password,
      }).unwrap();

      const { userData, accessToken } = response;

      dispatch(
        setCredentials({
          user: userData,
          accessToken,
          isAuthenticated: true,
        })
      );

      navigate(userData.role === "admin" ? "/admin" : "/dashboard");
      onClose();
      setLoginError(null); // Clear login error on success
    } catch (err) {
      if (isFetchBaseQueryError(err)) {
        const serverError = err.data as { error: string };
        setLoginError(serverError.error || "Login failed. Please try again.");
      } else {
        setLoginError("An unexpected error occurred. Please try again.");
      }
    }
  };

  const handleRegister = async (data: RegisterFormValues) => {
    try {
      const response = await register({
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
        name: data.name,
        role: data.role,
      }).unwrap();

      setRegisterErrorMessage(null); // Clear register error on success

      toast.success("Registration was successful!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });

      const { userData, accessToken } = response;

      dispatch(
        setCredentials({
          user: userData,
          accessToken,
          isAuthenticated: true,
        })
      );

      setIsVerificationDialogOpen(true);
      onClose();
    } catch (err) {
      if (isFetchBaseQueryError(err)) {
        const serverError = err.data as { error: string };
        setRegisterErrorMessage(
          serverError.error || "Registration failed. Please try again."
        );
      } else {
        setRegisterErrorMessage(
          "An unexpected error occurred. Please try again."
        );
      }
    }
  };

  function isFetchBaseQueryError(error: unknown): error is FetchBaseQueryError {
    return (
      typeof error === "object" &&
      error != null &&
      "status" in error &&
      "data" in error
    );
  }

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {authMode === "login" ? "Sign In" : "Register"}
            </DialogTitle>
          </DialogHeader>

          {loginError && authMode === "login" && (
            <p className="text-red-500">{loginError}</p>
          )}

          {registerErrorMessage && authMode === "register" && (
            <p className="text-red-500">{registerErrorMessage}</p>
          )}

          <form
            onSubmit={handleSubmit(
              authMode === "login" ? handleLogin : handleRegister
            )}
            className="space-y-4"
          >
            {authMode === "register" && (
              <div>
                <Select
                  onValueChange={(value) => {
                    setValue("role", value as "employer" | "jobseeker"); // Manually set the value in react-hook-form
                    clearErrors("role");
                  }}
                  value={watch("role") || ""}
                  {...formRegister("role")} // Use watch to get the current value of "role"
                >
                  <SelectTrigger className=" w-full">
                    <SelectValue placeholder="What do you want to do?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="employer">Hire Talent</SelectItem>
                    <SelectItem value="jobseeker">Find Work</SelectItem>
                  </SelectContent>
                </Select>
                {errors.role && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.role.message}
                  </p>
                )}
              </div>
            )}

            {authMode === "register" && (
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  {...formRegister("name")}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>
            )}

            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                {...formRegister("email")}
                placeholder="Your email"
              />
              {errors.email && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                {...formRegister("password")}
                placeholder="Your password"
              />
              {errors.password && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {authMode === "register" && (
              <div>
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  {...formRegister("confirmPassword")}
                  placeholder="Confirm your password"
                />
                {errors.confirmPassword && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
            )}

            <Button
              className="bg-blue-600 hover:bg-blue-700"
              type="submit"
              disabled={isLoggingIn || isRegistering}
            >
              {isLoggingIn || isRegistering
                ? "Processing..."
                : authMode === "login"
                ? "Sign In"
                : "Register"}
            </Button>
          </form>

          <DialogFooter>
            {authMode === "login" ? (
              <p>
                Don't have an account?{" "}
                <Button
                  variant="link"
                  onClick={() => {
                    setAuthMode("register");
                    reset();
                    setLoginError(null); // Clear login error
                  }}
                >
                  Register
                </Button>
              </p>
            ) : (
              <p>
                Already have an account?{" "}
                <Button
                  variant="link"
                  onClick={() => {
                    setAuthMode("login");
                    reset();
                    setRegisterErrorMessage(null); // Clear register error
                  }}
                >
                  Sign In
                </Button>
              </p>
            )}
          </DialogFooter>

          <DialogClose />
        </DialogContent>
      </Dialog>

      {isVerificationDialogOpen && (
        <VerificationDialog
          email={user!.email}
          onClose={() => {
            setIsVerificationDialogOpen(false);
            navigate("/login"); // Redirect to login after verification
          }}
        />
      )}
    </>
  );
};

export default AuthModal;
