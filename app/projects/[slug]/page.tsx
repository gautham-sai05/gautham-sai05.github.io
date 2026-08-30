import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { projects } from '@/content/data/projects';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: 'Project Not Found' };

  return {
    title: `${project.title} | Gautham Sai`,
    description: project.summary,
    openGraph: {
      title: `${project.title}`,
      description: project.summary,
      type: 'article',
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="site-shell">
      <section className="section-surface">
        <div className="container" style={{ maxWidth: '1100px' }}>
          <Link href="/projects" className="text-link" style={{ marginBottom: '1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
            <ArrowLeft size={16} /> Back to Projects
          </Link>

          <div className="project-panel-header" style={{ marginBottom: '1.5rem' }}>
            <div>
              <div className="card-kicker">{project.status.toUpperCase()}</div>
              <h1 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', marginBottom: '0.25rem' }}>
                {project.title}
              </h1>
            </div>
            <span className="panel-tag">{project.subtitle}</span>
          </div>

          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.08rem', marginBottom: '1.5rem', maxWidth: '800px' }}>
            {project.summary}
          </p>

          <div className="project-body-grid" style={{ marginBottom: '2rem' }}>
            <div className="project-body-copy">
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.7rem', fontWeight: 600 }}>Problem</h3>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.2rem' }}>
                {project.problem}
              </p>

              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.7rem', fontWeight: 600 }}>Objectives</h3>
              <ul style={{ paddingLeft: '1.2rem', color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.2rem' }}>
                {project.objectives.map((obj) => (
                  <li key={obj}>{obj}</li>
                ))}
              </ul>

              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.7rem', fontWeight: 600 }}>Architecture</h3>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.2rem' }}>
                {project.architecture}
              </p>

              {project.hardware && (
                <>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.7rem', fontWeight: 600 }}>Hardware</h3>
                  <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.2rem' }}>
                    {project.hardware}
                  </p>
                </>
              )}

              {project.firmware && (
                <>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.7rem', fontWeight: 600 }}>Firmware</h3>
                  <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.2rem' }}>
                    {project.firmware}
                  </p>
                </>
              )}

              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.7rem', fontWeight: 600 }}>Challenges</h3>
              <ul style={{ paddingLeft: '1.2rem', color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.2rem' }}>
                {project.challenges.map((challenge) => (
                  <li key={challenge}>{challenge}</li>
                ))}
              </ul>

              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.7rem', fontWeight: 600 }}>Results</h3>
              <ul style={{ paddingLeft: '1.2rem', color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.2rem' }}>
                {project.results.map((result) => (
                  <li key={result}>{result}</li>
                ))}
              </ul>

              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.7rem', fontWeight: 600 }}>Lessons Learned</h3>
              <ul style={{ paddingLeft: '1.2rem', color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.2rem' }}>
                {project.lessons.map((lesson) => (
                  <li key={lesson}>{lesson}</li>
                ))}
              </ul>

              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.7rem', fontWeight: 600 }}>Future Work</h3>
              <ul style={{ paddingLeft: '1.2rem', color: 'var(--color-text-muted)', lineHeight: 1.8 }}>
                {project.futureWork.map((work) => (
                  <li key={work}>{work}</li>
                ))}
              </ul>
            </div>

            <div className="project-rail">
              <div className="rail-block">
                <span className="rail-label">Tech Stack</span>
                <div className="tag-row">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="chip tertiary">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {project.tags.length > 0 && (
                <div className="rail-block">
                  <span className="rail-label">Tags</span>
                  <div className="tag-row">
                    {project.tags.map((tag) => (
                      <span key={tag} className="chip tertiary">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="rail-block">
                <span className="rail-label">Year</span>
                <p style={{ color: 'var(--color-text-muted)' }}>{project.year}</p>
              </div>
            </div>
          </div>

          <div className="panel-actions">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="btn-secondary btn-small">
                <Github size={14} /> Repository
              </a>
            )}
            {project.paper && (
              <a href={project.paper} target="_blank" rel="noreferrer" className="btn-secondary btn-small">
                <ExternalLink size={14} /> Paper
              </a>
            )}
          </div>
        </div>
      </section>

      <section className="section-panel">
        <div className="container" style={{ maxWidth: '1100px' }}>
          <div className="eyebrow">EXPLORE MORE</div>
          <h2 className="section-title">View all projects</h2>
          <Link href="/projects" className="btn-primary" style={{ marginTop: '1rem' }}>
            Portfolio <ExternalLink size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}

