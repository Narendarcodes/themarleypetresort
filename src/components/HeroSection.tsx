import { Button } from "@/components/ui/button";
import { PawPrint } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    const contact = document.getElementById("contact");
    if (contact) {
      contact.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center bg-paw-pattern pt-16"
    >
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-marley-black mb-6">
              Welcome to{" "}
              <span className="text-marley-orange">Marley's Pet Resort</span>
            </h1>
            <div className="flex items-center justify-center md:justify-start mb-6">
              <div className="h-1 w-20 bg-marley-orange rounded-full"></div>
              <PawPrint className="h-6 w-6 text-marley-orange mx-2" />
              <div className="h-1 w-20 bg-marley-orange rounded-full"></div>
            </div>
            <h2 className="text-xl md:text-2xl lg:text-3xl mb-8 text-marley-black/80">
              A Home Away from Home for Your Most Pampered Kids
            </h2>
            <p className="text-lg mb-8 max-w-md mx-auto md:mx-0 text-marley-black/70">
              Family-run pet boarding and training center located in Hyderabad,
              where your pets are treated with love, care, and attention they deserve.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <Button
                size="lg"
                className="bg-marley-orange text-marley-white hover:bg-marley-orange/90"
                onClick={scrollToContact}
              >
                Book a Stay
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-marley-orange text-marley-orange hover:bg-marley-orange/10"
                onClick={() => {
                  const about = document.getElementById("about");
                  if (about) about.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -top-4 -left-4 w-full h-full bg-marley-orange/20 rounded-3xl"></div>
              <div className="relative bg-gray-200 rounded-3xl overflow-hidden aspect-[4/3]">
                <img
                  src="src\images\the-marley-s-pet-resort-and-training-centre-bollaram-medak-pet-training-centres-bygn8ihwi7.avif"
                  alt="Happy dogs at Marley's Pet Resort"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-marley-white/90 px-3 py-1 rounded-full shadow-md flex items-center">
                  <PawPrint className="h-4 w-4 text-marley-orange mr-1" />
                  <span className="text-sm font-semibold">Since 2018</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Curved bottom edge */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          className="w-full h-[50px] md:h-[70px] text-marley-white fill-current"
        >
          <path d="M0,64L60,69.3C120,75,240,85,360,80C480,75,600,53,720,48C840,43,960,53,1080,58.7C1200,64,1320,64,1380,64L1440,64L1440,100L1380,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;

