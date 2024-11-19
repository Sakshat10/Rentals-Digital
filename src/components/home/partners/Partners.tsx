import Marquee from "react-fast-marquee";
import { partners } from "@/data/PartnersData";

function Partners() {
  return (
    <div className="py-8 overflow-x-hidden">
      <h2 className="text-center text-5xl font-bold text-white mb-6">Our Partners</h2>
      <Marquee speed={50} gradient={false}>
        <div className="flex items-center">
          {partners.map((partner, index) => (
            <a
              href={partner.link}
              key={index}
              className={`flex items-center space-x-6 ${index === 0 ? 'mr-10' : 'mr-10'} ${index === partners.length - 1 ? 'ml-10' : 'ml-10'}`}
            >
              <img
                src={partner.image}
                alt={partner.name}
                className="w-44 h-32 object-contain"
              />
            </a>
          ))}
        </div>
      </Marquee>
    </div>
  );
}

export default Partners;
