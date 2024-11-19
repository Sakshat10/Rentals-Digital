import contractConfig from "@/constants/contractConfig";
import { useState } from "react";
import toast from "react-hot-toast";
import { useWriteContract } from "wagmi";
import { waitForTransactionReceipt } from "@wagmi/core";
import { config } from "@/config";
import { ContractFunctionExecutionError, parseEther } from "viem";
import useApproveTokenTransfer from "./useApproveTokenTransfer";

export default function usePurchaseToken() {
	const { writeContractAsync, ...props } = useWriteContract();

	const { approveTokenTransfer } = useApproveTokenTransfer();

	const [isSuccess, setIsSuccess] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	async function purchaseToken({ amount, token, referralCode }: TPurchaseToken) {
		try {
			setIsLoading(true);
			setIsSuccess(false);

			const amountArg = token === "USDT" ? parseEther(amount.toString()) : 0;

			const value = token === "BNB" ? parseEther(amount.toString()) : undefined;

			const tokenArg = token === "BNB" ? 1 : 2;

			if (token === "USDT") await approveTokenTransfer({ amount });

			const hash = await writeContractAsync({
				...contractConfig.rentalConfig,
				functionName: "purchaseToken",
				args: [referralCode, tokenArg, amountArg],
				value,
			});
			await waitForTransactionReceipt(config, { hash });
			setIsSuccess(true);
			toast.success("Successfully purchased token.");
		} catch (error) {
			if (error instanceof ContractFunctionExecutionError) {
				if (
					error.cause.shortMessage.includes("BNB amount must be greater than 0") ||
					error.cause.shortMessage.includes("USDT amount must be greater than 0")
				) {
					toast.error("Amount must be more than 0");
					return;
				}

				if (error.cause.shortMessage.includes("All tokens sold")) {
					toast.error("All tokens have been sold");
					return;
				}
				if (error.cause.shortMessage.includes("he total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account.")) {
					toast.error("You don't have enough tokens");
					return;
				}
			}
			toast.error("Failed to purchase token.");
		} finally {
			setIsLoading(false);
		}
	}

	return { purchaseToken, ...props, isSuccess, isPending: isLoading };
}

type TPurchaseToken = {
	amount: number;
	token: "USDT" | "BNB";
	referralCode?: string;
};
