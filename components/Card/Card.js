import React, { forwardRef } from "react";
import "./Card.css";
// import Link from "../Link/Link";
// import Button from "../Button/Button";

const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const CARD_VARIANTS = {
  standard: "card--standard c-bg-primary",
  overlay: "card--overlay c-bg-secondary",
};

const BASE_CARD_CLASSES = "c-content-primary";

const Card = forwardRef(
  (
    {
      title,
      eyebrow,
      description,
      date,
      link,
      variant = "standard",
      className,
      ...props
    },
    ref
  ) => {
    const cardClasses = cn(
      BASE_CARD_CLASSES,
      CARD_VARIANTS[variant],
      className
    );

    return (
      <div role="contentinfo" ref={ref} className={cardClasses} {...props}>
        <div className="card--image">
          <img src="/demo.jpg" alt="Example Image" />
        </div>
        <div className="card--content s-box-small-v s-box-small-h">
          <div className="card--title">
            <div className="card--eyebrow t-eyebrow s-stack-small">
              <p>{eyebrow}</p>
            </div>

            <h3 className="card--headline t-title-medium c-underline-secondary ani-underline s-stack-default">
              {/* <Link variant="title">{title}</Link> */}
              <a class="link--title c-content-primary c-underline-secondary ani-underline t-title-medium">
                {title}
              </a>
            </h3>
          </div>
          <div className="card--details">
            <div className="card--text t-body-small c-content-secondary s-stack-default">
              <p>{description}</p>
            </div>

            <div className="card--date t-label c-content-tertiary s-stack-large">
              <time dateTime="2025-01-28">{date}</time>
            </div>
          </div>
          <a class="t-body-small t-interactive-sub button--secondary c-content-primary c-underline-primary ani-underline">
            <div class="i-chevron"></div>
            {link}
          </a>
          {/* <Button status="default" variant="secondary">
            {link}
          </Button> */}
        </div>
      </div>
    );
  }
);

Card.displayName = "Card";

export default Card;
