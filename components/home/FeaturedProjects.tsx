'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { projects } from '@/content/data/projects';

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
          <path d="M116 48 L118 24 L125 28 L131 22 L136 26 L144 24 L150 38 L150 70 L160 90 L166 104 L160 126 L155 176 L148 190 L133 198 L120 192 L111 176 L105 128 L100 104 L106 88 L116 70 Z" {...common} />
          <path d="M120 60 L106 94 M129 60 L142 94 M118 90 L104 118 M130 90 L146 118 M118 115 L111 160 M132 115 L138 160" {...common} opacity="0.85" />
          <path d="M142 136 H188 M108 146 H68 M118 172 H84 M136 172 H170" {...common} opacity="0.7" />
          <circle cx="208" cy="70" r="12" {...common} />
          <path d="M208 58 V44 M208 82 V96 M196 70 H180 M220 70 H236" {...common} opacity="0.72" />
        </svg>
      );
    case 'automotive-can-bus-attack-simulator':
      return (
        <svg viewBox="0 0 260 220" className="blueprint-svg" aria-hidden="true">
          {sharedLines}
          <rect x="46" y="74" width="70" height="58" rx="4" {...common} />
          <rect x="144" y="74" width="70" height="58" rx="4" {...common} />
          <path d="M90 104 H144 M116 74 V132 M144 104 H170" {...common} opacity="0.75" />
          <circle cx="66" cy="150" r="10" {...common} />
          <circle cx="130" cy="150" r="10" {...common} />
          <circle cx="194" cy="150" r="10" {...common} />
          <path d="M66 160 V188 M130 160 V188 M194 160 V188 M66 188 H194" {...common} opacity="0.65" />
          <path d="M30 44 H230" {...common} opacity="0.25" />
        </svg>
      );
    case 'rf-fingerprinting-deep-learning':
      return (
        <svg viewBox="0 0 260 220" className="blueprint-svg" aria-hidden="true">
          {sharedLines}
          <path d="M76 160 L100 124 L123 154 L152 98 L182 150 L206 120" {...common} />
          <path d="M72 172 C92 150, 100 146, 122 148 C138 150, 146 160, 170 156 C192 152, 210 134, 216 126" {...common} opacity="0.8" />
          <path d="M85 90 H118 M142 90 H175" {...common} opacity="0.65" />
          <circle cx="130" cy="72" r="26" {...common} />
          <path d="M130 46 V30 M130 98 V112 M104 72 H90 M156 72 H172" {...common} opacity="0.72" />
        </svg>
      );
    case 'peerdrop-ble-p2p':
      return (
        <svg viewBox="0 0 260 220" className="blueprint-svg" aria-hidden="true">
          {sharedLines}
          <circle cx="82" cy="110" r="22" {...common} />
          <circle cx="182" cy="110" r="22" {...common} />
          <path d="M102 110 H162 M130 90 V130 M82 66 V40 M182 66 V40 M82 154 V180 M182 154 V180" {...common} opacity="0.8" />
          <path d="M130 110 L150 102 L142 118 L160 124 L146 136" {...common} opacity="0.72" />
          <path d="M52 52 H68 M192 52 H208 M52 168 H68 M192 168 H208" {...common} opacity="0.56" />
        </svg>
      );
    case 'mac-attendance-system':
      return (
        <svg viewBox="0 0 260 220" className="blueprint-svg" aria-hidden="true">
          {sharedLines}
          <rect x="64" y="58" width="132" height="88" rx="8" {...common} />
          <path d="M80 82 H180 M80 104 H160 M80 126 H146" {...common} opacity="0.72" />
          <circle cx="82" cy="166" r="12" {...common} />
          <circle cx="130" cy="166" r="12" {...common} />
          <circle cx="178" cy="166" r="12" {...common} />
          <path d="M82 178 V196 M130 178 V196 M178 178 V196" {...common} opacity="0.7" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 260 220" className="blueprint-svg" aria-hidden="true">
          {sharedLines}
          <path d="M52 176 L84 92 L116 150 L180 58 L220 176" {...common} />
          <circle cx="128" cy="92" r="18" {...common} />
          <path d="M50 46 H210" {...common} opacity="0.3" />
        </svg>
      );
  }
}

export function FeaturedProjects() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { threshold: 0.05 });

  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section
      id="featured-projects"
      className="section blueprint-bg"
      aria-label="Featured engineering projects"
      ref={ref}
    >
      <div className="container" style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: '0 32px' }}>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 lg:mb-16">
          <SectionHeader
            label="Work"
            title="Featured Projects"
            subtitle="Engineering case studies from embedded systems to automotive security."
            className="mb-0"
          />
          <Link
            href="/projects"
            className="btn-ghost shrink-0 group"
            aria-label="View all projects"
          >
            All Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {featured.map((project, i) => (
            <article
              key={project.slug}
              id={`featured-${project.slug}`}
              className="card overflow-hidden flex flex-col group"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(24px)',
                transition: `opacity 350ms ease ${i * 120}ms, transform 350ms ease ${i * 120}ms`,
              }}
              aria-labelledby={`project-title-${project.slug}`}
            >
              {/* Project image placeholder */}
              <div
                className="project-thumb relative aspect-project overflow-hidden"
                style={{ backgroundColor: 'var(--color-elevated)' }}
              >
                <BlueprintProjectArt slug={project.slug} />
                <div className="absolute top-3 left-3 z-10">
                  <span
                    className={`tag text-[11px] ${
                      project.status === 'published'
                        ? 'tag-success'
                        : project.category === 'security'
                        ? ''
                        : ''
                    }`}
                  >
                    {project.status === 'published' ? '📄 IEEE Published' : project.category}
                  </span>
                </div>
                <div className="project-thumb-label">{project.year}</div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3
                  id={`project-title-${project.slug}`}
                  className="text-base font-semibold text-text mb-1 leading-snug"
                >
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-primary mb-3">{project.subtitle}</p>
                <p className="text-sm text-text-muted leading-relaxed flex-1 mb-4">
                  {project.summary.slice(0, 140)}…
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span key={tech} className="tag text-[10px] px-1.5 py-0.5">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="tag text-[10px] px-1.5 py-0.5 opacity-60">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 mt-auto">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="btn-primary text-xs px-3 py-2 flex-1 justify-center"
                    aria-label={`Read case study: ${project.title}`}
                  >
                    Read Case Study
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </Link>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary text-xs px-3 py-2"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                  )}
                  {project.paper && (
                    <a
                      href={project.paper}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary text-xs px-3 py-2"
                      aria-label={`Read paper: ${project.title}`}
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
    </section>
  );
}
