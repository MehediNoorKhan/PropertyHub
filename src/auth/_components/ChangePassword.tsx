import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import toast from "react-hot-toast";

export default function ChnagePassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleSubmit = () => {
    if (!newPassword || !confirmPassword) {
      toast.error("All fields are required");
      return;
    }

    if (newPassword.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    toast.success("✅ Password changed successfully!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white mx-2">
      <div className="flex flex-col items-center text-center">

        {/* ✅ TITLE */}
        <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-semibold mb-8">
          Enter Password
        </h2>

        {/* ✅ INPUT GROUP (FIXED WIDTH) */}
        <div className="flex flex-col gap-5 mb-8">

          {/* ✅ NEW PASSWORD */}
          <div className="relative w-[320px]">
            <input
              type={showNew ? "text" : "password"}
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="
                w-full
                h-[56px]
                rounded-full
                bg-[#F6F6F6]
                px-5 pr-12
                text-[16px]
                outline-none
                placeholder:text-[#858585]
                focus:ring-2
                focus:ring-[#7FA38B]
              "
            />
            <button
              type="button"
              onClick={() => setShowNew(!showNew)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showNew ? (
                <AiOutlineEyeInvisible size={18} />
              ) : (
                <AiOutlineEye size={18} />
              )}
            </button>
          </div>

          {/* ✅ CONFIRM PASSWORD */}
          <div className="relative w-[320px]">
            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="
                w-full
                h-[56px]
                rounded-full
                bg-[#F6F6F6]
                px-5 pr-12
                text-[16px]
                outline-none
                placeholder:text-[#858585]
                focus:ring-2
                focus:ring-[#7FA38B]
              "
            />
            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showConfirm ? (
                <AiOutlineEyeInvisible size={18} />
              ) : (
                <AiOutlineEye size={18} />
              )}
            </button>
          </div>
        </div>

        {/* ✅ SUBMIT BUTTON (FIXED WIDTH) */}
        <Button
          onClick={handleSubmit}
          className="
            w-[320px]
            bg-[#7FA38B]
            hover:bg-[#6a9377]
            rounded-full
            py-5
            text-[16px]
            font-medium
          "
        >
          Submit
        </Button>
      </div>
    </div>
  );
}
