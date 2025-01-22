import React, { forwardRef } from "react";
import "./Link.css";

// Utility function to merge classnames
const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

// Link variants configuration
const LINK_VARIANTS = {
  // action: "link--action ani-underline",
  title:
    "link--title c-content-primary c-underline-secondary ani-underline t-title-medium",
  body: "link--body c-content-interactive-secondary d-underline t-body-medium",
  navigation: "link--navigation c-content-interactive-secondary t-interactive",
};

const BASE_LINK_CLASSES = "";

const Link = forwardRef(
  ({ children, className, variant = "title", ...props }, ref) => {
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
