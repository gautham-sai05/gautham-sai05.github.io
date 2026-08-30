'use client';

import { useRef } from 'react';
import { useInView } from '@/hooks/useInView';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { Github, FileText, Award, Users } from 'lucide-react';

const skills = {
  'Programming': ['C', 'Embedded C', 'Python', 'TypeScript'],
  'Microcontrollers': ['ESP32', 'STM32', 'LPC2148', 'Arduino', 'Raspberry Pi'],
  'Hardware': ['PCB Design', 'KiCad', 'Circuit Analysis', 'Mixed-Signal'],
  'Security': ['CAN Bus', 'UDS', 'Side-Channel', 'Hardware RE', 'BLE Security'],
  'Protocols': ['I²C', 'SPI', 'UART', 'CAN', 'BLE', 'Wi-Fi', 'USB'],
  'Tools': ['Linux', 'Git', 'MATLAB', 'PostgreSQL', 'GNU Radio', 'ChipWhisperer'],
};

const highlights = [
  {
    icon: Users,
    value: 'Team bi0s',
    label: 'Hardware Team Lead',
  },
  {
    icon: Award,
    value: '2× Winner',
    label: 'National Hackathons',
  },
  {
    icon: FileText,
    value: '8.89 CGPA',
    label: 'Amrita Vishwa Vidyapeetham',
  },
];

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { threshold: 0.1 });

  return (
    <section
      id="about"
      className="section"
      style={{ backgroundColor: 'var(--color-bg)' }}
      aria-label="About Gautham Sai"
      ref={ref}
    >
      <div
        className="container"
        style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: '0 32px' }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-start">
          {/* Left: text */}
          <div
            className="lg:col-span-3"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? 'translateX(0)' : 'translateX(-24px)',
              transition: 'opacity 400ms ease, transform 400ms ease',
            }}
          >
            <SectionHeader
              label="About"
              title="Embedded systems and hardware security"
              className="mb-8"
            />

            <div className="space-y-5 text-text-muted text-body-md leading-relaxed">
              <p>
                I am an Electronics and Communication Engineering student at{' '}
                <span className="text-text font-medium">Amrita Vishwa Vidyapeetham</span>.
                My work focuses on embedded hardware, firmware, and hardware security. It spans
                PCB design, microcontroller firmware, automotive cybersecurity research, and
                wireless protocol analysis.
              </p>
              <p>
                As Hardware Team Lead at{' '}
                <a
                  href="https://bi0s.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-hover transition-colors duration-200 font-medium"
                >
                  Team bi0s
                </a>{' '}
                I work on embedded system security research, PCB-based challenge design, and
                hardware reverse engineering. My IEEE-published work on Parkinson's tremor
                suppression is one example of building embedded systems for a real problem.
              </p>
              <p>
                I work mainly on{' '}
                <span className="text-text font-medium">automotive cybersecurity</span>,
                including CAN bus research, ECU communication analysis, and embedded security.
                I also work on side-channel analysis and firmware extraction as part of hardware
                security research.
              </p>
              <p>
                In embedded systems, correctness, efficiency, and security are all tied together.
                That is the standard I use when designing and testing the work I build.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://github.com/gautham-sai05"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm"
                aria-label="View GitHub profile"
              >
                <Github className="w-4 h-4" aria-hidden="true" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/gautham-sai-b3781b205"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm"
                aria-label="View LinkedIn profile"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right: highlights + skills */}
          <div
            className="lg:col-span-2 space-y-6"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? 'translateX(0)' : 'translateX(24px)',
              transition: 'opacity 400ms ease 150ms, transform 400ms ease 150ms',
            }}
          >
            {/* Highlight cards */}
            <div className="grid grid-cols-2 gap-3">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.value}
                    className="card-elevated rounded-xl p-4 flex flex-col gap-2"
                  >
                    <Icon className="w-4 h-4 text-primary" aria-hidden="true" />
                    <span className="text-sm font-semibold text-text leading-tight font-mono">
                      {item.value}
                    </span>
                    <span className="text-xs text-text-subtle">{item.label}</span>
                  </div>
                );
              })}
            </div>

            {/* Skills */}
            <div
              className="rounded-xl p-5 border"
              style={{
                backgroundColor: 'var(--color-surface)',
                borderColor: 'var(--color-border)',
              }}
            >
              <p className="text-xs font-mono uppercase tracking-widest text-text-subtle mb-4">
                Technical Skills
              </p>
              <div className="space-y-3">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category}>
                    <p className="text-xs font-medium text-text-muted mb-1.5">{category}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {items.map((skill) => (
                        <span key={skill} className="tag text-[10px] px-1.5 py-0.5">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
