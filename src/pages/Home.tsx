import { HeroDesc, HeroTabs } from "@/components"
import LatestNews from "@/components/home/latestNews/LatestNews"


function Home() {
  return (
    <div className="flex justify-around items-start flex-wrap gap-6 py-10 px-5 md:px-4">
      <HeroDesc/>
      <HeroTabs/>
      <LatestNews/>
    </div>
  )
}

export default Home
