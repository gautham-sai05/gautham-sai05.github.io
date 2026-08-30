'use client';

import { useRef } from 'react';
import { useInView } from '@/hooks/useInView';
import { SectionHeader } from '@/components/shared/SectionHeader';
import {
  Cpu,
  CircuitBoard,
  Shield,
  Car,
  Terminal,
  Wifi,
  Binary,
  Layers,
} from 'lucide-react';

const engineeringAreas = [
  {
    id: 'embedded-systems',
    icon: Cpu,
    title: 'Embedded Systems',
    description:
      'Firmware development for ESP32, STM32, LPC2148, and Raspberry Pi. Bare-metal and RTOS-based systems with real-time constraints.',
    tags: ['ESP32', 'STM32', 'ESP-IDF', 'FreeRTOS'],
  },
  {
    id: 'pcb-design',
    icon: CircuitBoard,
    title: 'PCB Design',
    description:
      'Schematic capture and PCB layout in KiCad. Mixed-signal boards, power electronics, and RF-aware routing for production-grade hardware.',
    tags: ['KiCad', 'Mixed-Signal', 'RF Layout'],
  },
  {
    id: 'hardware-security',
    icon: Shield,
    title: 'Hardware Security',
    description:
      'Side-channel analysis with ChipWhisperer, fault injection, JTAG/SWD exploitation, and firmware extraction for security research.',
    tags: ['ChipWhisperer', 'Side-Channel', 'Fault Injection'],
  },
  {
    id: 'automotive-security',
    icon: Car,
    title: 'Automotive Security',
    description:
      'CAN bus protocol analysis, ECU attack surface research, message injection, UDS protocol exploration, and automotive IDS concepts.',
    tags: ['CAN Bus', 'UDS', 'ECU', 'AUTOSAR'],
  },
  {
    id: 'embedded-linux',
    icon: Terminal,
    title: 'Embedded Linux',
    description:
      'Linux-native embedded tooling: SocketCAN, monitor mode Wi-Fi, Raspberry Pi systems, kernel module development, and custom buildroot.',
    tags: ['SocketCAN', 'Linux', 'Raspberry Pi', 'Buildroot'],
  },
  {
    id: 'wireless-systems',
    icon: Wifi,
    title: 'Wireless Systems',
    description:
      'BLE protocol engineering with NimBLE/bluedroid, Wi-Fi in monitor mode, 433MHz RF, and SDR-based spectrum analysis and protocol decoding.',
    tags: ['BLE', 'SDR', 'Wi-Fi', 'RF Analysis'],
  },
  {
    id: 'reverse-engineering',
    icon: Binary,
    title: 'Reverse Engineering',
    description:
      'Firmware analysis, binary RE for CTF and research, protocol reconstruction from captures, and hardware teardown analysis.',
    tags: ['Firmware RE', 'Binary Analysis', 'CTF', 'Protocol RE'],
  },
  {
    id: 'signal-processing',
    icon: Layers,
    title: 'Signal Processing & ML',
    description:
      'RF fingerprinting via CNN on I/Q data, LSTM-based adaptive control systems, and signal classification pipelines for embedded applications.',
    tags: ['CNN', 'LSTM', 'I/Q Data', 'MATLAB'],
  },
];

export function EngineeringAreas() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { threshold: 0.1 });

  return (
    <section
      id="engineering-areas"
      className="section"
      style={{ backgroundColor: 'var(--color-surface)' }}
      aria-label="Engineering areas of expertise"
      ref={ref}
    >
      <div className="container" style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: '0 32px' }}>
        <SectionHeader
          label="Expertise"
          title="Engineering Disciplines"
          subtitle="Eight domains of active technical work — from bare-metal firmware to automotive security research."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {engineeringAreas.map((area, i) => {
            const Icon = area.icon;
            return (
              <article
                key={area.id}
                id={`area-${area.id}`}
                className="card p-5 flex flex-col gap-4 group"
                style={{
                  opacity: isInView ? 1 : 0,
                  transform: isInView ? 'translateY(0)' : 'translateY(20px)',
                  transition: `opacity 350ms ease ${i * 60}ms, transform 350ms ease ${i * 60}ms`,
                }}
                aria-labelledby={`area-title-${area.id}`}
              >
                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-250"
                  style={{
                    backgroundColor: 'rgba(77, 168, 255, 0.08)',
                    border: '1px solid rgba(77, 168, 255, 0.15)',
                  }}
                >
                  <Icon
                    className="w-5 h-5 text-primary group-hover:text-primary-hover transition-colors duration-200"
                    aria-hidden="true"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2 flex-1">
                  <h3
                    id={`area-title-${area.id}`}
                    className="text-sm font-semibold text-text leading-snug"
                  >
                    {area.title}
                  </h3>
                  <p className="text-xs text-text-muted leading-relaxed flex-1">
                    {area.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {area.tags.map((tag) => (
                    <span key={tag} className="tag text-[10px] px-1.5 py-0.5">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
