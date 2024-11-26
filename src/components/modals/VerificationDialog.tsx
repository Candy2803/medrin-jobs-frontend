import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useVerifyEmailMutation } from "@/state/api";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";

const VerificationDialog = ({
  email,
  onClose,
}: {
  email: string;
  onClose: () => void;
}) => {
  const [verificationCode, setVerificationCode] = useState("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const [verifyEmail, { isLoading }] = useVerifyEmailMutation();

  const handleVerify = async () => {
    setError(null);

    try {
      await verifyEmail({ email, code: verificationCode }).unwrap();
      navigate("/");
      toast.success("Verification was successful!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      onClose();
    } catch (err: any) {
      setError(err?.data?.message || "Verification failed");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md w-96">
        <h3 className="text-lg font-bold text-gray-900 mb-4">
          Verify Your Email
        </h3>
        <p className="text-gray-600 mb-2 text-center">
          Enter the verification code sent to <strong>{email}</strong>.
        </p>
        {error && <p className="text-red-600 text-sm mb-3">{error}</p>}
        <InputOTP
          onChange={(val) => setVerificationCode(val)}
          maxLength={6}
          pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
        >
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
        <div className="flex justify-end gap-3 mt-2">
          <Button onClick={onClose} variant="outline">
            Cancel
          </Button>
          <Button
            onClick={handleVerify}
            disabled={isLoading || !verificationCode}
            className="bg-blue-700 hover:bg-blue-800"
          >
            {isLoading ? "Verifying..." : "Verify"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VerificationDialog;
