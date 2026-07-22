import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://laicaios.com/sitemap.xml",
    host: "https://laicaios.com",
  };
}
