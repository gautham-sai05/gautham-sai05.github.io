export type TimelineEntry = {
  id: string;
  year: string;
  month?: string;
  title: string;
  organization: string;
  location?: string;
  type: 'education' | 'competition' | 'research' | 'leadership' | 'achievement' | 'publication';
  description: string;
  highlights?: string[];
  link?: string;
};

export const timeline: TimelineEntry[] = [
  {
    id: 'amrita-2024',
    year: '2024',
    month: 'Sep',
    title: 'B.Tech Electronics & Communication Engineering',
    organization: 'Amrita Vishwa Vidyapeetham, Amritapuri',
    location: 'Kerala, India',
    type: 'education',
    description:
      'Pursuing B.Tech ECE with specialization in embedded systems, hardware security, and wireless communications. CGPA: 8.89.',
    highlights: [
      'Specialization in embedded systems and hardware security',
      'Active member of Team bi0s — India\'s top CTF team',
      'IEEE IDCIoT 2026 publication during first year',
      'CGPA: 8.89',
    ],
  },
  {
    id: 'bi0s-hardware-lead',
    year: '2024',
    month: 'Oct',
    title: 'Hardware Team Lead',
    organization: 'Team bi0s',
    location: 'Amrita Vishwa Vidyapeetham',
    type: 'leadership',
    description:
      'Leading the hardware security wing of Team bi0s — India\'s #1 ranked CTF team. Directing embedded system challenges, PCB-based security research, and hardware reverse engineering efforts.',
    highlights: [
      'Leading embedded system and PCB-based CTF challenge development',
      'Hardware security and system-level design research',
      'Mentoring junior members in embedded systems fundamentals',
    ],
  },
  {
    id: 'ieee-idciot-2026',
    year: '2026',
    month: 'Jan',
    title: 'IEEE IDCIoT 2026 Publication',
    organization: 'IEEE',
    location: 'Published',
    type: 'publication',
    description:
      '"An IoT-based Smart Glove for Real-Time Tremor Detection and Suppression in Parkinson\'s Patients" — co-authored paper on wearable medical embedded systems.',
    highlights: [
      'Published in IEEE IDCIoT 2026 proceedings',
      'Co-authors: Hrishikesh S, Gunisha Kaur, Gowrinandana R Kaimal, Aswathy K Nair, Prajitha S',
      'Topic: Wearable IoT for neurological disorder management',
    ],
    link: 'https://ieeexplore.ieee.org',
  },
  {
    id: 'isea-isap-2026',
    year: '2026',
    month: 'Jan',
    title: 'ISEA–ISAP 2026 Security Conference',
    organization: 'IIT Madras',
    location: 'Chennai, India',
    type: 'research',
    description:
      'Attended the Fifth ISEA International Conference on Security and Privacy (ISEA–ISAP 2026) at IIT Madras — national-level information security and privacy conference.',
    highlights: [
      'Security research talks and technical discussions with researchers in hardware security and IoT security',
      'Networking with national cybersecurity researchers',
      'Focus areas: hardware security, IoT security, and cryptography',
    ],
  },
  {
    id: 'twist-hack-2025',
    year: '2025',
    month: 'Mar',
    title: 'First Place — TWIST Hack 2025',
    organization: 'FOSS Fest, College of Engineering Kidangoor',
    location: 'Kerala, India',
    type: 'achievement',
    description:
      'TWIST Hack was an 18-hour hackathon as part of FOSS Fest ’25 at CEKNPY, focused on rapid prototyping and practical innovation.',
    highlights: [
      'First place out of 30+ competing teams',
      '18-hour problem-solving and rapid prototyping challenge',
      'Demonstrated CAN bus attack techniques',
    ],
  },
  {
    id: 'ignite-2025',
    year: '2025',
    month: 'Mar',
    title: 'First Prize — IGNITE 2025 Ideathon',
    organization: 'Amrita University',
    location: 'Amritapuri, Kerala',
    type: 'achievement',
    description:
      'Won first prize at IGNITE 2025 Ideathon at Amrita University, presenting an embedded systems solution for a real-world engineering problem.',
    highlights: ['First prize among university-wide submissions', 'Embedded systems solution design for practical use'],
  },
  {
    id: 'anokha-stm32-2024',
    year: '2024',
    month: 'Feb',
    title: 'Embedded Systems with STM32 — Workshop',
    organization: 'Anokha 2024, Amrita Vishwa Vidyapeetham',
    location: 'Coimbatore, India',
    type: 'research',
    description:
      'Completed hands-on workshop on embedded systems development with STM32 microcontrollers at Anokha 2024 techfest.',
    highlights: [
      'STM32 HAL/LL programming',
      'Real-time operating systems fundamentals',
      'Industry-standard firmware development practices',
    ],
  },
  {
    id: 'vidyut-semiconductor-2025',
    year: '2025',
    title: 'Semiconductor Workshop — Vidyut 2025',
    organization: 'Amrita Vishwa Vidyapeetham',
    location: 'Kerala, India',
    type: 'research',
    description:
      'Participated in semiconductor design and fabrication workshop at Vidyut 2025, covering VLSI fundamentals and chip architecture.',
    highlights: ['VLSI design fundamentals', 'Semiconductor fabrication process overview', 'IC architecture analysis'],
  },
  {
    id: 'caterpillar-2026',
    year: '2026',
    month: 'Apr',
    title: 'Caterpillar Tech Challenge 2026 — Round 2',
    organization: 'Caterpillar Inc.',
    type: 'competition',
    description:
      'Team D4RK NULL advanced to Round 2 of the Caterpillar Tech Challenge 2026 with an ML-based adaptive PI controller that improves industrial machinery performance under variable load conditions.',
    highlights: [
      'Advanced to Round 2 out of hundreds of teams',
      'LSTM-based adaptive gain tuning for PI controllers',
      'MATLAB Simulink + TensorFlow implementation',
    ],
  },
  {
    id: 'hsc-2023',
    year: '2021-2023',
    title: 'Higher Secondary (Class XI–XII)',
    organization: 'Sacred Heart Higher Secondary School, Dwaraka',
    location: 'Kerala, India',
    type: 'education',
    description: 'Completed Higher Secondary Education with focus on Physics, Chemistry, and Mathematics.',
  },
];
