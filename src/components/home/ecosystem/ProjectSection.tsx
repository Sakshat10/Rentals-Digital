import Ecosystem from "@/assets/Images/homeImages/Ecosystem.gif";
import Features from "./Features";
import FeaturesSm from "./FeaturesSm";
import Button from "@/components/shared/Button";
import DarkCloudFull from "./DarkCloudFull";
import SmallBallon from "./SmallBallon";
import HalfPlane from "./HalfPlane";

function ProjectSection() {
  return (
    <div className="py-10">
      <h1 className="text-center text-5xl font-bold text-white">Project Ecosystem</h1>
      
      <div className="hidden relative lg:block">
        <Features />
      </div>
      
      <div className="flex items-center justify-center py-8 h-[80vh] ">
        <img src={Ecosystem} alt="" className="md:w-[30vw]" />
      </div>

        <div className="block lg:hidden">
        <FeaturesSm />
      </div>
      <div className="flex justify-center mt-8">
      <Button>Learn more about the platform</Button>
      </div>

      <div className="relative">
      <DarkCloudFull/>
      <SmallBallon/>
      <HalfPlane/>
      </div>
    </div>
  );
}

export default ProjectSection;
