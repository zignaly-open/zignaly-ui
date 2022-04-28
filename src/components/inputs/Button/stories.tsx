// Dependencies
import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Component
import Button, { ButtonSizes, ButtonVariants } from "./";

// Assets
import CloseIcon from "assets/icons/close-icon.svg?url";
import ArrowDown from "assets/icons/arrow-bottom-icon.svg?url";

const ICONS = {
  ArrowDown,
  CloseIcon,
};
type Icons = typeof ICONS;

const renderIcon = (icon: keyof Icons) => {
  const Icon = ICONS[icon];
  return Icon ? Icon : null;
};

export default {
  title: "Inputs/Button",
  component: Button,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/VaAFxJqlZERpeEHw5S5coY/Buttons?node-id=402%3A963",
    },
  },
  argTypes: {
    size: {
      options: ["small", "normal", "large", "xlarge"],
      control: { type: "select" },
    },
    variant: {
      options: ["primary", "secondary"],
      control: { type: "select" },
    },
    rightElement: {
      control: {
        type: "select",
      },
      options: Object.keys(ICONS),
    },
    disabled: {
      options: [true, false],
      control: { type: "radio" },
    },
    icon: {
      control: {
        type: "select",
      },
      options: Object.keys(ICONS),
    },
    leftElement: {
      control: {
        type: "select",
      },
      options: Object.keys(ICONS),
    },
    caption: {
      control: { type: "text" },
      label: "Change Caption",
    },
    onClick: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = ({ icon, leftElement, rightElement, ...args }) => {
  // const Icon = ICONS[icon as keyof Icons];
  return (
    <Button
      // icon={<Icon/>}
      icon={renderIcon(icon as keyof Icons)}
      leftElement={renderIcon(leftElement as keyof Icons)}
      rightElement={renderIcon(rightElement as keyof Icons)}
      {...args}
    />
  );
};

/// Normal Buttons
export const NormalButton = Template.bind({});
NormalButton.args = {
  variant: ButtonVariants.PRIMARY,
  size: ButtonSizes.NORMAL,
};
