import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import Footer from "@/components/Footer";
import GallerySection from "@/components/GallerySection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import TestimonialsSection from "@/components/TestimonialsSection";

const Index = () => {
  return (
    <div className="min-h-screen font-nunito">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FacilitiesSection />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;