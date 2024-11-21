import HeroData from "@/data/HeroData";
import Button from "../../shared/Button";

function HeroDesc() {
	return (
		<div className="flex flex-col w-full md:w-[45vw] lg:w-[40vw] gap-6 text-white">
			<h1 className="lg:text-7xl text-5xl font-bold">Rentals Digital</h1>
			<p className="md:w-[33vw] text-justify text-xl">
				The new cryptocurrency payment ecosystem that rewards its users for their
				travels and tourism.
			</p>
			<div className="flex flex-wrap items-center gap-4">
				<Button>Buy Token Now</Button>
				<div className="flex items-center gap-4">
					<p className=" text-xl">Accepting:</p>
					<div className="flex items-center gap-4">
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
				</div>

				<div className="space-y-2">
					<h2 className="font-medium text-lg">Earn with Referrals!!</h2>
					<ul className="font-bold">
						<li>
							Phase 1:{" "}
							<span className="font-normal">
								Earn 5% of your referral's contribution.
							</span>
						</li>
						<li>
							Phase 2:
							<span className="font-normal">
								{" "}
								Earn 8% of your referral's contribution.
							</span>
						</li>
					</ul>
					<p>
						Your referral rewards will be instantly credited to your wallet after
						their transaction is confirmed.
					</p>
				</div>
			</div>
		</div>
	);
}

export default HeroDesc;
