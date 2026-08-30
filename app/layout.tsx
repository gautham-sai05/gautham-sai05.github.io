import type { Metadata } from 'next';
import { IBM_Plex_Mono, IBM_Plex_Sans } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const plexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-plex-sans',
  display: 'swap',
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-plex-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://gautham-sai05.github.io'),
  title: {
    default: 'Gautham Sai — Embedded Systems & Hardware Security',
    template: '%s | Gautham Sai',
  },
  description:
    'Embedded systems, hardware security, automotive security, firmware engineering, PCB design, and research portfolio by Gautham Sai.',
  keywords: [
    'Gautham Sai',
    'embedded systems',
    'hardware security',
    'embedded security',
    'automotive security',
    'firmware development',
    'PCB design',
    'side-channel analysis',
    'CAN security',
    'ESP32',
    'STM32',
    'Team bi0s',
    'security research',
  ],
  authors: [{ name: 'Gautham Sai', url: 'https://gautham-sai05.github.io' }],
  creator: 'Gautham Sai',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://gautham-sai05.github.io',
    siteName: 'Gautham Sai — Embedded Security Portfolio',
    title: 'Gautham Sai — Embedded Systems & Hardware Security',
    description:
      'Building embedded hardware, firmware, and security research across hardware, automotive, and wireless systems.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gautham Sai — Embedded Systems & Hardware Security',
    description:
      'Embedded systems, hardware security, and security research portfolio from Gautham Sai.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plexSans.variable} ${plexMono.variable}`}>
      <body className="font-sans bg-background text-text antialiased">
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
