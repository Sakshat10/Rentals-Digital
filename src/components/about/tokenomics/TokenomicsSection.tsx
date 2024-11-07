// import  { useEffect, useState, useRef } from "react";
// import TokenomicsDesc from "./TokenomicsDesc";
import TokenomicSvg from "./TokenomicSvg";
import TokenomicsSmDesc from "./TokenomicsSmDesc";

// Define the position type for each SVG section
// type PositionType = {
//   [key: string]: { top: number; left: number; width: number; height: number };
// };

function TokenomicsSection() {
  // const [positions, setPositions] = useState<PositionType>({});
  // const svgRef = useRef<SVGSVGElement | null>(null); // Update ref to match SVG element type

  // useEffect(() => {
  //   const svgElement = svgRef.current;
  //   if (svgElement) {
  //     const colorAreas = [
  //       "publicSale",
  //       "sustainableFund",
  //       "developmentReserve",
  //       "marketing",
  //       "teamAndFounder",
  //       "rewards",
  //     ];
  //     const newPositions: PositionType = {};

  //     colorAreas.forEach((area) => {
  //       const element = svgElement.querySelector<SVGGraphicsElement>(`#${area}`);
  //       if (element) {
  //         const { top, left, width, height } = element.getBoundingClientRect();
  //         newPositions[area] = { top, left, width, height };
  //       }
  //     });

  //     setPositions(newPositions);
  //   }
  // }, []);

  return (
    <div className="relative py-10 px-4">
      <h1 className="text-center text-5xl font-bold text-white">Tokenomics</h1>
      <p className="md:text-center md:w-[70vw] text-justify mx-auto mt-6 text-white font-bold">
        The Rentals Token (RNT) is the core utility token within the Rentals ecosystem.
        It facilitates transactions, rewards, and various interactions on the platform,
        leveraging blockchain technology to ensure transparency and security.
      </p>
      <div className="flex items-center justify-center pt-20">
        {/* Directly apply svgRef to TokenomicSvg */}
        <TokenomicSvg/>
      </div>
      <div className="hidden lg:block">
      {/* <TokenomicsDesc positions={positions} /> */}
      </div>
      <div className="block lg:hidden mt-10">
      <TokenomicsSmDesc/>
      </div>
    </div>
  );
}

export default TokenomicsSection;
