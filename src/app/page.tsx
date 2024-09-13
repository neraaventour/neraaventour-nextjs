import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import OurMission from "../components/OurMission";
import DiscoverQuest from "../components/DiscoverQuest";
import Testimonials from "../components/Testimonials";
import Referral from "../components/Referral";
import Forms from "../components/Forms";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <OurMission />
      <DiscoverQuest />
      <Testimonials />
      <Referral />
      <Forms />
      <Footer />
    </>
  );
}
