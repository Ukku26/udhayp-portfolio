const frameworks = [
  {
    id: "revenue-flywheel",
    tag: "GROWTH · BFSI · D2C",
    title: "The Revenue Flywheel",
    subtitle: "Full-funnel system from first visit to compounding customer value",
    desc: "Most marketing teams optimise stages in isolation. The flywheel treats acquisition, conversion, retention and expansion as a single compounding equation. Moving one stage changes the yield of every other.",
    diagram: [
      { step: "Visit", label: "Traffic & Awareness", metric: "V2L Rate" },
      { step: "Lead", label: "Form + Intent Capture", metric: "L2S Rate" },
      { step: "Sale", label: "Conversion + ATS", metric: "₹ GWP" },
      { step: "EMI", label: "Collection & Retention", metric: "+500 bps" },
      { step: "Renewal", label: "Lifecycle & Upsell", metric: "+500 bps" },
      { step: "Cross-sell", label: "Expansion Revenue", metric: "3× growth" },
    ],
    insight: "At Star Health, improving V2L by ~10% and L2S by ~4% drove ~13% growth in policies sold — without increasing media spend.",
    tags: ["BFSI", "D2C", "Revenue", "Funnel"],
  },
  {
    id: "trust-architecture",
    tag: "BRAND · HEALTHCARE · BFSI",
    title: "Trust Architecture for High-Consideration Categories",
    subtitle: "How credibility becomes the primary conversion driver",
    desc: "In insurance, healthcare and financial services, trust is not a brand metric — it's a revenue variable. This framework maps the trust-building journey and what marketing inputs move each stage.",
    diagram: [
      { step: "Awareness", label: "Category Salience", metric: "Share of Voice" },
      { step: "Credibility", label: "Expert endorsement, PR, content", metric: "Brand Health" },
      { step: "Consideration", label: "Product clarity, peer proof", metric: "Intent Lift" },
      { step: "Preference", label: "CX, NPS, ORM", metric: "CAC Reduction" },
      { step: "Activation", label: "Offer + friction removal", metric: "CVR" },
    ],
    insight: "For Apollo Hospitals: 'Let's Talk Health' cross-network content series built expert authority. Outcome: sustained brand consideration in a high-anxiety category.",
    tags: ["Brand", "Healthcare", "BFSI", "Category Building"],
  },
  {
    id: "automation-stack",
    tag: "MARTECH · AUTOMATION · LIFECYCLE",
    title: "The Compounding Automation Stack",
    subtitle: "How IVR, WhatsApp, CRM and lifecycle triggers multiply over time",
    desc: "Marketing automation built as a learning system — not a campaign system. Each layer adds signal, the whole stack compounds. Designed for high-volume, high-consideration conversion.",
    diagram: [
      { step: "Data", label: "CRM + propensity + EMI signals", metric: "9M+ records" },
      { step: "Trigger", label: "Lifecycle events + intent signals", metric: "Real-time" },
      { step: "Channel", label: "IVR + WhatsApp + Email", metric: "₹120 Cr GWP" },
      { step: "Routing", label: "Agent assignment + priority queue", metric: "Speed-to-dial" },
      { step: "Learning", label: "QA + feedback + model update", metric: "QoQ lift" },
    ],
    insight: "Pilot to 17% of D2C sales in 6 quarters. The system improved every quarter because feedback loops were designed in from day one.",
    tags: ["Automation", "Martech", "CRM", "WhatsApp"],
  },
  {
    id: "ai-marketing-org",
    tag: "LEADERSHIP · AI · ORG DESIGN",
    title: "The AI-Augmented Marketing Org",
    subtitle: "What changes when AI handles the execution layer",
    desc: "The question isn't which jobs AI replaces. It's what human judgment becomes more valuable when AI handles pattern recognition, routing, scoring, and QA at scale.",
    diagram: [
      { step: "AI Does", label: "Lead scoring · Routing · QA · Send optimisation", metric: "Scale" },
      { step: "Humans", label: "Strategy · Brand voice · Insight synthesis", metric: "Judgment" },
      { step: "Together", label: "Sequence design · Feedback interpretation", metric: "Learning" },
      { step: "Leaders", label: "System architecture · Ethics · Trade-offs", metric: "Direction" },
    ],
    insight: "The marketers who thrive aren't the ones who understand AI best in the abstract — they're the ones who know their category well enough to make the calls AI can't.",
    tags: ["AI", "Leadership", "Org Design", "Strategy"],
  },
];

