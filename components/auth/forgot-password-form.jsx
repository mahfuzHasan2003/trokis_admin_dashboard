import { ArrowLeft } from "lucide-react";
import EmailField from "./email-field";
import FormSubmitBtn from "./form-submit-btn";
import Link from "next/link";

export default function ForgotPasswordForm({ handleSubmit }) {
  return (
    <form
      className="bg-white w-full max-w-md px-12 py-24 rounded-md shadow-md"
      onSubmit={handleSubmit}
    >
      <h2 className="flex gap-4 justify-center text-xl items-center">
        <Link href="signin">
          <ArrowLeft className="transition-transform hover:-translate-x-1" />
        </Link>
        Forgot Password
      </h2>
      <p className="text-center my-5">
        Please enter your email address to reset your password.
      </p>

      <EmailField />
      <FormSubmitBtn btnText="Send OTP" />
    </form>
  );
}
