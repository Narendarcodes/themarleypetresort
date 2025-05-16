import { Badge } from "@/components/ui/badge";
import { Cake, Home, MapPin, Shield, Droplets, Trees, Verified } from "lucide-react";

const FacilitiesSection = () => {
  const facilities = [
    {
      icon: <Trees className="h-6 w-6" />,
      title: "2-Acre Open Space",
      description: "Spacious area for pets to run, play and explore in a safe environment."
    },
    {
      icon: <Cake className="h-6 w-6" />,
      title: "Homemade Food",
      description: "Healthy, home-cooked meals prepared fresh daily for all our furry guests."
    },
    {
      icon: <Verified className="h-6 w-6" />,
      title: "Top-Class Trainer",
      description: "Professional training services provided by experienced pet specialists."
    },
    {
      icon: <Droplets className="h-6 w-6" />,
      title: "Swimming Pool",
      description: "A fun exercise option for dogs who love water (coming soon).",
      badge: true
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Hygiene Priority",
      description: "Regular cleaning and sanitization to maintain a healthy environment."
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Nearby Vet Access",
      description: "Quick access to veterinary care in case of emergencies."
    }
  ];

  return (
    <section id="facilities" className="bg-marley-orange/5 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <h2 className="section-title">Our Facilities</h2>
          <p className="text-lg text-center max-w-3xl mt-4">
            We provide premium amenities and services to ensure your pet's stay is comfortable, engaging, and enriching.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <div 
              key={index} 
              className="bg-marley-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow relative flex flex-col h-full"
            >
              <div className="flex items-start mb-4">
                <div className="p-3 bg-marley-orange/10 rounded-lg text-marley-orange mr-4">
                  {facility.icon}
                </div>
                <h3 className="text-xl font-semibold pt-2">{facility.title}</h3>
                {facility.badge && (
                  <Badge className="absolute top-4 right-4 bg-marley-orange text-white">
                    Coming Soon
                  </Badge>
                )}
              </div>
              <p className="text-marley-black/70 flex-grow">{facility.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-marley-white rounded-xl overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="bg-marley-orange p-8 md:p-12 text-marley-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Non-Breeding Centre</h3>
              <p className="mb-4">
                Marley's Pet Resort is strictly a non-breeding facility. We focus solely on providing exceptional boarding and training services for your beloved pets.
              </p>
              <p>
                Our mission is to create a stress-free, enriching environment where pets can enjoy their stay while their owners are away, without any breeding-related activities.
              </p>
              <div className="mt-8 flex items-center">
                <Home className="h-6 w-6 mr-3" />
                <span className="text-lg font-medium">A true home away from home</span>
              </div>
            </div>
            <div className="h-full">
              <img
                src="src\images\the-marley-s-pet-resort-and-training-centre-bollaram-medak-pet-training-centres-ljs7aui1o0.jpg"
                alt="Dogs playing in open space"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="paw-separator mt-20">
          <div className="p-2 bg-marley-orange/10 rounded-full">
            <PawPrint className="h-6 w-6 text-marley-orange" />
          </div>
        </div>
      </div>
    </section>
  );
};

import { PawPrint } from "lucide-react";

export default FacilitiesSection;