import { github, facebook, linkedin, spotify, twitter } from '@/components/icons';


import { FC } from 'react';

interface Link {
  title: string;
  href: string;
}

interface SocialMediaLink {
  icon: FC; 
  href: string;
}

interface FooterLinks {
  links: Link[];
  socialMedia: SocialMediaLink[];
  legal: Link[];
}

  const footerLinks: FooterLinks = {
    links: [
      { title: "About Rentals", href: "#" },
      { title: "Contact Us", href: "#" },
      { title: "White Paper", href: "#" },
      { title: "Roadmap", href: "#" },
      { title: "Platform", href: "#" },
      { title: "Acquisition", href: "#" },
      { title: "Blog", href: "#" },
      { title: "Buy", href: "#" }
    ],
    socialMedia: [
        { icon: github, href: "#" },
        { icon: facebook, href: "#" },
        { icon: linkedin, href: "#" },
        { icon: spotify, href: "#" },
        { icon: twitter, href: "#" }
      ],
    legal: [
      { title: "Privacy Policy", href: "#" },
      { title: "Terms and Conditions", href: "#" }
    ]
  };
  
  export default footerLinks;
  