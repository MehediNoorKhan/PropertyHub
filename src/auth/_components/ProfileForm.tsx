import { FiEye, FiEyeOff } from "react-icons/fi";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FieldSeparator } from "@/components/ui/field";

const formSchema = z.object({
    username: z.string().min(2).max(50),
    password: z.string()
});

export function ProfileForm() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            password: ""
        }
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
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

                    {/* Fixed width form */}
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
                                            className="w-full rounded-2xl placeholder-[#858585] p-2 cursor-pointer"
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
                                                className="w-full rounded-2xl placeholder-[#858585] p-2 pr-12 cursor-pointer"
                                            />

                                            {/* Eye Icon */}
                                            <button
                                                type="button"
                                                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#858585] cursor-pointer"
                                                onClick={() => setShowPassword(prev => !prev)}
                                            >
                                                {showPassword ? (
                                                    <FiEyeOff size={16} />
                                                ) : (
                                                    <FiEye size={16} />
                                                )}
                                            </button>
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* FORGET PASSWORD */}
                        <div className="flex justify-end mt-3">
                            <button
                                type="button"
                                className="text-[#3D3D3D] text-[22px] cursor-pointer"
                            >
                                Forget Password?
                            </button>
                        </div>

                        {/* SUBMIT BUTTON */}
                        <Button
                            type="button"
                            className="mt-[40px] bg-[#7FA38B] cursor-pointer w-full rounded-2xl hover:bg-[#5d8d6d]"
                        >
                            Submit
                        </Button>
                    </div>
                </form>
            </Form>

            {/* SEPARATOR */}
            <div className="w-full flex justify-center mt-[24px]">
                <div className="w-full max-w-[360px]">
                    <FieldSeparator className="bg-white">
                        <span className="text-[#000000] font-semibold"> Or continue with</span>
                    </FieldSeparator>
                </div>
            </div>

            {/* GOOGLE LOGIN */}
            <div className="flex justify-center py-6">
                <FcGoogle className="w-10 h-10 cursor-pointer" />
            </div>

            {/* SIGN UP */}
            <div className="mt-auto mb-6 text-center">
                <p className="text-[24px] font-bold">
                    Don’t have an account?
                    <button
                        className="text-[#7FA38B] ml-1 cursor-pointer"
                        onClick={() => navigate("/signup")}
                    >
                        <span className="text-[24px] font-normal"> Sign Up</span>
                    </button>
                </p>
            </div>
        </div>
    );
}
