import location from "@/assets/Images/location.png"

function Location() {
  return (
    <div className="absolute top-1/4 right-1/2 hidden lg:block">
      <img src={location} alt="" className="w-8"/>
    </div>
  )
}

export default Location
