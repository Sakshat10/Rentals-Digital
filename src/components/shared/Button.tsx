import React, { FC } from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const Button: FC<ButtonProps> = ({ children, onClick, className = "", type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick ? onClick : undefined}
      className={`px-5 py-3 border-2 w-fit bg-slate-100 shadow-xl text-text-color font-semibold ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
