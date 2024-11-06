import HeroDesc from "./HeroDesc";
import HeroTabs from "./HeroTabs";
import Ballon from "./Ballon";
import Plane from "./Plane";
import Location from "./Location";
import LightCloud from "./LightCloud";
import DarkCloud from "./DarkCloud";
import TopDarkCloud from "./TopDarkCloud";
import TopLightCloud from "./TopLightCloud";


function Hero() {
  return (
    <div className="lg:h-[85vh] relative">
      <div className=" flex justify-around items-start flex-wrap gap-6 py-10 px-5 md:px-4">
       <HeroDesc/>
       <HeroTabs/>
      </div>
       <Location/>
       <Plane/>
       <DarkCloud/>
       <LightCloud/>
       <Ballon/>
       <TopDarkCloud/>
       <TopLightCloud/>
    </div>
  )
}

export default Hero
