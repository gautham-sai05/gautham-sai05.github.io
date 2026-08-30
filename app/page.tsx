'use client';

import Link from 'next/link';
import { ArrowRight, BadgeCheck, CarFront, Cpu, Download, ExternalLink, GitBranch, Github, Linkedin, Mail, Shield, Sparkles, Terminal, Waves, Zap } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';

const skillDomains = [
  {
    title: 'Embedded Systems',
    description: 'Firmware, microcontroller systems, and hardware-software integration for real devices.',
    tags: ['ESP32', 'STM32', 'ESP-IDF', 'Firmware', 'PCB Bring-up'],
  },
  {
    title: 'Hardware Security',
    description: 'Embedded security workflows, hardware reverse engineering, and practical attack/defense research.',
    tags: ['Side-Channel', 'Fault Injection', 'Firmware RE', 'JTAG/SWD'],
  },
  {
    title: 'Automotive Security',
    description: 'CAN bus security research, ECU communication analysis, and embedded security for in-vehicle systems.',
    tags: ['CAN', 'UDS', 'ECU', 'AUTOSAR'],
  },
  {
    title: 'RF & Wireless',
    description: 'BLE, Wi-Fi, RF fingerprinting, and signal analysis across device authentication and protocol security.',
    tags: ['BLE', 'Wi-Fi', 'RF', 'LoRa'],
  },
];

const projectTabs = [
  'OVERVIEW',
  'ARCHITECTURE',
  'HARDWARE',
  'SECURITY',
  'RESULTS',
  'LINKS',
] as const;

