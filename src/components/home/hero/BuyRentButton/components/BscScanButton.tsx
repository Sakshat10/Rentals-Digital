import { contractAddress } from "@/constants/contractConfig";
import { FaExternalLinkAlt } from "react-icons/fa";
function BscScanButton() {
	const handleBscScanClick = () => {
		window.open(
			`https://bscscan.com/token/${contractAddress.rentalTokenAddress}`,
			"_blank"
		);
	};

	return (
		<button
			onClick={handleBscScanClick}
			className="p-2 bg-text-color rounded-full"
		>
			<FaExternalLinkAlt color="white" />
		</button>
	);
}

export default BscScanButton;
