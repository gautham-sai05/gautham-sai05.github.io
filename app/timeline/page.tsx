import type { Metadata } from 'next';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { timeline } from '@/content/data/timeline';
import { GraduationCap, Trophy, BookOpen, Users, Star, FlaskConical } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Timeline',
  description:
    'Engineering journey timeline — education, competitions, research, publications, and achievements by Gautham Sai.',
};

const typeConfig = {
  education: { icon: GraduationCap, color: 'text-primary', bg: 'rgba(77, 168, 255, 0.1)', border: 'rgba(77, 168, 255, 0.25)', label: 'Education' },
  competition: { icon: Trophy, color: 'text-warning', bg: 'rgba(242, 201, 76, 0.08)', border: 'rgba(242, 201, 76, 0.2)', label: 'Competition' },
  publication: { icon: BookOpen, color: 'text-success', bg: 'rgba(102, 217, 184, 0.08)', border: 'rgba(102, 217, 184, 0.2)', label: 'Publication' },
  research: { icon: FlaskConical, color: 'text-primary', bg: 'rgba(77, 168, 255, 0.06)', border: 'rgba(77, 168, 255, 0.15)', label: 'Research' },
  leadership: { icon: Users, color: 'text-warning', bg: 'rgba(242, 201, 76, 0.08)', border: 'rgba(242, 201, 76, 0.2)', label: 'Leadership' },
  achievement: { icon: Star, color: 'text-success', bg: 'rgba(102, 217, 184, 0.08)', border: 'rgba(102, 217, 184, 0.2)', label: 'Achievement' },
};

export default function TimelinePage() {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: 'var(--color-bg)', paddingTop: 'var(--nav-height)' }}
    >
      {/* Header */}
      <div
        style={{ borderBottom: '1px solid var(--color-border)' }}
      >
        <div
          className="container"
          style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: '64px 32px' }}
        >
          <SectionHeader
            label="Journey"
            title="Engineering Timeline"
            subtitle="Education, research, competitions, publications, and leadership milestones in chronological order."
          />
        </div>
      </div>

      <div
        className="container"
        style={{ maxWidth: '860px', margin: '0 auto', padding: '64px 32px' }}
      >
        <ol className="relative" aria-label="Engineering timeline">
          {/* Vertical line */}
          <div
            className="absolute left-6 top-4 bottom-4 w-px"
            style={{
              background: 'linear-gradient(to bottom, transparent, var(--color-border-strong) 8%, var(--color-border-strong) 92%, transparent)',
            }}
            aria-hidden="true"
          />

          {timeline.map((entry, i) => {
            const config = typeConfig[entry.type];
            const Icon = config.icon;

            return (
              <li
                key={entry.id}
                id={`timeline-${entry.id}`}
                className="relative flex gap-6 pb-10 last:pb-0"
                aria-labelledby={`tl-title-${entry.id}`}
              >
                {/* Dot */}
                <div
                  className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center border"
                  style={{
                    backgroundColor: config.bg,
                    borderColor: config.border,
                  }}
                  aria-hidden="true"
                >
                  <Icon className={`w-5 h-5 ${config.color}`} />
                </div>

                {/* Card */}
                <div
                  className="flex-1 card p-5 -mt-1"
                  style={{
                    animationDelay: `${i * 80}ms`,
                  }}
                >
                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span
                      className="tag text-[10px] px-1.5 py-0.5"
                      style={{ color: config.color.replace('text-', '') === 'primary' ? 'var(--color-primary)' : undefined }}
                    >
                      {config.label}
                    </span>
                    <span className="font-mono text-xs text-text-subtle">
                      {entry.month ? `${entry.month} ` : ''}{entry.year}
                    </span>
                    {entry.location && (
                      <span className="text-xs text-text-subtle">{entry.location}</span>
                    )}
                  </div>

                  <h2
                    id={`tl-title-${entry.id}`}
                    className="text-base font-semibold text-text mb-0.5 leading-snug"
                  >
                    {entry.title}
                  </h2>
                  <p className="text-sm font-mono text-primary/80 mb-3">
                    {entry.organization}
                  </p>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {entry.description}
                  </p>

                  {entry.highlights && entry.highlights.length > 0 && (
                    <ul className="mt-3 space-y-1.5" role="list">
                      {entry.highlights.map((h, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-xs text-text-subtle"
                        >
                          <span className="text-primary mt-0.5 flex-shrink-0" aria-hidden="true">▸</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}

                  {entry.link && (
                    <a
                      href={entry.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-primary hover:text-primary-hover transition-colors duration-200 mt-3"
                      aria-label={`Learn more: ${entry.title}`}
                    >
                      View →
                    </a>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
