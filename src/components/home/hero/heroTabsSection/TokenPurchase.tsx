import { useState } from "react";
import Button from "@/components/shared/Button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SelectHero } from "./SelectHero";
import ConnectWallet from "@/components/shared/ConnectWallet";
import { useAccount } from "wagmi";
import usePurchaseToken from "@/hooks/web3/usePurchaseToken";
import toast from "react-hot-toast";
import { useSearchParams } from "react-router-dom";
import BuyRentButton from "../BuyRentButton";

function TokenPurchase() {
	const { address: walletAddress } = useAccount();
	const { purchaseToken, isPending } = usePurchaseToken();

	const [amount, setAmount] = useState<number>(0);
	const [token, setToken] = useState<"USDT" | "BNB">("BNB");

	const [searchParams] = useSearchParams();
	const handlePurchase = async () => {
		if (amount <= 0) {
			return toast.error("Amount must be greater than 0.");
		}
		await purchaseToken({
			amount,
			token,
			referralCode: searchParams.get("referral-code") ?? undefined,
		});
		setAmount(0);
	};

	return (
		<div>
			<Card>
				<CardHeader>
					{/* <CardTitle>Token Purchase Phase 1</CardTitle> */}
					<BuyRentButton />
				</CardHeader>
				<CardContent>
					<SelectHero setToken={setToken} />
				</CardContent>

				<CardContent className="space-y-2">
					<div className="space-y-1">
						<div className="flex items-center justify-between">
							<Label htmlFor="amount">Enter the amount</Label>
							<span className="text-sm">Token Price: $0.006</span>
						</div>
						<Input
							id="amount"
							type="number"
							value={amount}
							onChange={(e) => setAmount(parseFloat(e.target.value))}
							placeholder={`Enter amount in ${token}`}
						/>
					</div>
				</CardContent>

				<CardFooter>
					{!walletAddress ? (
						<ConnectWallet className="w-full" />
					) : (
						<Button
							className="w-full !bg-custom-left text-white disabled:bg-pink-100 disabled:!cursor-not-allowed"
							onClick={handlePurchase}
							disabled={isPending || amount <= 0}
						>
							{isPending ? "Processing..." : `Buy $Rentals`}
						</Button>
					)}
				</CardFooter>
			</Card>
		</div>
	);
}

export default TokenPurchase;
