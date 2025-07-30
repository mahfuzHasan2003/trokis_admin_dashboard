import { Input } from "../ui/input";

export default function FormSubmitBtn({ btnText }) {
  return (
    <Input
      type="submit"
      value={btnText}
      className="cursor-pointer bg-foreground text-background rounded-full hover:bg-foreground/90 mt-5"
    />
  );
}
