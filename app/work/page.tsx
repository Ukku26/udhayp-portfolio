const career = [
  {
    period: "2023 — Present",
    company: "Star Health Insurance",
    role: "AVP – Growth & Retention (D2C) · GM – Brand Marketing",
    location: "Chennai",
    summary: "Led integrated brand and growth in a highly regulated category. Owned full-funnel D2C accountability — from acquisition through renewals — and ran CRM transformation as product owner.",
    highlights: [
      { metric: "₹120 Cr", label: "IVR + WhatsApp automation channel built from zero → 17% of D2C sales in FY26" },
      { metric: "~13%", label: "Growth in policies sold via funnel optimisation (V2L +10%, L2S +3–4%)" },
      { metric: "+500 bps", label: "Improvement in both EMI collections and upsell rates" },
      { metric: "3×", label: "Growth in cross-sell, improving revenue quality and persistency" },
      { metric: "9M+ records", label: "Zoho → Salesforce migration — 8M+ customers, 1800 users, owned as D2C business owner" },
      { metric: "~30% CAC", label: "Reduction through creator-led acquisition pilots, transitioned to BAU" },
    ],
    tags: ["D2C", "Brand", "Growth", "Martech", "AI", "CRM", "P&L Ownership"],
  },
  {
    period: "2021 — 2023",
    company: "OMD India (Omnicom Media Group)",
    role: "Associate Vice President – Planning (South)",
    location: "Chennai",
    summary: "Led South operations reporting to CEO of OMD India. Managed integrated media strategy across BFSI, Healthcare and FMCG. Delivered 30% topline growth in a stagnant market.",
    highlights: [
      { metric: "₹200+ Cr", label: "Omnichannel adex managed across Apollo Hospitals, Wipro, Muthoot Finance, Hatsun, Amrutanjan" },
      { metric: "30%", label: "Topline revenue growth in a stagnant market via consultative selling and innovation" },
      { metric: "10-member", label: "Team led across integrated planning, digital-first campaigns and measurement" },
      { metric: "+7–10 pts", label: "Incremental reach via cross-screen AV planning at 8–10% lower CPR" },
    ],
    tags: ["Media Strategy", "BFSI", "Healthcare", "Team Leadership", "P&L"],
  },
  {
    period: "2012 — 2021",
    company: "Mindshare (GroupM)",
    role: "Sr. Director – Strategy (progression: Manager → Director → Sr. Director)",
    location: "Chennai & Bengaluru",
    summary: "Nine years across planning, digital, strategy and client leadership. Managed portfolios up to ₹150 Cr. Known for strategic consultancy beyond media — advised legacy news brands on digital transition, built content IPs for BFSI clients, and led landmark channel and brand launches.",
    highlights: [
      { metric: "9 years", label: "Progression from Media Manager to Sr. Director – Strategy" },
      { metric: "₹150 Cr", label: "Portfolios managed; clients: Apollo Hospitals, Chola MS, Muthoot Finance, Max Fashion, Lifestyle, Homecentre, GRT" },
      { metric: "APAC Award", label: "Mindshare APAC Team of the Year — Landmark Group COVID resilience campaign" },
      { metric: "COVID playbook", label: "Built pandemic response across Max Fashion, Lifestyle, Homecentre & SPAR — Shop on Wheels, #MaxThankYou, Pujo Wall of Kindness, anti-viral fashion, digital-to-store campaigns" },
      { metric: "+135% revenue", label: "Homecentre post-lockdown performance marketing — revenue +135%, ROAS +117% vs pre-COVID, users +68% in CY2020" },
      { metric: "Slice of Health", label: "Chola MS — audio series across radio networks repositioning health insurer as a wellness partner, not just a policy provider" },
      { metric: "Channel launch", label: "News First Kannada — led launch media strategy for new entrant in competitive Kannada news broadcast market" },
      { metric: "Print advisory", label: "Consultancy to legacy print brands (Hindu Tamil Thisai, Eenadu) on navigating digital disruption and audience migration" },
      { metric: "Footfall model", label: "Built single-variant correlation framework linking media inputs to walk-in outcomes — recalibrated media mix for Muthoot Finance, Max Fashion and Lifestyle across 3 categories" },
    ],
    tags: ["Brand Strategy", "Media Planning", "Content", "Digital", "Client Leadership", "BFSI", "Healthcare", "Media Consultancy"],
  },
  {
    period: "2009 — 2012",
    company: "Lodestar Universal",
    role: "Senior Media Executive",
    location: "Chennai",
    summary: "Single-point planner for Club Mahindra, Kohinoor, Durex, Star Health, Indian Terrain. Managed ₹70 Cr budget annually.",
    highlights: [
      { metric: "₹70 Cr", label: "Annual media budget managed across 5 brands" },
      { metric: "Emvies Silver", label: "Best Media Innovation – Digital (Social Media), Durex World AIDS Day Song 2011" },
    ],
    tags: ["Media Planning", "Brand"],
  },
];

