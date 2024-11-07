import plane from "@/assets/Images/sharedImg/backPlane.png"

function PlaneAcquisition() {
  return (
    <div className="absolute  top-1/3 right-0 hidden lg:block">
      <img src={plane} alt="" className="w-96"/>
    </div>
  )
}

export default PlaneAcquisition
