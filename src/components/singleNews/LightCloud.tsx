import lightCloud from "@/assets/Images/sharedImg/lightCloud.png";

function LightCloud() {
  return (
    <div className="absolute bottom-3 right-0 hidden lg:block">
      <img src={lightCloud} alt="cloud" className="w-44" />
    </div>
  );
}

export default LightCloud;
