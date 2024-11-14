import darkCloudHalf from "@/assets/Images/sharedImg/darkCloudHalf.png"

function DarkCloud() {
  return (
    <div className="absolute bottom-3 right-0 hidden animate-float lg:block">
      <img src={darkCloudHalf} alt="cloud" className="w-56"/>
    </div>
  )
}

export default DarkCloud
