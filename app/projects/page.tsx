import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Github, ExternalLink, Filter } from 'lucide-react';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { projects } from '@/content/data/projects';

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'Engineering case studies in embedded systems, hardware security, automotive cybersecurity, and wireless systems by Gautham Sai.',
};

function BlueprintProjectArt({ slug }: { slug: string }) {
  const common = {
    stroke: 'rgba(119,214,255,0.88)',
    strokeWidth: 1.4,
    fill: 'none',
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };

  const sharedLines = (
    <>
      <path d="M8 72 H240" {...common} opacity="0.28" />
      <path d="M8 140 H240" {...common} opacity="0.22" />
      <path d="M70 16 V210" {...common} opacity="0.2" />
      <path d="M160 16 V210" {...common} opacity="0.2" />
    </>
  );

  switch (slug) {
    case 'smart-anti-tremor-glove':
      return (
        <svg viewBox="0 0 260 220" className="blueprint-svg" aria-hidden="true">
          {sharedLines}
          <path d="M116 50 L118 26 L125 30 L131 24 L136 28 L145 24 L151 36 L151 70 L162 90 L168 106 L160 130 L154 182 L146 192 L132 198 L120 191 L111 177 L105 130 L100 106 L107 88 L116 70 Z" {...common} />
          <path d="M120 60 L108 94 M129 60 L142 94 M118 92 L105 122 M130 92 L144 122 M118 118 L111 160 M132 118 L138 160" {...common} opacity="0.86" />
          <path d="M143 138 H202 M106 146 H66 M118 172 H83 M136 172 H176" {...common} opacity="0.72" />
          <circle cx="208" cy="76" r="12" {...common} />
          <path d="M208 60 V42 M208 92 V108 M196 76 H178 M220 76 H238" {...common} opacity="0.78" />
          <path d="M64 182 L75 168 L88 182 M192 182 L206 168 L216 182" {...common} opacity="0.6" />
        </svg>
      );
    case 'automotive-can-bus-attack-simulator':
      return (
        <svg viewBox="0 0 260 220" className="blueprint-svg" aria-hidden="true">
          {sharedLines}
          <rect x="38" y="72" width="74" height="64" rx="4" {...common} />
          <rect x="148" y="72" width="74" height="64" rx="4" {...common} />
          <path d="M112 104 H148 M76 104 H112 M150 104 H174 M112 72 V136 M148 72 V136" {...common} opacity="0.78" />
          <circle cx="62" cy="154" r="11" {...common} />
          <circle cx="130" cy="154" r="11" {...common} />
          <circle cx="198" cy="154" r="11" {...common} />
          <path d="M62 165 V190 M130 165 V190 M198 165 V190 M62 190 H198" {...common} opacity="0.7" />
          <path d="M30 48 H230" {...common} opacity="0.25" />
        </svg>
      );
    case 'rf-fingerprinting-deep-learning':
      return (
        <svg viewBox="0 0 260 220" className="blueprint-svg" aria-hidden="true">
          {sharedLines}
          <circle cx="130" cy="72" r="26" {...common} />
          <path d="M130 44 V26 M130 98 V112 M104 72 H82 M156 72 H178" {...common} opacity="0.8" />
          <path d="M76 170 L100 128 L124 154 L152 96 L182 152 L206 118" {...common} />
          <path d="M72 178 C92 160, 104 156, 124 158 C141 160, 152 170, 170 166 C192 162, 210 142, 216 132" {...common} opacity="0.8" />
          <path d="M84 88 H118 M142 88 H176" {...common} opacity="0.7" />
        </svg>
      );
    case 'peerdrop-ble-p2p':
      return (
        <svg viewBox="0 0 260 220" className="blueprint-svg" aria-hidden="true">
          {sharedLines}
          <circle cx="80" cy="112" r="22" {...common} />
          <circle cx="180" cy="112" r="22" {...common} />
          <path d="M102 112 H158 M130 92 V134 M80 66 V40 M180 66 V40 M80 156 V182 M180 156 V182" {...common} opacity="0.8" />
          <path d="M130 112 L150 101 L143 120 L162 126 L146 138" {...common} opacity="0.72" />
          <path d="M52 56 H68 M192 56 H208 M52 168 H68 M192 168 H208" {...common} opacity="0.58" />
        </svg>
      );
    case 'mac-attendance-system':
      return (
        <svg viewBox="0 0 260 220" className="blueprint-svg" aria-hidden="true">
          {sharedLines}
          <rect x="62" y="58" width="136" height="86" rx="9" {...common} />
          <path d="M80 82 H180 M80 104 H162 M80 126 H145" {...common} opacity="0.72" />
          <circle cx="84" cy="166" r="12" {...common} />
          <circle cx="130" cy="166" r="12" {...common} />
          <circle cx="176" cy="166" r="12" {...common} />
          <path d="M84 178 V196 M130 178 V196 M176 178 V196 M84 196 H176" {...common} opacity="0.7" />
          <path d="M42 42 H214" {...common} opacity="0.25" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 260 220" className="blueprint-svg" aria-hidden="true">
          {sharedLines}
          <path d="M52 176 L84 94 L116 152 L180 58 L220 176" {...common} />
          <circle cx="128" cy="92" r="18" {...common} />
          <path d="M50 46 H210" {...common} opacity="0.25" />
        </svg>
      );
  }
}

