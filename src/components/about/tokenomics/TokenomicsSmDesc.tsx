import TokenomicsSmData from "@/data/TokenomicsSmData";

function TokenomicsSmDesc() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {TokenomicsSmData.map((item, index) => (
        <div key={index} className="flex items-center gap-4 p-4 shadow-lg rounded-md" style={{ backgroundColor: item.color }}>
          <div className={`flex flex-col items-start`}>
            <h1 className="font-bold text-slate-700">{item.title}</h1>
            <p className="text-white">{item.amount}</p>
            <p className="text-white">{item.percentage}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TokenomicsSmDesc;
