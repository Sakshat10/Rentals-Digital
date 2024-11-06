import Marquee from "react-fast-marquee";
import { partners } from "@/data/PartnersData";

function Partners(){
  return (
    <div className="py-8 overflow-x-hidden">
      <h2 className="text-center text-white text-3xl font-bold mb-6">Our Partners</h2>
      <Marquee speed={50} gradient={false}>
        <div className="flex gap-28 items-center">
          {partners.map((partner, index) => (
            <a href={partner.link} key={index} className="flex items-center space-x-3">
              <img src={partner.image} alt={partner.name} className="w-44 h-32 object-contain" />
            </a>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Partners;
