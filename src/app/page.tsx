import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import Services from '@/components/Services/Services';
import Features from '@/components/Features/Features';
import Promotion from '@/components/Promotion/Promotion';
import ContactCTA from '@/components/ContactCTA/ContactCTA';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Features />
        <Promotion />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
