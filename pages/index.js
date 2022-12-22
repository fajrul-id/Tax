import Navbar from "../components/Navbar/Navbar";
import AboutTeam from "./AboutTeam/AboutTeam";
import AboutUs from "./AboutUs/AboutUs";
import Hero from "./Hero/Hero";
import PricingPage from "./PricingPage/PricingPage";
import Services from "./Services/Services";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <AboutTeam />
      <PricingPage />
    </>
  );
}
