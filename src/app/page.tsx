import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import CoachingSection from "./components/CoachingSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header />
      <Hero />
      <AboutSection />
      <CoachingSection />
    </div>
  );
}
