import { useState } from "react";
import toast from "react-hot-toast";
import { useWriteContract } from "wagmi";
import { waitForTransactionReceipt } from "@wagmi/core";
import { config } from "@/config";
import contractConfig from "@/constants/contractConfig";
import { ContractFunctionExecutionError } from "viem";

export default function useGenerateReferralCode() {
	const { writeContractAsync, ...props } = useWriteContract();

	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isSuccess, setIsSuccess] = useState<boolean>(false);

	async function generateToken(referralCode: string) {
		try {
			setIsSuccess(false);
			setIsLoading(true);

			const hash = await writeContractAsync({
				...contractConfig.rentalConfig,
				functionName: "generateReferralCode",
				args: [referralCode],
			});

			await waitForTransactionReceipt(config, {
				hash,
			});

			setIsSuccess(true);
		} catch (error) {
			if (error instanceof ContractFunctionExecutionError) {
				if (
					error.cause.shortMessage.includes(
						"You are not eligible to generate referral"
					)
				) {
					toast.error("Please buy some tokens before generating referral code");
					return;
				}

				if (error.cause.shortMessage.includes("your Referral Code Exist")) {
					toast.error("You have already generated a referral Code");
					return;
				}

				if (error.cause.shortMessage.includes("refferal Code Already Used")) {
					toast.error("Referral Code already exist. Please try another one.");
					return;
				}
			}
			toast.error("Could not generate referral code. Please try again later.");
		} finally {
			setIsLoading(false);
		}
	}

	return { ...props, isPending: isLoading, isSuccess, generateToken };
}
