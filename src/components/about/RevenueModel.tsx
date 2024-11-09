import data from "@/data/AboutRevenueData";

function RevenueModel() {
  return (
    <div className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 place-items-center sm:place-items-start  lg:gap-0 gap-8  px-6">
      {data.map((item, index) => (
        <div key={index} className="flex md:w-[20vw] flex-col gap-3 items-start justify-center">
          <div className="flex items-center justify-center gap-3">
            <div className="bg-custom-right p-3  rounded-full">
              <img src={item.img} alt={item.title} className="w-5"/>
            </div>
            <p className="font-bold text-white text-md">{item.title}</p>
          </div>
          <p className="lg:w-[22vw] md:w-[35vw] lg:text-justify text-justify pl-3 text-slate-200">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export default RevenueModel;
