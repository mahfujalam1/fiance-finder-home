import { HeroBanner } from "@/components/banner/HeroBanner";
import { Navbar } from "@/shared/navbar/Navbar";
import { TopBar } from "@/shared/navbar/TopBar";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <TopBar />
      <Navbar />
      <HeroBanner />

      {/* Additional sections could go here */}
      <div className="bg-white py-20 text-center">
        <p className="text-muted-foreground">Scroll down to explore more features</p>
      </div>
    </main>
  )
}
