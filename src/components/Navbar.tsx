import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PawPrint } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed w-full bg-marley-white/90 backdrop-blur-sm shadow-sm z-50 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <PawPrint className="h-8 w-8 text-marley-orange animate-paw-bounce" />
          <span className="text-xl md:text-2xl font-bold text-marley-black">
            Marley's Pet Resort
          </span>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {["home", "about", "facilities", "gallery", "testimonials", "contact"].map(
            (section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-marley-black hover:text-marley-orange transition-colors capitalize"
              >
                {section}
              </button>
            )
          )}
          <Button 
            className="bg-marley-orange text-marley-white hover:bg-marley-orange/90"
            onClick={() => scrollToSection("contact")}
          >
            Contact Us
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`${isMenuOpen ? "hidden" : "block"}`}
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`${isMenuOpen ? "block" : "hidden"}`}
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full bg-marley-white shadow-md transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 py-4" : "max-h-0 py-0 overflow-hidden"
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          {["home", "about", "facilities", "gallery", "testimonials", "contact"].map(
            (section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-marley-black hover:text-marley-orange transition-colors py-2 text-left capitalize"
              >
                {section}
              </button>
            )
          )}
          <Button 
            className="bg-marley-orange text-marley-white hover:bg-marley-orange/90 w-full"
            onClick={() => scrollToSection("contact")}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;