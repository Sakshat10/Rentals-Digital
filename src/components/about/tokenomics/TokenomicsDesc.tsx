import TokenomicsData from "@/data/TokenomicsData";

type PositionType = {
  top: number;
  left: number;
  width: number;
  height: number;
};

interface TokenomicsDescProps {
  positions: { [key: string]: PositionType | undefined };
}

function TokenomicsDesc({ positions }: TokenomicsDescProps) {
  return (
    <div>
      {TokenomicsData.map((item, index) => {
        const position = positions[item.areaId];

        return (
          <div
            key={index}
            style={{
              position: "absolute",
              top: position ? position.top : "auto",
              left: position ? position.left : "auto",
              transform: "translate(-50%, -50%)",
            }}
          >
            <div className="flex items-center justify-center gap-5">
              {item.id === "right" && (
                <div>
                  <img
                    src={item.img}
                    alt={`${item.title} dotted line`}
                    className="w-56 2xl:w-96"
                  />
                </div>
              )}
              <div
                className={`flex flex-col ${
                  item.id === "left" ? "items-end" : "items-start"
                } gap-3`}
              >
                <h1 className="font-bold text-slate-700">{item.title}</h1>
                <p className="text-white">{item.amount}</p>
                <p className="text-white">{item.percentage}</p>
              </div>
              {item.id === "left" && (
                <div>
                  <img
                    src={item.img}
                    alt={`${item.title} dotted line`}
                    className="w-56 2xl:w-96"
                  />
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TokenomicsDesc;
