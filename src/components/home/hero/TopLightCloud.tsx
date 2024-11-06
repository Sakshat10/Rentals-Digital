import topCloud from "@/assets/Images/TopCloud.png"

function TopLightCloud() {
  return (
    <div className="absolute  top-[-11vh] left-1/4 hidden lg:block">
      <img src={topCloud} alt="" className="w-80"/>
    </div>
  )
}

export default TopLightCloud
