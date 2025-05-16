import { AspectRatio } from "@/components/ui/aspect-ratio";
import { PawPrint } from "lucide-react";

const GallerySection = () => {
  const galleryImages = [
    {
      src: "https://images.jdmagicbox.com/comp/medak/y2/9999p8452.8452.190814142356.e3y2/catalogue/the-marley-s-pet-resort-and-training-centre-bollaram-medak-pet-training-centres-9pnl3zgwco.jpg",
      alt: "Dogs playing in the yard",
      className: "aspect-video md:row-span-2 md:col-span-1"
    },
    {
      src: "https://images.jdmagicbox.com/v2/comp/medak/y2/9999p8452.8452.190814142356.e3y2/catalogue/the-marley-s-pet-resort-and-training-centre-bollaram-medak-pet-training-centres-x560r88r3k.jpg",
      alt: "Healthy pet meals",
      className: "aspect-video md:row-span-2"
    },
    {
      src: "https://images.jdmagicbox.com/comp/medak/y2/9999p8452.8452.190814142356.e3y2/catalogue/the-marley-s-pet-resort-and-training-centre-bollaram-medak-pet-training-centres-1z0yguhs13.jpg",
      alt: "Dogs on a walk",
      className: "aspect-video md:row-span-2 md:col-span-1"
    },
    {
      src: "https://images.jdmagicbox.com/comp/medak/y2/9999p8452.8452.190814142356.e3y2/catalogue/the-marley-s-pet-resort-and-training-centre-bollaram-medak-pet-training-centres-l8xxfxande.jpg",
      alt: "Training session",
      className: "aspect-video md:row-span-2 md:col-span-1"
    },
    {
      src: "https://images.jdmagicbox.com/comp/medak/y2/9999p8452.8452.190814142356.e3y2/catalogue/the-marley-s-pet-resort-and-training-centre-bollaram-medak-pet-training-centres-m25ci443nj.jpg",
      alt: "Pet boarding area",
      className: "aspect-video md:row-span-2 md:col-span-1"
    },
    {
      src: "https://images.jdmagicbox.com/comp/medak/y2/9999p8452.8452.190814142356.e3y2/catalogue/the-marley-s-pet-resort-and-training-centre-bollaram-medak-pet-training-centres-6b9umcozfa.jpg",
      alt: "Pet boarding area",
      className: "aspect-video md:row-span-2 md:col-span-1"
    }
  ];

  return (
    <section id="gallery" className="bg-marley-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="section-title">Gallery</h2>
          <p className="text-lg text-center max-w-3xl mt-4">
            Take a visual tour of our resort facilities and see our furry guests enjoying their stay.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className={`rounded-xl overflow-hidden transition-transform hover:scale-[1.02] shadow-md hover:shadow-xl ${image.className}`}
            >
              <AspectRatio ratio={16/9}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-marley-black/70 italic">
            Images are placeholders. Our actual resort photos will be updated here.
          </p>
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
export default GallerySection;

