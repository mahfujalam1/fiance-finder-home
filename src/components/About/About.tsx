import { SectionHeader } from "../Header/SectionHeader";

export default function About() {
    return (
        <section
            className="relative py-24 bg-cover bg-center bg-no-repeat bg-fixed"
            style={{
                backgroundImage: "url('/events/bgImage.jpg')",
                backgroundColor: "#1a1a1a",
            }}
        >
            <div className="absolute inset-0 bg-black/50 pointer-events-none"></div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                <SectionHeader title={`About ${process.env.NEXT_PUBLIC_PROJECT_NAME}`} color="text-white" borderWidth="w-48" />
                <p className="text-gray-200 w-full lg:w-4xl leading-relaxed text-sm md:text-base">
                    <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet</span>
                    <span className="space-y-3">clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                        takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</span>
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                    accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                    dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                    invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                </p>
            </div>
        </section>
    )
}
