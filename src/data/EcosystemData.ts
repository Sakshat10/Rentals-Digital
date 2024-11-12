import ecoSmallImage from "@/assets/Images/homeImages/ecoSmallImage.png";

const featuresData = [
  {
    id: "left",
    mainClassName: "absolute left-[3vw] top-[6vh] flex items-center justify-center gap-5 pt-7",
    secondaryClass: "flex flex-col justify-end items-end gap-3 w-[20vw] text-end",
    image: ecoSmallImage,
    data: {
      title: "Instant Referral Bonuses",
      description: "Earn on referrals right at purchase.",
    },
  },
  {
    id: "left",
    mainClassName: "absolute left-[5vw] top-[55vh] flex items-center  justify-center gap-5 pt-7",
    secondaryClass: "flex flex-col justify-end items-end gap-3 w-[20vw] text-end",
    image: ecoSmallImage,
    data: {
      title: "Travel and Earn with Rentals",
      description: "Rewarding crypto payments for your journeys.",
    },
  },
  {
    id: "right",
    mainClassName: "absolute flex right-[3vw] top-[6vh] items-center gap-5 pt-7",
    secondaryClass: "flex flex-col justify-end items-start gap-3 w-[20vw] text-start",
    image: ecoSmallImage,
    data: {
      title: "Instant Referral Bonuses",
      description: "Earn on referrals right at purchase.",
    },
  },
  {
    id: "right",
    mainClassName: "absolute flex right-[6vw] top-[55vh] items-center gap-5 pt-7",
    secondaryClass: "flex flex-col justify-end items-start gap-3 w-[20vw] text-start",
    image: ecoSmallImage,
    data: {
      title: "Decentralized Tourism Rewards",
      description: "Unlock value every time you travel",
    },
  },
];

export default featuresData;
