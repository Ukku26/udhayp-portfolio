export interface MediumPost {
  title: string;
  link: string;
  pubDate: string;
  excerpt: string;
  tags: string[];
  source: "medium";
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, "").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&nbsp;/g, " ").trim();
}

function extractExcerpt(content: string, maxLength = 200): string {
  const text = stripHtml(content);
  const cleaned = text.replace(/\s+/g, " ").trim();
  if (cleaned.length <= maxLength) return cleaned;
  return cleaned.slice(0, maxLength).replace(/\s\S*$/, "") + "…";
}

function extractTags(content: string): string[] {
  const categoryMatches = content.match(/<category><!\[CDATA\[([^\]]+)\]\]><\/category>/g);
  if (!categoryMatches) return [];
  return categoryMatches
    .map((m) => m.replace(/<category><!\[CDATA\[/, "").replace(/\]\]><\/category>/, "").trim())
    .slice(0, 3);
}

export async function getMediumPosts(): Promise<MediumPost[]> {
  const res = await fetch("https://medium.com/feed/@UdhayP", {
    next: { revalidate: 3600 }, // revalidate every hour
  });

  if (!res.ok) throw new Error("Failed to fetch Medium RSS");

  const xml = await res.text();

  const items = xml.match(/<item>([\s\S]*?)<\/item>/g) || [];

  return items.slice(0, 6).map((item) => {
    const title = item.match(/<title><!\[CDATA\[([^\]]+)\]\]><\/title>/)?.[1]?.trim() ||
      item.match(/<title>([^<]+)<\/title>/)?.[1]?.trim() || "Untitled";

    const link = item.match(/<link>([^<]+)<\/link>/)?.[1]?.trim() ||
      item.match(/<guid[^>]*>([^<]+)<\/guid>/)?.[1]?.trim() || "#";

    const pubDate = item.match(/<pubDate>([^<]+)<\/pubDate>/)?.[1]?.trim() || "";

    const contentEncoded = item.match(/<content:encoded><!\[CDATA\[([\s\S]*?)\]\]><\/content:encoded>/)?.[1] || "";
    const description = item.match(/<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>/)?.[1] || "";
    const rawContent = contentEncoded || description;

    const excerpt = extractExcerpt(rawContent);
    const tags = extractTags(item);

    return { title, link, pubDate, excerpt, tags, source: "medium" as const };
  });
}
