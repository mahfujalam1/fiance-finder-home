import { SectionHeader } from "../Header/SectionHeader";

import Image from "next/image"

const images = [
    {
        src: "/gallery/couple-portrait.jpg",
        alt: "Couple portrait",
        className: "col-span-1 row-span-1",
    },
    {
        src: "/gallery/traditional-wedding-ceremony.jpg",
        alt: "Traditional wedding ceremony",
        className: "col-span-2 row-span-1",
    },
    {
        src: "/gallery/hand-hand.avif",
        alt: "Henna hands",
        className: "col-span-1 row-span-1",
    },
    {
        src: "/gallery/pregnant-couple.jpg",
        alt: "Pregnant couple",
        className: "col-span-1 row-span-1",
    },
    {
        src: "/gallery/couple-in-mountains.jpg",
        alt: "Couple in mountains",
        className: "col-span-1 row-span-2",
    },
    {
        src: "/gallery/wedding-celebration-sparklers.jpg",
        alt: "Wedding celebration with sparklers",
        className: "col-span-2 row-span-1",
    },
]

export function GallerySection() {
    return (
        <section className="py-12 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`relative overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-[1.02] ${image.className}`}
                    >
                        <Image
                            src={image.src || "/placeholder.svg"}
                            alt={image.alt}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}


// Demo Component showing usage
const HappyMomentsSection = () => {

    return (
        <div className="bg-gray-50 py-12">
            <SectionHeader
                title="Our Happy Moments"
                borderWidth="w-60"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd."
                color="text-primary"
            />

            <GallerySection />
        </div>
    );
};

export default HappyMomentsSection;