import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/lib/LanguageContext';

export const metadata: Metadata = {
  title: 'MedBranding - Digital Solutions for Doctors',
  description:
    'Your all-in-one platform for medical website design, graphic branding, and professional video production tailored for doctors.',
  icons: {
    icon: '/images/logoblue.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
