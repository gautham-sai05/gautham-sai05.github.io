import type { Metadata } from 'next';
import Link from 'next/link';
import { ExternalLink, BookOpen, Shield, Wifi, Terminal, ChevronRight } from 'lucide-react';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { publications, researchAreas, ctfParticipations } from '@/content/data/research';

export const metadata: Metadata = {
  title: 'Research',
  description:
    'Publications, research areas, and CTF participation by Gautham Sai — embedded security, automotive cybersecurity, RF fingerprinting, and hardware security.',
};

export default function ResearchPage() {
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
            label="Research"
            title="Publications & Research"
            subtitle="Peer-reviewed publications, active research areas, and competitive security research through Team bi0s CTF participation."
          />
        </div>
      </div>

      <div
        className="container"
        style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: '64px 32px' }}
      >
        {/* Publications */}
        <section aria-labelledby="publications-heading" className="mb-16">
          <h2
            id="publications-heading"
            className="text-display-sm mb-8 flex items-center gap-3"
          >
            <BookOpen className="w-6 h-6 text-primary" aria-hidden="true" />
            Publications
          </h2>
          <div className="space-y-6">
            {publications.map((pub) => (
              <article
                key={pub.id}
                id={`pub-${pub.id}`}
                className="card p-6 lg:p-8"
                aria-labelledby={`pub-title-${pub.id}`}
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="tag tag-success">{pub.type}</span>
                      <span className="font-mono text-xs text-text-subtle">
                        {pub.month} {pub.year}
                      </span>
                    </div>
                    <h3
                      id={`pub-title-${pub.id}`}
                      className="text-lg font-semibold text-text leading-snug mb-2"
                    >
                      {pub.title}
                    </h3>
                    <p className="text-sm text-primary font-mono mb-1">{pub.venue}</p>
                    <p className="text-xs text-text-subtle">
                      {pub.authors.join(' · ')}
                    </p>
                  </div>
                  {pub.link && (
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary shrink-0"
                      aria-label={`View paper: ${pub.title}`}
                    >
                      <ExternalLink className="w-4 h-4" aria-hidden="true" />
                      View Paper
                    </a>
                  )}
                </div>
                <p className="text-sm text-text-muted leading-relaxed mb-4">
                  {pub.abstract}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {pub.tags.map((tag) => (
                    <span key={tag} className="tag text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Research Areas */}
        <section aria-labelledby="research-areas-heading" className="mb-16">
          <h2
            id="research-areas-heading"
            className="text-display-sm mb-8 flex items-center gap-3"
          >
            <Shield className="w-6 h-6 text-primary" aria-hidden="true" />
            Research Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {researchAreas.map((area) => (
              <div
                key={area.id}
                id={`area-${area.id}`}
                className="card p-6"
                aria-labelledby={`area-title-${area.id}`}
              >
                <h3
                  id={`area-title-${area.id}`}
                  className="text-base font-semibold text-text mb-3"
                >
                  {area.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed mb-4">
                  {area.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {area.tags.map((tag) => (
                    <span key={tag} className="tag text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTF Participation */}
        <section aria-labelledby="ctf-heading">
          <h2
            id="ctf-heading"
            className="text-display-sm mb-4 flex items-center gap-3"
          >
            <Terminal className="w-6 h-6 text-primary" aria-hidden="true" />
            CTF & Competitive Security
          </h2>
          <p className="text-body-md text-text-muted mb-8 max-w-2xl">
            Active participant in hardware security CTF competitions through{' '}
            <a
              href="https://bi0s.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-hover transition-colors duration-200"
            >
              Team bi0s
            </a>
            , India's top-ranked CTF team. Focused on hardware category challenges involving
            embedded firmware analysis, protocol reverse engineering, and hardware exploitation.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ctfParticipations.map((ctf) => (
              <div
                key={ctf.id}
                id={`ctf-${ctf.id}`}
                className="card p-5"
                aria-labelledby={`ctf-name-${ctf.id}`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs text-text-subtle">{ctf.year}</span>
                  <span className="tag text-[10px] px-1.5 py-0.5">{ctf.category}</span>
                </div>
                <h3
                  id={`ctf-name-${ctf.id}`}
                  className="text-sm font-semibold text-text mb-2"
                >
                  {ctf.name}
                </h3>
                <p className="text-xs text-text-muted leading-relaxed">{ctf.description}</p>
                <p className="mt-3 text-xs font-mono text-primary/70">{ctf.team}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
