import Navigation from "./Navigation";

export default {
  title: "Components/Navigation",
  component: Navigation,
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

// Navigation Stories
export const NavigationDefault = {
  // args: {
  //   children: "Navigation",
  // },
};

export const NavigationSearch = {
  // args: {
  //   children: "Navigation",
  // },
};
