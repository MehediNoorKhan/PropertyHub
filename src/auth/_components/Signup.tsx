
import { useEffect } from "react";
import signupimage from "../../images/signup.png";
import { SignupForm } from "./SignupForm.tsx";

export default function Signup() {
    useEffect(() => {
        document.title = "Sign up | GuestPro";
    }, []);

    return (
        <div className="flex min-h-screen flex-col md:flex-row">

            {/* Left Image (hidden on small screens) */}
            <div className="hidden md:block md:w-1/2 h-screen">
                <img
                    src={signupimage}
                    alt="signup"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Form Section */}
            <div className="w-full md:w-1/2 flex flex-col">
                <SignupForm />
            </div>
        </div>
    );
}
