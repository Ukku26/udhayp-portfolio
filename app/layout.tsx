import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Udhayakumar P — Marketing Systems Leader",
  description:
    "16 years building brand, growth and revenue systems for high-trust categories across BFSI, healthcare and retail. Head of Marketing · AI-native · Chennai.",
  openGraph: {
    title: "Udhayakumar P — Marketing Systems Leader",
    description: "Brand strategist. Revenue system builder. AI implementer.",
    siteName: "Udhayakumar P",
    locale: "en_IN",
    type: "website",
  },
};

const footerLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/udhayakumar-pasupathi/" },
  { label: "Medium", href: "https://medium.com/@UdhayP" },
  { label: "Super.me", href: "https://www.superme.ai/udhayp" },
  { label: "Blog", href: "https://memoirsofudhay.blogspot.com/" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen antialiased" style={{ background: "var(--bg)", color: "var(--text-primary)", fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
        <Nav />
        <main>{children}</main>
        <footer style={{ borderTop: "1px solid var(--border)", background: "var(--surface)" }} className="mt-24">
          <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <p className="font-bold text-sm tracking-widest" style={{ color: "var(--text-primary)" }}>
                UDHAYAKUMAR P
              </p>
              <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
                Marketing Systems Leader · Chennai, India
              </p>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs link-muted"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <p className="text-xs" style={{ color: "var(--text-faint)" }}>
              © 2025 Udhayakumar P
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
