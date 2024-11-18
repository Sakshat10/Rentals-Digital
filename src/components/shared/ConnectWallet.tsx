import { useAppKit, useAppKitAccount } from "@reown/appkit/react";
import { Button, ButtonProps } from "../ui/button";
import { cn } from "@/lib/utils";
import { truncateAddress } from "@/utils";

export default function ConnectWallet({ className, ...props }: IProps) {
	const { status, address: walletAddress } = useAppKitAccount();
	const { open } = useAppKit();
	return (
		<Button
			{...props}
			onClick={() => {
				open();
			}}
			variant={"outline"}
			className={cn(
				"border-custom-left border-2 rounded-none text-text-color w-fit hover:text-custom-right hover:border-custom-right bg-slate-100",
				className
			)}
		>
			{status === "connected" && !!walletAddress
				? truncateAddress(walletAddress, 4)
				: status === "connecting"
				? "Connecting..."
				: "Connect Wallet"}
		</Button>
	);
}

interface IProps extends ButtonProps {
	className?: string;
}
