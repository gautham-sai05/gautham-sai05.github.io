export type Publication = {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  month?: string;
  type: 'journal' | 'conference' | 'poster' | 'preprint';
  abstract: string;
  tags: string[];
  link?: string;
  doi?: string;
  pdf?: string;
};

export type ResearchArea = {
  id: string;
  title: string;
  description: string;
  tags: string[];
};

export const publications: Publication[] = [
  {
    id: 'ieee-tremor-glove-2026',
    title:
      'An IoT-based Smart Glove for Real-Time Tremor Detection and Suppression in Parkinson\'s Patients',
    authors: [
      'Gautham Sai',
      'Hrishikesh S',
      'Gunisha Kaur',
      'Gowrinandana R Kaimal',
      'Aswathy K Nair',
      'Prajitha S',
    ],
    venue: 'IEEE IDCIoT 2026 — International Conference on Intelligent Data Communication Technologies and Internet of Things',
    year: 2026,
    month: 'January',
    type: 'conference',
    abstract:
      'This paper presents a wearable IoT-based system for real-time detection and active suppression of pathological tremor in Parkinson\'s disease patients. The system employs an MPU6050 6-axis IMU for tremor sensing, an on-device FIR band-pass filter for frequency isolation in the 4–6 Hz tremor band, and PWM-controlled vibrotactile actuators for counter-stimulation. Bluetooth Low Energy enables real-time telemetry streaming to a companion monitoring application. Evaluation on simulated tremor data demonstrates 94.2% detection accuracy with 47ms mean actuation latency, achieving therapeutic response within established clinical bounds.',
    tags: ['Embedded Systems', 'IoT', 'BLE', 'Parkinson\'s Disease', 'Tremor Detection', 'Wearable', 'ESP32'],
    link: 'https://ieeexplore.ieee.org',
  },
];

export const researchAreas: ResearchArea[] = [
  {
    id: 'automotive-security',
    title: 'Automotive Cybersecurity',
    description:
      'Research into CAN bus protocol vulnerabilities, ECU attack surfaces, and defensive measures. Practical experience with message injection, replay attacks, and DoS simulation on hardware testbeds. Interested in AUTOSAR SecOC, automotive IDS, and UDS security.',
    tags: ['CAN Bus', 'UDS', 'ECU', 'AUTOSAR', 'IDS', 'Automotive'],
  },
  {
    id: 'hardware-security',
    title: 'Hardware Security',
    description:
      'Side-channel analysis using ChipWhisperer, hardware reverse engineering, and firmware extraction. Experience with power analysis attacks, glitching, and JTAG/SWD debug interface exploitation. Active participant in hardware CTF challenges through Team bi0s.',
    tags: ['Side-Channel', 'ChipWhisperer', 'Reverse Engineering', 'JTAG', 'Fault Injection', 'CTF'],
  },
  {
    id: 'rf-wireless-security',
    title: 'RF & Wireless Systems',
    description:
      'RF fingerprinting using deep learning on I/Q signal data for device identification. Wireless protocol analysis covering BLE, Wi-Fi, and 433MHz systems. Experience with SDR platforms for spectrum monitoring and protocol reverse engineering.',
    tags: ['RF Fingerprinting', 'SDR', 'BLE Security', 'Signal Processing', 'CNNs', 'I/Q Data'],
  },
  {
    id: 'embedded-linux',
    title: 'Embedded Linux',
    description:
      'Linux-native tooling for hardware security: monitor mode Wi-Fi, SocketCAN interface, kernel module development. Experience with Raspberry Pi, custom buildroot images, and Linux-based automotive platforms.',
    tags: ['Linux', 'SocketCAN', 'Raspberry Pi', 'Kernel', 'Buildroot', 'Wi-Fi Monitor Mode'],
  },
];

export type CTFParticipation = {
  id: string;
  name: string;
  year: number;
  team: string;
  category: string;
  result?: string;
  description: string;
};

export const ctfParticipations: CTFParticipation[] = [
  {
    id: 'wiredctf-2026',
    name: 'WiredCTF 2026',
    year: 2026,
    team: 'Team bi0s',
    category: 'Challenge Author / Hardware',
    description: 'Authored hardware-security challenge(s) focused on embedded firmware analysis, protocol reverse engineering, and practical hardware exploitation workflows.',
  },
  {
    id: 'inctf-2026',
    name: 'InCTF 2026',
    year: 2026,
    team: 'Team bi0s',
    category: 'Challenge Author / Hardware',
    description: 'Authored and deployed hardware challenge(s) for InCTF 2026, covering embedded reverse engineering, protocol reconstruction, and device-level security problem design.',
  },
  {
    id: 'bi0s-ctf',
    name: 'bi0s CTF',
    year: 2025,
    team: 'Team bi0s',
    category: 'Challenge Author / Hardware',
    description: 'Authored embedded and hardware-security challenge(s) for Team bi0s CTF events, emphasizing firmware analysis, hardware debugging, and protocol security puzzles.',
  },
  {
    id: 'isea-ctf-2026',
    name: 'ISEA CTF 2026',
    year: 2026,
    team: 'Team bi0s',
    category: 'Hardware / Embedded',
    description: 'Government-sponsored cybersecurity CTF with hardware security and embedded systems challenges.',
  },
];
