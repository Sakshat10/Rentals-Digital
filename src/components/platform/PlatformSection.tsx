import DarkCloud from "./DarkCloud";
import LeftLightCloud from "./leftLightCloud";
import LightCloud from "./LightCloud";
import PlatBallon from "./Platballon";
import PlatHeroDesc from "./PlatHeroDesc";
import PlatHeroImg from "./PlatHeroImg";
import PlatReward from "./PlatReward";

function PlatformSection() {
  return (
    <div className="min-h-fit flex flex-col justify-between items-center md:px-12 px-5">
      <div className="flex items-center  justify-around gap-5 flex-wrap mt-12">
        <LightCloud/>
        <DarkCloud/>
        <LeftLightCloud/>
        <PlatHeroDesc />
        <PlatHeroImg />
        <PlatBallon />
      </div>
      <PlatReward />
    </div>
  );
}

export default PlatformSection;
