"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Thinking", href: "/thinking" },
  { label: "Frameworks", href: "/frameworks" },
  { label: "Work", href: "/work" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav
      style={{
        borderBottom: "1px solid var(--border)",
        background: "rgba(12,12,12,0.92)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link
          href="/"
          className="font-black text-sm shrink-0 link-primary"
          style={{ letterSpacing: "0.15em" }}
        >
          UP
        </Link>

        {/* Nav links */}
        <div className="flex items-center gap-4 md:gap-6">
          {links.map((link) => {
            const isActive =
              pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs md:text-sm transition-colors duration-200"
                style={{
                  color: isActive ? "var(--accent)" : "var(--text-muted)",
                  fontWeight: isActive ? "600" : "400",
                }}
              >
                {link.label}
              </Link>
            );
          })}

          {/* LinkedIn — hidden on smallest screens */}
          <a
            href="https://www.linkedin.com/in/udhayakumar-pasupathi/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline text-xs md:text-sm link-muted"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </nav>
  );
}
