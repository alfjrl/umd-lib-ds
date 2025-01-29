import React, { forwardRef } from "react";
import "./Navigation.css";
import Image from "next/image";

const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const BASE_FOOTER_CLASSES = "c-bg-primary c-content-primary";

const Navigation = forwardRef(({ children, className, ...props }, ref) => {
  const footerClasses = cn(BASE_FOOTER_CLASSES, className);

  return (
    <header role="contentinfo" ref={ref} className={footerClasses} {...props}>
      <div className="header--content s-box-page-default-h s-box-default-v s-center">
        <div className="header--header s-stack-large">
          <div className="header--logo">
            <Image
              src="./lib-logo-dark.svg"
              alt="University Libraries"
              width={270}
              height={81}
            />
          </div>
        </div>
        <div className="header--columns t-body-small">
          <div className="header--columns-main">
            <nav
              aria-labelledby="our-libraries-heading"
              className="s-stack-large"
            >
              <span
                id="our-libraries-heading"
                className="t-title-small c-content-dark-secondary s-stack-default"
              >
                Our Libraries
              </span>
              <ul className="s-box-default-h">
                <li className="s-stack-default">
                  <a
                    href="/"
                    className="ani-underline c-underline-dark-primary"
                  >
                    McKeldin Library (Main)
                  </a>
                </li>
                <li className="s-stack-default">
                  <a
                    href="/"
                    className="ani-underline c-underline-dark-primary"
                  >
                    Architecture Library
                  </a>
                </li>
                <li className="s-stack-default">
                  <a
                    href="/"
                    className="ani-underline c-underline-dark-primary"
                  >
                    Art Library
                  </a>
                </li>
                <li className="s-stack-default">
                  <a
                    href="/"
                    className="ani-underline c-underline-dark-primary"
                  >
                    Hornbake Library
                  </a>
                </li>
                <li className="s-stack-default">
                  <a
                    href="/"
                    className="ani-underline c-underline-dark-primary"
                  >
                    Michelle Smith Performing Arts Library
                  </a>
                </li>
                <li className="s-stack-default">
                  <a
                    href="/"
                    className="ani-underline c-underline-dark-primary"
                  >
                    Priddy Library (Universities at Shady Grove)
                  </a>
                </li>
                <li className="s-stack-default">
                  <a
                    href="/"
                    className="ani-underline c-underline-dark-primary"
                  >
                    Severn Library
                  </a>
                </li>
                <li className="s-stack-default">
                  <a
                    href="/"
                    className="ani-underline c-underline-dark-primary"
                  >
                    STEM Library
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="header--sub">
        <div className="header--sub-content t-label s-box-small-v s-box-page-default-h s-center">
          <ul>
            <li>
              <a href="/" className="ani-underline c-underline-dark-primary">
                Give Now
              </a>
            </li>
            <li>
              <a href="/" className="ani-underline c-underline-dark-primary">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/" className="ani-underline c-underline-dark-primary">
                Web Accessibility
              </a>
            </li>
          </ul>

          <div>
            <p>© 2025 UNIVERSITY OF MARYLAND</p>
          </div>
        </div>
      </div>
    </header>
  );
});

Navigation.displayName = "Navigation";

export default Navigation;
