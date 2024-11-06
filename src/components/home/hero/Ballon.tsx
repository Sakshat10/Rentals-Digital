import ballon from "@/assets/Images/ballon.png";

function Ballon() {
  return (
    <div className="absolute top-2/3 right-1/3 animate-float">
      <img src={ballon} alt="Balloon" />
    </div>
  );
}

export default Ballon;
