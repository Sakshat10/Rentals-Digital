import ballon from "@/assets/Images/ballon.png"

function BallonCont() {
  return (
    <div className="absolute  top-[10vh] left-56  hidden lg:block">
      <img src={ballon} alt="" className="w-32"/>
    </div>
  )
}

export default BallonCont
