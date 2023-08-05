import { ComponentProps } from "react";
import clsx from "clsx";

interface ButtonProps extends ComponentProps<"button"> {
  variant?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info";
  outline?: boolean;
  size?: "sm" | "default" | "lg";
}

const Button = ({
  className,
  variant = "default",
  outline = false,
  size = "default",
  children,
  ...props
}: ButtonProps) => {
  const buttonClasses = clsx(
    `btn btn-${size}`,
    outline ? `btn-outline-${variant}` : `btn-${variant}`,
    className
  );

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;