import { useState } from 'react';

export function SelectHero() {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedToken, setSelectedToken] = useState<string | null>(null);

  const handleToggle = () => {
    setIsOpen(!isOpen); 
  };

  const handleSelectItem = (value: string) => {
    setSelectedToken(value);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full">
      <div
        className="w-full border-2 p-2 rounded-md cursor-pointer text-gray-700 flex items-center justify-between"
        onClick={handleToggle}
      >
        <span className="block">{selectedToken ? selectedToken : 'Select a Token'}</span>
        <span className="ml-2">
          <svg
            className={`w-5 h-5 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </div>

      {isOpen && (
        <div className="absolute mt-1 w-full bg-white border-2 rounded-md shadow-lg z-10">
          <div className="flex flex-col">
            <div className="px-4 py-2 text-lg font-medium text-gray-700">Tokens</div>
            <div className="space-y-1">
              <div
                className="px-4 py-2 text-gray-700 cursor-pointer hover:bg-[#01A273] hover:text-white transition"
                onClick={() => handleSelectItem('BNB')}
              >
                BNB
              </div>
              <div
                className="px-4 py-2 text-gray-700 cursor-pointer hover:bg-[#01A273] hover:text-white transition"
                onClick={() => handleSelectItem('USDT')}
              >
                USDT
              </div>
              <div
                className="px-4 py-2 text-gray-700 cursor-pointer hover:bg-[#01A273] hover:text-white transition"
                onClick={() => handleSelectItem('Bitcoin')}
              >
                Bitcoin
              </div>
              <div
                className="px-4 py-2 text-gray-700 cursor-pointer hover:bg-[#01A273] hover:text-white transition"
                onClick={() => handleSelectItem('Ethereum')}
              >
                Ethereum
              </div>
              <div
                className="px-4 py-2 text-gray-700 cursor-pointer hover:bg-[#01A273] hover:text-white transition"
                onClick={() => handleSelectItem('Render')}
              >
                Render
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
