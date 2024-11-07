import smallPlane from "@/assets/Images/sharedImg/backPlane.png"

function HalfPlane() {
  return (
    <div className="absolute -bottom-[7vh] right-0 hidden lg:block">
      <img src={smallPlane} alt="" className="w-56"/>
    </div>
  )
}

export default HalfPlane
