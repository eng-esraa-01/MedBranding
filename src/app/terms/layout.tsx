import { LanguageProvider } from '@/lib/LanguageContext';

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <LanguageProvider>{children}</LanguageProvider>;
}
