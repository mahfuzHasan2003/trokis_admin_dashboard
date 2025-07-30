import { Eye, EyeOff, KeyRound } from "lucide-react";
import { Input } from "../ui/input";
import { useState } from "react";

export default function PasswordField({ name }) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="relative">
      <KeyRound
        className="absolute top-1/2 transform -translate-y-1/2 text-muted-foreground left-3"
        size={20}
      />
      <Input
        placeholder="Enter Your Password"
        type={!showPassword ? "password" : "text"}
        className="rounded-full px-10"
        name={name}
      />
      <div
        className="absolute top-1/2 transform -translate-y-1/2 right-3 text-muted-foreground cursor-pointer"
        onClick={() => setShowPassword(!showPassword)}
      >
        {!showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
      </div>
    </div>
  );
}
