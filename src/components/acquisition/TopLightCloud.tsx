import topCloud from "@/assets/Images/sharedImg/TopCloud.png"

function TopLightCloud() {
  return (
    <div className="absolute  top-0 left-1/4 hidden lg:block">
      <img src={topCloud} alt="" className="w-80"/>
    </div>
  )
}

export default TopLightCloud
