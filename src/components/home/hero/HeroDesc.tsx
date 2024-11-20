import HeroData from "@/data/HeroData";
import Button from "../../shared/Button";
import toast from "react-hot-toast";
import { FaRegCopy } from "react-icons/fa";
import { truncateAddress } from "@/utils";

function HeroDesc() {
	const address = "0xbB4c65eDE4889Ba1E489cF4d7aF0f6c83ab6fc94";

	const copyToClipboard = () => {
		navigator.clipboard.writeText(address);
		toast.success("Address copied to clipboard!");
	};

	return (
		<div className="flex flex-col w-full md:w-[45vw] lg:w-[40vw] gap-6 text-white">
			<h1 className="lg:text-7xl text-5xl font-bold">Rentals Digital</h1>
			<p className="md:w-[33vw] text-justify text-xl">
				The new cryptocurrency payment ecosystem that rewards its users for their
				travels and tourism.
			</p>
			<div className="flex items-center gap-2">
				<p className="hidden sm:block text-md font-semibold text-lg">
					$RENTS: {address}
				</p>
				<p className="block sm:hidden text-md font-semibold text-lg">
					$RENTS: {truncateAddress(address, 4)}
				</p>
				<button
					onClick={copyToClipboard}
					className="text-white  transform hover:scale-125 transition-transform duration-200 ease-in-out flex items-center space-x-2"
				>
					<FaRegCopy />
				</button>{" "}
			</div>
			<Button>Buy Token Now</Button>
			<div className="flex items-center gap-4">
				<p className=" text-xl">Accepting:</p>
				<div className="flex gap-2">
					{HeroData.Icons.map((iconData, index) => (
						<a
							href={iconData.href}
							key={index}
							className="text-white"
						>
							<iconData.icon />
						</a>
					))}
				</div>
			</div>

			<div>
				<h3 className="mb-2">Token Price</h3>
				<ul className="font-semibold">
					<li>Phase 1: $0.025</li>
					<li>Phase 2: $0.050</li>
					<li>Listing Price: $0.075</li>
				</ul>
			</div>
		</div>
	);
}

export default HeroDesc;
