'use client';

import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import Footer from '@/components/Footer/Footer';
import { useLanguage } from '@/lib/LanguageContext';

const content = {
  en: {
    title: 'Terms & Conditions',
    date: 'Last updated: May 2026',
    sections: [
      {
        heading: '1. Acceptance of Terms',
        text: 'By accessing and using MedBranding services, you accept and agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services.',
      },
      {
        heading: '2. Services',
        text: 'MedBranding provides digital marketing, branding, website design, and content creation services for medical professionals and organizations. We reserve the right to modify or discontinue services at any time.',
      },
      {
        heading: '3. Client Responsibilities',
        text: 'Clients are responsible for providing accurate information, timely feedback, and necessary materials required to complete projects. Delays caused by the client may affect project timelines.',
      },
      {
        heading: '4. Intellectual Property',
        text: 'Upon full payment, clients receive ownership of the final deliverables. MedBranding retains the right to showcase completed work in its portfolio unless otherwise agreed in writing.',
      },
      {
        heading: '5. Payment Terms',
        text: 'Payment terms are outlined in individual project agreements. A deposit may be required before work begins. Final deliverables are released upon receipt of full payment.',
      },
      {
        heading: '6. Limitation of Liability',
        text: 'MedBranding shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services.',
      },
      {
        heading: '7. Governing Law',
        text: 'These terms are governed by the laws of the Arab Republic of Egypt.',
      },
      {
        heading: '8. Contact',
        text: 'For questions regarding these terms, contact us at: info@dwamtech.com',
      },
    ],
  },
  ar: {
    title: 'الشروط والأحكام',
    date: 'آخر تحديث: مايو 2026',
    sections: [
      {
        heading: '١. قبول الشروط',
        text: 'بالوصول إلى خدمات MedBranding واستخدامها، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق، يرجى عدم استخدام خدماتنا.',
      },
      {
        heading: '٢. الخدمات',
        text: 'تقدم MedBranding خدمات التسويق الرقمي والبراندينج وتصميم المواقع وإنشاء المحتوى للمهنيين والمؤسسات الطبية. نحتفظ بالحق في تعديل الخدمات أو إيقافها في أي وقت.',
      },
      {
        heading: '٣. مسؤوليات العميل',
        text: 'يتحمل العملاء مسؤولية تقديم معلومات دقيقة وملاحظات في الوقت المناسب والمواد اللازمة لإتمام المشاريع. قد تؤثر التأخيرات الناجمة عن العميل على الجداول الزمنية للمشروع.',
      },
      {
        heading: '٤. الملكية الفكرية',
        text: 'عند اكتمال الدفع، يحصل العملاء على ملكية المنتجات النهائية. تحتفظ MedBranding بالحق في عرض الأعمال المكتملة في محفظتها ما لم يُتفق على خلاف ذلك كتابيًا.',
      },
      {
        heading: '٥. شروط الدفع',
        text: 'تُحدد شروط الدفع في اتفاقيات المشاريع الفردية. قد يُطلب دفع مقدم قبل بدء العمل. تُسلَّم المنتجات النهائية عند استلام الدفع الكامل.',
      },
      {
        heading: '٦. تحديد المسؤولية',
        text: 'لن تكون MedBranding مسؤولة عن أي أضرار غير مباشرة أو عرضية أو تبعية ناجمة عن استخدام خدماتنا.',
      },
      {
        heading: '٧. القانون الحاكم',
        text: 'تخضع هذه الشروط لقوانين جمهورية مصر العربية.',
      },
      {
        heading: '٨. التواصل',
        text: 'للاستفسار عن هذه الشروط، تواصل معنا على: info@dwamtech.com',
      },
    ],
  },
};

export default function TermsPage() {
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
          <a href="/privacy">{isRTL ? 'سياسة الخصوصية' : 'Privacy Policy'}</a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
