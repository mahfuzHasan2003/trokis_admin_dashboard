"use client";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, KeyRound, Mail } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  function handleSignIn() {
    // console.log();
  }

  return (
    <form
      className="bg-white w-full max-w-md px-12 py-24 rounded-md shadow-md"
      onSubmit={handleSignIn}
    >
      <h2 className="text-center mb-8 text-2xl font-semibold">Sign In</h2>

      {/* email field */}
      <div className="relative mb-3">
        <Mail
          className="absolute top-1/2 transform -translate-y-1/2 text-muted-foreground left-3"
          size={20}
        />
        <Input
          placeholder="Enter Your Email"
          type="email"
          className="rounded-full pl-10"
        />
      </div>

      {/* Passoword Field */}
      <div className="relative">
        <KeyRound
          className="absolute top-1/2 transform -translate-y-1/2 text-muted-foreground left-3"
          size={20}
        />
        <Input
          placeholder="Enter Your Password"
          type={!showPassword ? "password" : "text"}
          className="rounded-full px-10"
        />
        <div
          className="absolute top-1/2 transform -translate-y-1/2 right-3 text-muted-foreground cursor-pointer"
          onClick={() => setShowPassword(!showPassword)}
        >
          {!showPassword ? <EyeOff /> : <Eye />}
        </div>
      </div>

      {/* forgot password */}
      <p className="text-right">
        <Link href="/reset-password" className="text-sm text-muted-foreground">
          Forgot password?
        </Link>
      </p>

      {/* submit btn */}
      <Input
        type="submit"
        className="cursor-pointer bg-foreground text-background rounded-full hover:bg-foreground/90 mt-5"
      />
    </form>
  );
}
