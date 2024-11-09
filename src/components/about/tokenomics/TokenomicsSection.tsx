import TokenomicsImg from "./TokenomicsImg";
import TokenomicsSmDesc from "./TokenomicsSmDesc";
import TokenomicsSmImg from "./TokenomicsSmImg";



function TokenomicsSection() {


  return (
    <div className="relative py-10 px-4">
      <h1 className="text-center text-5xl font-bold text-white">Tokenomics</h1>
      <p className="md:text-center md:w-[70vw] text-justify mx-auto mt-6 text-white font-bold">
        The Rentals Token (RNT) is the core utility token within the Rentals ecosystem.
        It facilitates transactions, rewards, and various interactions on the platform,
        leveraging blockchain technology to ensure transparency and security.
      </p>
      <div className="hidden lg:block">
        <TokenomicsImg/>
      </div>
      <div className="block lg:hidden">
        <TokenomicsSmImg/>
      </div>
      <div className="block lg:hidden mt-10">
      <TokenomicsSmDesc/>
      </div>
    </div>
  );
}

export default TokenomicsSection;
