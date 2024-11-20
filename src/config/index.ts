import { createAppKit } from "@reown/appkit/react";
import { bsc } from "@reown/appkit/networks";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";

const projectId = import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID;

if (!projectId)
	throw new Error("VITE_WALLET_CONNECT_PROJECT_ID is not defined");

const metadata = {
	name: "Rental Digital",
	description: "This is a rental website",
	url: window.location.href,
	icons: ["https://assets.reown.com/reown-profile-pic.png"],
};

const networks: [typeof bsc] = [bsc];

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
		analytics: true,
	},
	allWallets: "SHOW",
});

export const config = wagmiAdapter.wagmiConfig;
