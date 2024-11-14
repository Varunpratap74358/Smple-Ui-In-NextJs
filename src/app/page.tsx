
import FeturedCourses from '@/components/FeturedCourses'
import FinnelPage from '@/components/FinnelPage'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import { HoverCardEffact } from '@/components/HoverCardEffact'
import MovingCards from '@/components/MovingCards'
import WhyChooseUs from '@/components/WhyChooseUs'

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeturedCourses />
      <WhyChooseUs />
      <MovingCards />
      <HoverCardEffact />
      <FinnelPage />
      <Footer/>
    </main>
  )
}
