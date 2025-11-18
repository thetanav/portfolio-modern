import { FiGithub, FiLinkedin, FiTwitter, FiYoutube } from "react-icons/fi";

const socialLinks = [
  {
    icon: <FiGithub />,
    href: "https://github.com/thetanav",
  },
  {
    icon: <FiLinkedin />,
    href: "https://linkedin.com/in/tanav-poswal",
  },
  {
    icon: <FiTwitter />,
    href: "https://x.com/tanavtwt",
  },
  {
    icon: <FiYoutube />,
    href: "https://youtube.com",
  },
];

export function Footer() {
  return (
    <footer className="mt-auto flex items-center justify-between py-4 text-sm text-[color:var(--text-muted)]">
      <div className="flex items-center gap-4">
        {socialLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[color:var(--text)]">
            {link.icon}
          </a>
        ))}
      </div>
      <p>© {new Date().getFullYear()} Tanav Poswal</p>
    </footer>
  );
}
