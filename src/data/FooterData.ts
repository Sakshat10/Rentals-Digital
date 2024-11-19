import { FC } from 'react';
import { twitter } from '@/components/icons'; 

interface Link {
  title: string;
  href: string;
}

interface SocialMediaLink {
  icon: FC | string; 
  href: string;
}

interface FooterLinks {
  links: Link[];
  socialMedia: SocialMediaLink[];
  legal: Link[];
}

const footerLinks: FooterLinks = {
  links: [
    { title: "About Rentals", href: "/about" },
    { title: "Contact Us", href: "/contact" },
    { title: "White Paper", href: "/WhitePaper/WhitePaper.pdf" },
    { title: "Roadmap", href: "#roadmap" },
    { title: "Platform", href: "/platform" },
    { title: "Acquisition", href: "/acquisition" },
    { title: "Blog", href: "#" },
    { title: "Buy", href: "/" }
  ],
  socialMedia: [
    { icon: twitter, href: "https://x.com/rentalsdigital" }
  ],
  legal: [
    { title: "Privacy Policy", href: "#" },
    { title: "Terms and Conditions", href: "#" }
  ]
};

export default footerLinks;

  


