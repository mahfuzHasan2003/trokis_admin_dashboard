import { Button } from "@/components/ui/button";
import { MessageSquareMore } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export default function DriverDocumentsCard() {
  return (
    <div className="shadow-md max-w-sm rounded-md space-y-3 p-5 border">
      <Image
        src="https://i.pinimg.com/736x/1a/a8/d7/1aa8d75f3498784bcd2617b3e3d1e0c4.jpg"
        alt="User Image"
        width={75}
        height={75}
        className="rounded-full mx-auto"
      />
      <h3 className="flex items-center gap-3 text-xl justify-center">
        Dianne Russell
        <Link href="/">
          <MessageSquareMore className="text-muted-foreground" size={20} />
        </Link>
      </h3>

      {/* Documents */}
      <h3 className="text-xl">Documents</h3>
      <div className="flex gap-3 flex-wrap">
        {Array.from({ length: 4 }).map((_, index) => (
          <div>
            <Image
              key={index}
              src="https://i.pinimg.com/736x/6e/6c/36/6e6c363de5f8c1c3c1331eea85c91a15.jpg"
              height={75}
              width={75}
              alt="document"
              className="rounded-full"
            />
            <p className="text-xs text-center text-muted-foreground mt-0.5">
              doc title.pdf
            </p>
          </div>
        ))}
      </div>

      {/* buttons */}
      <div className="flex gap-3 justify-center mt-7">
        <Button>Approve</Button>
        <Button variant="outline">Decline</Button>
      </div>
    </div>
  );
}
