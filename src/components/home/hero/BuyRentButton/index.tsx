import { useAccount } from "wagmi";
import AddToMetamaskBtn from "./components/AddToMetamaskBtn";
import BscScanButton from "./components/BscScanButton";
import ButtonTitle from "./components/ButtonTitle";

export default function BuyRentButton() {
	const { address: walletAddress } = useAccount();
	return (
		<div className="max-w-4xl mx-auto flex flex-wrap justify-center items-center gap-4">
			<ButtonTitle />
			<div className="flex items-center gap-2">
				{walletAddress && <AddToMetamaskBtn />}
				<BscScanButton />
			</div>
		</div>
	);
}
