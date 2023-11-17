import { ReactNode } from "react";

type Variants = "primary" | "danger";
type Sizes = "sm" | "md";

interface Props {
  children: ReactNode;
  variant?: Variants;
  size?: Sizes;
  type?: "submit" | "button" | "reset";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function Button({ children, onClick, type, variant, size }: Props) {
  const variants: Record<Variants, string> = {
    primary: "bg-sky-500 hover:bg-sky-600 active:bg-primary text-slate-950",
    danger: "bg-red-500 hover:bg-red-600 active:bg-red-400",
  };

  const sizes: Record<Sizes, string> = {
    md: "px-3 py-2 rounded-md text-base",
    sm: "px-2.5 py-1.5 rounded-md text-sm",
  };

  function getButtonClassName(): string {
    let defaultStyle = "transition-colors duration-200 active:duration-0";
    defaultStyle += " " + variants[variant || "primary"];
    defaultStyle += " " + sizes[size || "md"];

    return defaultStyle;
  }

  return (
    <button
      type={type || "button"}
      onClick={onClick}
      className={getButtonClassName()}
    >
      {children}
    </button>
  );
}

export default Button;
