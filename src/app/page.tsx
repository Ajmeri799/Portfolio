import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import TechStack from "@/components/TeckStack";
import Educations from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        <HeroSection />
        <About />
        <TechStack />
        <Educations />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
