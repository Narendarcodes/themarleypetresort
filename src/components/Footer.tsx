import { PawPrint, Mail, MessageCircleMore } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-marley-black text-marley-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <PawPrint className="h-8 w-8 text-marley-orange" />
              <span className="text-xl md:text-2xl font-bold">
                Marley's Pet Resort
              </span>
            </div>
            <p className="text-marley-white/80">
              A home away from home for your most pampered kids. Family-run pet
              boarding and training center located in Hyderabad.
            </p>
            <div className="flex space-x-4 pt-2">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-marley-white/70 hover:text-marley-orange transition-colors"
              >
                <span className="sr-only">Facebook</span>
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
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-marley-white/70 hover:text-marley-orange transition-colors"
              >
                <span className="sr-only">Instagram</span>
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
                  className="h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919346732788"
                target="_blank"
                rel="noopener noreferrer"
                className="text-marley-white/70 hover:text-marley-orange transition-colors"
              >
                <span className="sr-only">WhatsApp</span>
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
                  className="h-5 w-5"
                >
                  <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345z" />
                  <path d="M20.5 3.49v.011c-3.387-3.501-8.134-4.704-12.505-3.165A12.88 12.88 0 0 0 1.5 13.885a12.94 12.94 0 0 0 1.409 5.965.67.67 0 0 1 .03.518L1.5 24.498l4.253-1.11a.68.68 0 0 1 .524.044 12.79 12.79 0 0 0 6.516 1.76c7.1-.001 12.707-5.765 12.707-12.866 0-3.435-1.333-6.663-3.75-9.086zm-9 19.32a10.57 10.57 0 0 1-5.401-1.484l-.39-.233-4.007 1.034 1.062-3.869-.247-.396A10.75 10.75 0 0 1 11.5 2.5c5.932 0 10.75 4.822 10.75 10.75S17.432 24 11.5 24z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                "home",
                "about",
                "facilities",
                "gallery",
                "testimonials",
                "contact",
              ].map((section) => (
                <li key={section}>
                  <Button
                    variant="link"
                    onClick={() => scrollToSection(section)}
                    className="text-marley-white/80 hover:text-marley-orange p-0 h-auto capitalize"
                  >
                    {section}
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Business Hours</h3>
            <ul className="space-y-2 text-marley-white/80">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span>8:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>9:00 AM - 7:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>10:00 AM - 6:00 PM</span>
              </li>
              <li className="pt-2 text-marley-orange">
                Pet care available 24/7
              </li>
            </ul>
          </div>
        </div>

        <div className="h-px w-full bg-marley-white/10 my-8"></div>

        {/* Developer Credit Section */}
        <div className="text-center mt-12 space-y-4">
          <p className="text-xl md:text-2xl font-bold text-marley-orange animate-pulse tracking-wide">
            🚀 Built with ❤️ by{" "}
            <span className="underline underline-offset-4 decoration-marley-orange">
              Golla Narendar
            </span>
          </p>

          <div className="flex justify-center gap-6 text-marley-white/80 text-base md:text-lg">
            <a
              href="mailto:gollanarendar2004@gmail.com"
              className="flex items-center gap-2 hover:text-marley-orange transition-colors"
            >
              <Mail className="w-5 h-5" />
              Email Me
            </a>

            <a
              href="https://wa.me/916300354385"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-marley-orange transition-colors"
            >
              <MessageCircleMore className="w-5 h-5" />
              WhatsApp Me
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
