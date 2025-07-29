
import "../globals.css";
export const metadata = {
   title: "TROKIS Authentication",
};

export default function AuthLayout({ children }) {
   return (
      <div
         className={`h-dvh flex items-center justify-center`}
      >
         {children}
      </div>
   );
}
