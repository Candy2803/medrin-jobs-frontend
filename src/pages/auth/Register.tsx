import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
} from "@/components/ui/form";
import { useState } from "react";
import VerificationDialog from "@/components/modals/VerificationDialog";
import { useDispatch, useSelector } from "react-redux";
import { AuthState, setCredentials } from "@/state";
import { useRegisterMutation } from "@/state/api";

// Zod schema for form validation
const formSchema = z
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
    company: z.string().optional(),
    role: z
      .enum(["employer", "jobseeker"])
      .refine((role) => role === "employer" || role === "jobseeker", {
        message: "Role is required",
      }),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.confirmPassword) {
      ctx.addIssue({
        code: "custom",
        message: "Passwords must match",
        path: ["confirmPassword"], // Points error to the confirmPassword field
      });
    }
  });

const Register = () => {
  const navigate = useNavigate();
  const [isDialogOpen, setIsDialogOpen] = useState(true);
  const { user } = useSelector((state: { auth: AuthState }) => state.auth);

  const [register, { isLoading }] = useRegisterMutation();
  const dispatch = useDispatch();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
      company: "",
      role: "",
    },
  });

  const {
    handleSubmit,
    formState: { errors },
  } = form;

  // const onSubmit = async (data: any) => {
  //   try {
  //     if (data.role === "employer") {
  //       navigate("/employer/dashboard");
  //     } else {
  //       navigate("/dashboard");
  //     }
  //   } catch (err) {
  //     console.error("Registration failed", err);
  //   }
  // };
  const onSubmit = async (data: any) => {
    try {
      /* const response =  */ await register(data).unwrap();

      // const { userData, accessToken } = response;
      //
      // dispatch(
      //   setCredentials({
      //     user: {
      //       id: userData.id,
      //       email: userData.email,
      //       name: userData.name,
      //       role: userData.role,
      //       image: userData.image,
      //       isVerified: userData.isVerified,
      //     },
      //     accessToken,
      //     isAuthenticated: true,
      //   }),
      // );
      setIsDialogOpen(true); // Open the verification dialog
    } catch (err) {
      console.error("Registration failed", err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sm:mx-auto sm:w-full sm:max-w-md"
      >
        <h2 className="text-center text-3xl font-bold text-gray-900">
          Create your account
        </h2>
        <p className="mt-2 text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:text-blue-500">
            Sign in
          </Link>
        </p>
      </motion.div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {Object.values(errors).length > 0 && (
                <div className="flex items-center">
                  <AlertCircle className="h-5 w-5 mr-2 text-red-600" />
                  <span className="text-red-600 text-sm">
                    You have an error/errors in the form
                  </span>
                </div>
              )}

              {/* Role Select */}
              <FormField
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>I want to:</FormLabel>
                    <Select onValueChange={field.onChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select one" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="employer">Hire Talent</SelectItem>
                        <SelectItem value="jobseeker">Job Seeker</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />

              {/* Full Name */}
              <FormField
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    {errors.name && (
                      <p className="text-red-600 text-xs">
                        {errors.name.message}
                      </p>
                    )}
                    <FormControl>
                      <Input {...field} placeholder="Your full name" />
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* Company Name */}
              <FormField
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Name</FormLabel>
                    {errors.company && (
                      <p className="text-red-600 text-xs">
                        {errors.company.message}
                      </p>
                    )}
                    <FormControl>
                      <Input {...field} placeholder="Your company name" />
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* Email Address */}
              <FormField
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    {errors.email && (
                      <p className="text-red-600 text-xs">
                        {errors.email.message}
                      </p>
                    )}
                    <FormControl>
                      <Input {...field} type="email" placeholder="Your email" />
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* Password */}
              <FormField
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    {errors.password && (
                      <p className="text-red-600 text-xs">
                        {errors.password.message}
                      </p>
                    )}
                    <FormControl>
                      <Input
                        {...field}
                        type="password"
                        placeholder="Your password"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* Confirm Password */}
              <FormField
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    {errors.confirmPassword && (
                      <p className="text-red-600 text-xs">
                        {errors.confirmPassword.message}
                      </p>
                    )}
                    <FormControl>
                      <Input
                        {...field}
                        type="password"
                        placeholder="Confirm password"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* Submit Button */}
              <Button
                type="submit"
                onClick={handleSubmit}
                disabled={isLoading}
                className="w-full bg-blue-700 hover:bg-blue-800"
              >
                {isLoading ? "Creating account..." : "Create account"}
              </Button>
            </form>
          </Form>
        </div>
      </div>

      {isDialogOpen && (
        <VerificationDialog
          email={user!.email}
          onClose={() => {
            setIsDialogOpen(false);
            navigate("/login"); // Redirect to login after verification
          }}
        />
      )}
    </div>
  );
};

export default Register;
