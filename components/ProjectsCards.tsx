type Project = {
  title: string;
  description: string;
  tech: string[];
  highlights: string[];
  github: string;
  live?: string;
};

export default function ProjectsCard({ project }: { project: Project }) {
  return (
    <article className="group h-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_18px_45px_rgba(15,23,42,0.08)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-[var(--surface-strong)] hover:shadow-[0_24px_60px_rgba(15,23,42,0.16)] focus-within:ring-2 focus-within:ring-[var(--accent)]">
      <h3 className="text-xl font-semibold tracking-tight text-[var(--foreground)]">{project.title}</h3>

      <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((item, index) => (
          <span
            key={index}
            className="rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-3 py-1 text-xs font-medium text-[var(--foreground)]"
          >
            {item}
          </span>
        ))}
      </div>

      <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-[var(--muted)]">
        {project.highlights.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-4">
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="inline-block text-sm font-semibold text-[var(--accent)] underline-offset-4 transition hover:text-[var(--accent-strong)] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
          >
            View live app
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-block text-sm font-semibold text-[var(--accent)] underline-offset-4 transition hover:text-[var(--accent-strong)] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
          >
            View Project
          </a>
        )}
      </div>
    </article>
  );
}
