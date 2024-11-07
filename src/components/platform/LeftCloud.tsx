import sideCloud from "@/assets/Images/sharedImg/leftSideCloud.png"

function LeftCloud() {
  return (
    <div className="absolute top-[40vh] left-0 hidden lg:block">
      <img src={sideCloud} alt="" className="w-14"/>
    </div>
  )
}

export default LeftCloud;
