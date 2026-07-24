import { site } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  return Response.redirect(`${site.url}/okf/index.md`, 308);
}
