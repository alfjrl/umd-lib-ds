import Link from "./Link";

export default {
  title: "Components/Link",
  component: Link,
  parameters: {
    layout: "centered",
  },
  // tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["title", "body", "navigation"],
    },
  },
};

// Title Stories
export const LinkTitle = {
  args: {
    children: "Title Link",
    variant: "title",
  },
};

export const LinkBody = {
  args: {
    children: "Body Link",
    variant: "body",
  },
};

export const LinkNavigation = {
  args: {
    children: "Navigation Link",
    variant: "navigation",
  },
};
