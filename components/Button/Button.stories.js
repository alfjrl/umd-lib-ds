import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
    // docs: {
    //   // Custom description using markdown
    //   description: {
    //     component: ReadMe,
    //   },
    // },
  },
  // tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary"],
      description: "The visual style variant of the button",
    },
    status: {
      control: "select",
      options: ["default", "disabled"],
      description: "The status of the button",
    },
    children: {
      control: "text",
      description: "The content inside the button",
    },
  },
};

// Button Stories
export const PrimaryDefault = {
  args: {
    children: "Primary Button",
    variant: "primary",
    status: "default",
  },
};

export const PrimaryDisabled = {
  args: {
    children: "Button Disabled",
    variant: "primary",
    status: "disabled",
  },
};

export const SecondaryDefault = {
  args: {
    children: "Secondary Button",
    variant: "secondary",
    status: "default",
  },
};

export const SecondaryDisabled = {
  args: {
    children: "Button Disabled",
    variant: "secondary",
    status: "disabled",
  },
};
