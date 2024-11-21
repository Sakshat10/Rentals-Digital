import contractConfig from "@/constants/contractConfig";
import { Abi, formatEther, parseEther } from "viem";
import { Config, useReadContract } from "wagmi";

export default function useGetTotalTokensSoldInRound(round: number = 1) {
	const { data: totalTokensSold, ...props } = useReadContract<
		Abi,
		"tokenSoldInRounds",
		[number],
		Config,
		bigint
	>({
		...contractConfig.rentalConfig,
		functionName: "tokenSoldInRounds",
		args: [round],
	});

	const totalTokens: number = 12000000;

	const soldTokenInNumber = Number(
		formatEther(totalTokensSold || parseEther("0"))
	);

	const progress = (soldTokenInNumber / totalTokens) * 100;

	if (progress > 100) return { progress: 100, ...props };

	return { progress, ...props };
}
