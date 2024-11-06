import { useState } from 'react';
import navbar from "@/data/NavbarData";
import logo from "/logo.svg";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex justify-between items-center p-5 lg:px-28 z-50 ">
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
        <div className="absolute top-0 left-0 w-full h-screen bg-[#01A273] text-white flex flex-col items-center justify-center z-50">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-5 right-5 text-white focus:outline-none"
          >
            <AiOutlineClose size={30} />
          </button>
          <div className="flex flex-col space-y-6 text-xl">
            {navbar.map((item) => (
              <a
                key={item.name}
                href={item.link}
                className="py-2 text-center transition rounded hover:bg-[#01A273] hover:opacity-80"
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
