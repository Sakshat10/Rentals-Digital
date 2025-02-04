import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import toast, { Toaster } from "react-hot-toast";
import useGenerateReferralCode from "@/hooks/web3/useGenerateReferralCode";
import useGetReferralCode from "@/hooks/web3/useGetReferralCode";
import { useAccount } from "wagmi";
import ConnectWallet from "@/components/shared/ConnectWallet";

function Referral() {
	const [referralCode, setReferralCode] = useState<string>("");

	const { address: walletAddress } = useAccount();

	const { generateReferral, isPending } = useGenerateReferralCode();
	const {
		referralCode: referralCodeOnChain,
		isLoading,
		refetch,
	} = useGetReferralCode(walletAddress);

	async function generateReferralCode() {
		if (!referralCode) {
			toast.error("Please enter a referral code");
			return;
		}

		await generateReferral(referralCode);
		refetch();
	}

	const copyToClipboard = () => {
		if (referralCodeOnChain) {
			navigator.clipboard.writeText(
				`${window.location.href}?referral-code=${referralCodeOnChain}`
			);
			toast.success("Referral code copied to clipboard!");
		}
	};

	return (
		<div>
			<Toaster
				position="top-right"
				reverseOrder={false}
			/>
			<Card>
				<CardHeader>
					<CardTitle>Referral</CardTitle>
				</CardHeader>
				<CardContent className="space-y-2">
					<div className="space-y-2">
						<h2 className="font-medium text-lg">Earn with Referrals!!</h2>
						<ul className="font-bold">
							<li>
								Phase 1:{" "}
								<span className="font-normal">
									Earn 5% of your referral's contribution.
								</span>
							</li>
						</ul>
						<p>
							Your referral rewards will be instantly credited to your wallet after
							their transaction is confirmed.
						</p>
					</div>
					<div className="space-y-1">
						<Label htmlFor="referralCode">Referral Code</Label>
						<div className="flex items-center gap-2">
							<Input
								id="referralCode"
								type="text"
								value={
									isLoading
										? "loading..."
										: referralCodeOnChain
										? `${window.location.href}?referral-code=${referralCodeOnChain}`
										: referralCode
								}
								onChange={(e) => {
									setReferralCode(e.target.value);
								}}
								disabled={!!referralCodeOnChain || isLoading}
								readOnly={!!referralCodeOnChain}
								placeholder="Generate a referral code"
							/>
							{referralCodeOnChain && (
								<Button
									variant="outline"
									className="text-black font-bold"
									onClick={copyToClipboard}
								>
									Copy Code
								</Button>
							)}
						</div>
					</div>
				</CardContent>
				<CardFooter>
					{!walletAddress ? (
						<ConnectWallet className="w-full" />
					) : (
						<Button
							variant="outline"
							className="w-full border-custom-left text-white font-bold bg-custom-left disabled:cursor-not-allowed"
							onClick={generateReferralCode}
							disabled={isPending || !referralCode}
						>
							{isPending ? "Generating..." : "Generate Referral Code"}
						</Button>
					)}
				</CardFooter>
			</Card>
		</div>
	);
}

export default Referral;
