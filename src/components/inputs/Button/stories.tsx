// Dependencies
import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Component
import Button, { ButtonSizes, ButtonVariants } from "./";
import SvgArrowBottomIcon from "assets/icons/arrow-bottom-icon.svg";


// Assets

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
      options: { Show: SvgArrowBottomIcon, Hide: null },
      control: { type: "radio" },
    },
    disabled: {
      options: [true, false],
      control: { type: "radio" },
    },
    icon: {
      options: { Show: SvgArrowBottomIcon, Hide: null },
      control: { type: "radio" },
    },
    leftElement: {
      options: { Show: SvgArrowBottomIcon, Hide: null },
      control: { type: "radio" },
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

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

/// Normal Buttons
export const NormalButton = Template.bind({});
NormalButton.args = {
  variant: ButtonVariants.PRIMARY,
  size: ButtonSizes.NORMAL,
};
