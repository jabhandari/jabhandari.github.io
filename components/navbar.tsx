const links = [
  { label: "Experience", href: "#experience" },
  { label: "Featured", href: "#featured" },
  { label: "Projects", href: "#projects" },
  { label: "Tiny Projects", href: "#tiny-projects" },
];

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/15 bg-slate-950/55 backdrop-blur-xl">
      <nav aria-label="Primary" className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <a href="#top" className="text-lg font-semibold tracking-wide text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 rounded-full px-1">
          Juhi Bhandari
        </a>
        <div className="flex items-center gap-4 text-sm font-medium text-slate-200">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-1.5 transition hover:bg-white/15 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
