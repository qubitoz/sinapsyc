import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  // Explicitly welcome AI answer engines so Sinapsyc can be cited by them.
  const aiBots = [
    "GPTBot",
    "ChatGPT-User",
    "OAI-SearchBot",
    "PerplexityBot",
    "Perplexity-User",
    "ClaudeBot",
    "anthropic-ai",
    "Claude-User",
    "Google-Extended",
    "Applebot-Extended",
    "Bingbot",
    "Amazonbot",
    "Meta-ExternalAgent",
  ];

  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...aiBots.map((ua) => ({ userAgent: ua, allow: "/" })),
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