const projects = [
  {
    slug: 'vanguard',
    name: 'Vanguard',
    subtitle: 'INCTF 2026 Hardware Security Badge',
    pitch:
      'Custom ESP32-S3 hardware badge for secure challenge delivery with embedded firmware, on-device CTF, BLE/LoRa comms, and persistent NVS state.',
    status: 'Hardware + Firmware Lead',
    hardware: ['ESP32-S3-WROOM-1', '16 MB Flash', 'LoRa', 'BLE', 'NVS', 'Custom PCB'],
    security: ['On-device CTF', 'UART reconnaissance', 'RF/protocol analysis', 'Authenticated uplink', 'File-format forensics'],
    overview:
      'Vanguard is the INCTF 2026 hardware security badge built on ESP32-S3. My work covered custom PCB design, embedded firmware development, challenge provisioning workflow, and deployment infrastructure. The system delivers on-device CTF challenges with wireless interfaces (BLE/LoRa) and persistent state management via NVS.',
    architecture:
      'ESP32-S3 core with dual wireless interfaces (BLE for proximity, LoRa for remote uplink). Custom PCB designed in KiCad. Firmware handles challenge provisioning, state persistence, attack surface exposure (UART, RF protocols), and forensics challenges. Challenge logic runs on-device with no external dependency.',
    hardwareText:
      'Custom PCB integrating ESP32-S3, support circuitry for BLE/LoRa modules, power delivery, and provisioning interfaces. Design prioritizes field reliability, maintainability, and security posture exposure for CTF scenarios.',
    results: [
      'Custom PCB design and fabrication',
      'Embedded firmware for challenge execution and state management',
      'Complete deployment and provisioning workflow',
      'Successfully deployed for INCTF 2026 event',
    ],
    links: ['https://bi0shardware.github.io/Vanguard-Portable-Hardware-Security-Laboratory/', 'https://github.com/gautham-sai05'],
  },
  {
    slug: 'can-bus-toolkit',
    name: 'CAN Bus Communication & Security Toolkit',
    subtitle: 'Automotive Security Research Platform',
    pitch:
      'Three-node CAN testbed demonstrating ECU communication, message injection, replay attacks, and DoS via frame flooding at 500 kbps.',
    status: 'Automotive Security Research',
    hardware: ['Arduino Nano ×3', 'MCP2515 CAN Controller', 'TJA1050 Transceiver', '500 kbps CAN', '120Ω Termination'],
    security: ['Message Sniffing', 'Frame Injection', 'Replay Attacks', 'DoS/Bus Flooding', 'Arbitration Analysis'],
    overview:
      'A lab testbed for automotive CAN security research using commodity hardware. Demonstrates real-world attack vectors including message injection, replay, and DoS through high-priority frame flooding. Designed to enable hands-on security research without expensive automotive lab equipment.',
    architecture:
      'Three Arduino Nano nodes with MCP2515 controllers sharing a physical CAN bus. Node 1: simulated Engine ECU (RPM/throttle). Node 2: simulated Body Control Module. Node 3: attack/analysis node with configurable sniff/inject/replay/DoS modes via serial menu.',
    hardwareText:
      'Arduino Nano × 3 with MCP2515 modules and TJA1050 transceivers. Custom breakout for signal monitoring. Achieves 99.7% bus saturation during DoS via ID 0x000 frame flooding.',
    results: [
      'Demonstrated message injection: arbitrary RPM values injected and visible on OBD readers',
      'Replay attack: door lock sequences captured and replayed with 100% reliability',
      'DoS attack: achieved 99.7% bus saturation, blocking legitimate traffic at 500 kbps',
      'Used as teaching tool at Team bi0s hardware security workshops',
    ],
    links: ['https://github.com/gautham-sai05/CAN-Bus-Communication-Security-Toolkit'],
  },
  {
    slug: 'rf-fingerprinting',
    name: 'RF Fingerprinting via Deep Learning',
    subtitle: 'Device Identification through Wireless Signal Analysis',
    pitch:
      'Physical-layer device authentication via RF fingerprinting. Classifies wireless transmitters using CNN/Random Forest on I/Q signal imperfections across variable SNR.',
    status: 'Wireless Security Research',
    hardware: ['30 Wi-Fi Devices', '~30,000 RF Samples', '0–20 dB SNR', 'I/Q Capture Pipeline'],
    security: ['RF Fingerprinting', 'Device Authentication', 'CNN Classification', 'Spoofing Robustness', 'Physical-Layer Security'],
    overview:
      'Every wireless transmitter has microscopic hardware imperfections in oscillators, mixers, and PAs that create a unique RF signature. This research evaluates whether these imperfections enable robust device authentication independent of protocol-level spoofing.',
    architecture:
      'I/Q signal pipeline: raw capture → constellation representation → CNN inference. Tested on 30 same-model devices across SNR conditions (-10 dB to +30 dB). Compared CNN vs. Random Forest classifiers. Evaluated robustness via label-permutation spoofing test.',
    hardwareText:
      'Physical-layer authentication requires robust feature extraction from RF data. Hardware imperfections (phase noise, PA nonlinearity, oscillator drift) create device-specific signatures that are difficult to clone.',
    results: [
      'Random Forest: 99.89% accuracy clean-data, 89.04% at 20 dB SNR',
      'CNN: 91.4% at 20 dB SNR, maintained robustness down to -5 dB SNR',
      'Label-permutation spoofing test: 0.74% accuracy — confirms real device distinction',
      '30 devices, ~30K samples across SNR conditions',
    ],
    links: ['https://github.com/gautham-sai05'],
  },
  {
    slug: 'peerdrop',
    name: 'PeerDrop — Secure BLE P2P System',
    subtitle: 'Proximity-Validated Peer-to-Peer Data Exchange',
    pitch:
      'BLE-based peer-to-peer communication with RSSI-based proximity validation, one-time secure data exchange, and persistent device identity in NVS.',
    status: 'Wireless Security',
    hardware: ['ESP32-WROOM', 'BLE', 'NVS Flash', 'RSSI Validation'],
    security: ['Proximity Validation (RSSI)', 'Session Authentication', 'One-time Exchange', 'Identity Persistence'],
    overview:
      'A lightweight P2P system enabling secure, proximity-based data exchange between nearby devices in offline environments. Uses BLE for discovery and RSSI-based proximity gating to ensure transfers only occur between physically close devices.',
    architecture:
      'Device broadcasts BLE advertisements. Peer scans, validates RSSI threshold, establishes GATT connection. Session token generated for transfer. Device identity persisted in NVS. Fully offline — no cloud/server dependency.',
    hardwareText:
      'Implemented on ESP32-WROOM. BLE stack handles discovery and connection. NVS provides persistent identity storage. RSSI measurement enables proximity validation.',
    results: [
      'RSSI-based proximity validation integrated into connection flow',
      'Session-based one-time exchange prevents replay attacks',
      'Persistent device identity enables peer whitelisting',
      'Fully offline operation for privacy-sensitive environments',
    ],
    links: ['https://github.com/Alwin111/PeerDrop'],
  },
  {
    slug: 'tremor-glove',
    name: 'Smart Anti-Tremor Glove',
    subtitle: 'IEEE IDCIoT 2026 — Wearable Medical IoT',
    pitch:
      "Wearable embedded system for real-time Parkinson's tremor detection and suppression via MPU6050 IMU sensing, PWM actuation, and BLE telemetry.",
    status: 'IEEE Published',
    hardware: ['ESP32-WROOM-32', 'MPU6050 IMU', 'Five vibration motors', 'TP4056 charging', '500 mAh LiPo', 'Custom PCB'],
    security: ['Real-time signal processing', 'On-device filtering', 'Wearable safety constraints', 'BLE telemetry'],
    overview:
      "Designed to address Parkinson's tremor (4–7 Hz) interference with daily tasks. Combines IMU sensing, FIR filtering, and PWM-driven counter-vibration actuation on a wearable PCB. Published at IEEE IDCIoT 2026.",
    architecture:
      "ESP32-WROOM-32 connected to MPU6050 via I²C. Raw accel/gyro sampled at 100 Hz, bandpass filtered for 4–6 Hz tremor isolation, classified on-device. Vibration motors driven via MOSFET PWM array. BLE broadcasts telemetry to Android app. Custom PCB integrates all components for glove form factor.",
    hardwareText:
      'Custom KiCad PCB: ESP32-WROOM-32, MPU6050, Si2302 N-MOSFET array, TP4056 LiPo charger, 3.3V LDO. Designed for miniaturization and glove integration. Achieves 11.3 hours battery life.',
    results: [
      'Tremor detection accuracy: 94.2% on test subject dataset',
      'Actuation latency: 47 ms average (well within 100 ms therapeutic threshold)',
      'Battery life: 11.3 hours continuous operation on 500 mAh LiPo',
      'Published: IEEE IDCIoT 2026',
    ],
    links: ['https://ieeexplore.ieee.org', 'https://github.com/gautham-sai05'],
  },
];

