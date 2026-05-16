import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import AboutServices from '@/components/AboutServices/AboutServices';
import Services from '@/components/Services/Services';
import Features from '@/components/Features/Features';
import WhyUs from '@/components/WhyUs/WhyUs';
import Process from '@/components/Process/Process';
import Promotion from '@/components/Promotion/Promotion';
import Portfolio from '@/components/Portfolio/Portfolio';
import Clients from '@/components/Clients/Clients';
import ContactCTA from '@/components/ContactCTA/ContactCTA';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main>
        <Hero />
        <AboutServices />
        <Services />
        <Features />
        <WhyUs />
        <Promotion />
        <Portfolio />
        <Clients />
        <Process />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
