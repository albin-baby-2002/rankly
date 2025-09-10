import Header from './sections/header';
import HeroSection from './sections/hero-section';
import PowerOfAI from './sections/power-of-ai';
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
        </div>
      </main>
    </>
  );
}
