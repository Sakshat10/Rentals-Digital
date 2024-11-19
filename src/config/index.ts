import { createAppKit } from "@reown/appkit/react";
import { bscTestnet } from "@reown/appkit/networks";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";

const projectId = import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID;

if (!projectId)
	throw new Error("VITE_WALLET_CONNECT_PROJECT_ID is not defined");

const metadata = {
	name: "rental-digital",
	description: "This is a rental website",
	url: "http://localhost:5173", 
	icons: ["https://assets.reown.com/reown-profile-pic.png"],
};

const networks: [typeof bscTestnet] = [bscTestnet];

const wagmiAdapter = new WagmiAdapter({
	networks,
	projectId,
});

createAppKit({
	adapters: [wagmiAdapter],
	networks,
	projectId,
	metadata,
	features: {
		analytics: true, // Optional - defaults to your Cloud configuration
	},
	allWallets: "SHOW",
});

export const config = wagmiAdapter.wagmiConfig;