const speaking = [
  {
    event: 'BLACK HAT INDIA 2026',
    role: 'Arsenal Speaker',
    title: 'Sysrupt: Portable OT Cyber Range',
    blurb: 'A practical presentation focused on portable operational-technology environments, field deployment, and security education workflows.',
  },
  {
    event: 'INDIAFOSS 2026',
    role: 'Security Devroom',
    title: 'Extracting AES Keys from Embedded Devices Using Open Source Hardware',
    blurb: 'A technical talk on open-source hardware-based extraction workflows, side-channel reasoning, and embedded security investigation.',
  },
  {
    event: 'bi0s Meetup',
    role: 'Speaker',
    title: 'Introduction to Side-Channel Analysis',
    blurb: 'An accessible breakdown of side-channel concepts, measurement techniques, and embedded attack surfaces relevant to practical research.',
  },
];

const achievements = [
  {
    title: '2nd Runner-Up',
    meta: 'Caterpillar Tech Challenge 2026 — National Finals',
    detail: 'D4RK NULL used an LSTM-based adaptive PI controller with MATLAB/Simulink and dataset generation. My contribution included the Simulink model and dataset setup.',
  },
  {
    title: '1st Place',
    meta: 'TWIST Hack 2025',
    detail: '18-hour hackathon as part of FOSS Fest ’25 at CEKNPY, focused on rapid prototyping and practical innovation.',
  },
  {
    title: '1st Prize',
    meta: 'IGNITE 2025 Ideathon',
    detail: 'Embedded systems idea development focused on real-world engineering and applied problem solving.',
  },
];

const timeline = [
  'ECE',
  'Embedded Projects',
  'Team bi0s',
  'Hardware Security',
  'Vanguard',
  'Security Research',
  'Technical Speaking',
];

