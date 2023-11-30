import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "../components/";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Notecraft",
  description: "App by Jeremias Oviedo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <html lang="en" className="scroll-smooth">
        <body className={inter.className}>{children}</body>
      </html>
    </AuthProvider>
  );
}
