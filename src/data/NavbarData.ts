type NavbarItem = {
  name: string;
  link: string;
};

const Navbar: NavbarItem[] = [
  {
    name: "About Rental",
    link: "/about",
  },
  {
    name: "Platform",
    link: "/platform",
  },
  {
    name: "Acquisition",
    link: "/acquisition",
  },
  {
    name: "Contact",
    link: "/contact",
  },
  {
    name: "Whitepaper",
    link: "/WhitePaper/WhitePaper.pdf", 
  },
];

export default Navbar;
