import type { MetadataRoute } from "next";

const baseUrl = "https://laicaios.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: baseUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/about`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/capabilities`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/projects`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/projects/maple-leaf-edu-travel`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/projects/maple-leaf-edu-travel/youtube`, changeFrequency: "weekly", priority: 0.6 },
    { url: `${baseUrl}/projects/maple-leaf-edu-travel/youtube/videos`, changeFrequency: "weekly", priority: 0.5 },
    { url: `${baseUrl}/projects/maple-leaf-edu-travel/youtube/daily`, changeFrequency: "weekly", priority: 0.5 },
    { url: `${baseUrl}/projects/maple-leaf-edu-travel/youtube/retention`, changeFrequency: "weekly", priority: 0.5 },
    { url: `${baseUrl}/contact`, changeFrequency: "yearly", priority: 0.6 },
  ];
}
