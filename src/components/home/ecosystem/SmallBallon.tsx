import smallBallon from "@/assets/Images/sharedImg/smallBallon.png"

function SmallBallon() {
  return (
    <div className="absolute -bottom-[20vh] right-[8vw] hidden lg:block">
      <img src={smallBallon} alt="" className="w-10"/>
    </div>
  )
}

export default SmallBallon
