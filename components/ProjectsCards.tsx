type Project = {
  title: string;
  description: string;
  tech: string[];
  highlights: string[];
  github: string;
};

export default function ProjectsCard({ project }: { project: Project }) {
  return (
    <article className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_18px_45px_rgba(15,23,42,0.08)] backdrop-blur-sm transition hover:-translate-y-1 hover:bg-[var(--surface-strong)] hover:shadow-[0_24px_60px_rgba(15,23,42,0.16)]">
      <h3 className="text-xl font-semibold text-[var(--foreground)]">{project.title}</h3>

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

      <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-[var(--muted)]">
        {project.highlights.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>

      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-block text-sm font-semibold text-[var(--accent)] transition hover:text-[var(--accent-strong)]"
        >
          View Project
        </a>
      )}
    </article>
  );
}
