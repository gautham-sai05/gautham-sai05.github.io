'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Terminal } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/research', label: 'Research' },
  { href: '/resume', label: 'Resume' },
  { href: '/timeline', label: 'Timeline' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        role="banner"
        className={`navbar ${scrolled ? 'navbar-solid' : 'navbar-transparent'}`}
        aria-label="Main navigation"
      >
        <div className="container nav-shell">
          <Link href="/" className="brand-mark" aria-label="Gautham Sai — Home">
            <span className="brand-icon">
              <Terminal className="w-4 h-4" aria-hidden="true" />
            </span>
            <span className="brand-name">
              gautham-sai05<span className="brand-cursor">_</span>
            </span>
          </Link>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navLinks.map((link) => {
              const isActive =
                link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="desktop-actions">
            <Link href="/resume" className="btn-secondary btn-small">
              Resume
            </Link>
          </div>

          <button
            className="mobile-menu-button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {mobileOpen && (
        <div className="mobile-menu-overlay" id="mobile-menu" role="dialog" aria-modal="true" aria-label="Mobile navigation menu">
          <div className="mobile-menu-backdrop" onClick={() => setMobileOpen(false)} aria-hidden="true" />
          <div className="mobile-menu-panel">
            <nav className="mobile-nav" aria-label="Mobile navigation">
              {navLinks.map((link) => {
                const isActive =
                  link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
            <Link href="/resume" className="btn-primary mobile-cta" onClick={() => setMobileOpen(false)}>
              View Resume
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
