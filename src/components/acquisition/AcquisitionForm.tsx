import { useState } from "react";

function AcquisitionForm() {
  const [isWalletConnected, setWalletConnected] = useState(false);

  const handleConnectWallet = () => {
    setWalletConnected(true);
    console.log("Wallet connected");
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="lg:w-[40vw] md:w-[70vw] w-[90vw] bg-white text-custom-left rounded-2xl shadow-2xl p-8 transform transition-all duration-300 hover:scale-105 ">
        <h2 className="text-center text-3xl font-bold mb-6 tracking-wider ">
          $Rental Token Vesting
        </h2>
        <div className="space-y-6 text-lg">
          <div className="flex justify-between items-center border-b pb-2">
            <span className=" font-medium">Claimable Amount:</span>
            <span className=" font-semibold">0 $Rentals</span>
          </div>
          <div className="flex justify-between items-center border-b pb-2">
            <span className=" font-medium">Balance:</span>
            <span className=" font-semibold">0.00 $Rentals</span>
          </div>
        </div>
        <button
          onClick={handleConnectWallet}
          className={`mt-8 w-full py-3 border-2 ${
            isWalletConnected
              ? "bg-custom-left text-white"
              : "border-custom-left text-custom-left"
          } font-bold rounded-lg shadow-lg hover:opacity-90 transition-opacity duration-200 transform hover:-translate-y-1`}
        >
          {isWalletConnected ? "Wallet Connected" : "Connect Wallet"}
        </button>
      </div>
    </div>
  );
}

export default AcquisitionForm;
