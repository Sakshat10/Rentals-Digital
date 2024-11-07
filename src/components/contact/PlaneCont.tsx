import plane from "@/assets/Images/sharedImg/backPlane.png"

function PlaneCont() {
  return (
    <div className="absolute  top-1/3 right-0 hidden lg:block">
      <img src={plane} alt="" className="w-72"/>
    </div>
  )
}

export default PlaneCont
