'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { projects } from '@/content/data/projects';

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
                <div className="absolute inset-0" aria-hidden="true" />
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
