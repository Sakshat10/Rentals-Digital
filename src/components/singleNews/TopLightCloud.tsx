import topCloud from "@/assets/Images/sharedImg/TopCloud.png"

function TopLightCloud() {
  return (
    <div className="absolute  top-[-11vh] left-1/4 hidden lg:block">
      <img src={topCloud} alt="" className="w-96"/>
    </div>
  )
}

export default TopLightCloud
