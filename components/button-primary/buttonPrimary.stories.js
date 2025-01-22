import ReadMe from "./README.md?raw";
import buttonPrimary from "./buttonPrimary";

export default {
  title: "Components/Button_Primary",
  component: buttonPrimary,
  parameters: {
    layout: "centered",
    docs: {
      // Custom description using markdown
      description: {
        component: ReadMe,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [`default`, "disabled"],
      description: "The visual style variant of the button",
    },
    disabled: {
      control: "boolean",
      description: "Whether the button is disabled",
    },
    children: {
      control: "text",
      description: "The content inside the button",
    },
  },
};

// Primary Button Stories
export const PrimaryDefault = {
  args: {
    children: "Primary Button",
    variant: "default",
  },
};

export const PrimaryDisabled = {
  args: {
    children: "Primary Button Diabled",
    variant: "disabled",
  },
};

// // All Variants Demo Story
// export const AllVariants = {
//   render: () => (
//     <div className="flex flex-col gap-4">
//       <div className="flex items-center gap-4">
//         <buttonPrimary variant="default">Primary</buttonPrimary>
//       </div>
//       <div className="flex items-center gap-4">
//         <buttonPrimary variant="disabled">Primary Disabled</buttonPrimary>
//       </div>
//     </div>
//   ),
// };
