'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Download, ChevronDown } from 'lucide-react';

const ROLES = [
  'Embedded Systems Engineer',
  'Hardware Security Researcher',
  'PCB Designer',
  'Firmware Developer',
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];

    if (isPaused) {
      timeoutRef.current = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 2400);
      return;
    }

    if (!isDeleting && displayed.length < currentRole.length) {
      timeoutRef.current = setTimeout(() => {
        setDisplayed(currentRole.slice(0, displayed.length + 1));
      }, 60);
    } else if (!isDeleting && displayed.length === currentRole.length) {
      setIsPaused(true);
    } else if (isDeleting && displayed.length > 0) {
      timeoutRef.current = setTimeout(() => {
        setDisplayed(currentRole.slice(0, displayed.length - 1));
      }, 35);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [displayed, isDeleting, isPaused, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center blueprint-bg pcb-trace overflow-hidden"
      aria-label="Hero — Gautham Sai, Embedded Systems Engineer"
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(77, 168, 255, 0.07) 0%, transparent 70%)',
        }}
      />

      {/* PCB corner decorations */}
      <div className="absolute top-24 left-8 hidden xl:block" aria-hidden="true">
        <PCBCorner />
      </div>
      <div className="absolute top-24 right-8 hidden xl:block rotate-90" aria-hidden="true">
        <PCBCorner />
      </div>

      <div
        className="container relative z-10 flex flex-col items-start justify-center"
        style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: '0 32px', paddingTop: '8rem', paddingBottom: '6rem' }}
      >
        {/* Status badge */}
        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-8 border animate-fade-in"
          style={{
            borderColor: 'rgba(102, 217, 184, 0.3)',
            backgroundColor: 'rgba(102, 217, 184, 0.06)',
          }}
          role="status"
          aria-label="Available for opportunities"
        >
          <span
            className="w-2 h-2 rounded-full bg-success animate-pulse-slow"
            aria-hidden="true"
          />
          <span className="text-xs font-mono font-medium text-success">
            Open to opportunities
          </span>
        </div>

        {/* Role typewriter */}
        <div className="mb-6 animate-slide-up delay-100">
          <p
            className="font-mono text-sm font-medium text-primary mb-3 tracking-widest uppercase"
            aria-hidden="true"
          >
            {'// engineering_portfolio.init()'}
          </p>
          <h1
            className="text-display-xl text-text leading-none tracking-tight"
            style={{ letterSpacing: '-0.04em' }}
          >
            <span
              className="block gradient-text"
              aria-label={displayed}
              aria-live="polite"
              aria-atomic="true"
            >
              {displayed}
              <span
                className="inline-block w-0.5 h-[0.85em] ml-1 bg-primary align-middle animate-blink"
                aria-hidden="true"
              />
            </span>
          </h1>
        </div>

        {/* Tagline */}
        <div className="mb-10 animate-slide-up delay-200">
          <p className="text-body-lg text-text-muted max-w-2xl leading-relaxed text-pretty">
            Designing embedded hardware,{' '}
            <span className="text-text font-medium">firmware</span>,{' '}
            and{' '}
            <span className="text-text font-medium">secure systems</span>{' '}
            from concept to deployment.
          </p>
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap gap-6 mb-10 animate-slide-up delay-300">
          {[
            { value: '8.89', label: 'CGPA', mono: true },
            { value: 'bi0s', label: 'Hardware Lead', mono: true },
            { value: '2×', label: 'Hackathon Winner', mono: false },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col gap-0.5">
              <span
                className={`text-2xl font-bold text-text ${stat.mono ? 'font-mono' : ''}`}
              >
                {stat.value}
              </span>
              <span className="text-xs text-text-subtle uppercase tracking-wider font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 animate-slide-up delay-400">
          <Link
            href="/projects"
            className="btn-primary group"
            aria-label="View portfolio"
          >
            View Portfolio
            <ArrowRight
              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
              aria-hidden="true"
            />
          </Link>
          <a
            href="/resume.pdf"
            download
            className="btn-secondary group"
            aria-label="Download resume PDF"
          >
            <Download
              className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-200"
              aria-hidden="true"
            />
            Download Resume
          </a>
        </div>

        {/* Tech stack micro-list */}
        <div className="mt-12 flex flex-wrap items-center gap-x-4 gap-y-2 animate-fade-in delay-600">
          <span className="text-xs font-mono text-text-subtle uppercase tracking-widest">
            Stack:
          </span>
          {['ESP32', 'STM32', 'KiCad', 'CAN Bus', 'BLE', 'Linux', 'Python', 'C'].map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono text-text-subtle hover:text-text-muted transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-subtle animate-fade-in delay-800"
        aria-hidden="true"
      >
        <span className="text-xs font-mono tracking-widest uppercase">scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
}

function PCBCorner() {
  return (
    <svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Outer L-frame */}
      <path
        d="M10 10 L10 60 M10 10 L60 10"
        stroke="rgba(77,168,255,0.15)"
        strokeWidth="1"
        strokeLinecap="round"
      />
      {/* Inner trace */}
      <path
        d="M20 20 L20 50 L50 50"
        stroke="rgba(77,168,255,0.1)"
        strokeWidth="1"
        strokeLinecap="round"
      />
      {/* Pads */}
      <circle cx="10" cy="10" r="3" fill="none" stroke="rgba(77,168,255,0.25)" strokeWidth="1" />
      <circle cx="50" cy="50" r="2.5" fill="none" stroke="rgba(77,168,255,0.2)" strokeWidth="1" />
      <circle cx="10" cy="60" r="2" fill="rgba(77,168,255,0.12)" />
      <circle cx="60" cy="10" r="2" fill="rgba(77,168,255,0.12)" />
      {/* Vertical trace detail */}
      <path
        d="M30 10 L30 30 L80 30"
        stroke="rgba(77,168,255,0.06)"
        strokeWidth="1"
        strokeLinecap="round"
      />
      {/* Small via holes */}
      <circle cx="30" cy="10" r="1.5" fill="none" stroke="rgba(77,168,255,0.15)" strokeWidth="1" />
      <circle cx="80" cy="30" r="1.5" fill="none" stroke="rgba(77,168,255,0.15)" strokeWidth="1" />
    </svg>
  );
}
