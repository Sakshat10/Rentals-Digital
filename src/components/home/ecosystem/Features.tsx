import featuresData from "@/data/EcosystemData";

function Features() {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-around">
      {featuresData.map((feature) => (
        <div key={feature.id} className={feature.mainClassName}>
          {feature.id === "right" && <img src={feature.image} alt="" />}
          <div className={feature.secondaryClass}>
            <p className="text-lg font-bold text-white">{feature.data.title}</p>
            <p className="text-lg font-bold text-slate-300">{feature.data.description}</p>
          </div>
          {feature.id === "left" && <img src={feature.image} alt="" />}
        </div>
      ))}
    </div>
  );
}

export default Features;
