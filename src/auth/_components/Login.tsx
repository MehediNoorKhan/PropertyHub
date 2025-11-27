
import { useEffect } from "react";
import loginimage from "../../images/login.png";
import { ProfileForm } from "./ProfileForm";

export default function Login() {

    useEffect(() => {
        document.title = "Login | GuestPro";
    }, []);

    return (
        <div className="flex min-h-screen flex-col md:flex-row">

            {/* Left Image (hidden on small screens) */}
            <div className="hidden md:block md:w-1/2 h-screen">
                <img
                    src={loginimage}
                    alt="a home"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Form Section */}
            <div className="w-full md:w-1/2 flex flex-col">
                <ProfileForm />
            </div>

        </div>
    );
}
