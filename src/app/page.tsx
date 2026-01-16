import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import CoachingSection from "./components/CoachingSection";
import ClearWaySection from "./components/ClearWaySection";
import B2BSection from "./components/B2BSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header />
      <Hero />
      <AboutSection />
      <CoachingSection />
      <ClearWaySection />
      <B2BSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
