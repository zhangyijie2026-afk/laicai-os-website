import type { MetadataRoute } from "next";

const routes = [
  "",
  "/about",
  "/capabilities",
  "/projects",
  "/projects/maple-leaf-edu-travel",
  "/projects/maple-leaf-edu-travel/youtube",
  "/projects/maple-leaf-edu-travel/youtube/videos",
  "/projects/maple-leaf-edu-travel/youtube/daily",
  "/projects/maple-leaf-edu-travel/youtube/retention",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://laicaios.com${route}`,
    lastModified: new Date("2026-08-12"),
    changeFrequency: route.includes("youtube") ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.includes("youtube") ? 0.7 : 0.8,
  }));
}
