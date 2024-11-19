import { useAccount } from "wagmi";
import ConnectWallet from "../shared/ConnectWallet";
import useGetPurchasedTokens from "@/hooks/web3/useGetPurchasedTokens";
import toast from "react-hot-toast";

function AcquisitionForm() {
	const { address: walletAddress } = useAccount();

	const { purchasedTokens, isLoading, isError } =
		useGetPurchasedTokens(walletAddress);

	return (
		<div className="h-screen flex items-center justify-center">
			<div className="lg:w-[40vw] md:w-[70vw] w-[90vw] bg-white text-custom-left rounded-2xl shadow-2xl p-8 md:transform md:transition-all md:duration-300 md:hover:scale-105 sm:transform-none sm:transition-none sm:hover:scale-100">
				<h2 className="text-center text-3xl font-bold mb-6 tracking-wider ">
					$Rental Token Vesting
				</h2>
				<div className="space-y-6 text-lg">
					<div className="flex justify-between items-center border-b pb-2">
						<span className=" font-medium">Claimable Amount:</span>
						<span className=" font-semibold">0 $Rentals</span>
					</div>
					<div className="flex justify-between items-center border-b pb-2">
						<span className=" font-medium">Balance:</span>
						{isLoading ? (
							<span className=" font-semibold">loading...</span>
						) : isError ? (
							<span className=" font-semibold">0 $Rentals</span>
						) : (
							<span className=" font-semibold">
								{Number(purchasedTokens).toFixed(2)} $Rentals
							</span>
						)}
					</div>
				</div>
				{!walletAddress ? (
					<ConnectWallet className="mt-8 w-full" />
				) : (
					<button
						onClick={() => {
							toast.error("Vesting hasn't started yet");
						}}
						className={`mt-8 w-full py-3 border-2 bg-custom-left text-white font-bold rounded-lg shadow-lg hover:opacity-90 transition-opacity duration-200 transform`}
					>
						Vest
					</button>
				)}
			</div>
		</div>
	);
}

export default AcquisitionForm;
