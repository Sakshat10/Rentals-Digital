import HeroDesc from "./HeroDesc";
import HeroTabs from "./HeroTabs";
import Ballon from "./Ballon";
import Plane from "./Plane";
import Location from "./Location";
import LightCloud from "./LightCloud";
import DarkCloud from "./DarkCloud";


function Hero() {
  return (
    <div className="lg:h-[85vh]">
      <div className="relative flex justify-around items-start flex-wrap gap-6 py-10 px-5 md:px-4">
       <HeroDesc/>
       <HeroTabs/>
      </div>
       <Location/>
       <Plane/>
       <LightCloud/>
       <DarkCloud/>
       <Ballon/>
    </div>
  )
}

export default Hero
