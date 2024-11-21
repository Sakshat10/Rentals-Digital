import HeroData from "@/data/HeroData";
import Button from "../../shared/Button";
import { Progress } from "@/components/ui/progress";
import useGetTotalTokensSoldInRound from "@/hooks/web3/useGetTotalTokensSoldInRound";
import useGetIncreasedProgress from "@/hooks/web3/useGetIncreasedProgress";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { useEffect, useState } from "react";

function HeroDesc() {
	const { progress } = useGetTotalTokensSoldInRound(1);
	const { increasedPercent } = useGetIncreasedProgress();

	const [totalProgress, setTotalProgress] = useState(0);

	useEffect(() => {
		setTotalProgress(progress + increasedPercent);
	}, [progress, increasedPercent]);

	return (
		<div className="flex flex-col w-full md:w-[45vw] lg:w-[40vw] gap-6 text-white">
			<h1 className="lg:text-7xl text-5xl font-bold">Rentals Digital</h1>
			<p className="md:w-[33vw] text-justify text-xl">
				The new cryptocurrency payment ecosystem that rewards its users for their
				travels and tourism.
			</p>
			<div className="flex flex-wrap items-center gap-4">
				<Button>Buy Token Now</Button>
				<div className="flex items-center gap-4">
					<p className=" text-xl">Accepting:</p>
					<div className="flex items-center gap-4">
						<div className="flex gap-2">
							{HeroData.Icons.map((iconData, index) => (
								<a
									href={iconData.href}
									key={index}
									className="text-white"
								>
									<iconData.icon />
								</a>
							))}
						</div>
					</div>
				</div>
			</div>
			<div className="space-y-2 md:w-[33vw]">
				<p>
					<span className="font-bold">Phase 1:</span> $0.025
				</p>
				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger asChild>
							<Progress value={totalProgress > 100 ? 100 : totalProgress} />
						</TooltipTrigger>
						<TooltipContent>
							<p>{totalProgress > 100 ? 100 : totalProgress.toFixed(2)}%</p>
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>

				<p>
					<span className="font-bold">Token Price at launch:</span> $0.075
				</p>
			</div>
		</div>
	);
}

export default HeroDesc;
