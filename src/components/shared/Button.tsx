import React, { FC } from "react";
// import { useNavigate } from "react-router-dom";

interface ButtonProps {
	children: React.ReactNode;
	onClick?: () => void;
	className?: string;
	type?: "button" | "submit" | "reset";
	disabled?: boolean; // Add the disabled prop here
}

const Button: FC<ButtonProps> = ({
	children,
	onClick,
	className = "",
	type = "button",
}) => {
	// const navigate = useNavigate();

	const handleClick = () => {
		if (onClick) onClick();
		// navigate("/");
	};

	return (
		<button
			type={type}
			onClick={handleClick}
			className={`px-5 py-3 border-2 w-fit bg-slate-100 shadow-xl text-text-color font-semibold ${className}`}
		>
			{children}
		</button>
	);
};

export default Button;
