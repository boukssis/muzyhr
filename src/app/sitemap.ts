import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  return ["", "/services", "/approach", "/about", "/contact"].map((path) => ({
    url: `${base}${path || "/"}`,
  }));
}
