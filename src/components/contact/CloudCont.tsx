import darkCloudFull from "@/assets/Images/sharedImg/darkCloudFull.png"

function CloudCont() {
  return (
    <div className="absolute animate-float top-1/2 right-2 hidden lg:block">
      <img src={darkCloudFull} alt=""  className="w-56"/>
    </div>
  )
}

export default CloudCont
