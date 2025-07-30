import { ArrowLeft } from "lucide-react";

export default function ForgotPassword() {
  return (
    <form className="bg-white w-full max-w-md px-12 py-24 rounded-md shadow-md">
      <h2>
        <ArrowLeft />
        Forgot Password
      </h2>
      <p>Please enter your email address to reset your password.</p>
    </form>
  );
}