function DiagramStep({ step, label, metric, isLast }: { step: string; label: string; metric: string; isLast: boolean }) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex flex-col items-center">
        <div className="w-8 h-8 flex items-center justify-center text-xs font-black flex-shrink-0"
          style={{ background: "var(--accent-dim)", border: "1px solid var(--accent)", color: "var(--accent)", borderRadius: "2px" }}>
          {step.slice(0, 2)}
        </div>
        {!isLast && <div className="w-px flex-1 mt-1" style={{ background: "var(--border)", minHeight: "20px" }} />}
      </div>
      <div className="pb-4 flex-1">
        <p className="text-xs font-semibold" style={{ color: "var(--text-primary)" }}>{step}</p>
        <p className="text-xs" style={{ color: "var(--text-muted)" }}>{label}</p>
        <p className="text-xs font-mono mt-1" style={{ color: "var(--accent)" }}>{metric}</p>
      </div>
    </div>
  );
}

export default function FrameworksPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="mb-16">
        <p className="text-xs font-mono tracking-widest mb-4" style={{ color: "var(--text-muted)" }}>FRAMEWORKS</p>
        <h1 className="font-black leading-tight mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "var(--text-primary)", letterSpacing: "-0.03em" }}>
          Mental models I build from
        </h1>
        <p className="max-w-xl text-base" style={{ color: "var(--text-muted)" }}>
          These aren&apos;t theoretical constructs. Each framework was shaped by a real business problem, tested against real data, and refined through failure.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {frameworks.map((fw) => (
          <div key={fw.id} className="p-8" style={{ border: "1px solid var(--border)", borderRadius: "2px", background: "var(--surface)" }}>
            <p className="text-xs font-mono tracking-widest mb-4" style={{ color: "var(--text-muted)" }}>{fw.tag}</p>
            <h2 className="font-black text-xl leading-snug mb-2" style={{ color: "var(--text-primary)" }}>{fw.title}</h2>
            <p className="text-sm mb-4" style={{ color: "var(--accent)" }}>{fw.subtitle}</p>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-muted)" }}>{fw.desc}</p>
            <div className="p-4 mb-6" style={{ background: "var(--bg)", borderRadius: "2px" }}>
              {fw.diagram.map((d, i) => (
                <DiagramStep key={d.step} step={d.step} label={d.label} metric={d.metric} isLast={i === fw.diagram.length - 1} />
              ))}
            </div>
            <div className="p-4 mb-6" style={{ borderLeft: "2px solid var(--accent)", background: "var(--accent-dim)" }}>
              <p className="text-xs leading-relaxed" style={{ color: "var(--text-primary)" }}>{fw.insight}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {fw.tags.map((t) => (
                <span key={t} className="text-xs px-2 py-0.5" style={{ border: "1px solid var(--border)", color: "var(--text-muted)", borderRadius: "2px" }}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 p-8 flex flex-col md:flex-row md:items-center justify-between gap-6" style={{ border: "1px solid var(--border)", borderRadius: "2px" }}>
        <div>
          <p className="font-bold" style={{ color: "var(--text-primary)" }}>Want to discuss how these apply to your context?</p>
          <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>These frameworks are most useful when adapted to a specific category, team, and stage of growth.</p>
        </div>
        <a href="https://www.linkedin.com/in/udhayakumar-pasupathi/" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-sm whitespace-nowrap btn-accent-outline">
          Let&apos;s talk ↗
        </a>
      </div>
    </div>
  );
}
