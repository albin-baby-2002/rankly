import ElevateSeo from './sections/elevate-seo';
import Footer from './sections/footer';
import Header from './sections/header';
import HeroSection from './sections/hero-section';
import JoinWaitlist from './sections/join-waitlist';
import OurClients from './sections/our-clients';
import PowerOfAI from './sections/power-of-ai';
import Pricing from './sections/pricing';
import TrustedBy from './sections/trusted-by';

export default function Home() {
  return (
    <>
      <Header />
      <main className=" max-w-screen overflow-x-hidden">
        <HeroSection />
        <div className=' contained overflow-hidden'>
          <TrustedBy />
          <PowerOfAI/>
          <ElevateSeo/>
          <OurClients/>
          <Pricing/>
          <JoinWaitlist/>
        </div>
      </main>
      <Footer/>
    </>
  );
}
