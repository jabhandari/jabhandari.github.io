import tinyProjects from "@/data/tiny-projects.json";

export default function TinyProjects() {
  return (
    <section id="tiny-projects" className="mx-auto w-full max-w-6xl scroll-mt-24 px-6 py-16">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-[var(--accent-strong)]">100 Days of Code</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-[var(--foreground)]">
          Tiny Projects
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
          Small builds from my #100DaysOfCode challenge — one project a day, each exploring a different language or idea.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {tinyProjects.map((project, index) => (
          <article
            key={index}
            className="group h-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[0_18px_45px_rgba(15,23,42,0.08)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-[var(--surface-strong)] hover:shadow-[0_24px_60px_rgba(15,23,42,0.16)] focus-within:ring-2 focus-within:ring-[var(--accent)]"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent-strong)]">{project.day}</p>
            <h3 className="mt-1 text-lg font-semibold tracking-tight text-[var(--foreground)]">{project.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
              {project.description}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tech.map((item, techIndex) => (
                <span
                  key={techIndex}
                  className="rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-3 py-1 text-xs font-medium text-[var(--foreground)]"
                >
                  {item}
                </span>
              ))}
            </div>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block text-sm font-semibold text-[var(--accent)] underline-offset-4 transition hover:text-[var(--accent-strong)] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            >
              View code
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
