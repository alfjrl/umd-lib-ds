import React, { forwardRef } from "react";
import "./CardIcon.css";
import Image from "next/image";

const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const CARD_ICON_VARIANTS = {};

const BASE_CARD_ICON_CLASSES = "c-content-primary";

const CardIcon = forwardRef(({ icon, className, ...props }, ref) => {
  const cardIconClasses = cn(BASE_CARD_ICON_CLASSES, className);

  return (
    <div ref={ref} className={cardIconClasses} {...props}>
      <div className="card--image">
        <Image
          slot="icon"
          src="https://source.unsplash.com/VmeOZQjTVGE"
          alt="Example Image"
          width={328}
          height={328}
        />
      </div>
      <h2 slot="headline">
        <a href="#">Lorem Ipsum Dolor Si</a>
      </h2>
      <div slot="text" className="umd-rich-text">
        <p>
          Lorem Ipsum Consectetur Elit <strong>Duis reprehen</strong>. Lorem
          Ipsum Dolor Sit <a href="/">Excepteur occaecat</a>, voluptate
          Adipiscing Elit.
        </p>
      </div>
    </div>
  );
});

CardIcon.displayName = "Card_Icon";

export default CardIcon;
