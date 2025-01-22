import React, { forwardRef } from "react";
import "./Button.css";

const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const BUTTON_VARIANTS = {
  primary:
    "button--primary c-content-interactive-primary c-bg-interactive-primary ani-background",
  secondary:
    "button--secondary c-content-primary c-underline-primary ani-underline",
};

const BUTTON_STAUTS = {
  default: "",
  disabled: "button--disabled",
};

const BASE_BUTTON_CLASSES = "t-body-small t-interactive-sub";

const Button = forwardRef(
  (
    { children, className, variant = "primary", status = "default", ...props },
    ref
  ) => {
    const buttonClasses = cn(
      BASE_BUTTON_CLASSES,
      BUTTON_VARIANTS[variant],
      BUTTON_STAUTS[status],
      className
    );

    switch (variant) {
      case "primary":
      default:
        return (
          <button ref={ref} className={buttonClasses} {...props}>
            {children}
          </button>
        );
      case "secondary":
        return (
          <a ref={ref} className={buttonClasses} {...props}>
            <div className="i-chevron"></div>
            {children}
          </a>
        );
    }
  }
);

Button.displayName = "Button";

export default Button;
