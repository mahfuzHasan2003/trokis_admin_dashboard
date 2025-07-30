import { Montserrat } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const montserrat = Montserrat({
   variable: "--font-montserrat",
   subsets: ["latin"],
   weight: ["500", "600", "700", "800", "900"],
})

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body
            className={`${montserrat.variable} antialiased`}
         >
            {children}
            <Toaster richColors closeButton />
         </body>
      </html>
   );
}
