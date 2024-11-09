import sideDarkCloud from "@/assets/Images/sharedImg/leftDarkCloud.png"

function DarkSideCloud() {
  return (
    <div className="absolute animate-float top-3/4 left-0  hidden lg:block">
      <img src={sideDarkCloud} alt="cloud" className="w-12"/>
    </div>
  )
}

export default DarkSideCloud
