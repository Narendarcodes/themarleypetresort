import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Dog } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    petType: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, petType: value }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
      duration: 5000,
    });
    setFormData({ name: "", phone: "", petType: "", message: "" });
  };

  return (
    <section id="contact" className="bg-marley-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <h2 className="section-title">Contact Us</h2>
          <p className="text-lg text-center max-w-3xl mt-4">
            Have questions or ready to book a stay for your pet? Reach out to us and we'll be happy to help.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="border-none shadow-lg overflow-hidden">
            <CardContent className="p-0 h-full">
              <div className="h-[400px] w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3803.947621583897!2d78.38601417516885!3d17.557680283358845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8f8f19f21a7d%3A0xf56dbed19baa845f!2sThe%20Marley&#39;s%20Pet%20Resort%20%26%20Training%20Centre%2C%20Boarding%20Kennel!5e0!3m2!1sen!2sin!4v1747402636155!5m2!1sen!2sin"
                  title="Marley's Pet Resort Location"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
              <div className="bg-marley-orange p-6 text-marley-white">
                <div className="flex items-center mb-4">
                  <Phone className="h-5 w-5 mr-3" />
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p>📞 093467 32788</p>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <Mail className="h-5 w-5 mr-3" />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p>contact@marleyspetresort.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-3" />
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p>Hyderabad, Telangana, India</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-marley-orange/10 shadow-lg">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-2xl font-semibold mb-8">Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="petType">Pet Type</Label>
                  <Select value={formData.petType} onValueChange={handleSelectChange} required>
                    <SelectTrigger id="petType" className="w-full">
                      <SelectValue placeholder="Select your pet type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dog">Dog</SelectItem>
                      <SelectItem value="cat">Cat</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your requirements"
                    className="min-h-[120px]"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-marley-orange text-marley-white hover:bg-marley-orange/90"
                >
                  <Dog className="h-4 w-4 mr-2" /> Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;