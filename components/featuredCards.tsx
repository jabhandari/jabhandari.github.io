type featured = {
    event: string;
    title: string;
    description: string;
    tech: string[];
    highlights: string[];
    acheivements: string[];
    github: string;
}
export default function FeaturedCards({ feature }: { feature: featured }) {
    return (
        <article className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_18px_45px_rgba(15,23,42,0.08)] backdrop-blur-sm transition hover:-translate-y-1 hover:bg-[var(--surface-strong)] hover:shadow-[0_24px_60px_rgba(15,23,42,0.16)]">
            <h1 className="text-lg font-bold text-[var(--accent)]">{feature.event}</h1>
            <h3 className="text-xl font-semibold text-[var(--foreground)]">{feature.title}</h3>
            <p className="mt-2 text-[var(--muted-foreground)]">
                {feature.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
                {feature.tech.map((t, index) => (
                    <span key={index} className="rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-3 py-1 text-xs font-medium text-[var(--foreground)]">
                        {t}
                    </span>
                ))}
            </div>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-[var(--muted)]">
                {feature.highlights.map((h, index) => (
                    <li key={index}>{h}</li>
                ))}
            </ul>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-[var(--muted)]">
                {feature.acheivements.map((a, index) => (
                    <li key={index}>{a}</li>
                ))}
            </ul>
            <div className="mt-6">
                <a href={feature.github}
                 target="_blank" 
                 rel="noopener" 
                 className="mt-4 inline-block text-sm font-semibold text-[var(--accent)] transition hover:text-[var(--accent-strong)]">
                    View on GitHub
                </a>
            </div>
        </article>
    );
}