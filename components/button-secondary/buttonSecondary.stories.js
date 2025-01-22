import buttonSecondary from "./buttonSecondary";

export default {
  title: "Components/Button_Secondary",
  component: buttonSecondary,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["secondary", "disabled"],
    },
  },
};

// Secondary Button Stories
export const SecondaryDefault = {
  args: {
    children: "Secondary Button",
    variant: "secondary",
  },
};

export const SecondaryDisabled = {
  args: {
    children: "Secondary Button Disabled",
    variant: "disabled",
    disabled: true,
  },
};

// All Variants Demo Story
export const AllVariants = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <buttonSecondary variant="secondary">Secondary</buttonSecondary>
        <buttonSecondary variant="disabled">Secondary Disabled</buttonSecondary>
      </div>
    </div>
  ),
};
