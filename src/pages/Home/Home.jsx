import Hero from "../../components/Hero-section/Hero";
import Logo from "../../components/Logo-section/Logo";
import Navbar from "../../components/Navbar/Navbar";
import Offerings from "../../components/Offerings/Offerings";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Logo/>
      <Offerings/>
    </>
  );
}
