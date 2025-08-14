
import HeroSection from "./components/Hero";
import ServicesSection from "./components/Services";
import MarketingCardsSection from "./components/Marketing"
import BannerSection from "./components/BannerSection"
import Approach  from "./components/Approach";
import OurServices from "./components/OurServices";
import WhoWeAre from "./components/WhoWeAre";

export default function Home() {
  return (
  
    <>
    <HeroSection />
    <OurServices />
    <ServicesSection />
    <MarketingCardsSection />
    <BannerSection />
    <Approach />
    <WhoWeAre />
    </>
  );
}
