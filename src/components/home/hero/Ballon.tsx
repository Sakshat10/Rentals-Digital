import ballon from "@/assets/Images/sharedImg/ballon.png";

function Ballon() {
  return (
    <div className="absolute top-3/4 right-1/3 hidden lg:block">
      <img src={ballon} alt="Balloon" className="w-16"/>
    </div>
  );
}

export default Ballon;