const technicalDomains = [
  { id: 1, label: 'PCB', title: 'PCB Design', description: 'Custom boards, schematics, hardware bring-up', range: [0, 0.11] },
  { id: 2, label: 'Embedded', title: 'Embedded Systems', description: 'ESP32, STM32, firmware, microcontrollers', range: [0.11, 0.22] },
  { id: 3, label: 'FW', title: 'Firmware', description: 'Embedded C, ESP-IDF, real-time systems', range: [0.22, 0.33] },
  { id: 4, label: 'Security', title: 'Hardware Security', description: 'Embedded security, hardware testing, CTF', range: [0.33, 0.44] },
  { id: 5, label: 'CAN', title: 'Automotive Security', description: 'CAN bus, UDS, ECU communication', range: [0.44, 0.55] },
  { id: 6, label: 'SCA', title: 'Side-Channel Analysis', description: 'Hardware leakage, AES extraction, ChipWhisperer', range: [0.55, 0.66] },
  { id: 7, label: 'Research', title: 'Security Research', description: 'RF fingerprinting, wireless security, IEEE', range: [0.66, 0.77] },
  { id: 8, label: 'CTF', title: 'CTF Development', description: 'Challenge design, Vanguard, bi0s infrastructure', range: [0.77, 0.88] },
  { id: 9, label: 'Speaking', title: 'Technical Speaking', description: 'Black Hat, IndiaFOSS, public communication', range: [0.88, 1.0] },
];

