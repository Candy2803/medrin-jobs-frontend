import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLoginMutation } from "../../state/api";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../state";

import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();

  // Initialize react-hook-form
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormValues) => {
    try {
      const response = await login(data).unwrap();

      const { userData, accessToken } = response;
  localStorage.setItem("accessToken", accessToken);
      dispatch(
        setCredentials({
          user: {
            id: userData.id,
            email: userData.email,
            name: userData.name,
            role: userData.role.toLowerCase(),
            image: userData.image,
            isVerified: userData.isVerified,
          },
          accessToken,
          isAuthenticated: true,
        }),
      );

      const userRole = response?.userData?.role;

      switch (userRole) {
        case "admin":
          navigate("/admin");
          break;
        case "employer":
          navigate("/employer/dashboard");
          break;
        case "jobseeker":
        default:
          navigate("/dashboard");
          break;
      }
    } catch (err) {
      console.error("Login failed:", err);
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
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-gray-600">
          Or{" "}
          <Link to="/register" className="text-blue-600 hover:text-blue-500">
            create a new account
          </Link>
        </p>
      </motion.div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {/* Pass the useForm instance to Form */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormItem>
                <FormLabel>Email address</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    {...form.register("email")}
                  />
                </FormControl>
                <FormMessage>
                  {form.formState.errors.email?.message}
                </FormMessage>
              </FormItem>

              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    {...form.register("password")}
                  />
                </FormControl>
                <FormMessage>
                  {form.formState.errors.password?.message}
                </FormMessage>
              </FormItem>

              <div className="flex items-center justify-between">
                <Checkbox id="remember" />
                <Link
                  to="/forgot-password"
                  className="text-sm text-blue-600 hover:text-blue-500"
                >
                  Forgot your password?
                </Link>
              </div>

              <div>
                <Button
                  className="bg-blue-600 hover:bg-blue-700 w-full"
                  type="submit"
                >
                  {isLoading ? "Signing in..." : "Sign in"}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
