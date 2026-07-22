import type { Metadata } from "next";

const siteName = "Laicai OS";
const socialImage = {
  url: "/opengraph-image.png",
  width: 1731,
  height: 909,
  alt: "Laicai OS connected operating system",
};

export function createMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName,
      type: "website",
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage.url],
    },
  };
}
