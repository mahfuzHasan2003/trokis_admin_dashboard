"use client";
import EmailField from "@/components/auth/email-field";
import FormSubmitBtn from "@/components/auth/form-submit-btn";
import PasswordField from "@/components/auth/password-field";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { toast } from "sonner";

export default function SignIn() {
  async function handleSignIn(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    if (!email || !password) {
      toast.error("Please fill out both fields.");
      return;
    }
    console.log(email, password);
  }

  return (
    <form
      className="bg-white w-full max-w-md px-12 py-24 rounded-md shadow-md"
      onSubmit={handleSignIn}
    >
      <h2 className="text-center mb-8 text-2xl font-semibold">Sign In</h2>

      {/* email field */}
      <EmailField />

      {/* Passoword Field */}
      <PasswordField name="password" />

      {/* forgot password */}
      <p className="text-right">
        <Link href="/reset-password" className="text-sm text-muted-foreground">
          Forgot password?
        </Link>
      </p>

      {/* submit btn */}
      <FormSubmitBtn btnText="Sign In" />
    </form>
  );
}
