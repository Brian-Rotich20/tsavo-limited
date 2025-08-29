
import ServicesSection from "./components/Services";
import MarketingCardsSection from "./components/Marketing"
import BannerSection from "./components/BannerSection"
import Approach  from "./components/Approach";
import OurServices from "./components/OurServices";
import PrintingHeroSection from "./components/Hero1";

export default function Home() {
  return (
  
    <>
    <PrintingHeroSection />
    <OurServices />
    <ServicesSection />
    <MarketingCardsSection />
    <BannerSection />
    <Approach />
    </>
  );
}
