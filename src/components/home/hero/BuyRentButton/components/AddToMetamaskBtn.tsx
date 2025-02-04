import { contractAddress } from "@/constants/contractConfig";
import { FaWallet } from "react-icons/fa";
import { useWalletClient } from "wagmi";

function AddToMetamaskBtn() {
	const { data: walletClient } = useWalletClient();

	async function handleAddToken() {
		try {
			await walletClient?.watchAsset({
				type: "ERC20",
				options: {
					address: contractAddress.rentalTokenAddress,
					symbol: "RENTS",
					image: "/images/logo.png",
					decimals: 18,
				},
			});
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<button
			onClick={handleAddToken}
			className="p-2 bg-text-color rounded-full"
		>
			<FaWallet color="white" />
		</button>
	);
}

export default AddToMetamaskBtn;
