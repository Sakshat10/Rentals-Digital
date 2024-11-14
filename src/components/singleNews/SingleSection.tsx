import Ballon from "./Ballon"
import DarkCloud from "./DarkCloud"
import LightCloud from "./LightCloud"
import SingleNewz from "./SingleNewz"
import TopDarkCloud from "./TopDarkCloud"
import TopLightCloud from "./TopLightCloud"


function SingleSection() {
  return (
    <div className="relative">
      <SingleNewz/>
      <DarkCloud/>
      <LightCloud/>
      <Ballon/>
      <TopDarkCloud/>
      <TopLightCloud/>
    </div>
  )
}

export default SingleSection
