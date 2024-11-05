import { useState } from 'react';
import navbar from "@/data/Navbar";
import logo from "/logo.svg";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'; 

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex justify-between items-center p-5 lg:px-28">
        <a href="/">
           <img src={logo} alt="company-logo" className="h-10" />
        </a>

      <div className="hidden md:flex gap-10">
        {navbar.map((item) => (
          <a
            key={item.name}
            href={item.link}
            className="text-white transform transition-transform duration-200 hover:scale-110"
          >
            {item.name}
          </a>
        ))}
      </div>

      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          {isMenuOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-16 right-0 bg-gray-200 text-black rounded-lg shadow-xl w-48 transition transform scale-95 animate-fadeIn">
          <div className="flex flex-col p-4">
            {navbar.map((item) => (
              <a
                key={item.name}
                href={item.link}
                className="py-2 text-center transition rounded hover:bg-[#01A273] text-black" 
                onClick={() => setIsMenuOpen(false)} 
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
