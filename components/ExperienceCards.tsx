"use client"

type ExperienceData = {
  role: string;
  company: string;
  location: string;
  period: string;
  team: string;
  highlights: string[];
};

export default function ExperienceCards({
  job,
}:{
  job:ExperienceData,
}) {
  return (
    <article className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_18px_45px_rgba(15,23,42,0.08)] backdrop-blur-sm transition hover:-translate-y-1 hover:bg-[var(--surface-strong)] hover:shadow-[0_24px_60px_rgba(15,23,42,0.16)]">
      <h3 className="text-xl font-semibold text-[var(--foreground)]">{job.role}</h3>
      <p className="mt-2 text-sm text-[var(--muted)]">
        {job.company} | {job.location} | {job.period}
      </p>
      
      {job.team && (
        <p className="mt-1 text-sm font-medium text-[var(--accent)]">
            {job.team}
        </p>
      )}
        <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-[var(--muted)]">
            {job.highlights.map((point,index)=>(
                <li key={index}>{point}</li>
            ))}
        </ul>
    
    </article>
  );
}
