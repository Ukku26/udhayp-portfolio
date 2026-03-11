import Link from "next/link";
import { getMediumPosts } from "@/lib/medium";

const stats = [
  { value: "16", label: "Years" },
  { value: "₹120Cr", label: "Channel Built" },
  { value: "9M+", label: "Records Migrated" },
  { value: "₹200Cr", label: "Media Managed" },
];

const companies = ["Star Health", "OMD India", "Mindshare", "GroupM"];

const sectionTeasers = [
  {
    href: "/frameworks",
    tag: "FRAMEWORKS",
    title: "The mental models I build from",
    desc: "Full-funnel revenue systems, trust architecture, automation stacks — made explicit.",
    cta: "See the frameworks",
  },
  {
    href: "/thinking",
    tag: "THINKING",
    title: "POV essays and published writing",
    desc: "On AI in marketing, revenue systems, category building — from Medium and written here.",
    cta: "Read the thinking",
  },
  {
    href: "/work",
    tag: "WORK",
    title: "16 years of outcomes, not job descriptions",
    desc: "What I built, what moved, what compounded — across BFSI, healthcare and retail.",
    cta: "See the track record",
  },
];

export default async function Home() {
  let latestPost: Awaited<ReturnType<typeof getMediumPosts>>[0] | null = null;
  try {
    const posts = await getMediumPosts();
    latestPost = posts[0] ?? null;
  } catch {
    // graceful fallback if RSS fetch fails
  }

  return (
    <>
      {/* ── Hero ── */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16 md:pt-32 md:pb-24">
        <p className="text-xs font-mono tracking-widest mb-8" style={{ color: "var(--text-muted)" }}>
          UDHAYAKUMAR PASUPATHI · CHENNAI
        </p>

        <h1
          className="font-black leading-[1.05] mb-8"
          style={{
            fontSize: "clamp(2.8rem, 7vw, 6rem)",
            color: "var(--text-primary)",
            letterSpacing: "-0.03em",
          }}
        >
          Brand creates demand.
          <br />
          Systems convert it.
          <br />
          <span style={{ color: "var(--accent)" }}>I design both.</span>
        </h1>

        <p className="max-w-2xl text-lg leading-relaxed mb-10" style={{ color: "var(--text-muted)" }}>
          Marketing systems that drive compounding revenue across brand, funnel,
          automation and AI — for high-trust, high-consideration categories.
          BFSI · Healthcare · Retail.
        </p>

        <div className="flex flex-wrap gap-4 mb-16">
          <Link href="/thinking" className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-sm btn-accent-solid">
            Read my thinking →
          </Link>
          <Link href="/work" className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-sm btn-border-hover">
            See the work →
          </Link>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-8" style={{ borderTop: "1px solid var(--border)" }}>
          {stats.map((s) => (
            <div key={s.label} className="flex items-baseline gap-2">
              <span className="font-black text-2xl" style={{ color: "var(--accent)" }}>{s.value}</span>
              <span className="text-xs" style={{ color: "var(--text-muted)" }}>{s.label}</span>
            </div>
          ))}
          <span className="hidden md:block mx-2" style={{ color: "var(--text-faint)" }}>|</span>
          {companies.map((c, i) => (
            <span key={c} className="text-xs" style={{ color: "var(--text-muted)" }}>
              {c}{i < companies.length - 1 && <span style={{ color: "var(--text-faint)" }}> ·</span>}
            </span>
          ))}
        </div>
      </section>

      {/* ── Section teasers ── */}
      <section className="max-w-6xl mx-auto px-6 py-16" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="grid md:grid-cols-3 gap-px" style={{ background: "var(--border)" }}>
          {sectionTeasers.map((s) => (
            <Link key={s.href} href={s.href} className="group block p-8 section-teaser">
              <p className="text-xs font-mono tracking-widest mb-4" style={{ color: "var(--accent)" }}>{s.tag}</p>
              <h2 className="font-bold text-lg leading-snug mb-3" style={{ color: "var(--text-primary)" }}>{s.title}</h2>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-muted)" }}>{s.desc}</p>
              <span className="text-sm font-medium link-muted">{s.cta} →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Latest writing ── */}
      {latestPost && (
        <section className="max-w-6xl mx-auto px-6 py-16" style={{ borderTop: "1px solid var(--border)" }}>
          <div className="flex items-baseline justify-between mb-8">
            <p className="text-xs font-mono tracking-widest" style={{ color: "var(--text-muted)" }}>
              LATEST FROM MEDIUM
            </p>
            <a href="https://medium.com/@UdhayP" target="_blank" rel="noopener noreferrer" className="text-xs link-muted">
              All writing ↗
            </a>
          </div>
          <a href={latestPost.link} target="_blank" rel="noopener noreferrer" className="block">
            <div className="p-8 card-hover" style={{ border: "1px solid var(--border)", borderRadius: "2px" }}>
              <p className="text-xs mb-3" style={{ color: "var(--text-muted)" }}>
                {new Date(latestPost.pubDate).toLocaleDateString("en-IN", { month: "long", year: "numeric" })}
              </p>
              <h3 className="font-bold text-2xl leading-snug mb-3" style={{ color: "var(--text-primary)" }}>
                {latestPost.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                {latestPost.excerpt}
              </p>
              <p className="mt-4 text-sm font-medium" style={{ color: "var(--accent)" }}>
                Read on Medium ↗
              </p>
            </div>
          </a>
        </section>
      )}

      {/* ── Connect strip ── */}
      <section className="max-w-6xl mx-auto px-6 py-16" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h2 className="font-black text-3xl mb-2" style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}>
              Let&apos;s talk.
            </h2>
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
              Open to Head of Marketing, CMO and advisory conversations.
            </p>
          </div>
          <a
            href="https://www.linkedin.com/in/udhayakumar-pasupathi/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-sm whitespace-nowrap btn-accent-outline"
          >
            Connect on LinkedIn ↗
          </a>
        </div>
      </section>
    </>
  );
}
