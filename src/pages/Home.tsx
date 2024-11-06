import { HeroDesc, HeroTabs } from "@/components"
import Ballon from "@/components/home/hero/Ballon"
import Plane from "@/components/home/hero/Plane"
import LatestNews from "@/components/home/latestNews/LatestNews"
import PartnersMarquee from "@/components/home/partners/Partners"


function Home() {
  return (
    <div className="">
      <div className="lg:h-[90vh] relative">
      <div className=" flex justify-around items-start flex-wrap gap-6 py-10 px-5 md:px-4">
      <HeroDesc/>
      <HeroTabs/>
      </div>
      <Plane/>
      <Ballon/>
      </div>
      <PartnersMarquee/>
      <LatestNews/>
    </div>
  )
}

export default Home
