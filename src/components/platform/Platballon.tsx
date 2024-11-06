import ballon from "@/assets/Images/ballon.png";

function PlatBallon() {
  return (
    <div className="absolute top-[12vh] animate-float hidden lg:block">
      <img src={ballon} alt="Balloon" className="w-16"/>
    </div>
  );
}

export default PlatBallon;
