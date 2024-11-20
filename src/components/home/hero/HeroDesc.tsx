import HeroData from "@/data/HeroData"; 
import Button from "../../shared/Button";
import Address from "./Address";

function HeroDesc() {
  const address = "0xbB4c65eDE4889Ba1E489cF4d7aF0f6c83ab6fc94";

  return (
    <div className="flex flex-col w-full md:w-[45vw] lg:w-[40vw] gap-6 text-white">
      <h1 className="lg:text-7xl text-5xl font-bold">Rentals Digital</h1>
      <p className="md:w-[33vw] text-justify text-xl">
        The new cryptocurrency payment ecosystem that rewards its users for
        their travels and tourism.
      </p>
      <div className="flex items-center">
        <p className="text-xl">$ Rental:</p>
        <Address address={address} />
      </div>
      <Button>Buy Token Now</Button>
      <div className="flex items-center gap-4">
        <p className=" text-xl">Accepting:</p>
        <div className="flex gap-2">
          {HeroData.Icons.map((iconData, index) => (
            <a href={iconData.href} key={index} className="text-white">
              <iconData.icon />
            </a>
          ))}
        </div>
      </div>

      <div>
      <p className="mb-3">Referral will paid automatically in the purchase currency</p>
      <div className="flex items-center gap-4 text-white">
      <p className="font-semibold text-lg"><span className="text-[#252A297A]">5% </span> in phase 1</p>
      <div className="h-5 border-l border-white"></div>
      <p className="font-semibold text-lg"><span className="text-[#252A297A]">8% </span> in phase 2</p>
    </div>
    </div>
    </div>
  );
}

export default HeroDesc;
