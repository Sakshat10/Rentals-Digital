import React from "react";
import Marquee from "react-fast-marquee";
import { partners } from "@/data/PartnersData";

const Partners: React.FC = () => {
  return (
    <div className="py-8 overflow-x-hidden">
      <h2 className="text-center text-white text-3xl font-bold mb-6">Our Partners</h2>
      <Marquee speed={50} gradient={false}>
        <div className="flex gap-28 items-center">
          {partners.map((partner, index) => (
            <a href={partner.link} key={index} className="flex items-center space-x-3">
              <img src={partner.image} alt={partner.name} className="w-20 h-20 object-contain" />
              <span className="text-white text-lg font-medium">{partner.name}</span>
            </a>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Partners;
