import sideCloud from "@/assets/Images/sharedImg/leftSideCloud.png"

function LeftLightCloud() {
  return (
    <div className="absolute top-[40vh] left-0">
      <img src={sideCloud} alt="" className="w-14"/>
    </div>
  )
}

export default LeftLightCloud
