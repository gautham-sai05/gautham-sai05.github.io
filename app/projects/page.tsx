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

export default function ProjectsPage() {
  return (
    <div
      className="blueprint-bg min-h-screen"
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
                className="relative h-44 overflow-hidden flex-shrink-0"
                style={{ backgroundColor: 'var(--color-elevated)' }}
              >
                <div className="absolute inset-0 blueprint-bg-sm" aria-hidden="true" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-mono text-4xl font-bold text-primary/8 select-none">
                    {project.year}
                  </span>
                </div>
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
