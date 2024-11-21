import contractConfig from "@/constants/contractConfig";
import { Abi, formatEther } from "viem";
import { Config, useReadContract } from "wagmi";

export default function useGetIncreasedProgress() {
	const { data, ...props } = useReadContract<
		Abi,
		"useGetIncreasedProgress",
		[],
		Config,
		bigint
	>({
		...contractConfig.progressUpdateConfig,
		functionName: "getNumber",
		args: [],
	});

	const increasedPercent = Number(formatEther(data ?? BigInt(0)));

	return { increasedPercent, ...props };
}
