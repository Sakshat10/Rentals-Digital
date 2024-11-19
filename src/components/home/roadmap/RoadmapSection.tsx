import RoadmapDesc from "./RoadmapDesc"
import RoadmapPlane from "./RoadmapPlane"
import RoadmapSmDesc from "./RoadmapSmDesc"
import SideCloud from "./SideCloud"
import SideDarkCloud from "./SideDarkCloud"


function RoadmapSection() {
  return (
    <div className='relative' id="roadmap">
      <h1 className="text-center text-5xl font-bold text-white">Our Roadmap</h1>
      <div className="hidden  lg:block">
        <SideDarkCloud/>
        <SideCloud/>
      </div>
      <div className="hidden  lg:block ">
      <RoadmapDesc/>
      </div>
      <div className="flex items-center justify-center pt-32">
        <RoadmapPlane/>
      </div>
      <div className="block lg:hidden">
        <RoadmapSmDesc/>
      </div>


    </div>
  )
}

export default RoadmapSection
