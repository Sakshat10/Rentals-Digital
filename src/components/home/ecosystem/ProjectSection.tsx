import Ecosystem from "@/assets/Images/homeImages/Ecosystem.png";
import Features from "./Features";
import FeaturesSm from "./FeaturesSm";
import Button from "@/components/shared/Button";

function ProjectSection() {
  return (
    <div className="py-10">
      <h1 className="text-center text-3xl font-bold text-white">Project Ecosystem</h1>
      
      <div className="hidden relative lg:block">
        <Features />
      </div>
      
      <div className="flex items-start justify-center py-8">
        <img src={Ecosystem} alt="" className="md:w-1/2" />
      </div>

        <div className="block lg:hidden">
        <FeaturesSm />
      </div>
      <div className="flex justify-center mt-8">
      <Button>Learn more about the platform</Button>
      </div>
    </div>
  );
}

export default ProjectSection;
