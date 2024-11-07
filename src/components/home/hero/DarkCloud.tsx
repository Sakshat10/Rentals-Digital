import darkCloudHalf from "@/assets/Images/sharedImg/darkCloudHalf.png"

function DarkCloud() {
  return (
    <div className="absolute top-3/4 right-0 hidden animate-float lg:block">
      <img src={darkCloudHalf} alt="" className="w-56"/>
    </div>
  )
}

export default DarkCloud
