import Link from "next/link";
import { getMediumPosts, MediumPost } from "@/lib/medium";
import { getAllEssays, Essay } from "@/lib/essays";

const linkedInPosts = [
  {
    title: "Why the next wave of marketing talent will look nothing like today's",
    excerpt: "The skills that made great marketers in 2015 are necessary but no longer sufficient. Here's what I'm looking for when I hire now.",
    date: "2025-09-01",
    href: "https://www.linkedin.com/in/udhayakumar-pasupathi/",
    tags: ["Leadership", "AI"],
    source: "linkedin" as const,
  },
  {
    title: "Three things I learned running a 120-member renewals call centre",
    excerpt: "Marketing and operations are not separate functions. Here's what leading a call centre taught me about the funnel.",
    date: "2025-07-15",
    href: "https://www.linkedin.com/in/udhayakumar-pasupathi/",
    tags: ["Revenue", "Operations"],
    source: "linkedin" as const,
  },
];

const sourceColors: Record<string, string> = { site: "var(--accent)", medium: "#40A944", linkedin: "#0A66C2" };
const sourceLabels: Record<string, string> = { site: "Essay", medium: "Medium", linkedin: "LinkedIn" };

function PostCardInner({ title, excerpt, date, tags, source }: {
  title: string; excerpt: string; date: string; tags: string[]; source: "site" | "medium" | "linkedin";
}) {
  const formattedDate = date ? new Date(date).toLocaleDateString("en-IN", { month: "long", day: "numeric", year: "numeric" }) : "";
  return (
    <div className="p-6 flex flex-col h-full card-hover" style={{ border: "1px solid var(--border)", borderRadius: "2px", background: "var(--bg)" }}>
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-mono" style={{ color: sourceColors[source] }}>{sourceLabels[source]}</span>
        {formattedDate && <span className="text-xs" style={{ color: "var(--text-muted)" }}>{formattedDate}</span>}
      </div>
      <h3 className="font-bold text-lg leading-snug mb-3 flex-1" style={{ color: "var(--text-primary)" }}>{title}</h3>
      <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>{excerpt}</p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map((t) => (
          <span key={t} className="text-xs px-2 py-0.5" style={{ border: "1px solid var(--border)", color: "var(--text-muted)", borderRadius: "2px" }}>{t}</span>
        ))}
      </div>
    </div>
  );
}

export default async function ThinkingPage() {
  const essays = getAllEssays();
  let mediumPosts: MediumPost[] = [];
  try { mediumPosts = await getMediumPosts(); } catch { /* graceful fallback */ }

  const allPosts = [
    ...essays.map((e: Essay) => ({ key: `site-${e.slug}`, title: e.title, excerpt: e.excerpt, date: e.date, tags: e.tags, source: "site" as const, slug: e.slug, href: undefined })),
    ...mediumPosts.map((m: MediumPost) => ({ key: `medium-${m.link}`, title: m.title, excerpt: m.excerpt, date: m.pubDate, tags: m.tags, source: "medium" as const, href: m.link, slug: undefined })),
    ...linkedInPosts.map((l) => ({ key: `linkedin-${l.title}`, title: l.title, excerpt: l.excerpt, date: l.date, tags: l.tags, source: "linkedin" as const, href: l.href, slug: undefined })),
  ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="mb-16">
        <p className="text-xs font-mono tracking-widest mb-4" style={{ color: "var(--text-muted)" }}>THINKING</p>
        <h1 className="font-black leading-tight mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "var(--text-primary)", letterSpacing: "-0.03em" }}>
          POV, essays, and published writing
        </h1>
        <p className="max-w-xl text-base" style={{ color: "var(--text-muted)" }}>
          Writing across Medium, LinkedIn, and here — on AI in marketing, revenue systems, category building, and what the next CMO needs to know.
        </p>
        <div className="flex gap-4 mt-6">
          <a href="https://medium.com/@UdhayP" target="_blank" rel="noopener noreferrer" className="text-sm link-muted">Follow on Medium ↗</a>
          <span style={{ color: "var(--text-faint)" }}>·</span>
          <a href="https://www.linkedin.com/in/udhayakumar-pasupathi/" target="_blank" rel="noopener noreferrer" className="text-sm link-muted">Connect on LinkedIn ↗</a>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {allPosts.map((post) => {
          if (post.source === "site" && post.slug) {
            return <Link key={post.key} href={`/thinking/${post.slug}`} className="block"><PostCardInner {...post} /></Link>;
          }
          return <a key={post.key} href={post.href} target="_blank" rel="noopener noreferrer" className="block"><PostCardInner {...post} /></a>;
        })}
      </div>
    </div>
  );
}
