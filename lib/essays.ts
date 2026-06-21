import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Essay {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  readTime: string;
  source: "site";
}

export interface EssayWithContent extends Essay {
  content: string;
}

const essaysDir = path.join(process.cwd(), "content/essays");

export function getAllEssays(): Essay[] {
  if (!fs.existsSync(essaysDir)) return [];
  const files = fs.readdirSync(essaysDir).filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));

  return files
    .map((file) => {
      const slug = file.replace(/\.mdx?$/, "");
      const raw = fs.readFileSync(path.join(essaysDir, file), "utf-8");
      const { data } = matter(raw);
      return {
        slug,
        title: data.title || slug,
        date: data.date || "",
        excerpt: data.excerpt || "",
        tags: data.tags || [],
        readTime: data.readTime || "5 min read",
        source: "site" as const,
        draft: !!data.draft,
      };
    })
    .filter((e) => !e.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getEssayBySlug(slug: string): EssayWithContent | null {
  const filePath = path.join(essaysDir, `${slug}.mdx`);
  const filePath2 = path.join(essaysDir, `${slug}.md`);

  const resolvedPath = fs.existsSync(filePath) ? filePath : fs.existsSync(filePath2) ? filePath2 : null;
  if (!resolvedPath) return null;

  const raw = fs.readFileSync(resolvedPath, "utf-8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title || slug,
    date: data.date || "",
    excerpt: data.excerpt || "",
    tags: data.tags || [],
    readTime: data.readTime || "5 min read",
    source: "site" as const,
    content,
  };
}
