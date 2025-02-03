import { Abi } from "viem";
import {
	PROGRESS_UPDATE_CONTRACT_ABI,
	RENTAL_CONTRACT_ABI,
	USDT_CONTRACT_ABI,
} from "./abi";

export const contractAddress = {
	rentalAddress: "0x8e4e93743efCBe8A41ae55A6A58A905e77E03b54" as `0x${string}`,
	usdtAddress: "0x55d398326f99059fF775485246999027B3197955" as `0x${string}`,
	rentalTokenAddress:
		"0xB46dCA78149F66f7cb261d0bC34dc66171Ebee83" as `0x${string}`,
	progressUpdateContract:
		"0x8fBE6221D7a9721C21b8116A7b8f6a7953979236" as `0x${string}`,
};

const contractConfig: {
	rentalConfig: TContractConfig;
	usdtConfig: TContractConfig;
	progressUpdateConfig: TContractConfig;
} = {
	rentalConfig: {
		abi: RENTAL_CONTRACT_ABI as Abi,
		address: contractAddress.rentalAddress,
	},
	usdtConfig: {
		abi: USDT_CONTRACT_ABI as Abi,
		address: contractAddress.usdtAddress,
	},
	progressUpdateConfig: {
		abi: PROGRESS_UPDATE_CONTRACT_ABI as Abi,
		address: contractAddress.progressUpdateContract,
	},
};

export default contractConfig;

type TContractConfig = {
	abi: Abi;
	address: `0x${string}`;
};
