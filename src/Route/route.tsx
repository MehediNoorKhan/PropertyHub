import AboutUs from "@/auth/_components/AboutUs";
import AllProperties from "@/auth/_components/AllProperties";
import ChnagePassword from "@/auth/_components/ChangePassword";
import Contact from "@/auth/_components/Contact";
import EnterEmail from "@/auth/_components/EnterEmail";
import Home from "@/auth/_components/Home";
import Login from "@/auth/_components/Login";
import MakePayment from "@/auth/_components/MakePayment";
import PaymentConfirm from "@/auth/_components/PaymentConfirm";
import PropertyDetails from "@/auth/_components/PropertyDetails";
import PropertyImages from "@/auth/_components/PropertyImages";
import { Review } from "@/auth/_components/Review";
import RootLayout from "@/auth/_components/RootLayout";
import Signup from "@/auth/_components/Signup";
import Verification from "@/auth/_components/Verification";
import { createBrowserRouter } from "react-router";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                path: "/",
                element: <Home></Home>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "signup",
                element: <Signup></Signup>
            },
            {
                path: "property/:id",
                element: <PropertyDetails />
            },
            {
                path: "allproperties",
                element: <AllProperties />
            },
            {
                path: "make-payment/:id",
                element: <MakePayment />
            },
            {
                path: "about",
                element: <AboutUs />
            },
            {
                path: "contact",
                element: <Contact />
            },
            {
                path: "enteremail",
                element: <EnterEmail/>
            },
            {
                path: "verification",
                element: <Verification></Verification>
            },
            {
                path: "changepassword",
                element: <ChnagePassword></ChnagePassword>
            },
            {
                path:"/property-images/:id",
                element:<PropertyImages></PropertyImages>
            },
            {
                path:"/paymentconfirm/:id",
                element:<PaymentConfirm></PaymentConfirm>
            },
            {
                path:"/review",
                element: <Review></Review>
            }

        ]
    },

]);