import React from "react";
import { FaRegCopy } from "react-icons/fa";
// import toast from "react-hot-toast";

interface AddressDisplayProps {
	address: string;
}

const Address: React.FC<AddressDisplayProps> = ({ address }) => {
	return (
		<div className="flex items-center space-x-2 text-white px-4 py-2">
			<span className="font-mono">{address}</span>
			<button
				// onClick={copyToClipboard}
				className="text-white  transform hover:scale-125 transition-transform duration-200 ease-in-out flex items-center space-x-2"
			>
				<FaRegCopy />
			</button>
		</div>
	);
};

export default Address;
