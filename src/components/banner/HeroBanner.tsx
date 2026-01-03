import { SearchCard } from "../search-card";

export function HeroBanner() {
    return (
        <section className="relative min-h-screen w-full flex items-center justify-end px-4 md:px-20 overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{
                    backgroundImage: 'url("/images/banner.png")',
                    filter: "brightness(0.9)",
                }}
            />

            {/* Card Content */}
            <div className="relative z-10 py-20">
                <SearchCard />
            </div>
        </section>
    )
}
