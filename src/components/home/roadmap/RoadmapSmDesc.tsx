import roadmapData from "@/data/RoadmapSmData";

function RoadmapSmDesc() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {roadmapData.roadmap.map((item, index) => (
        <div key={index} className="px-3">
          <div className="flex flex-col gap-2">
            <p className="text-xl font-bold">{item.quarter}</p>
            <h1 className="text-white font-bold">{item.title}</h1>
            <p className="text-slate-300">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RoadmapSmDesc;
