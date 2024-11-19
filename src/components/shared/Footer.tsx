import React from 'react';
import footerLinks from '@/data/FooterData';

function Footer(){
  return (
    <footer className="bg-black text-white py-8 px-4 md:px-32">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 md:place-items-center gap-5">
        
        {/* Left Section */}
        <div className="flex flex-col space-y-2">
          {footerLinks.links.slice(0, 4).map((link, index) => (
            <a key={index} href={link.href} className="transform transition-transform duration-200 hover:scale-110">
              {link.title}
            </a>
          ))}
        </div>

        {/* Center Section */}
        <div className="flex flex-col space-y-2">
          {footerLinks.links.slice(4).map((link, index) => (
            <a key={index} href={link.href} className="transform transition-transform duration-200 hover:scale-110">
              {link.title}
            </a>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-start space-y-4">
          <div className="text-text-color text-2xl font-semibold">RENTALS DIGITAL</div>
          <div className="text-gray-400">Visit our social media</div>
          <div className="flex space-x-4">
  {footerLinks.socialMedia.map((social, index) => (
    <a 
      key={index} 
      href={social.href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="w-5 flex hover:text-green-500 "
    >
      <social.icon/> 
    </a>
  ))}
</div>

        </div>
      </div>
      
      <div className="container mx-auto mt-8 border-t border-gray-600 pt-4 flex justify-center items-center space-x-4">
        {footerLinks.legal.map((item, index) => (
          <React.Fragment key={index}>
            <a href={item.href} className="text-gray-400 hover:underline">
              {item.title}
            </a>
            {index < footerLinks.legal.length - 1 && (
              <span className="h-4 w-px bg-gray-400 mx-2" />
            )}
          </React.Fragment>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
