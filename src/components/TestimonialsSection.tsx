import { Card, CardContent } from "@/components/ui/card";
import { PawPrint, Quote } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      content: "My Labrador Bruno always comes back happy and healthy from Marley's. I love how they treat him like family and keep me updated with photos.",
      author: "Priya Sharma",
      petName: "Bruno",
      image: "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=912&q=80",
    },
    {
      id: 2,
      content: "The training services at Marley's are exceptional. My German Shepherd learned so much in just a few weeks. The staff truly understands dog behavior.",
      author: "Rahul Mehta",
      petName: "Rocky",
      image: "https://images.jdmagicbox.com/comp/medak/y2/9999p8452.8452.190814142356.e3y2/catalogue/the-marley-s-pet-resort-and-training-centre-bollaram-medak-pet-training-centres-i40k23t3q5.jpg",
    },
    {
      id: 3,
      content: "I was worried about leaving my senior dog, but the team at Marley's gave her special attention and care. The homemade food was a huge plus!",
      author: "Ananya Singh",
      petName: "Ginger",
      image: "https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 4,
      content: "The spacious environment and attentive staff make this place the best in Hyderabad. My dogs love their regular stays at Marley's!",
      author: "Karthik Reddy",
      petName: "Max & Luna",
      image: "https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
    },
  ];

  // For mobile carousel functionality
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  return (
    <section id="testimonials" className="bg-marley-orange/5 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <h2 className="section-title">Testimonials</h2>
          <p className="text-lg text-center max-w-3xl mt-4">
            Hear what pet parents have to say about their experience with Marley's Pet Resort.
          </p>
        </div>

        {/* Desktop View - Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.id}
              className="bg-marley-white border-none shadow-lg overflow-hidden"
            >
              <CardContent className="p-0 flex flex-col md:flex-row">
                <div className="md:w-2/5 h-60 md:h-auto relative">
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.petName} - pet of ${testimonial.author}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-3/5 p-6 flex flex-col justify-between">
                  <div>
                    <Quote className="h-8 w-8 text-marley-orange/30 mb-4" />
                    <p className="italic text-marley-black/80 mb-4">
                      "{testimonial.content}"
                    </p>
                  </div>
                  <div>
                    <div className="h-px w-full bg-marley-orange/20 my-4"></div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold">{testimonial.author}</p>
                        <p className="text-sm text-marley-black/60">Pet: {testimonial.petName}</p>
                      </div>
                      <PawPrint className="h-5 w-5 text-marley-orange" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile View - Carousel */}
        <div className="md:hidden relative">
          <Card className="bg-marley-white border-none shadow-lg overflow-hidden">
            <CardContent className="p-0 flex flex-col">
              <div className="h-60 relative">
                <img
                  src={testimonials[currentIndex].image}
                  alt={`${testimonials[currentIndex].petName} - pet of ${testimonials[currentIndex].author}`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <Quote className="h-8 w-8 text-marley-orange/30 mb-4" />
                  <p className="italic text-marley-black/80 mb-4">
                    "{testimonials[currentIndex].content}"
                  </p>
                </div>
                <div>
                  <div className="h-px w-full bg-marley-orange/20 my-4"></div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">{testimonials[currentIndex].author}</p>
                      <p className="text-sm text-marley-black/60">Pet: {testimonials[currentIndex].petName}</p>
                    </div>
                    <PawPrint className="h-5 w-5 text-marley-orange" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          {/* Navigation buttons */}
          <div className="flex justify-center mt-6 gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full border-marley-orange text-marley-orange hover:bg-marley-orange/10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <path d="m15 18-6-6 6-6"/>
              </svg>
              <span className="sr-only">Previous</span>
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full border-marley-orange text-marley-orange hover:bg-marley-orange/10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <path d="m9 18 6-6-6-6"/>
              </svg>
              <span className="sr-only">Next</span>
            </Button>
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

export default TestimonialsSection;