import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Download, ExternalLink, Github, Globe, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Gautham Sai — Resume | Embedded & Hardware Security',
  description:
    'Resume of Gautham Sai, an Electronics and Communication Engineering student focused on embedded systems, hardware security, firmware, automotive security, and security research.',
};

const resumePdf = '/resume/Gautham-Sai-Resume.pdf';

const keyAreas = [
  'Embedded Systems',
  'Hardware Security',
  'Automotive Security',
  'Firmware',
  'PCB Design',
  'Side-Channel Analysis',
];

const selectedProjects = [
  {
    title: 'Vanguard — INCTF 2026 Hardware Security Badge',
    summary:
      'Led the hardware and firmware development of the Vanguard security badge, owning custom PCB design, embedded firmware, hardware integration, and deployment.',
  },
  {
    title: 'CAN Bus Communication & Security Toolkit',
    summary:
      'Built a three-node CAN testbed using Arduino Nano and MCP2515/TJA1050 modules to simulate ECU communication on a 500 kbps automotive network.',
  },
  {
    title: 'RF Fingerprinting for IoT Device Authentication',
    summary:
      'Built an RF fingerprinting framework for same-model Wi-Fi IoT device authentication using device-specific characteristics from raw I/Q signals.',
  },
  {
    title: 'PeerDrop — BLE-Based Peer-to-Peer System',
    summary:
      'Built a BLE peer-to-peer data exchange system using RSSI-based proximity validation and dynamic session authentication.',
  },
  {
    title: 'Smart Anti-Tremor Glove',
    summary:
      'Designed and prototyped a wearable embedded system using an MPU6050 IMU, five vibration motors, and Bluetooth for real-time tremor detection and suppression.',
  },
];

const contactLinks = [
  { label: 'Email', value: '2005gauthamsai@gmail.com', href: 'mailto:2005gauthamsai@gmail.com', icon: Mail },
  { label: 'Phone', value: '+91 7012232385', href: 'tel:+917012232385', icon: Phone },
  { label: 'LinkedIn', value: 'linkedin.com/in/gautham-sai-b3781b205', href: 'https://www.linkedin.com/in/gautham-sai-b3781b205', icon: Linkedin },
  { label: 'GitHub', value: 'github.com/gautham-sai05', href: 'https://github.com/gautham-sai05', icon: Github },
  { label: 'Portfolio', value: 'gautham-sai05.github.io', href: 'https://gautham-sai05.github.io', icon: Globe },
];

