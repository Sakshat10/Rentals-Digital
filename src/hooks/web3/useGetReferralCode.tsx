import contractConfig from "@/constants/contractConfig";
import { Abi } from "viem";
import { Config, useReadContract } from "wagmi";

export default function useGetReferralCode(walletAddress?: `0x${string}`) {
	const { data, ...props } = useReadContract<
		Abi,
		"couponCodes",
		[string],
		Config,
		string
	>({
		...contractConfig.rentalConfig,
		functionName: "couponCodes",
		args: [walletAddress],
	});

	return {
		referralCode: data,
		...props,
	};
}