export default function ProjectsPage() {
  return (
    <div
      className="min-h-screen"
      style={{ paddingTop: 'var(--nav-height)' }}
    >
      <div
        className="container section"
        style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: '64px 32px' }}
      >
        <SectionHeader
          label="Portfolio"
          title="Engineering Projects"
          subtitle="Detailed case studies documenting hardware design, firmware, security research, and implementation across embedded systems domains."
        />

        {/* Category filter indicator */}
        <div className="flex flex-wrap gap-2 mb-10" role="list" aria-label="Project categories">
          {['All', 'Embedded', 'Security', 'Wireless', 'Hardware', 'ML'].map((cat) => (
            <span
              key={cat}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all duration-200 cursor-default
                ${cat === 'All'
                  ? 'bg-primary/10 border-primary/30 text-primary'
                  : 'border-border text-text-muted hover:text-text hover:border-border-strong'
                }`}
              role="listitem"
            >
              {cat}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <article
              key={project.slug}
              id={`project-${project.slug}`}
              className="card overflow-hidden flex flex-col group"
              style={{
                animationDelay: `${i * 80}ms`,
              }}
              aria-labelledby={`ptitle-${project.slug}`}
            >
              {/* Image area */}
              <div
                className="project-thumb relative h-44 overflow-hidden flex-shrink-0"
                style={{ backgroundColor: 'var(--color-elevated)' }}
              >
                <BlueprintProjectArt slug={project.slug} />
                <div className="project-thumb-label">{project.year}</div>
                <div className="absolute top-3 left-3 flex gap-1.5">
                  <span
                    className={`tag text-[10px] ${
                      project.status === 'published' ? 'tag-success' : ''
                    }`}
                  >
                    {project.status === 'published'
                      ? 'IEEE Published'
                      : project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                  </span>
                  {project.featured && (
                    <span className="tag tag-warning text-[10px]">Featured</span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h2
                  id={`ptitle-${project.slug}`}
                  className="text-sm font-semibold text-text mb-1 leading-snug"
                >
                  {project.title}
                </h2>
                <p className="text-[11px] font-mono text-primary mb-3">{project.subtitle}</p>
                <p className="text-xs text-text-muted leading-relaxed flex-1 mb-4">
                  {project.summary.slice(0, 130)}…
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span key={tech} className="tag text-[10px] px-1.5 py-0.5">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2 mt-auto">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="btn-primary text-xs py-2 px-3 flex-1 justify-center"
                    aria-label={`Read case study: ${project.title}`}
                  >
                    Case Study
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </Link>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary text-xs py-2 px-3"
                      aria-label={`${project.title} on GitHub`}
                    >
                      <Github className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                  )}
                  {project.paper && (
                    <a
                      href={project.paper}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary text-xs py-2 px-3"
                      aria-label={`Paper: ${project.title}`}
                    >
                      <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
