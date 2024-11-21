import Roadmap from "@/data/RoadmapData";


function RoadmapDesc() {
  return (
    <div className="w-full h-full">
      {Roadmap.map((item, index) => (
        <div key={index} className={item.mainClassname}>
          <div className="flex items-center gap-5">
            {item.id === "right" && <img src={item.image} alt={`${item.title} image`} width={200} height={20} />}
            <div className="flex flex-col items-start w-[25vw]  gap-3">
              <p className="text-[#252A297A] font-bold">{item.quarter}</p>
              <h1 className="text-white font-bold">{item.title}</h1>
              <p className="text-slate-300">{item.description}</p>
              <p className="text-slate-300">{item.description2}</p>
              <p className="text-slate-300">{item.description3}</p>
              <p className="text-slate-300">{item.description4}</p>
              <p className="text-slate-300">{item.description5}</p>
            </div>
            {item.id === "left" && <img src={item.image} alt={`${item.title} image`} width={200} height={20} />}
          </div>
        </div>
      ))}
    </div>
  );
}

export default RoadmapDesc;
