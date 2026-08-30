export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  tags: string[];
  category: 'embedded' | 'security' | 'hardware' | 'ml' | 'wireless';
  featured: boolean;
  year: number;
  status: 'complete' | 'ongoing' | 'published';
  github?: string;
  paper?: string;
  image: string;
  overview: string;
  problem: string;
  objectives: string[];
  architecture: string;
  hardware?: string;
  firmware?: string;
  challenges: string[];
  results: string[];
  lessons: string[];
  futureWork: string[];
  techStack: string[];
};

export const projects: Project[] = [
  {
    slug: 'smart-anti-tremor-glove',
    title: 'Smart Anti-Tremor Glove',
    subtitle: 'IEEE IDCIoT 2026 — Wearable Medical Device',
    summary:
      'A wearable embedded system for real-time Parkinson\'s tremor detection and active suppression using MPU6050 IMU sensing, PWM actuation, and Bluetooth-based remote monitoring.',
    tags: ['ESP32', 'MPU6050', 'BLE', 'PWM', 'IEEE', 'IoT', 'Medical'],
    category: 'embedded',
    featured: true,
    year: 2025,
    status: 'published',
    paper: 'https://ieeexplore.ieee.org',
    image: '/images/projects/tremor-glove.jpg',
    overview:
      'Parkinson\'s disease affects over 10 million people worldwide, with tremor being its most visible and debilitating symptom. Traditional tremor suppression relies on pharmacological intervention or DBS surgery — both invasive and expensive. This project delivers a non-invasive, wearable alternative: a glove-form-factor embedded system that detects tremor in real time and applies counter-force through vibration actuators.',
    problem:
      'Parkinson\'s tremor (typically 4–6 Hz) interferes with daily tasks. Existing assistive devices are either bulky medical equipment or consumer wearables with no active suppression capability. The challenge was to design a compact, low-power system capable of sensing, classifying, and counteracting tremor within latency bounds tight enough to be therapeutically useful.',
    objectives: [
      'Detect tremor in the 4–6 Hz frequency band using 6-axis IMU data',
      'Classify motion as voluntary vs. tremor using a lightweight on-device algorithm',
      'Apply counter-vibration via PWM-controlled actuators with sub-100ms latency',
      'Stream real-time sensor data and device state over BLE for monitoring',
      'Achieve full-day battery life on a single LiPo cell',
    ],
    architecture:
      'The system centers on an ESP32 microcontroller connected to an MPU6050 via I²C. Raw accelerometer and gyroscope data are sampled at 100Hz, low-pass filtered, and passed through a frequency-domain classifier running on-chip. When tremor is detected, the MCU drives a set of coin vibration motors via MOSFET switches in a PWM pattern tuned to destructively interfere with the tremor signature. Simultaneously, BLE advertisements broadcast sensor telemetry to a companion Android app.',
    hardware:
      'Custom PCB designed in KiCad integrating: ESP32-WROOM-32, MPU6050 IMU, Si2302 N-MOSFET array, 3.7V LiPo with TP4056 charging, 3.3V LDO regulation, and flex cable connector for glove integration.',
    firmware:
      'Written in Embedded C with ESP-IDF framework. Key modules: (1) I²C driver for MPU6050 with DMP interrupt-driven sampling, (2) FIR band-pass filter kernel for 4–6 Hz tremor isolation, (3) PWM controller with dynamic duty-cycle mapping, (4) BLE GATT server for telemetry streaming.',
    challenges: [
      'Separating voluntary hand movement from pathological tremor at 4–6 Hz required careful FIR filter design',
      'Achieving sub-100ms actuation latency while running classification on a single core',
      'Miniaturizing the PCB to glove form factor without compromising thermal performance',
      'Power budget: IMU + BLE + motors needed to coexist on a 500mAh cell for 8+ hours',
    ],
    results: [
      'Tremor detection accuracy: 94.2% on test subject dataset',
      'Actuation latency: 47ms average (well within 100ms therapeutic threshold)',
      'Battery life: 11.3 hours continuous operation',
      'Published at IEEE IDCIoT 2026 — International Data Convergence and IoT conference',
    ],
    lessons: [
      'Hardware-software co-design is critical — PCB layout choices directly impacted EMI on the IMU',
      'Filter design in embedded contexts requires careful fixed-point arithmetic to avoid precision loss',
      'BLE power management trade-offs are non-obvious — connection intervals matter more than TX power',
    ],
    futureWork: [
      'Integrate adaptive tremor classification using edge ML (TensorFlow Lite Micro)',
      'Add UDS-style diagnostics over BLE for clinical logging',
      'Explore closed-loop stimulation with EMG feedback',
      'Clinical trials with Parkinson\'s patients',
    ],
    techStack: ['ESP32', 'ESP-IDF', 'MPU6050', 'KiCad', 'BLE/GATT', 'C', 'FIR Filtering', 'PWM Control'],
  },
  {
    slug: 'automotive-can-bus-attack-simulator',
    title: 'Automotive CAN Bus Attack Simulator',
    subtitle: 'Hardware Security Research Platform',
    summary:
      'A multi-node CAN bus testbed built with Arduino Nano + MCP2515 for simulating automotive ECU communication, message injection, replay attacks, and DoS using high-priority frame flooding.',
    tags: ['CAN Bus', 'Automotive Security', 'MCP2515', 'Arduino', 'Hardware Security', 'ECU'],
    category: 'security',
    featured: true,
    year: 2025,
    status: 'complete',
    github: 'https://github.com/gautham-sai05/can-bus-simulator',
    image: '/images/projects/can-bus.jpg',
    overview:
      'Modern vehicles contain 70+ ECUs communicating over CAN — a bus protocol designed in the 1980s with zero authentication. This project builds a controlled lab environment to study, demonstrate, and analyze CAN bus vulnerabilities including message injection, replay attacks, and denial-of-service through frame priority manipulation.',
    problem:
      'Automotive cybersecurity research typically requires expensive lab equipment or real vehicle access. This project demonstrates that effective CAN security testing can be built from commodity hardware, enabling researchers and students to understand attack vectors before they encounter them in production systems.',
    objectives: [
      'Implement a multi-node CAN network with simulated ECU roles',
      'Develop tools for CAN message sniffing, injection, and replay',
      'Demonstrate DoS via high-priority (low CAN ID) frame flooding',
      'Analyze bus behavior under attack conditions',
      'Create a configurable test harness for security research',
    ],
    architecture:
      'Three Arduino Nano nodes connected via MCP2515 CAN controllers to a physical CAN bus (120Ω termination). Node 1 acts as Engine ECU (broadcasts RPM, throttle). Node 2 acts as Body Control Module. Node 3 is the attack node — configurable via serial menu to sniff, inject arbitrary frames, replay captured sequences, or flood the bus with ID 0x000 frames.',
    hardware:
      'Arduino Nano × 3, MCP2515 CAN modules, TJA1050 CAN transceivers, DB9 connectors, 120Ω termination resistors, custom breakout board for signal monitoring.',
    firmware:
      'Arduino C++ with MCP_CAN library. Attack node implements: (1) promiscuous sniff mode logging all frames to serial, (2) injection mode accepting hex frame input via UART, (3) replay buffer storing up to 64 frames in SRAM, (4) DoS mode generating maximum-rate 0x000 ID frames to starve legitimate traffic.',
    challenges: [
      'MCP2515 SPI timing at 8MHz conflicted with Arduino timer interrupts — required careful ISR management',
      'CAN arbitration logic meant DoS effectiveness depended on message rate vs. bus utilization',
      'Building a realistic ECU simulation required understanding OBD-II PID structure',
    ],
    results: [
      'Successfully demonstrated message injection: injected arbitrary RPM values visible on OBD reader',
      'Replay attack: captured and replayed door lock sequence 100% reliably',
      'DoS attack: achieved 99.7% bus saturation, blocking all legitimate traffic at 500Kbps',
      'Platform used as teaching tool at Team bi0s hardware security workshops',
    ],
    lessons: [
      'CAN\'s lack of source authentication makes injection trivially easy — AUTOSAR SecOC is a necessary evolution',
      'High-priority ID flooding (ID 0x000) is devastatingly effective — rate limiting at gateway level is critical',
      'Physical access remains the primary threat model for automotive CAN',
    ],
    futureWork: [
      'Port to socketCAN on Linux for integration with automotive security tools',
      'Implement basic AUTOSAR SecOC to demonstrate authenticated CAN',
      'Add anomaly detection IDS as a defender module',
      'Integrate with ICSim for dashboard visualization',
    ],
    techStack: ['Arduino', 'MCP2515', 'CAN Bus', 'OBD-II', 'C++', 'SPI', 'Serial Protocol Analysis'],
  },
  {
    slug: 'rf-fingerprinting-deep-learning',
    title: 'RF Fingerprinting via Deep Learning',
    subtitle: 'Device Identification through Wireless Signal Analysis',
    summary:
      'A CNN-based RF fingerprinting pipeline that classifies wireless transmitters by their unique hardware imperfections in the I/Q signal domain, achieving robust identification under varying SNR conditions.',
    tags: ['RF', 'Deep Learning', 'CNN', 'IQ Data', 'Signal Processing', 'Security'],
    category: 'wireless',
    featured: true,
    year: 2025,
    status: 'complete',
    image: '/images/projects/rf-fingerprinting.jpg',
    overview:
      'Every wireless transmitter has microscopic hardware imperfections — in oscillators, mixers, and power amplifiers — that manifest as unique distortions in the transmitted RF signal. RF fingerprinting exploits these imperfections to identify specific devices by their "radio fingerprint," independent of MAC addresses or protocol-level identifiers. This has applications in network access control, rogue device detection, and spectrum monitoring.',
    problem:
      'Traditional wireless authentication relies on protocol-layer identifiers (MAC addresses, credentials) that are trivially spoofable. Physical-layer authentication via RF fingerprinting provides a hardware-rooted identity that cannot be easily cloned. The challenge is building a classifier robust enough to work across varying channel conditions and SNR.',
    objectives: [
      'Build an I/Q data pipeline for RF signal preprocessing and feature extraction',
      'Train a CNN model for multi-class device classification',
      'Evaluate classification accuracy across SNR ranges (-10dB to +30dB)',
      'Analyze model robustness through confusion matrix analysis',
      'Characterize which device types are most distinguishable',
    ],
    architecture:
      'The pipeline takes raw I/Q samples from captured RF datasets, converts them to constellation diagrams and spectrogram representations, and feeds them into a 5-layer CNN. The model outputs per-class probabilities for device identification. Training uses cross-entropy loss with Adam optimizer.',
    firmware: undefined,
    challenges: [
      'I/Q imbalance in captured data required calibration preprocessing',
      'Model overfitting at high SNR — required data augmentation with synthetic noise injection',
      'Class imbalance in device datasets skewed classifier toward majority classes',
      'Computational cost of spectrogram generation on large datasets',
    ],
    results: [
      'Classification accuracy: 91.4% at 20dB SNR, 78.2% at 0dB SNR',
      'Robust identification maintained down to -5dB SNR for close-proximity devices',
      'Confusion matrix revealed high confusion between devices of the same chip family',
      'CNN outperformed SVM baseline by 17% at low SNR',
    ],
    lessons: [
      'Feature representation choice (constellation vs. spectrogram) significantly impacts performance',
      'Domain knowledge of RF hardware imperfections guided more effective preprocessing',
      'Transfer learning from pre-trained CNNs on similar datasets would accelerate training',
    ],
    futureWork: [
      'Deploy on SDR hardware for real-time fingerprinting',
      'Explore adversarial attacks on the fingerprinting system',
      'Extend to 5G NR waveforms',
      'Implement federated learning for privacy-preserving model training',
    ],
    techStack: ['Python', 'PyTorch', 'NumPy', 'GNU Radio', 'SDR', 'CNN', 'Signal Processing', 'I/Q Data'],
  },
  {
    slug: 'peerdrop-ble-p2p',
    title: 'PeerDrop — Secure BLE P2P System',
    subtitle: 'Proximity-Validated Peer-to-Peer Data Exchange',
    summary:
      'A BLE-based peer-to-peer communication system with RSSI-based proximity validation, one-time secure data exchange, and persistent device identity stored in ESP32 NVS flash.',
    tags: ['BLE', 'ESP32', 'Security', 'P2P', 'NVS', 'RSSI'],
    category: 'wireless',
    featured: false,
    year: 2024,
    status: 'complete',
    image: '/images/projects/peerdrop.jpg',
    overview:
      'PeerDrop implements a proximity-gated data exchange protocol over BLE, designed for scenarios where data should only be transferred between physically co-located devices. It uses RSSI thresholding as a proximity gate, one-time token generation for exchange sessions, and NVS-backed device identity to prevent replay attacks.',
    problem:
      'Conventional BLE file transfer systems have no concept of physical proximity — a device 50 meters away can initiate a transfer as easily as one centimeter away. PeerDrop adds a proximity layer using RSSI as a physical-layer gate, inspired by AirDrop\'s proximity model but implemented on constrained ESP32 hardware.',
    objectives: [
      'Implement BLE GATT server/client roles with custom service UUIDs',
      'Use RSSI measurements for proximity validation (configurable threshold)',
      'Generate one-time session tokens to prevent replay',
      'Store device identity in NVS for persistent pairing records',
      'Implement secure data framing with basic integrity checking',
    ],
    architecture:
      'Each device runs as both GATT server (advertising) and GATT client (scanning). When a scan discovers a PeerDrop advertisement, RSSI is checked against threshold. If proximate, a connection is established, tokens are exchanged via characteristic write, and data transfer proceeds over a notification-based pipe. Session tokens are derived from device-unique IDs stored in NVS.',
    hardware: 'ESP32-WROOM-32 development boards with onboard BLE antenna.',
    firmware:
      'ESP-IDF with NimBLE stack. Custom GATT profile with 3 characteristics: identity announcement, session token exchange, and data pipe. NVS namespace for persistent device registry.',
    challenges: [
      'RSSI instability — single-sample RSSI is too noisy; required rolling average over 10 samples',
      'BLE connection conflicts when multiple devices in range all advertise simultaneously',
      'NVS storage limits required careful key-value schema design',
    ],
    results: [
      'Proximity gate functional: 97% rejection of devices beyond 2m, <1% false rejection within 0.5m',
      'Token replay attack successfully blocked in all test cases',
      'Transfer throughput: ~18KB/s over BLE notifications at 1M PHY',
    ],
    lessons: [
      'RSSI is a weak proximity metric — ToF or UWB would provide significantly better ranging',
      'NimBLE stack on ESP-IDF is significantly more memory-efficient than bluedroid',
      'One-time token schemes need careful nonce generation to avoid predictability',
    ],
    futureWork: [
      'Replace RSSI with UWB ranging for precise distance measurement',
      'Add proper symmetric key exchange (ECDH) for payload encryption',
      'Port to Zephyr RTOS for cross-platform compatibility',
    ],
    techStack: ['ESP32', 'ESP-IDF', 'NimBLE', 'BLE/GATT', 'NVS', 'C', 'RSSI', 'Embedded Security'],
  },
  {
    slug: 'mac-attendance-system',
    title: 'MAC-Based Attendance System',
    subtitle: 'Passive Wi-Fi Device Tracking for Automated Attendance',
    summary:
      'An automated attendance system using Wi-Fi monitoring mode to passively detect student devices by MAC address, with channel hopping, PostgreSQL storage, and Discord webhook reporting.',
    tags: ['Wi-Fi', 'Python', 'PostgreSQL', 'airodump-ng', 'Networking', 'Linux'],
    category: 'embedded',
    featured: false,
    year: 2024,
    status: 'complete',
    image: '/images/projects/attendance.jpg',
    overview:
      'Traditional attendance systems are manual, error-prone, and easily gamed. This system passively monitors the 2.4GHz and 5GHz Wi-Fi spectrum to detect the presence of registered devices by their MAC addresses, logging attendance without any active student action required.',
    problem:
      'Manual attendance in large lecture halls is slow and susceptible to proxy attendance (one student signing for another). A passive detection system using device MAC addresses eliminates human involvement and is significantly harder to circumvent without physical presence.',
    objectives: [
      'Configure a Wi-Fi interface in monitor mode for passive frame capture',
      'Implement channel hopping to capture probes across all Wi-Fi channels',
      'Map captured MACs to student registry in PostgreSQL',
      'Generate attendance reports automatically at session end',
      'Post real-time summaries to Discord via webhook',
    ],
    architecture:
      'A Linux host (Raspberry Pi or laptop) runs airodump-ng in monitor mode with channel hopping. A Python daemon reads airodump-ng CSV output in real time, filters for registered MACs, and upserts attendance records into PostgreSQL. At session end, a report generator queries the DB and POSTs a formatted summary to a Discord channel via webhook.',
    challenges: [
      'MAC address randomization on modern smartphones breaks MAC-based identification',
      'Dense RF environments cause capture gaps — required multiple interface aggregation',
      'airodump-ng CSV format parsing edge cases with unusual SSID characters',
    ],
    results: [
      'Detection rate: 89% for devices with MAC randomization disabled',
      'Near-zero false positives (unregistered devices correctly excluded)',
      'Successfully deployed in a 40-student classroom trial',
      'Discord reports generated within 30 seconds of session end',
    ],
    lessons: [
      'MAC randomization is a significant limitation — future systems need app-based or UWB approaches',
      'PostgreSQL connection pooling is essential for high-frequency insert workloads',
      'Passive monitoring raises privacy considerations that need explicit policy acknowledgment',
    ],
    futureWork: [
      'Explore BLE beacon-based attendance as a randomization-resistant alternative',
      'Add anomaly detection for unusual MAC patterns',
      'Web dashboard for real-time attendance visualization',
    ],
    techStack: ['Python', 'airodump-ng', 'PostgreSQL', 'Linux', 'Wi-Fi Monitor Mode', 'Discord API', 'Raspberry Pi'],
  },
  {
    slug: 'ml-adaptive-pi-controller',
    title: 'ML-Based Adaptive PI Controller',
    subtitle: 'D4RK NULL — Caterpillar Tech Challenge 2026',
    summary:
      'An LSTM-based adaptive control system that dynamically adjusts PI controller gains in real time based on system disturbance history, improving setpoint tracking and reducing overshoot under variable load conditions.',
    tags: ['LSTM', 'Control Systems', 'MATLAB', 'Python', 'TensorFlow', 'Simulink'],
    category: 'ml',
    featured: false,
    year: 2026,
    status: 'complete',
    image: '/images/projects/adaptive-pi.jpg',
    overview:
      'Traditional PI controllers use fixed gains tuned for a single operating condition. When plant dynamics change — due to load variations, temperature, or wear — performance degrades. D4RK NULL introduces an LSTM model that observes error history and disturbance signals, outputting real-time gain correction factors for an underlying PI controller.',
    problem:
      'Fixed-gain PI controllers are extensively used in industrial automation due to their simplicity. However, in real-world conditions (e.g., Caterpillar construction equipment with highly variable loads), fixed gains lead to overshoot, oscillation, or sluggish response. An adaptive system that maintains performance across operating conditions is high commercial value.',
    objectives: [
      'Generate training data via Simulink plant simulation across operating conditions',
      'Design and train an LSTM model for online gain adaptation',
      'Implement safety clamping layer to prevent destabilizing gains',
      'Evaluate against baseline fixed-gain PI across disturbance scenarios',
      'Achieve reduction in overshoot and settling time',
    ],
    architecture:
      'Simulink models a second-order plant with configurable disturbance injection. Training data: (error, disturbance history) → (optimal Kp_corr, Ki_corr) pairs generated offline. The LSTM consumes 20-step history windows and outputs multiplicative correction factors. A safety layer clamps corrections to [0.5, 2.0] range. At runtime, Kp_final = Kp_base × Kp_corr.',
    challenges: [
      'Generating diverse enough training data to cover all operating regimes',
      'LSTM training instability with long sequences — required gradient clipping',
      'Integration between Python inference and Simulink real-time loop',
      'Safety layer design: too conservative eliminated adaptation benefit',
    ],
    results: [
      'Overshoot reduced by 34% vs. fixed-gain PI under step load disturbances',
      'Settling time improved by 28% across test scenarios',
      'Safety layer successfully prevented gain instability in all edge cases',
      'Project reached Round 2 of Caterpillar Tech Challenge 2026',
    ],
    lessons: [
      'Data diversity in training is more impactful than model size for control applications',
      'Hybrid ML-classical approaches outperform pure ML for safety-critical control',
      'Simulink co-simulation with Python requires careful timestep synchronization',
    ],
    futureWork: [
      'Deploy on embedded target (STM32) using TensorFlow Lite Micro',
      'Real-time hardware-in-loop testing',
      'Explore model predictive control as an alternative to LSTM adaptation',
    ],
    techStack: ['MATLAB', 'Simulink', 'Python', 'TensorFlow/Keras', 'LSTM', 'NumPy', 'Control Theory'],
  },
];
