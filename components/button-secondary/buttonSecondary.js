import React, { forwardRef } from "react";
import "./buttonSecondary.css";

// Utility function to merge classnames
const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

// Button variants configuration
const BUTTON_VARIANTS = {
  secondary: "button--secondary",
  disabled: "button--secondary ani-disabled",
};

const BASE_BUTTON_CLASSES = "t-body-small t-interactive-sub ani-underline";

const buttonSecondary = forwardRef(
  ({ children, className, variant = "secondary", ...props }, ref) => {
    const buttonClasses = cn(
      BASE_BUTTON_CLASSES,
      BUTTON_VARIANTS[variant],
      className
    );

    return (
      <a className={buttonClasses} {...props}>
        <div className="i-chevron"></div>
        {children}
      </a>
    );
  }
);

buttonSecondary.displayName = "Button";

export default buttonSecondary;
