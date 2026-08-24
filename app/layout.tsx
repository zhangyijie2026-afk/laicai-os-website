import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  metadataBase: new URL("https://laicaios.com"),
  title: "Laicai OS — Build Brands. Operate Growth.",
  description:
    "Laicai OS is an AI-powered operating system for building brands, creating content, accumulating knowledge and driving continuous growth.",
  alternates: { canonical: "/" },
  icons: { icon: "/laicai-logo-mark.png", shortcut: "/laicai-logo-mark.png", apple: "/laicai-logo-mark.png" },
  openGraph: {
    title: "Laicai OS — Build Brands. Operate Growth.",
    description:
      "An AI-powered operating system connecting strategy, content, knowledge, data and continuous growth.",
    url: "/",
    siteName: "Laicai OS",
    type: "website",
    images: [{
      url: "/opengraph-image.png",
      width: 1731,
      height: 909,
      alt: "Laicai OS connected operating system",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Laicai OS — Build Brands. Operate Growth.",
    description:
      "An AI-powered operating system connecting strategy, content, knowledge, data and continuous growth.",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
