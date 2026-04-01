import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import DjCarousel from '@/components/DjCarousel'
import VideoGrid from '@/components/VideoGrid'
import Description from '@/components/Description'
import TournamentDetails from '@/components/TournamentDetails'
import TicketIncludes from '@/components/TicketIncludes'
import Prizes from '@/components/Prizes'
import MapLocation from '@/components/MapLocation'
import FAQ from '@/components/FAQ'
import Sponsors from '@/components/Sponsors'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white scroll-smooth relative">
      <Navbar />
      <Hero />
      <DjCarousel />
      <VideoGrid />
      <Description />
      <TournamentDetails />
      <TicketIncludes />
      <Prizes />
      <MapLocation />
      <Sponsors />
      <FAQ />
      <Footer />
    </main>
  );
}
