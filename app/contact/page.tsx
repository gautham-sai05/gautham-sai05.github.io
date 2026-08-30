import type { Metadata } from 'next';
import { Github, Linkedin, Mail, MapPin, ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Gautham Sai for embedded systems, hardware security, and security research collaborations.',
};

const links = [
  {
    label: 'Email',
    value: '2005gauthamsai@gmail.com',
    href: 'mailto:2005gauthamsai@gmail.com',
    icon: Mail,
  },
  {
    label: 'GitHub',
    value: 'github.com/gautham-sai05',
    href: 'https://github.com/gautham-sai05',
    icon: Github,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/gautham-sai-b3781b205',
    href: 'https://www.linkedin.com/in/gautham-sai-b3781b205',
    icon: Linkedin,
  },
];

export default function ContactPage() {
  return (
    <div className="site-shell">
      <section className="section-panel">
        <div className="container" style={{ maxWidth: '840px' }}>
          <div className="eyebrow">J2 — CONTACT</div>
          <h1 className="section-title">Reach out.</h1>

          <div className="panel-card" style={{ marginTop: '1.5rem' }}>
            <div className="card-kicker">Direct contact</div>
            <div style={{ display: 'grid', gap: '1rem' }}>
              {links.map(({ label, value, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer' : undefined}
                  className="btn-secondary"
                  style={{ justifyContent: 'space-between', width: '100%' }}
                >
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.65rem' }}>
                    <Icon size={16} /> {label}
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', letterSpacing: '0.08em' }}>{value}</span>
                  <ArrowUpRight size={14} />
                </a>
              ))}
            </div>
          </div>

          <div className="panel-card" style={{ marginTop: '1.2rem' }}>
            <div className="card-kicker">Location</div>
            <p style={{ color: 'var(--color-text-muted)' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                <MapPin size={14} /> Amritapuri, Kerala, India
              </span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
