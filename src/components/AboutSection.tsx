import { Card, CardContent } from "@/components/ui/card";
import { Clock, Home, Shield } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: <Home className="h-10 w-10 text-marley-orange" />,
      title: "Family-Run",
      description: "We're not just caretakers, we're a family that welcomes your pets into our home."
    },
    {
      icon: <Clock className="h-10 w-10 text-marley-orange" />,
      title: "Available 24/7",
      description: "Our team lives with your pets, ensuring round-the-clock care and attention."
    },
    {
      icon: <Shield className="h-10 w-10 text-marley-orange" />,
      title: "Safety First",
      description: "Your pet's safety and comfort are our top priorities in our clean, spacious environment."
    }
  ];

  return (
    <section id="about" className="bg-marley-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <h2 className="section-title">About Us</h2>
          <p className="text-lg text-center max-w-3xl mt-4">
            At Marley's Pet Resort & Training Centre, we've created a loving environment where your pets feel at home while you're away. Our passion for animals drives us to provide exceptional care that goes beyond the ordinary.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-marley-white border-2 border-marley-orange/10 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="flex flex-col items-center text-center pt-6">
                <div className="mb-4 p-4 bg-marley-orange/10 rounded-full">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-marley-black/70">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Why Choose Marley's Pet Resort?</h3>
            <p className="mb-4">
              We understand that leaving your beloved pets behind can be difficult. That's why we've created an environment where they'll receive the same level of care, love, and attention they get at home.
            </p>
            <p className="mb-4">
              Our family lives with the pets we care for, ensuring they're never alone and always have human companionship. We focus on providing homemade food, maintaining clean surroundings, and ensuring a safe environment for all our furry guests.
            </p>
            <p>
              Whether it's boarding or training, we treat each pet as an individual with unique needs and personalities, tailoring our care to suit them perfectly.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -top-4 -right-4 w-full h-full bg-marley-orange/20 rounded-3xl"></div>
            <div className="relative bg-gray-200 rounded-3xl overflow-hidden aspect-square">
              <img
                src="https://images.unsplash.com/photo-1525253013412-55c1a69a5738?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="Owner with dogs at Marley's Pet Resort"
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

export default AboutSection;