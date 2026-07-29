import Link from "next/link";

type ActivePage = "home" | "publications" | "thoughts";

const navigation: Array<{
  href: string;
  label: string;
  key: ActivePage;
}> = [
  { href: "/", label: "Home", key: "home" },
  { href: "/publications", label: "Publications", key: "publications" },
  { href: "/thoughts", label: "Thoughts", key: "thoughts" },
];

export function SiteHeader({ active }: { active: ActivePage }) {
  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="Mihir Shah, home">
        Mihir Shah
      </Link>
      <nav aria-label="Primary navigation">
        {navigation.map((item) => (
          <Link
            aria-current={active === item.key ? "page" : undefined}
            className={active === item.key ? "active" : undefined}
            href={item.href}
            key={item.href}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function SocialLinks() {
  return (
    <p className="social-links" aria-label="Profile links">
      <a href="mailto:mihir2@stanford.edu">Email</a>
      <span>/</span>
      <a
        href="https://www.linkedin.com/in/mihirsh4h/"
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn
      </a>
      <span>/</span>
      <a
        href="https://scholar.google.com/citations?user=VPiPctAAAAAJ&hl=en&inst=8735055681369637791"
        target="_blank"
        rel="noreferrer"
      >
        Google Scholar
      </a>
      <span>/</span>
      <a
        href="https://github.com/MihirSh4h"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>
    </p>
  );
}

export function PageFooter() {
  return (
    <footer>
      <span>© 2026 Mihir Shah</span>
      <span>Last updated July 2026</span>
    </footer>
  );
}
