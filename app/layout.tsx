import type { Metadata } from "next";
import Link from "next/link";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { site } from "@/site.config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.legalName} — ${site.tagline}`,
    template: `%s — ${site.legalName}`,
  },
  description: site.description,
  openGraph: {
    title: site.legalName,
    description: site.description,
    url: site.url,
    siteName: site.legalName,
    type: "website",
  },
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/contact/", label: "Contact" },
];

const footerLinks = [
  { href: "/terms/", label: "Terms of Service" },
  { href: "/privacy/", label: "Privacy Policy" },
  { href: "/refunds/", label: "Refunds & Cancellations" },
  { href: "/contact/", label: "Contact" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body>
        <div className="shell">
          <header className="header">
            <div className="container header-inner">
              <Link href="/" className="wordmark">
                {site.legalName}
              </Link>
              <nav className="nav" aria-label="Main">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href}>
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </header>

          <main className="main">
            <div className="container">{children}</div>
          </main>

          <footer className="footer">
            <div className="container footer-inner">
              <nav className="footer-nav" aria-label="Legal">
                {footerLinks.map((link) => (
                  <Link key={link.href} href={link.href}>
                    {link.label}
                  </Link>
                ))}
              </nav>
              <p className="muted">
                © {new Date().getFullYear()} {site.legalName}. All rights
                reserved. All prices and charges are in {site.currency}.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