export default function ResumePage() {
  return (
    <div className="site-shell">
      <section className="section-panel">
        <div className="container" style={{ maxWidth: '1100px' }}>
          <div className="eyebrow">Resume</div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              gap: '1.25rem',
              marginBottom: '1.25rem',
            }}
          >
            <div>
              <h1 className="section-title" style={{ marginBottom: '0.45rem' }}>GAUTHAM SAI</h1>
              <p className="hero-body" style={{ margin: 0 }}>
                Embedded Systems · Hardware Security · Security Research
              </p>
            </div>

            <div className="hero-cta-row" style={{ marginTop: 0 }}>
              <a href={resumePdf} download className="btn-primary">
                <Download size={16} /> Download Resume
              </a>
              <a href={resumePdf} target="_blank" rel="noreferrer" className="btn-secondary">
                <ExternalLink size={16} /> Open Full Resume
              </a>
            </div>
          </div>

          <div className="panel-card" style={{ marginTop: '1.5rem' }}>
            <div className="card-kicker">Short profile</div>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8 }}>
              Electronics and Communication Engineering student focused on embedded systems and hardware
              security, with hands-on experience in PCB design, firmware development, embedded security,
              and automotive security. Experienced in taking embedded hardware from design and prototyping
              through firmware integration and testing. Hardware Team Lead at Team bi0s, with practical
              security research and technical speaking experience at Black Hat India and IndiaFOSS.
            </p>
          </div>
        </div>
      </section>

      <div className="container" style={{ maxWidth: '1100px', paddingTop: '2.5rem', paddingBottom: '4rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '0.92fr 1.08fr', gap: '1.25rem' }}>
          <aside style={{ display: 'grid', gap: '1.25rem' }}>
            <div className="panel-card">
              <div className="card-kicker">Contact</div>
              <div style={{ display: 'grid', gap: '0.8rem' }}>
                {contactLinks.map(({ label, value, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noreferrer' : undefined}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '0.8rem',
                      padding: '0.7rem 0.8rem',
                      borderRadius: '0.8rem',
                      border: '1px solid var(--color-border)',
                      background: 'rgba(255,255,255,0.01)',
                      color: 'var(--color-text)',
                    }}
                  >
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', minWidth: 0 }}>
                      <Icon size={15} />
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{label}</span>
                    </span>
                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem', textAlign: 'right', overflowWrap: 'anywhere' }}>{value}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="panel-card">
              <div className="card-kicker">Key areas</div>
              <div className="tag-row" style={{ marginTop: 0 }}>
                {keyAreas.map((area) => (
                  <span key={area} className="chip">
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div className="panel-card">
              <div className="card-kicker">Languages</div>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8 }}>English | Malayalam | Tamil | Hindi</p>
            </div>
          </aside>

          <main style={{ display: 'grid', gap: '1.25rem' }}>
            <div className="panel-card">
              <div className="card-kicker">Resume preview</div>
              <div
                style={{
                  border: '1px solid var(--color-border)',
                  borderRadius: '1rem',
                  overflow: 'hidden',
                  background: '#f4f1ef',
                }}
              >
                <object
                  data={resumePdf}
                  type="application/pdf"
                  aria-label="Gautham Sai resume preview"
                  style={{ width: '100%', height: '760px', display: 'block', background: '#f6f3f1' }}
                >
                  <div style={{ padding: '2rem', color: '#11110f', fontFamily: 'var(--font-sans)' }}>
                    <p style={{ fontWeight: 600, marginBottom: '0.8rem' }}>Resume preview is unavailable in this browser.</p>
                    <a href={resumePdf} target="_blank" rel="noreferrer" style={{ color: '#0e1b16', textDecoration: 'underline' }}>
                      Open the full resume in a new tab
                    </a>
                  </div>
                </object>
              </div>
            </div>

            <div className="panel-card">
              <div className="card-kicker">Experience</div>
              <div style={{ display: 'grid', gap: '1rem' }}>
                <div>
                  <div style={{ fontWeight: 600, marginBottom: '0.2rem' }}>Hardware Team Lead — Team bi0s</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-primary)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    2025 – Present
                  </div>
                  <ul style={{ margin: 0, paddingLeft: '1.15rem', color: 'var(--color-text-muted)', lineHeight: 1.8 }}>
                    <li>Lead a hardware team working across embedded security, hardware security, automotive security, firmware, and embedded development.</li>
                    <li>Drive security-focused hardware projects from system architecture and PCB design through firmware integration, hardware bring-up, testing, and deployment.</li>
                    <li>Mentor team members through hands-on embedded and hardware security projects, research, and practical security exercises.</li>
                    <li>Coordinate technical development and contribute to security platforms, CTF infrastructure, and demonstrations across embedded and hardware security domains.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="panel-card">
              <div className="card-kicker">Selected projects</div>
              <div style={{ display: 'grid', gap: '0.8rem' }}>
                {selectedProjects.map((project) => (
                  <div key={project.title} style={{ padding: '0.85rem 0.9rem', border: '1px solid var(--color-border)', borderRadius: '0.8rem', background: 'rgba(255,255,255,0.01)' }}>
                    <div style={{ fontWeight: 600, marginBottom: '0.3rem' }}>{project.title}</div>
                    <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7, margin: 0 }}>{project.summary}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="panel-card">
              <div className="card-kicker">Research & speaking</div>
              <div style={{ display: 'grid', gap: '1rem' }}>
                <div>
                  <div style={{ fontWeight: 600 }}>An IoT-based Smart Glove for Real-Time Tremor Detection and Suppression in Parkinson’s Patients</div>
                  <div style={{ color: 'var(--color-text-muted)', marginTop: '0.35rem', lineHeight: 1.7 }}>
                    Gautham Sai, Hrishikesh S., Gunisha Kaur, Gowrinandana R. Kaimal, Aswathy K. Nair, Prajitha S.<br />
                    Published at IEEE IDCIoT 2026.
                  </div>
                </div>
                <div>
                  <div style={{ fontWeight: 600 }}>Black Hat India 2026</div>
                  <p style={{ color: 'var(--color-text-muted)', marginTop: '0.3rem' }}>Arsenal Speaker — Sysrupt: Portable OT Cyber Range.</p>
                </div>
                <div>
                  <div style={{ fontWeight: 600 }}>IndiaFOSS 2026</div>
                  <p style={{ color: 'var(--color-text-muted)', marginTop: '0.3rem' }}>Technical Speaker — Extracting AES Keys from Embedded Devices Using Open Source Hardware.</p>
                </div>
                <div>
                  <div style={{ fontWeight: 600 }}>bi0s Meetup</div>
                  <p style={{ color: 'var(--color-text-muted)', marginTop: '0.3rem' }}>Technical Speaker — Introduction to Side-Channel Analysis.</p>
                </div>
              </div>
            </div>

            <div className="panel-card">
              <div className="card-kicker">Education</div>
              <div style={{ display: 'grid', gap: '0.75rem' }}>
                <div>
                  <div style={{ fontWeight: 600 }}>B.Tech. Electronics and Communication Engineering</div>
                  <div style={{ color: 'var(--color-text-muted)', marginTop: '0.2rem' }}>Amrita Vishwa Vidyapeetham, Amritapuri</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.08em', color: 'var(--color-primary)', textTransform: 'uppercase', marginTop: '0.25rem' }}>
                    2024 – Present · CGPA: 8.89
                  </div>
                </div>
                <div>
                  <div style={{ fontWeight: 600 }}>Higher Secondary Education</div>
                  <div style={{ color: 'var(--color-text-muted)', marginTop: '0.2rem' }}>Sacred Heart Higher Secondary School, Dwaraka</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.08em', color: 'var(--color-primary)', textTransform: 'uppercase', marginTop: '0.25rem' }}>
                    2021 – 2023
                  </div>
                </div>
              </div>
            </div>

            <div className="panel-card">
              <div className="card-kicker">Achievements</div>
              <ul style={{ margin: 0, paddingLeft: '1.15rem', color: 'var(--color-text-muted)', lineHeight: 1.8 }}>
                <li>2nd Runner-Up — Caterpillar Tech Challenge 2026, National Finals; contributed to the development of an LSTM-based adaptive PI controller using MATLAB/Simulink.</li>
                <li>1st Place — TWIST Hack 2025, FOSS Fest.</li>
                <li>1st Prize — IGNITE 2025 Ideathon, Amrita Vishwa Vidyapeetham.</li>
              </ul>
            </div>

            <div className="panel-card">
              <div className="card-kicker">Certifications</div>
              <ul style={{ margin: 0, paddingLeft: '1.15rem', color: 'var(--color-text-muted)', lineHeight: 1.8 }}>
                <li>ISEA–ISAP 2026 — Security & Privacy Conference, IIT Madras</li>
                <li>Embedded Systems with STM32 — Anokha 2024</li>
                <li>Semiconductor Workshop — Vidyut 2025</li>
              </ul>
            </div>

            <div className="panel-card" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '0.8rem' }}>
              <div>
                <div className="card-kicker" style={{ marginBottom: '0.35rem' }}>Resume actions</div>
                <p style={{ color: 'var(--color-text-muted)', margin: 0 }}>Formal CV is available as a download and in full view.</p>
              </div>
              <div className="hero-cta-row" style={{ marginTop: 0 }}>
                <a href={resumePdf} download className="btn-primary">
                  <Download size={16} /> Download
                </a>
                <Link href="/projects" className="btn-secondary">
                  Portfolio <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
