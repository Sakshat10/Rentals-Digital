interface Link {
    title: string;
    href: string;
  }
  
  interface SocialMediaLink {
    icon: string;
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
      { icon: '/src/assets/svg/github.svg', href: "#" },
      { icon: '/src/assets/svg/facebook.svg', href: "#" },
      { icon: '/src/assets/svg/linkedin.svg', href: "#" },
      { icon: '/src/assets/svg/spotify.svg', href: "#" },
      { icon: '/src/assets/svg/twitter.svg', href: "#" }
    ],
    legal: [
      { title: "Privacy Policy", href: "#" },
      { title: "Terms and Conditions", href: "#" }
    ]
  };
  
  export default footerLinks;
  