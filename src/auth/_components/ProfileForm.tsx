import { FiEye, FiEyeOff } from "react-icons/fi";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FieldSeparator } from "@/components/ui/field";

import { useLoginMutation } from "@/store/api/auth.api";
import { loginSuccess } from "@/store/slices/auth.slices";
import toast from "react-hot-toast";        // ✅ ADD THIS

const formSchema = z.object({
  username: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export function ProfileForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const [login, { isLoading, error }] = useLoginMutation();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      // 🔥 Make API call using RTK Query
      const response = await login({
        email: values.username,
        password: values.password,
      }).unwrap();

      // 🔥 Save auth data to Redux
      dispatch(loginSuccess(response));

      // 🎉 SUCCESS TOAST
      toast.success("🎉 You've successfully logged in!");

      // 🔥 Redirect to home page
      navigate("/");
    } catch (err) {
      console.error("Login failed:", err);
      toast.error("Invalid email or password!");
    }
  }

  return (
    <div className="relative flex flex-col min-h-screen px-6">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col items-center text-center mt-[120px]"
        >
          <h2 className="text-[52px] font-bold">Log In</h2>
          <p className="text-[22px] font-medium mt-1 mb-6">
            Welcome back! Please enter your details.
          </p>

          <div className="w-full max-w-[360px]">
            {/* EMAIL */}
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="space-y-4">
                  <FormControl>
                    <Input
                      placeholder="Email"
                      {...field}
                      className="w-full rounded-2xl placeholder-[#858585] p-2"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* PASSWORD */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="space-y-4 mt-4">
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        {...field}
                        className="w-full rounded-2xl placeholder-[#858585] p-2 pr-12"
                      />
                      <button
                        type="button"
                        className="absolute right-4 top-1/2 -translate-y-1/2"
                        onClick={() => setShowPassword((prev) => !prev)}
                      >
                        {showPassword ? <FiEyeOff size={16} /> : <FiEye size={16} />}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* API ERROR */}
            {error && (
              <p className="text-red-500 text-sm mt-2">
                Login failed. Please check your credentials.
              </p>
            )}

            {/* SUBMIT BUTTON */}
            <Button
              type="submit"
              disabled={isLoading}
              className="mt-[40px] bg-[#7FA38B] w-full rounded-2xl"
            >
              {isLoading ? "Logging in..." : "Submit"}
            </Button>
          </div>
        </form>
      </Form>

      <div className="w-full flex justify-center mt-[24px]">
        <div className="w-full max-w-[360px]">
          <FieldSeparator>
            <span className="text-[#000000] font-semibold">
              Or continue with
            </span>
          </FieldSeparator>
        </div>
      </div>

      <div className="flex justify-center py-6">
        <FcGoogle className="w-10 h-10 cursor-pointer" />
      </div>

      <div className="mt-auto mb-6 text-center">
        <p className="text-[24px] font-bold">
          Don’t have an account?
          <button
            className="text-[#7FA38B] ml-1"
            onClick={() => navigate("/signup")}
          >
            <span className="text-[24px] font-normal"> Sign Up</span>
          </button>
        </p>
      </div>
    </div>
  );
}
