import platformData from "@/data/PlatformData";

function PlatReward() {
  return (
    <div className="w-[90vw] sm:w-[80vw] flex flex-col sm:flex-row justify-center flex-wrap h-auto mx-auto bg-gradient-to-r from-custom-right to-custom-left rounded-tl-3xl rounded-tr-3xl shadow-2xl mt-8 sm:mt-16 p-4 sm:p-8">
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 justify-center items-start md:items-center">
        {platformData.map((feature, index) => (
          <div key={index} className="flex items-center gap-4 md:gap-0 sm:space-x-4 text-center sm:text-left">
            <div className="bg-custom-left rounded-full p-3 sm:p-4 shadow-lg">
              <img src={feature.icon} alt={feature.title} className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <div className="sm:block">
              <h3 className="text-white font-semibold text-sm sm:text-base">{feature.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlatReward;
