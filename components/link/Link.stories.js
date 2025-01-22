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
      options: ["action", "title", "body", "navigation", "disabled"],
    },
  },
};

// Secondary Button Stories
export const LinkAction = {
  args: {
    children: "Action Link",
    variant: "action",
  },
};

// export const SecondaryDisabled = {
//   args: {
//     children: "Secondary Button Disabled",
//     variant: "disabled",
//     disabled: true,
//   },
// };

// All Variants Demo Story
export const AllVariants = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Link variant="action">Secondary</Link>
        <Link variant="disabled">Secondary Disabled</Link>
      </div>
    </div>
  ),
};
