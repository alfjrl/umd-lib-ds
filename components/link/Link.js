import React, { forwardRef } from "react";
import "./Link.css";

// Utility function to merge classnames
const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

// Link variants configuration
const LINK_VARIANTS = {
  action: "link--action ani-underline",
  title: "link--title",
  body: "link--body",
  navigation: "link--navigation",
  disabled: "link--disabled",
};

const BASE_LINK_CLASSES = "t-body-small t-interactive-sub button";

const Link = forwardRef(
  ({ children, className, variant = "action", ...props }, ref) => {
    const linkClasses = cn(
      BASE_LINK_CLASSES,
      LINK_VARIANTS[variant],
      className
    );

    return (
      <a ref={ref} className={linkClasses} {...props}>
        {children}
      </a>
    );
  }
);

Link.displayName = "Link";

export default Link;
