import { FC, SVGProps } from "react";
import { FaTwitter, FaTelegramPlane } from "react-icons/fa"; // Import Twitter and Telegram icons

interface Link {
	title: string;
	href: string;
}

interface SocialMediaLink {
	icon: FC<SVGProps<SVGSVGElement>> | FC<{ size?: number }>;
	href: string;
	size?: number;
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
		// { title: "Acquisition", href: "/acquisition" },
		{ title: "Blog", href: "#" },
		{ title: "Buy", href: "/" },
	],
	socialMedia: [
		{ icon: FaTwitter, href: "https://x.com/rentalsdigital", size: 28 },
		{ icon: FaTelegramPlane, href: "https://t.me/RentalsDigital", size: 28 },
	],
	legal: [
		{ title: "Privacy Policy", href: "/" },
		{ title: "Terms and Conditions", href: "/" },
	],
};

export default footerLinks;