const coreStrengths = [
  { label: "Category & Brand Building", desc: "Integrated brand, performance, and lifecycle marketing for high-trust categories" },
  { label: "Revenue Systems", desc: "Full-funnel D2C ownership: V2L → L2S → EMI → Renewals → Cross-sell" },
  { label: "AI & Martech", desc: "AI-enabled sales/marketing systems, CDP, CRM, MAP implementation" },
  { label: "CRM Transformation", desc: "Business & product owner for large-scale CRM migrations" },
  { label: "Media Strategy", desc: "Cross-platform audience planning, ROI, strategic partnerships" },
  { label: "Team & P&L Leadership", desc: "Cross-functional teams across Marketing, Sales, Product, Technology" },
];

const tools = [
  "Salesforce CRM", "Zoho CRM", "Marketing Automation", "GA4", "Meta Ads", "Google Ads",
  "MMM", "Brand Tracking", "Social Listening", "BARC", "IRS", "TGI",
  "Similarweb", "Microsoft Clarity", "WhatsApp Business API", "IVR Systems",
  "CDP", "CMS", "MAP", "AI QA Tools",
];

export default function WorkPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-16">
        <p className="text-xs font-mono tracking-widest mb-4" style={{ color: "var(--text-muted)" }}>WORK</p>
        <h1 className="font-black leading-tight mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "var(--text-primary)", letterSpacing: "-0.03em" }}>
          16 years of outcomes,
          <br />not job descriptions.
        </h1>
        <p className="max-w-xl text-base" style={{ color: "var(--text-muted)" }}>
          What I built, what moved, what compounded — across BFSI, healthcare and retail.
        </p>
      </div>

      {/* Core strengths */}
      <div className="mb-16 p-8" style={{ border: "1px solid var(--border)", background: "var(--surface)", borderRadius: "2px" }}>
        <p className="text-xs font-mono tracking-widest mb-6" style={{ color: "var(--text-muted)" }}>CORE STRENGTHS</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreStrengths.map((s) => (
            <div key={s.label}>
              <p className="font-semibold text-sm mb-1" style={{ color: "var(--accent)" }}>{s.label}</p>
              <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Career timeline */}
      <div className="mb-16">
        <p className="text-xs font-mono tracking-widest mb-8" style={{ color: "var(--text-muted)" }}>CAREER</p>
        <div className="flex flex-col gap-0">
          {career.map((job, idx) => (
            <div key={job.company} className="relative" style={{ borderLeft: "1px solid var(--border)", paddingLeft: "2rem", paddingBottom: idx < career.length - 1 ? "3rem" : "0" }}>
              <div className="absolute left-0 top-0 w-2 h-2 -translate-x-[4.5px]"
                style={{ background: idx === 0 ? "var(--accent)" : "var(--border)", borderRadius: "50%", border: idx === 0 ? "2px solid var(--accent)" : "1px solid var(--border)" }} />
              <p className="text-xs font-mono mb-2" style={{ color: idx === 0 ? "var(--accent)" : "var(--text-muted)" }}>{job.period}</p>
              <h3 className="font-black text-xl mb-1" style={{ color: "var(--text-primary)" }}>{job.company}</h3>
              <p className="text-sm mb-1" style={{ color: "var(--text-muted)" }}>{job.role}</p>
              <p className="text-xs mb-4" style={{ color: "var(--text-faint)" }}>{job.location}</p>
              <p className="text-sm leading-relaxed mb-6 max-w-2xl" style={{ color: "var(--text-muted)" }}>{job.summary}</p>
              <div className="grid sm:grid-cols-2 gap-3 mb-6 max-w-3xl">
                {job.highlights.map((h) => (
                  <div key={h.metric} className="p-4" style={{ border: "1px solid var(--border)", borderRadius: "2px", background: "var(--surface)" }}>
                    <p className="font-black text-2xl mb-1" style={{ color: "var(--accent)" }}>{h.metric}</p>
                    <p className="text-xs leading-snug" style={{ color: "var(--text-muted)" }}>{h.label}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {job.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-0.5" style={{ border: "1px solid var(--border)", color: "var(--text-muted)", borderRadius: "2px" }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Awards & Education */}
      <div className="mb-16 grid md:grid-cols-2 gap-px" style={{ background: "var(--border)" }}>
        <div className="p-8" style={{ background: "var(--surface)" }}>
          <p className="text-xs font-mono tracking-widest mb-6" style={{ color: "var(--text-muted)" }}>AWARDS</p>
          <ul className="space-y-3">
            {["Mindshare APAC Team of the Year — Landmark Group COVID resilience", "Emvies Silver – Best Digital Innovation — Durex World AIDS Day Song"].map((award) => (
              <li key={award} className="flex items-start gap-3">
                <span style={{ color: "var(--accent)" }} className="mt-0.5 text-sm">✦</span>
                <span className="text-sm" style={{ color: "var(--text-muted)" }}>{award}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-8" style={{ background: "var(--surface)" }}>
          <p className="text-xs font-mono tracking-widest mb-6" style={{ color: "var(--text-muted)" }}>EDUCATION</p>
          <ul className="space-y-3">
            {[{ degree: "MBA – Marketing", institution: "Amrita School of Business, 2009" }, { degree: "B.Tech – Biotechnology", institution: "SRM University, Chennai, 2007" }].map((e) => (
              <li key={e.degree}>
                <p className="font-semibold text-sm" style={{ color: "var(--text-primary)" }}>{e.degree}</p>
                <p className="text-xs" style={{ color: "var(--text-muted)" }}>{e.institution}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Super.me section */}
      <div className="mb-16 p-8" style={{ border: "1px solid var(--border)", borderRadius: "2px" }}>
        <div className="flex items-start justify-between gap-6 flex-wrap">
          <div className="max-w-xl">
            <p className="text-xs font-mono tracking-widest mb-4" style={{ color: "var(--text-muted)" }}>ON SUPER.ME</p>
            <h2 className="font-black text-2xl mb-4" style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}>Where expertise is discovered through questions, not feeds.</h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
              Super.me is an AI-native professional network where professionals are found by what they know, not what they post. Instead of scrolling feeds, people ask questions — and get answers grounded in actual experience.
            </p>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-muted)" }}>
              My profile covers 16 years across BFSI, healthcare and retail — agency and client side. Ask it about D2C funnels, marketing automation, brand strategy, or lifecycle systems.
            </p>
            <a href="https://www.superme.ai/udhayp" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 font-semibold text-sm btn-accent-outline">
              See my Super.me profile ↗
            </a>
          </div>
          <div className="p-6 min-w-[200px]" style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "2px" }}>
            <p className="text-xs font-mono mb-4" style={{ color: "var(--text-muted)" }}>MY PROFILE</p>
            <p className="font-semibold text-sm mb-2" style={{ color: "var(--text-primary)" }}>Brand and Growth Leader</p>
            <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Building high-trust categories across BFSI, Healthcare &amp; Retail. 16+ years across agency and client side — creating demand and converting it into sustainable revenue.
            </p>
            <p className="text-xs mt-3" style={{ color: "var(--text-faint)" }}>superme.ai/udhayp</p>
          </div>
        </div>
      </div>

      {/* Toolbox */}
      <div className="mb-16 p-8" style={{ border: "1px solid var(--border)", borderRadius: "2px", background: "var(--surface)" }}>
        <p className="text-xs font-mono tracking-widest mb-6" style={{ color: "var(--text-muted)" }}>TOOLBOX</p>
        <div className="flex flex-wrap gap-2">
          {tools.map((tool) => (
            <span key={tool} className="text-xs px-3 py-1.5" style={{ border: "1px solid var(--border)", color: "var(--text-muted)", borderRadius: "2px", background: "var(--bg)" }}>{tool}</span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="p-8 flex flex-col md:flex-row md:items-center justify-between gap-6" style={{ background: "var(--accent)", borderRadius: "2px" }}>
        <div>
          <p className="font-black text-xl text-black">Open to the right opportunity.</p>
          <p className="text-sm mt-1 text-black opacity-70">Head of Marketing · CMO · Advisory · Fractional</p>
        </div>
        <a href="https://www.linkedin.com/in/udhayakumar-pasupathi/" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 font-bold text-sm whitespace-nowrap invert-hover">
          Connect on LinkedIn ↗
        </a>
      </div>
    </div>
  );
}
