import { Navbar, Footer } from './components/layout';
import {
  HeroSection,
  BrandCloud,
  FeaturesSection,
  WorkflowSection,
  PricingSection,
  CTASection,
} from './components/sections';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-amber-500 selection:text-black antialiased">
      <Navbar />

      <main>
        <HeroSection />
        <BrandCloud />
        <FeaturesSection />
        <WorkflowSection />
        <PricingSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
