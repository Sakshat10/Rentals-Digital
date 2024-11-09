import sideCloud from "@/assets/Images/sharedImg/leftSideCloud.png"

function LightSideCloud() {
  return (
    <div className="absolute top-3/4 left-0  hidden lg:block">
      <img src={sideCloud} alt="cloud" className="w-14"/>
    </div>
  )
}

export default LightSideCloud
