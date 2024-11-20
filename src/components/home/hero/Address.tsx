import React from 'react';
import { FaRegCopy } from 'react-icons/fa'; 
import toast from 'react-hot-toast'; 

interface AddressDisplayProps {
  address: string;
}

const Address: React.FC<AddressDisplayProps> = ({ address }) => {

  const copyToClipboard = () => {
    navigator.clipboard.writeText(address);
    toast.success("Address copied to clipboard!");
  };

  const formattedAddress = `${address.slice(0, 6)}....${address.slice(-4)}`;

  return (
    <div className="flex items-center space-x-2 text-white px-4 py-2">
      <span className="font-mono">{formattedAddress}</span>
      <button
        onClick={copyToClipboard}
        className="text-white  transform hover:scale-125 transition-transform duration-200 ease-in-out flex items-center space-x-2"
      >
        <FaRegCopy /> 
      </button>
    </div>
  );
};

export default Address;
