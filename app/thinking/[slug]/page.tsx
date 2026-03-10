import { notFound } from "next/navigation";
import { getEssayBySlug, getAllEssays } from "@/lib/essays";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";

export async function generateStaticParams() {
  const essays = getAllEssays();
  return essays.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const essay = getEssayBySlug(slug);
  if (!essay) return {};
  return { title: `${essay.title} — Udhayakumar P`, description: essay.excerpt };
}

export default async function EssayPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const essay = getEssayBySlug(slug);
  if (!essay) notFound();

  const formattedDate = essay.date
    ? new Date(essay.date).toLocaleDateString("en-IN", { month: "long", day: "numeric", year: "numeric" })
    : "";

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <Link href="/thinking" className="inline-flex items-center gap-2 text-sm mb-12 link-muted">
        ← All writing
      </Link>

      <div className="mb-12" style={{ borderBottom: "1px solid var(--border)", paddingBottom: "3rem" }}>
        <div className="flex flex-wrap gap-2 mb-6">
          {essay.tags.map((tag) => (
            <span key={tag} className="text-xs font-mono px-2 py-0.5" style={{ border: "1px solid var(--accent)", color: "var(--accent)", borderRadius: "2px" }}>{tag}</span>
          ))}
        </div>
        <h1 className="font-black leading-tight mb-6" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "var(--text-primary)", letterSpacing: "-0.03em", maxWidth: "18ch" }}>
          {essay.title}
        </h1>
        <p className="text-lg max-w-2xl leading-relaxed mb-6" style={{ color: "var(--text-muted)" }}>{essay.excerpt}</p>
        <div className="flex items-center gap-4 text-xs" style={{ color: "var(--text-muted)" }}>
          <span>Udhayakumar P</span>
          <span style={{ color: "var(--text-faint)" }}>·</span>
          {formattedDate && <span>{formattedDate}</span>}
          <span style={{ color: "var(--text-faint)" }}>·</span>
          <span>{essay.readTime}</span>
        </div>
      </div>

      <div className="grid lg:grid-cols-[1fr_300px] gap-16">
        <article className="prose">
          <MDXRemote source={essay.content} />
        </article>
        <aside>
          <div className="p-6 sticky top-24" style={{ border: "1px solid var(--border)", borderRadius: "2px", background: "var(--surface)" }}>
            <p className="text-xs font-mono tracking-widest mb-4" style={{ color: "var(--text-muted)" }}>ABOUT THE AUTHOR</p>
            <p className="font-bold text-sm mb-2" style={{ color: "var(--text-primary)" }}>Udhayakumar Pasupathi</p>
            <p className="text-xs leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
              Marketing systems leader with 16 years in BFSI, healthcare and retail. Currently AVP – Growth &amp; Retention (D2C) at Star Health Insurance.
            </p>
            <div className="flex flex-col gap-2">
              <a href="https://www.linkedin.com/in/udhayakumar-pasupathi/" target="_blank" rel="noopener noreferrer" className="text-xs link-accent">LinkedIn ↗</a>
              <a href="https://medium.com/@UdhayP" target="_blank" rel="noopener noreferrer" className="text-xs link-muted">More writing on Medium ↗</a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
