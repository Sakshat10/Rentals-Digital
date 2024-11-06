import darkCloudFull from "@/assets/Images/darkCloudFull.png"

function CloudAcquisition() {
  return (
    <div className="absolute animate-float top-1/2 right-2 hidden lg:block">
      <img src={darkCloudFull} alt=""  className="w-72"/>
    </div>
  )
}

export default CloudAcquisition
