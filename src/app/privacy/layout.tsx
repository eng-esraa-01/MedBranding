import { LanguageProvider } from '@/lib/LanguageContext';

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <LanguageProvider>{children}</LanguageProvider>;
}
