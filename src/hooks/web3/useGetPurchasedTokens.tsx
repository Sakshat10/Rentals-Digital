import contractConfig from "@/constants/contractConfig";
import { Abi, formatEther } from "viem";
import { Config, useReadContract } from "wagmi";

export default function useGetPurchasedTokens(walletAddress?: `0x${string}`) {
	const { data, ...props } = useReadContract<
		Abi,
		"tokenPurchased",
		[string],
		Config,
		bigint
	>({
		...contractConfig.rentalConfig,
		functionName: "tokenPurchased",
		args: [walletAddress],
	});

	const purchasedTokens =
		data === BigInt(0) ? "0" : data ? formatEther(data) : "0";

	return {
		purchasedTokens,
		...props,
	};
}
