// import { useRef, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";

// export default function Verification() {
//   const [code, setCode] = useState(["", "", "", "", ""]);
//   const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
//   const navigate = useNavigate();

//   const handleChange = (index: number, value: string) => {
//     if (!/^[0-9]?$/.test(value)) return;

//     const newCode = [...code];
//     newCode[index] = value;
//     setCode(newCode);

//     if (value && index < 4) {
//       inputsRef.current[index + 1]?.focus();
//     }
//   };

//   const handleKeyDown = (
//     index: number,
//     e: React.KeyboardEvent<HTMLInputElement>
//   ) => {
//     if (e.key === "Backspace" && !code[index] && index > 0) {
//       inputsRef.current[index - 1]?.focus();
//     }
//   };

//   const handleSubmit = () => {
//     const finalCode = code.join("");

//     if (finalCode.length !== 5) {
//       toast.error("Please enter the full verification code");
//       return;
//     }

//     toast.success("✅ Verification successful!");
//     navigate("/changepassword");
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-white px-4 sm:px-6">
//       <div className="flex flex-col items-center text-center w-full max-w-[420px]">

//         {/* ✅ RESPONSIVE TITLE */}
//         <h2 className="text-[22px] sm:text-[26px] md:text-[30px] xl:text-[32px] font-semibold mb-6 sm:mb-8">
//           Verification Code
//         </h2>

//         {/* ✅ RESPONSIVE CODE INPUTS */}
//         <div className="flex gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-10">
//           {code.map((digit, index) => (
//             <input
//               key={index}
//               ref={(el) => {
//                 inputsRef.current[index] = el;
//               }}
//               type="text"
//               maxLength={1}
//               value={digit}
//               placeholder={index === 0 ? "6" : "-"}
//               onChange={(e) => handleChange(index, e.target.value)}
//               onKeyDown={(e) => handleKeyDown(index, e)}
//               className="
//                 w-[44px] h-[44px]
//                 sm:w-[50px] sm:h-[50px]
//                 md:w-[60px] md:h-[60px]
//                 xl:w-[88px] xl:h-[70px]
//                 rounded-full
//                 xl:rounded-[40px]
//                 bg-[#F6F6F6]
//                 text-center
//                 text-[16px] sm:text-[18px] md:text-[20px]
//                 font-medium
//                 outline-none
//                 focus:ring-2
//                 focus:ring-[#7FA38B]
//                 transition
//                 placeholder:text-[#858585]
//               "
//             />
//           ))}
//         </div>

//         {/* ✅ RESPONSIVE VERIFY BUTTON */}
//         <Button
//           onClick={handleSubmit}
//           className="
//             w-full
//             max-w-[280px] sm:max-w-[320px]
//             bg-[#7FA38B]
//             hover:bg-[#6a9377]
//             rounded-full
//             py-4 sm:py-5
//             text-[14px] sm:text-[16px]
//             font-medium
//           "
//         >
//           Verify
//         </Button>
//       </div>
//     </div>
//   );
// }



import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { useVerifyOtpPasswordMutation } from "@/store/api/auth.api";

export default function Verification() {
  const [code, setCode] = useState(["", "", "", ""]); // ✅ 4 DIGITS
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
  const navigate = useNavigate();

  const [verifyOtp, { isLoading }] = useVerifyOtpPasswordMutation();

  const handleChange = (index: number, value: string) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < 3) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleSubmit = async () => {
    const finalCode = code.join("");

    if (finalCode.length !== 4) {
      toast.error("Please enter the full 4-digit OTP");
      return;
    }

    const email = localStorage.getItem("reset_email");

    if (!email) {
      toast.error("Session expired. Please try again.");
      navigate("/enteremail");
      return;
    }

    try {
      const res = await verifyOtp({
        email,
        otp: finalCode,
      }).unwrap();

      toast.success(res.message || "✅ OTP verified!");
      navigate("/changepassword");
    } catch (error: any) {
      toast.error(
        error?.data?.message || "❌ Give the correct OTP"
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 sm:px-6">
      <div className="flex flex-col items-center text-center w-full max-w-[420px]">

        <h2 className="text-[22px] sm:text-[26px] md:text-[30px] xl:text-[32px] font-semibold mb-6 sm:mb-8">
          Verification Code
        </h2>

        {/* ✅ 4 DIGIT INPUT */}
        <div className="flex gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-10">
          {code.map((digit, index) => (
            <input
              key={index}
              ref={(el) => {
                inputsRef.current[index] = el;
              }}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="
                w-[44px] h-[44px]
                sm:w-[50px] sm:h-[50px]
                md:w-[60px] md:h-[60px]
                xl:w-[88px] xl:h-[70px]
                rounded-full
                xl:rounded-[40px]
                bg-[#F6F6F6]
                text-center
                text-[16px] sm:text-[18px] md:text-[20px]
                font-medium
                outline-none
                focus:ring-2
                focus:ring-[#7FA38B]
              "
            />
          ))}
        </div>

        <Button
          onClick={handleSubmit}
          disabled={isLoading}
          className="
            w-full
            max-w-[280px] sm:max-w-[320px]
            bg-[#7FA38B]
            hover:bg-[#6a9377]
            rounded-full
            py-4 sm:py-5
            text-[14px] sm:text-[16px]
            font-medium
          "
        >
          {isLoading ? "Verifying..." : "Verify"}
        </Button>
      </div>
    </div>
  );
}
