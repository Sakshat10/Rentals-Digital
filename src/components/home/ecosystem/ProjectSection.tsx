import Ecosystem from "@/assets/Images/homeImages/ecoSystem.svg";
import Features from "./Features";
import FeaturesSm from "./FeaturesSm";
import Button from "@/components/shared/Button";
import DarkCloudFull from "./DarkCloudFull";
import SmallBallon from "./SmallBallon";
import HalfPlane from "./HalfPlane";
import { Link } from "react-router-dom";

function ProjectSection() {
	return (
		<div className="py-10">
			<h1 className="text-center text-5xl font-bold text-white">
				Project Ecosystem
			</h1>

			<div className="hidden relative lg:block">
				<Features />
			</div>

			<div className="flex items-center justify-center animate-float py-8 h-[75vh] ">
				<img
					src={Ecosystem}
					alt=""
					className=""
				/>
			</div>

			<div className="block lg:hidden">
				<FeaturesSm />
			</div>
			<div className="flex justify-center mt-8">
				<Button>
					<Link
						to={"/WhitePaper/WhitePaper.pdf"}
						target="_blank"
					>
						Learn more about the platform
					</Link>
				</Button>
			</div>

			<div className="relative">
				<DarkCloudFull />
				<SmallBallon />
				<HalfPlane />
			</div>
		</div>
	);
}

export default ProjectSection;
