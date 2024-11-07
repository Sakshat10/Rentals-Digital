import leftTopDotted from "@/assets/Images/AboutImg/leftTopDotted.png"
import leftMidDotted from "@/assets/Images/AboutImg/leftMidDotted.png"
import leftBottomDotted from "@/assets/Images/AboutImg/leftBottomDotted.png"
import rightTopDotted from "@/assets/Images/AboutImg/rightTopDotted.png"
import rightMidDotted from "@/assets/Images/AboutImg/rightMidDotted.png"

interface TokenomicsDataType {
  areaId: string;
  title: string;
  amount: string;
  percentage: string;
  img: string;
  id: "left" | "right";
}

const TokenomicsData: TokenomicsDataType[] = [
  {
    areaId: "publicSale",
    title: "Public Sale",
    amount: "15,000,000 RNT",
    percentage: "37.5%",
    img: leftTopDotted,
    id: "left"
  },
  {
    areaId: "sustainableFund",
    title: "Sustainable Development Fund",
    amount: "5,000,000 RNT",
    percentage: "12.5%",
    img: rightTopDotted,
    id: "right"
  },
  {
    areaId: "developmentReserve",
    title: "Development Reserve",
    amount: "8,000,000 RNT",
    percentage: "20%",
    img: leftMidDotted,
    id: "left"
  },
  {
    areaId: "marketing",
    title: "Marketing",
    amount: "3,500,000 RNT",
    percentage: "8.75%",
    img: rightMidDotted,
    id: "right"
  },
  {
    areaId: "teamAndFounder",
    title: "Team and Founder",
    amount: "6,500,000 RNT",
    percentage: "16.25%",
    img: leftBottomDotted,
    id: "left"
  },
  {
    areaId: "rewards",
    title: "Rewards Pool",
    amount: "2,000,000 RNT",
    percentage: "5%",
    img: leftBottomDotted,
    id: "left"
  }
];

export default TokenomicsData;
