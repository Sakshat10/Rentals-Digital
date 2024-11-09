import smallBallon from "@/assets/Images/sharedImg/smallBallon.png"

function SmallBallon() {
  return (
    <div className="absolute top-2/4 right-[8vw] hidden lg:block">
      <img src={smallBallon} alt="ballon" className="w-10"/>
    </div>
  )
}

export default SmallBallon
