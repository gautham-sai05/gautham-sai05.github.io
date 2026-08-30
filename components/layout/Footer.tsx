import Link from 'next/link';
import { Github, Linkedin, Mail, Terminal, MapPin } from 'lucide-react';

const footerLinks = [
  {
    label: 'Navigate',
    links: [
      { href: '/', label: 'Home' },
      { href: '/projects', label: 'Projects' },
      { href: '/research', label: 'Research' },
      { href: '/timeline', label: 'Timeline' },
    ],
  },
  {
    label: 'Contact',
    links: [
      { href: '/contact', label: 'Contact' },
      { href: '/resume', label: 'Resume' },
    ],
  },
];

const socialLinks = [
  {
    href: 'https://github.com/gautham-sai05',
    label: 'GitHub',
    icon: Github,
    username: 'gautham-sai05',
  },
  {
    href: 'https://www.linkedin.com/in/gautham-sai-b3781b205',
    label: 'LinkedIn',
    icon: Linkedin,
    username: 'gautham-sai',
  },
  {
    href: 'mailto:2005gauthamsai@gmail.com',
    label: 'Email',
    icon: Mail,
    username: '2005gauthamsai@gmail.com',
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer" role="contentinfo" aria-label="Site footer">
      <div className="container footer-inner">
        <div className="footer-brand-block">
          <div className="brand-mark small">
            <span className="brand-icon">
              <Terminal className="w-4 h-4" aria-hidden="true" />
            </span>
            <span className="brand-name">
              gautham-sai05<span className="brand-cursor">_</span>
            </span>
          </div>
          <p className="footer-copy">
            Embedded systems, hardware security, and practical security research across embedded firmware, automotive systems, and hardware prototyping.
          </p>
          <div className="footer-meta">
            <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
            Amritapuri, Kerala
          </div>
          <div className="social-row">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={social.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className="social-link"
                  aria-label={`${social.label}: ${social.username}`}
                >
                  <Icon className="w-4 h-4" aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>

        {footerLinks.map((column) => (
          <div key={column.label} className="footer-column">
            <p className="footer-label">{column.label}</p>
            <ul className="footer-list" role="list">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="container footer-bottom">
        <p>&copy; {year} Gautham Sai. Built with Next.js.</p>
        <p className="mono-line">
          <span className="text-primary">//</span> ECE @ Amrita · Team bi0s
        </p>
      </div>
    </footer>
  );
}
