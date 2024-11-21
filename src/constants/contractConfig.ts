import { Abi } from "viem";
import { RENTAL_CONTRACT_ABI, USDT_CONTRACT_ABI } from "./abi";

export const contractAddress = {
	rentalAddress: "0xBc06f43f5BcE98cd9f888E79EF8cdE848B63Fa48" as `0x${string}`,
	usdtAddress: "0x55d398326f99059fF775485246999027B3197955" as `0x${string}`,
	rentalTokenAddress:
		"0xbB4c65eDE4889Ba1E489cF4d7aF0f6c83ab6fc94" as `0x${string}`,
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
