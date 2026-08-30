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
          <path d="M102 48 L118 26 L134 34 L145 26 L152 40 L158 76 L164 94 L158 112 L154 168 L142 188 L126 196 L110 188 L100 168 L96 118 L90 96 L96 74 Z" {...common} />
          <path d="M106 78 L90 108 M131 80 L150 110 M108 110 L96 144 M131 110 L146 144 M122 120 L118 170 M136 120 L146 170" {...common} opacity="0.85" />
          <circle cx="205" cy="70" r="16" {...common} />
          <path d="M205 52 V30 M205 88 V104 M189 70 H168 M221 70 H242" {...common} opacity="0.8" />
          <path d="M74 174 H98 M154 174 H178 M112 186 H146" {...common} opacity="0.72" />
          <path d="M65 148 L96 136 L120 150 L145 130 L170 144 L196 136" {...common} opacity="0.6" />
        </svg>
      );
    case 'automotive-can-bus-attack-simulator':
      return (
        <svg viewBox="0 0 260 220" className="blueprint-svg" aria-hidden="true">
          {sharedLines}
          <rect x="34" y="74" width="68" height="56" rx="6" {...common} />
          <rect x="156" y="74" width="68" height="56" rx="6" {...common} />
          <rect x="95" y="38" width="70" height="20" rx="4" {...common} opacity="0.8" />
          <path d="M102 74 V110 H156 M104 102 H156 M100 144 V168 H82 M160 144 V168 H178 M82 168 H178" {...common} />
          <circle cx="80" cy="180" r="11" {...common} />
          <circle cx="130" cy="180" r="11" {...common} />
          <circle cx="180" cy="180" r="11" {...common} />
          <path d="M68 180 H52 M192 180 H208" {...common} opacity="0.7" />
          <path d="M130 58 V74 M130 130 V146" {...common} opacity="0.68" />
          <path d="M34 50 H226" {...common} opacity="0.24" />
        </svg>
      );
    case 'rf-fingerprinting-deep-learning':
      return (
        <svg viewBox="0 0 260 220" className="blueprint-svg" aria-hidden="true">
          {sharedLines}
          <circle cx="130" cy="68" r="28" {...common} />
          <path d="M130 38 V16 M130 98 V124 M104 68 H82 M156 68 H178" {...common} opacity="0.8" />
          <path d="M64 160 L94 120 L116 138 L138 96 L170 130 L202 108" {...common} />
          <path d="M68 178 C96 154, 110 160, 130 154 C154 146, 175 162, 198 150" {...common} opacity="0.8" />
          <path d="M72 86 H102 M158 86 H188" {...common} opacity="0.7" />
          <circle cx="118" cy="152" r="3" fill="rgba(47,91,234,0.9)" />
          <circle cx="154" cy="142" r="3" fill="rgba(47,91,234,0.9)" />
          <circle cx="175" cy="120" r="3" fill="rgba(47,91,234,0.9)" />
        </svg>
      );
    case 'peerdrop-ble-p2p':
      return (
        <svg viewBox="0 0 260 220" className="blueprint-svg" aria-hidden="true">
          {sharedLines}
          <circle cx="84" cy="100" r="25" {...common} />
          <circle cx="176" cy="100" r="25" {...common} />
          <path d="M108 100 H152 M130 80 V120 M84 64 V36 M176 64 V36 M84 136 V164 M176 136 V164" {...common} opacity="0.8" />
          <path d="M144 94 L165 82 L158 108 L182 116 L159 130" {...common} opacity="0.7" />
          <path d="M44 70 H60 M44 146 H60 M200 70 H216 M200 146 H216" {...common} opacity="0.6" />
          <path d="M58 104 H76 M184 104 H202" {...common} opacity="0.7" />
        </svg>
      );
    case 'mac-attendance-system':
      return (
        <svg viewBox="0 0 260 220" className="blueprint-svg" aria-hidden="true">
          {sharedLines}
          <rect x="66" y="60" width="128" height="84" rx="8" {...common} />
          <path d="M78 84 H180 M78 108 H160 M78 132 H144" {...common} opacity="0.72" />
          <circle cx="86" cy="170" r="12" {...common} />
          <circle cx="130" cy="170" r="12" {...common} />
          <circle cx="174" cy="170" r="12" {...common} />
          <path d="M86 182 V198 M130 182 V198 M174 182 V198" {...common} opacity="0.7" />
          <path d="M46 46 H214" {...common} opacity="0.26" />
          <path d="M44 192 C76 168, 106 170, 130 180 C156 190, 186 188, 214 170" {...common} opacity="0.62" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 260 220" className="blueprint-svg" aria-hidden="true">
          {sharedLines}
          <path d="M52 176 L84 94 L116 152 L180 58 L220 176" {...common} />
          <circle cx="128" cy="92" r="18" {...common} />
          <path d="M50 50 H210" {...common} opacity="0.26" />
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
