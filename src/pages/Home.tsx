import { Hero, LatestNews, Partners, ProjectEcosystem } from "@/components"
import RoadmapSection from "@/components/home/roadmap/RoadmapSection"


function Home() {
  return (
    <div className="">
      <Hero/>
      <ProjectEcosystem/>
      <RoadmapSection/>
      <Partners/>
      <LatestNews/>
    </div>
  )
}

export default Home
