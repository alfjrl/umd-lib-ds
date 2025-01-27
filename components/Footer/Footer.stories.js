import { background } from "storybook/internal/theming";
import Footer from "./Footer";

const backgroundColors = {
  white: "#ffffff",
  gray: "#f5f5f5",
  slate: "#e2e8f0",
  blue: "#f0f9ff",
  green: "#f0fdf4",
  purple: "#faf5ff",
};

export default {
  title: "Components/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
    viewport: {
      viewports: {
        mobile: {
          name: "Mobile",
          styles: {
            width: "390px",
            height: "844px",
          },
        },
        tablet: {
          name: "Tablet",
          styles: {
            width: "768px",
            height: "1024px",
          },
        },
        laptop: {
          name: "Laptop",
          styles: {
            width: "1024px",
            height: "768px",
          },
        },
        desktop: {
          name: "Desktop",
          styles: {
            width: "1680px",
            height: "900px",
          },
        },
      },
    },
  },

  argTypes: {},
};

// Footer Stories
export const FooterDefault = {
  args: {
    children: "Footer",
  },
};
