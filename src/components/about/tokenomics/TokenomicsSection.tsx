/* eslint-disable @typescript-eslint/no-unused-vars */
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
  SubTitle,
} from "chart.js";

import { useState } from "react";
import { ChartOptions } from "chart.js";
import TokenomicsCard from "./TokenomicsCard";
ChartJS.register(ArcElement, Tooltip, Legend, Title, SubTitle, ChartDataLabels);

// Updated data
const data = [
  {
    heading: "Private Sale 1",
    percentage: "1.7%",
    number: "1,700,000",
    borderColor: "#992ff3",
  },
  {
    heading: "Private Sale 2",
    percentage: "4.3%",
    number: "4,300,000",
    borderColor: "#3161f1",
  },
  {
    heading: "Private Sale 3",
    percentage: "7.5%",
    number: "7,500,000",
    borderColor: "#b648c2",
  },
  {
    heading: "Private Sale 4",
    percentage: "8.9%",
    number: "8,900,000",
    borderColor: "#e692c7",
  },
  {
    heading: "Private Sale 5",
    percentage: "12%",
    number: "12,000,000",
    borderColor: "#f3a07d",
  },
  {
    heading: "Liquidity",
    percentage: "8.3%",
    number: "8,300,000",
    borderColor: "#36b5e6",
  },
  {
    heading: "Advisor",
    percentage: "2.0%",
    number: "2,000,000",
    borderColor: "#8cdfe1",
  },
  {
    heading: "Team",
    percentage: "8.0%",
    number: "8,000,000",
    borderColor: "#5f2a93",
  },
  {
    heading: "Centrallized Exchange",
    percentage: "15.0%",
    number: "15,000,000",
    borderColor: "#e692c7",
  },
  {
    heading: "Development",
    percentage: "15.0%",
    number: "15,000,000",
    borderColor: "#f3a07d",
  },
  {
    heading: "Treasury",
    percentage: "17.3%",
    number: "17,300,000",
    borderColor: "#ffcc00",
  },
];

const Tokenomics = () => {
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const chartData = {
    labels: data.map((item) => item.heading),
    datasets: [
      {
        data: data.map((item) => parseFloat(item.percentage)),
        backgroundColor: data.map((item) => item.borderColor),
        hoverBackgroundColor: data.map((item) => item.borderColor),
      },
    ],
  };

  const chartOptions: ChartOptions<"doughnut"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "right", // Now TypeScript recognizes it
        labels: { color: "#ffffff" },
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            const value = tooltipItem.raw;
            return `${tooltipItem.label}: ${value}%`;
          },
        },
      },
      datalabels: {
        display: true,
        color: "#ffffff",
      },
    },
    animation: {
      animateRotate: true,
      animateScale: true,
    },
  };

  return (
    <div className="min-h-[100vh]  md:px-12 px-4">
      <h1 className="py-12 text-2xl font-semibold text-center text-white md:text-4xl md:text-center">
        Token And Tokenomics
      </h1>
      <h1 className="font-semibold text-white md:w-[85%] lg:w-[75%] mx-auto text-center pb-24 ">
        The Rentals Token (RNT) is the core utility token within the Rentals
        ecosystem. It facilitates transactions, rewards, and various
        interactions on the platform, leveraging blockchain technology to ensure
        transparency and security.
      </h1>
      <div className="relative flex flex-col items-center justify-center w-full lg:flex-row">
        <div className="">
          <div className="w-[80vw] h-[80vh] md:w-[70vw] lg:w-[50vw] lg:h-[90vh] flex justify-center items-center">
            <Doughnut data={chartData} options={chartOptions} />
          </div>
        </div>

        <div className="flex-col items-center hidden min-h-screen gap-4 md:flex">
          {data.map((item, index) => (
            <TokenomicsCard
              key={index}
              heading={item.heading}
              percentage={item.percentage}
              number={item.number}
              borderColor={item.borderColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
