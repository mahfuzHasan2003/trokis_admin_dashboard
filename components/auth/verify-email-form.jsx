import { ArrowLeft } from "lucide-react";
import FormSubmitBtn from "./form-submit-btn";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";

export default function VerifyEmailForm({ handleSubmit, setStep }) {
  return (
    <form
      className="bg-white w-full max-w-md px-12 py-24 rounded-md shadow-md"
      onSubmit={handleSubmit}
    >
      <h2 className="flex gap-4 justify-center text-xl items-center">
        <ArrowLeft
          className="cursor-pointer hover:-translate-x-1 transition-transform"
          onClick={() => setStep(1)}
        />
        Verify Email
      </h2>
      <p className="text-center my-5">
        Please enter the otp we have sent you in your email.
      </p>

      <InputOTP maxLength={6} name="otp">
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      <FormSubmitBtn btnText="Verify" />
    </form>
  );
}
