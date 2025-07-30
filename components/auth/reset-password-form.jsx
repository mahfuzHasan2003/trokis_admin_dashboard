import { ArrowLeft } from "lucide-react";
import FormSubmitBtn from "./form-submit-btn";
import PasswordField from "./password-field";

export default function ResetPasswordForm({ handleSubmit, setStep }) {
  return (
    <form
      className="bg-white w-full max-w-md px-12 py-24 rounded-md shadow-md"
      onSubmit={handleSubmit}
    >
      <h2 className="flex gap-4 justify-center text-xl items-center">
        <ArrowLeft
          className="cursor-pointer hover:-translate-x-1 transition-transform"
          onClick={() => setStep(2)}
        />
        Reset Password
      </h2>
      <p className="text-center my-5">
        Your password must be 8-10 character long.
      </p>

      <div className="space-y-3">
        <PasswordField
          name="password"
          placeholder="Enter New Password"
          minLength={8}
          maxLength={10}
        />
        <PasswordField
          name="confirm-password"
          placeholder="Re-enter New Password"
          minLength={8}
          maxLength={10}
        />
      </div>
      <FormSubmitBtn btnText="Confirm" />
    </form>
  );
}
