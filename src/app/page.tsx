import About from "@/components/About/About";
import { HeroBanner } from "@/components/banner/HeroBanner";
import ContactUs from "@/components/ContactUs/ContactUs";
import EventManagement from "@/components/EventManagement/EventManagement";
import HappyMomentsSection from "@/components/Home/HappyClientSection";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <HeroBanner />
      <HappyMomentsSection />
      <EventManagement />
      <About />
      <ContactUs />
    </main>
  )
}
