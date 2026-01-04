import { HeroBanner } from "@/components/banner/HeroBanner";
import HappyMomentsSection from "@/components/Home/HappyClientSection";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <HeroBanner />
      <HappyMomentsSection />
      {/* Additional sections could go here */}
      <div className="bg-white py-20 text-center">
        <p className="text-muted-foreground">Scroll down to explore more features</p>
      </div>
    </main>
  )
}
