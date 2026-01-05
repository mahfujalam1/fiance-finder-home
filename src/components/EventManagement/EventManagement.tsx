import Image from "next/image"
import { SectionHeader } from "../Header/SectionHeader"

interface ServiceCardProps {
    title: string
    description: string
    image: string
}

function ServiceCard({ title, description, image }: ServiceCardProps) {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col items-center text-center p-6 border border-gray-100 transition-transform hover:scale-103  hover:duration-400">
            <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-sm">
                <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
            </div>
            <h3 className="text-lg font-bold tracking-wider mb-2 text-gray-800">{title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
        </div>
    )
}

export default function EventManagement() {
    const services = [
        {
            title: "PARLOUR",
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
            image: "/events/professional-makeup-artist-working-on-model.jpg",
        },
        {
            title: "FLOURIST",
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
            image: "/events/beautiful-floral-arrangement-wedding-flowers.jpg",
        },
        {
            title: "WEDDING CAKE",
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
            image: "/events/elegant-white-wedding-cake-with-flowers.jpg",
        },
        {
            title: "VENUE & HALL",
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
            image: "/events/luxury-wedding-reception-hall-decoration.jpg",
        },
        {
            title: "MUSIC",
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
            image: "/events/live-band-performing-at-event.jpg",
        },
        {
            title: "PHOTOGRAPHY",
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
            image: "/events/wedding-photography-couple-under-veil.jpg",
        },
    ]

    return (
        <section className="w-full">
            <div className="w-full py-14 text-center bg-linear-to-r from-[#E6EBF6] via-[#B1CCED] to-[#E6EBF6]">
                <h2 className="text-gray-700  font-bold  tracking-[0.2em] text-md md:text-base">
                    LET'S MAKE MEMORABLE STORIES
                </h2>
            </div>

            <div className="container mx-auto px-4 py-16">
                <SectionHeader title="Event Management" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                        clita kasd" color='text-primary' borderWidth="w-60" />

                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    )
}
