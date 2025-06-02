import CallToAction from "../../components/CallToAction/CallToAction";
import FaqSection from "../../components/FaqSection/FaqSection";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero-section/Hero";
import Logo from "../../components/Logo-section/Logo";
import Navbar from "../../components/Navbar/Navbar";
import Offerings from "../../components/Offerings/Offerings";
import PlatformExclusivity from "../../components/PlatformExclusivity/PlatformExclusivity";
import SportsSlider from "../../components/SportsSlider/SportsSlider";
import StartConversation from "../../components/StartConversation/StartConversation";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Logo/>
      <SportsSlider/>
      <Offerings/>
      <PlatformExclusivity/>
      <CallToAction/>
      <FaqSection/>
      <StartConversation/>
      <Footer/>
    </>
  );
}
