import { Abi } from "viem";
import { RENTAL_CONTRACT_ABI, USDT_CONTRACT_ABI } from "./abi";

export const contractAddress = {
	rentalAddress: "0x16D0630DEE7562C9f3cAB7b37779ab9522C9eAab" as `0x${string}`,
	usdtAddress: "0x55d398326f99059fF775485246999027B3197955" as `0x${string}`,
};

const contractConfig: {
	rentalConfig: TContractConfig;
	usdtConfig: TContractConfig;
} = {
	rentalConfig: {
		abi: RENTAL_CONTRACT_ABI as Abi,
		address: contractAddress.rentalAddress,
	},
	usdtConfig: {
		abi: USDT_CONTRACT_ABI as Abi,
		address: contractAddress.usdtAddress,
	},
};

export default contractConfig;

type TContractConfig = {
	abi: Abi;
	address: `0x${string}`;
};
