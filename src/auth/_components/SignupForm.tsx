import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { useRegisterMutation } from "@/store/api/auth.api";

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

/* -------------------- ✅ ZOD SCHEMA -------------------- */

const signupSchema = z
  .object({
    username: z
      .string()
      .min(1)
      .refine((val) => val.trim().length > 0, {
        message: "Name is required",
      }),

    email: z
      .string()
      .refine((val) => val.includes("@"), {
        message: "Invalid email",
      }),

    password: z
      .string()
      .min(6),

    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

/* -------------------- ✅ COMPONENT -------------------- */

export function SignupForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [registerUser, { isLoading }] = useRegisterMutation();

const form = useForm<z.infer<typeof signupSchema>>({
  resolver: zodResolver(signupSchema),
  defaultValues: {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  },
});


  /* -------------------- ✅ SUBMIT HANDLER -------------------- */

async function onSubmit(values: z.infer<typeof signupSchema>) {
  try {
    const payload = {
      name: values.username,
      email: values.email,
      password: values.password,
      confirmed_password: values.confirmPassword, // ✅ THIS IS THE FIX
    };

    await registerUser(payload).unwrap();

    toast.success("✅ You have successfully signed up!");
    form.reset();
  } catch (err: any) {
    console.error("Register Error:", err);

    toast.error(
      err?.data?.message?.password?.[0] ||
      "❌ Registration failed!"
    );
  }
}



  /* -------------------- ✅ JSX -------------------- */

  return (
    <div className="relative flex flex-col min-h-screen px-6">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col items-center text-center mt-[120px]"
        >
          <h2 className="text-[52px] font-bold">Sign Up</h2>
          <p className="text-[22px] font-medium mt-1 mb-6">
            Continue as a <span className="font-bold">Customer</span>
          </p>

          <div className="w-full max-w-[360px] space-y-5">

            {/* ✅ NAME */}
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Name"
                      {...field}
                      className="w-full rounded-2xl placeholder-[#858585] p-2"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* ✅ EMAIL */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                     type="email"
                      placeholder="Email"
                      {...field}
                      className="w-full rounded-2xl placeholder-[#858585] p-2"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* ✅ PASSWORD */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        {...field}
                        className="w-full rounded-2xl placeholder-[#858585] p-2 pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-xl text-[#858585]"
                      >
                        {showPassword ? (
                          <AiOutlineEyeInvisible />
                        ) : (
                          <AiOutlineEye />
                        )}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* ✅ CONFIRM PASSWORD */}
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm Password"
                        {...field}
                        className="w-full rounded-2xl placeholder-[#858585] p-2 pr-10"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-xl text-[#858585]"
                      >
                        {showConfirmPassword ? (
                          <AiOutlineEyeInvisible />
                        ) : (
                          <AiOutlineEye />
                        )}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* ✅ TERMS */}
            <div className="flex items-center gap-2 pt-1">
              <input type="checkbox" className="cursor-pointer" />
              <span className="text-[18px] text-[#3D3D3D] opacity-40">
                I agree to the Terms & Conditions
              </span>
            </div>

            {/* ✅ SUBMIT BUTTON */}
            <Button
              type="submit"
              disabled={isLoading}
              className="mt-[20px] bg-[#7FA38B] w-full rounded-2xl"
            >
              {isLoading ? "Signing Up..." : "Sign Up"}
            </Button>
          </div>
        </form>
      </Form>

      {/* ✅ DIVIDER */}
      {/* <div className="w-full flex justify-center mt-[24px]">
        <div className="w-full max-w-[360px]">
          <FieldSeparator className="bg-white">
            <span className="text-[#000000] font-semibold">
              Or continue with
            </span>
          </FieldSeparator>
        </div>
      </div> */}

      {/* ✅ GOOGLE */}
      {/* <div className="flex justify-center py-6">
        <FcGoogle className="w-10 h-10 cursor-pointer" />
      </div> */}

      {/* ✅ BOTTOM LINK */}
      <div className="mt-auto mb-[40px] text-center">
        <p className="text-[24px] font-light">
          Already have an account?
          <button
            className="text-[#7FA38B] ml-1 cursor-pointer"
            onClick={() => navigate("/login")}
          >
            <span className="text-[24px] font-semibold"> Sign In</span>
          </button>
        </p>
      </div>
    </div>
  );
}
