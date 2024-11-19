import smallBallon from "@/assets/Images/sharedImg/smallBallon.png"

function Ballon() {
  return (
    <div className="absolute top-52 left-[40vw] hidden lg:block">
      <img src={smallBallon} alt="ballon" className="w-10"/>
    </div>
  )
}

export default Ballon
