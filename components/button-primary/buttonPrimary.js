import React, { forwardRef } from "react";
import "./buttonPrimary.css";

// Utility function to merge classnames
const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

// Button variants configuration
const BUTTON_VARIANTS = {
  default: "button--primary",
  disabled: "button--primary--disabled",
};

const BASE_BUTTON_CLASSES = "t-body-small t-interactive-sub button";

const buttonPrimary = forwardRef(
  ({ children, className, variant = "default", ...props }, ref) => {
    const buttonClasses = cn(
      BASE_BUTTON_CLASSES,
      BUTTON_VARIANTS[variant],
      className
    );

    return (
      <button ref={ref} className={buttonClasses} {...props}>
        {children}
      </button>
    );
  }
);

buttonPrimary.displayName = "Button";

export default buttonPrimary;
