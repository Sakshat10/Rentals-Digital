import GithubIcon from '@/components/icons/Github';
import FacebookIcon from '@/components/icons/Facebook';
import LinkedInIcon from '@/components/icons/Linkedin';
import SpotifyIcon from '@/components/icons/Spotify';
import TwitterIcon from '@/components/icons/Twitter';


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
        { icon: GithubIcon, href: "#" },
        { icon: FacebookIcon, href: "#" },
        { icon: LinkedInIcon, href: "#" },
        { icon: SpotifyIcon, href: "#" },
        { icon: TwitterIcon, href: "#" }
      ],
    legal: [
      { title: "Privacy Policy", href: "#" },
      { title: "Terms and Conditions", href: "#" }
    ]
  };
  
  export default footerLinks;
  