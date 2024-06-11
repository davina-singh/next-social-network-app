import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Nav from "@/app/components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Social Network",
  description: "Generated by Davina  Singh",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Nav /> {children}
        </body>
      </html>
    </ClerkProvider>
  );
}