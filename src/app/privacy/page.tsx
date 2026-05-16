'use client';

import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import Footer from '@/components/Footer/Footer';
import { useLanguage } from '@/lib/LanguageContext';

const content = {
  en: {
    title: 'Privacy Policy',
    date: 'Last updated: May 2026',
    sections: [
      {
        heading: '1. Information We Collect',
        text: 'We collect information you provide directly to us, such as your name, email address, phone number, and any other information you choose to provide when contacting us or using our services.',
      },
      {
        heading: '2. How We Use Your Information',
        text: 'We use the information we collect to provide, maintain, and improve our services, communicate with you, and respond to your inquiries.',
      },
      {
        heading: '3. Information Sharing',
        text: 'We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as required by law.',
      },
      {
        heading: '4. Data Security',
        text: 'We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.',
      },
      {
        heading: '5. Cookies',
        text: 'Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings.',
      },
      {
        heading: '6. Contact Us',
        text: 'If you have any questions about this Privacy Policy, please contact us at: info@dwamtech.com',
      },
    ],
  },
  ar: {
    title: 'سياسة الخصوصية',
    date: 'آخر تحديث: مايو 2026',
    sections: [
      {
        heading: '١. المعلومات التي نجمعها',
        text: 'نجمع المعلومات التي تقدمها لنا مباشرةً، مثل اسمك وعنوان بريدك الإلكتروني ورقم هاتفك وأي معلومات أخرى تختار تقديمها عند التواصل معنا أو استخدام خدماتنا.',
      },
      {
        heading: '٢. كيفية استخدام معلوماتك',
        text: 'نستخدم المعلومات التي نجمعها لتقديم خدماتنا وصيانتها وتحسينها، والتواصل معك، والرد على استفساراتك.',
      },
      {
        heading: '٣. مشاركة المعلومات',
        text: 'لا نبيع معلوماتك الشخصية أو نتاجر بها أو ننقلها إلى أطراف ثالثة دون موافقتك، إلا ما تقتضيه المتطلبات القانونية.',
      },
      {
        heading: '٤. أمان البيانات',
        text: 'نطبق تدابير أمنية مناسبة لحماية معلوماتك الشخصية من الوصول غير المصرح به أو التعديل أو الإفصاح أو الإتلاف.',
      },
      {
        heading: '٥. ملفات تعريف الارتباط',
        text: 'قد يستخدم موقعنا ملفات تعريف الارتباط لتحسين تجربة التصفح. يمكنك اختيار تعطيلها من خلال إعدادات المتصفح.',
      },
      {
        heading: '٦. تواصل معنا',
        text: 'إذا كان لديك أي استفسار حول سياسة الخصوصية، يرجى التواصل معنا على: info@dwamtech.com',
      },
    ],
  },
};

export default function PrivacyPage() {
  const { lang, isRTL } = useLanguage();
  const t = content[lang];

  return (
    <div className="legal-page">
      <Navbar />
      <Hero />
      <main className="legal-container">
        <div className={`legal-section ${isRTL ? 'legal-section--rtl' : ''}`}>
          <h1>{t.title}</h1>
          <p className="legal-date">{t.date}</p>
          {t.sections.map((s, i) => (
            <div key={i}>
              <h2>{s.heading}</h2>
              <p>{s.text}</p>
            </div>
          ))}
        </div>

        <div className="legal-footer-links">
          <a href="/">{isRTL ? '→ العودة للرئيسية' : '← Back to Home'}</a>
          <span>|</span>
          <a href="/terms">{isRTL ? 'الشروط والأحكام' : 'Terms & Conditions'}</a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