function ScopeTrace() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [offset, setOffset] = useState(0);
  const [manualProbeX, setManualProbeX] = useState<number | null>(null);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const syncMotion = () => setReducedMotion(media.matches);
    syncMotion();
    media.addEventListener('change', syncMotion);
    return () => media.removeEventListener('change', syncMotion);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const interval = setInterval(() => {
      if (manualProbeX === null) {
        setOffset((prev) => (prev + 1) % 120);
      }
    }, 80);
    return () => clearInterval(interval);
  }, [reducedMotion, manualProbeX]);

  const probeX = manualProbeX ?? (offset / 120);

  const getCurrentDomain = () => {
    return technicalDomains.find((d) => probeX >= d.range[0] && probeX < d.range[1]) || technicalDomains[0];
  };

  const domain = getCurrentDomain();

  const plotPoints = useMemo(() => {
    const width = 760;
    const height = 260;
    const base = height * 0.6;
    const points: Array<{ x: number; y: number }> = [];

    for (let i = 0; i <= 120; i += 1) {
      const x = (i / 120) * width;
      const normalizedX = (i + offset) % 120 / 120;

      // Determine which domain this x position is in
      const domainIndex = Math.floor(normalizedX * technicalDomains.length);
      const currentDomain = technicalDomains[domainIndex] || technicalDomains[0];

      // Generate different waveform characteristics per domain
      let y = base;

      if (domainIndex === 0) {
        // PCB: structured, geometric
        y += Math.sin((x / 20) + offset * 0.02) * 12 + Math.cos((x / 10) + offset * 0.01) * 8;
      } else if (domainIndex === 1) {
        // Embedded: digital transitions
        y += (Math.floor((x / 30) + offset * 0.01) % 2) * 15 - 7.5 + Math.random() * 2;
      } else if (domainIndex === 2) {
        // Firmware: packet bursts
        const burst = Math.sin((x / 8) * Math.PI) * Math.sin((x / 60) + offset * 0.01);
        y += burst * 18 + Math.sin((x / 5) + offset * 0.02) * 4;
      } else if (domainIndex === 3) {
        // Hardware Security: subtle noise/irregularity
        y += Math.sin((x / 15) + offset * 0.01) * 10 + Math.sin((x / 3.5 + offset * 0.05)) * 6 + Math.random() * 3;
      } else if (domainIndex === 4) {
        // CAN: frame pattern
        const frame = Math.floor((x / 25 + offset * 0.005) % 4);
        y += (frame === 1 ? 1 : frame === 2 ? -1 : 0) * 16 + Math.sin((x / 12) + offset * 0.01) * 8;
      } else if (domainIndex === 5) {
        // SCA: small leakage spikes
        y += Math.sin((x / 18) + offset * 0.02) * 8 + Math.sin((x / 2.5 + offset * 0.08)) * 4;
      } else if (domainIndex === 6) {
        // Research: complex signal
        y += Math.sin((x / 22) + offset * 0.01) * 14 + Math.sin((x / 8) + offset * 0.02) * 8 + Math.cos((x / 16)) * 5;
      } else if (domainIndex === 7) {
        // CTF: state changes/bursts
        y += Math.floor(Math.sin((x / 20) + offset * 0.01) * 2) * 12 + Math.sin((x / 6) + offset * 0.03) * 6;
      } else {
        // Speaking: stable, recognizable
        y += Math.sin((x / 25) + offset * 0.005) * 10 + Math.sin((x / 12) + offset * 0.01) * 6;
      }

      // Probe influence
      const dx = normalizedX - probeX;
      if (Math.abs(dx) < 0.08) {
        y += -Math.exp(-(dx * dx) * 120) * 20;
      }

      points.push({ x, y });
    }

    return points;
  }, [offset, probeX, reducedMotion]);

  const path = plotPoints
    .map((point, index) => `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`)
    .join(' ');

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    setManualProbeX(Math.min(0.99, Math.max(0.01, x)));
  };

  return (
    <div
      className="scope-frame"
      onMouseMove={handleMove}
      onMouseLeave={() => setManualProbeX(null)}
      aria-label="Technical profile signal journey"
    >
      <div className="scope-header">
        <div className="scope-badges">
          <span className="scope-dot" />
          <span className="scope-dot muted" />
        </div>
        <span className="scope-label">TECHNICAL PROFILE</span>
      </div>

      <div className="scope-stage">
        <svg viewBox="0 0 760 260" role="img" aria-label="Technical domains signal">
          <defs>
            <linearGradient id="traceGlow" x1="0%" x2="100%" y1="0%" y2="0%">
              <stop offset="0%" stopColor="#d09a60" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#f2c38b" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#d9a76d" stopOpacity="0.4" />
            </linearGradient>
          </defs>

          {/* Grid */}
          <g opacity="0.15" stroke="rgba(196, 158, 122, 0.12)" strokeWidth="1">
            {[0, 1, 2, 3, 4].map((tick) => (
              <line key={tick} x1="0" y1={40 + tick * 45} x2="760" y2={40 + tick * 45} />
            ))}
          </g>

          {/* Domain dividers */}
          {technicalDomains.map((d) => (
            <line
              key={`divider-${d.id}`}
              x1={d.range[0] * 760}
              y1="20"
              x2={d.range[0] * 760}
              y2="240"
              stroke="rgba(215, 154, 93, 0.1)"
              strokeWidth="1"
            />
          ))}

          {/* Signal trace */}
          <path d={path} fill="none" stroke="url(#traceGlow)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d={path} fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round" />

          {/* Probe cursor */}
          <line
            x1={probeX * 760}
            x2={probeX * 760}
            y1="10"
            y2="250"
            stroke="rgba(255, 204, 126, 0.6)"
            strokeWidth="1.5"
            strokeDasharray="3 6"
          />
          <circle cx={probeX * 760} cy={130} r="4" fill="#f6b25d" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" />
        </svg>
      </div>

      {/* Domain info overlay */}
      <div
        style={{
          padding: '0.8rem 1rem',
          background: 'rgba(12, 16, 16, 0.9)',
          borderTop: '1px solid var(--color-border)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          minHeight: '60px',
        }}
      >
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: '0.3rem' }}>
            TP{domain.id}
          </div>
          <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.25rem' }}>
            {domain.title}
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
            {domain.description}
          </div>
        </div>
        <div style={{ textAlign: 'right', marginLeft: '1rem', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--color-text-subtle)', letterSpacing: '0.06em' }}>
          {Math.round(probeX * 100)}%
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  const [activeProject, setActiveProject] = useState(0);

  const project = projects[activeProject];

  return (
    <div className="site-shell">
      <section className="hero-shell">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">U1 — SYSTEM PROFILE</div>
            <h1 className="hero-title">
              GAUTHAM SAI
            </h1>
            <div className="hero-stack">
              <span>Embedded Systems</span>
              <span>Hardware Security</span>
              <span>Security Research</span>
            </div>
            <p className="hero-body">
              Designing and implementing embedded systems, firmware, hardware security infrastructure, and security research across embedded and automotive domains. Hardware Team Lead at Team bi0s.
            </p>

            <div className="hero-cta-row">
              <Link href="/projects" className="btn-primary">
                View Work <ArrowRight size={16} />
              </Link>
              <a href="/resume/Gautham-Sai-Resume.pdf" download className="btn-secondary">
                <Download size={16} /> Download Resume
              </a>
              <a href="https://github.com/gautham-sai05" target="_blank" rel="noreferrer" className="btn-secondary">
                <Github size={16} /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/gautham-sai-b3781b205" target="_blank" rel="noreferrer" className="btn-secondary">
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>

            <div className="hero-metrics">
              <div>
                <span className="metric-value">3rd Year</span>
                <span className="metric-label">ECE</span>
              </div>
              <div>
                <span className="metric-value">Team bi0s</span>
                <span className="metric-label">Hardware Lead</span>
              </div>
            </div>
          </div>

          <div className="hero-panel">
            <ScopeTrace />
          </div>
        </div>
      </section>

      <section className="section-surface">
        <div className="container section-grid">
          <div>
            <div className="eyebrow">U2 — PROFILE</div>
            <h2 className="section-title">Embedded engineering with a hardware-first security mindset.</h2>
          </div>

          <div className="about-copy">
            <p>
              Third-year Electronics and Communication Engineering student at Amrita Vishwa Vidyapeetham. Hardware Team Lead at Team bi0s working across embedded systems, hardware security, embedded security, automotive security, and firmware.
            </p>
            <p>
              My work spans custom PCB design, embedded firmware development (ESP32, STM32), CAN/automotive security research, RF fingerprinting, side-channel analysis, and security infrastructure. I build systems that operate on real hardware with real constraints—not just software.
            </p>
          </div>
        </div>
      </section>

      <section className="section-panel">
        <div className="container">
          <div className="eyebrow">U3 — DISCIPLINES</div>
          <h2 className="section-title">Core technical domains.</h2>
          <div className="domain-grid">
            {skillDomains.map((domain) => (
              <article key={domain.title} className="panel-card feature-card">
                <div className="card-kicker">{domain.title}</div>
                <p>{domain.description}</p>
                <div className="tag-row">
                  {domain.tags.map((tag) => (
                    <span key={tag} className="chip">{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-surface">
        <div className="container">
          <div className="section-header-inline">
            <div>
              <div className="eyebrow">TP1 — PROJECTS</div>
              <h2 className="section-title">Selected engineering work.</h2>
            </div>
            <Link href="/projects" className="text-link">
              View all projects <ArrowRight size={16} />
            </Link>
          </div>

          <div className="project-explorer">
            <aside className="project-list" aria-label="Project list">
              {projects.map((entry, index) => (
                <button
                  key={entry.name}
                  type="button"
                  className={`project-item ${activeProject === index ? 'active' : ''}`}
                  onClick={() => setActiveProject(index)}
                >
                  <span className="project-name">{entry.name}</span>
                  <span className="project-subtitle">{entry.subtitle}</span>
                </button>
              ))}
            </aside>

            <div className="project-panel">
              <div className="project-panel-header">
                <div>
                  <div className="card-kicker">{project.status}</div>
                  <h3>{project.name}</h3>
                </div>
                <span className="panel-tag">{project.subtitle}</span>
              </div>

              <div className="tab-row" role="tablist" aria-label="Project details">
                {projectTabs.map((tab) => (
                  <span key={tab} className="tab-pill">
                    {tab}
                  </span>
                ))}
              </div>

              <div className="project-body-grid">
                <div className="project-body-copy">
                  <h4>Problem</h4>
                  <p>{project.overview}</p>
                  <h4>Approach</h4>
                  <p>{project.architecture}</p>
                  <h4>Implementation</h4>
                  <p>{project.hardwareText}</p>
                </div>

                <div className="project-rail">
                  <div className="rail-block">
                    <span className="rail-label">Hardware</span>
                    <div className="tag-row">
                      {project.hardware.map((item) => (
                        <span key={item} className="chip tertiary">{item}</span>
                      ))}
                    </div>
                  </div>

                  <div className="rail-block">
                    <span className="rail-label">Security</span>
                    <div className="tag-row">
                      {project.security.map((item) => (
                        <span key={item} className="chip tertiary">{item}</span>
                      ))}
                    </div>
                  </div>

                  <div className="rail-block">
                    <span className="rail-label">Results</span>
                    <ul>
                      {project.results.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="panel-actions">
                {project.links.map((link) => (
                  <a key={link} href={link} target="_blank" rel="noreferrer" className="btn-secondary btn-small">
                    {link.includes('ieeexplore') ? 'Paper' : 'Repository'} <ExternalLink size={14} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-panel">
        <div className="container">
          <div className="eyebrow">TP2 — TEAM</div>
          <div className="leadership-grid">
            <div>
              <h2 className="section-title">Team bi0s / Hardware leadership.</h2>
              <p className="leadership-copy">
                I currently serve as Hardware Team Lead at Team bi0s, where my work spans embedded security, hardware security, automotive security, firmware, and security research. The role is technical, practical, and centered on how systems are built and how they fail.
              </p>
            </div>
            <div className="leadership-card panel-card">
              <div className="card-kicker">Leadership scope</div>
              <ul>
                <li>Embedded Security</li>
                <li>Hardware Security</li>
                <li>Automotive Security</li>
                <li>Firmware</li>
                <li>Embedded Development</li>
                <li>Security Research</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-surface">
        <div className="container">
          <div className="eyebrow">TP3 — RESEARCH</div>
          <h2 className="section-title">Research and publication record.</h2>
          <div className="research-card panel-card">
            <div className="publication-header">
              <div>
                <div className="card-kicker">IEEE IDCIoT 2026</div>
                <h3>An IoT-based Smart Glove for Real-Time Tremor Detection and Suppression in Parkinson&apos;s Patients</h3>
              </div>
              <a href="https://ieeexplore.ieee.org" target="_blank" rel="noreferrer" className="btn-secondary btn-small">
                View Publication <ExternalLink size={14} />
              </a>
            </div>
            <p>
              The publication combines wearable sensing, embedded control, and real-time filtering to create a system for tremor detection and counter-vibration actuation. It reflects the same design philosophy used throughout my portfolio: practical hardware, measurable engineering constraints, and meaningful system validation.
            </p>
            <div className="tag-row">
              {['Embedded Systems', 'Wearable Systems', 'BLE', 'Signal Processing', 'Medical IoT'].map((tag) => (
                <span key={tag} className="chip">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-panel">
        <div className="container">
          <div className="eyebrow">J1 — SPEAKING</div>
          <h2 className="section-title">Technical speaking and public communication.</h2>
          <div className="speaking-grid">
            {speaking.map((item) => (
              <article key={item.title} className="panel-card talk-card">
                <div className="card-kicker">{item.event}</div>
                <div className="talk-role">{item.role}</div>
                <h3>{item.title}</h3>
                <p>{item.blurb}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-surface">
        <div className="container">
          <div className="eyebrow">A1 — ACHIEVEMENTS</div>
          <h2 className="section-title">Recognition and competition results.</h2>
          <div className="achievement-grid">
            {achievements.map((item) => (
              <article key={item.title} className="panel-card achievement-card">
                <div className="achievement-title">{item.title}</div>
                <div className="achievement-meta">{item.meta}</div>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-panel">
        <div className="container timeline-wrap">
          <div className="eyebrow">U4 — TIMELINE</div>
          <h2 className="section-title">Progression from student engineer to embedded security researcher.</h2>
          <div className="timeline-bar">
            {timeline.map((step, index) => (
              <div key={step} className="timeline-step">
                <span className="timeline-node" />
                <span>{step}</span>
                {index < timeline.length - 1 && <span className="timeline-arrow">↓</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-surface footer-cta-section">
        <div className="container footer-cta">
          <div>
            <div className="eyebrow">J2 — CONTACT</div>
            <h2 className="section-title">Available for embedded systems, hardware security, and research collaborations.</h2>
          </div>
          <div className="contact-actions">
            <a href="mailto:2005gauthamsai@gmail.com" className="btn-primary">
              <Mail size={16} /> Email
            </a>
            <a href="https://github.com/gautham-sai05" target="_blank" rel="noreferrer" className="btn-secondary">
              <Github size={16} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/gautham-sai-b3781b205" target="_blank" rel="noreferrer" className="btn-secondary">
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
