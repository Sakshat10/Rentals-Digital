import React from "react";

interface TokenomicsCardProps {
  heading: string;
  percentage: string;
  number: string;
  borderColor: string;
}

const TokenomicsCard: React.FC<TokenomicsCardProps> = ({
  heading,
  percentage,
  number,
  borderColor,
}) => {
  return (
    <div
      className={`flex justify-between items-center mx-4 rounded-md py-2 px-4 bg-white/10 backdrop-blur-sm lg:w-[40vw] w-[60vw] h-fit`}
      style={{ borderLeft: `4px solid ${borderColor}` }}
    >
      <div>
        <div className="text-white">{heading}</div>
        <div className="text-sm" style={{ color: borderColor }}>
          {percentage}
        </div>
      </div>

      <div>
        <h1 className="text-[0.9rem] text-white">Allocation</h1>
        <h1 className="text-white" style={{ color: borderColor }}>
          {number}
        </h1>
      </div>
    </div>
  );
};

export default TokenomicsCard;
