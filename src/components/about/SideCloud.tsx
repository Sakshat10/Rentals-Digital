import sideCloud from "@/assets/Images/sharedImg/leftSideCloud.png"

function SideCloud() {
  return (
    <div className="absolute top-[40vh] left-0 hidden lg:block">
      <img src={sideCloud} alt="cloud" className="w-14"/>
    </div>
  )
}

export default SideCloud
