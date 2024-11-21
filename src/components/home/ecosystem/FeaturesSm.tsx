import featuresSmData from '@/data/EcosystemSmData'; // Adjust the path if needed

function FeaturesSm() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 px-4">
      {featuresSmData.map((feature) => (
        <div key={feature.data.title} className={feature.mainClassName}>
          <img src={feature.image} alt={feature.data.title} className="w-16 h-16" />
          <div className={feature.secondaryClass}>
            <h3 className="text-lg font-bold text-white text-start">{feature.data.title}</h3>
            <p className="text-sm text-slate-300">{feature.data.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FeaturesSm;
