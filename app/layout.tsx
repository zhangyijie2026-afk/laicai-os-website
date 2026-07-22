import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Laicai OS — Build Brands. Operate Growth.",
  description:
    "Laicai OS is an AI-powered operating system for building brands, creating content, accumulating knowledge and driving continuous growth.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
