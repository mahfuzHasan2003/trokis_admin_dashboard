import { Mail } from "lucide-react";
import { Input } from "../ui/input";

export default function EmailField({ name }) {
  return (
    <div className="relative mb-3">
      <Mail
        className="absolute top-1/2 transform -translate-y-1/2 text-muted-foreground left-3"
        size={20}
      />
      <Input
        placeholder="Enter Your Email"
        type="email"
        name={name}
        className="rounded-full pl-10"
      />
    </div>
  );
}
