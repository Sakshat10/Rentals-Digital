import { config } from "@/config";
import { useState } from "react";
import { waitForTransactionReceipt } from "@wagmi/core";
import { useWriteContract } from "wagmi";
import toast from "react-hot-toast";
import contractConfig, { contractAddress } from "@/constants/contractConfig";
import { parseEther } from "viem";

export default function useApproveTokenTransfer() {
	const { writeContractAsync, ...props } = useWriteContract();

	const [isSuccess, setIsSuccess] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	async function approveTokenTransfer({
		spender,
		amount,
	}: TApproveTokenTransfer) {
		try {
			setIsSuccess(false);
			setIsLoading(true);

			if (spender === undefined) spender = contractAddress.rentalAddress;

			const hash = await writeContractAsync({
				...contractConfig.rentalConfig,
				functionName: "approve",
				args: [spender, parseEther(amount.toString())],
			});
			await waitForTransactionReceipt(config, { hash });
			toast.success("Successfully approved token transfer.");

			setIsSuccess(true);
		} catch {
			toast.error("Something went wrong. Please try again.");
		} finally {
			setIsLoading(false);
		}
	}

	return {
		approveTokenTransfer,
		...props,
		isSuccess,
		isLoading,
	};
}

type TApproveTokenTransfer = { spender?: `0x${string}`; amount: number };
