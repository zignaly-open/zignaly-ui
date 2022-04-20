// Dependencies
import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

// Assets
import OptionDotsIcon from "assets/icons/option-dots-icon.svg";

// Component
import IconButton, { IconButtonSizes, IconButtonVariants } from "./";
import { DropdownAlignment } from "components/inputs/IconButton/types";

export default {
  title: "Inputs/IconButton",
  component: IconButton,

  argTypes: {
    variant: {
      options: [IconButtonVariants.PRIMARY, IconButtonVariants.SECONDARY, IconButtonVariants.FLAT],
      control: { type: "radio" },
    },
    disabled: {
      type: "boolean",
      defaultValue: false,
    },
    size: {
      options: [
        IconButtonSizes.SMALL,
        IconButtonSizes.NORMAL,
        IconButtonSizes.LARGE,
        IconButtonSizes.XLARGE,
      ],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof IconButton>;

const templateStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const Template: ComponentStory<typeof IconButton> = (args) => (
  <div style={templateStyle}>
    <IconButton {...args} />
  </div>
);

export const Simple = Template.bind({});
Simple.args = {
  icon: OptionDotsIcon,
};

export const WithDropdownLeft = Template.bind({});
WithDropdownLeft.args = {
  icon: OptionDotsIcon,
  renderDropDown: <div>Render Dropdown Content</div>,
  dropDownOptions: {
    alignment: DropdownAlignment.LEFT,
  },
};

export const WithDropdownRight = Template.bind({});
WithDropdownRight.args = {
  icon: OptionDotsIcon,
  renderDropDown: <div>Render Dropdown Content</div>,
  dropDownOptions: {
    alignment: DropdownAlignment.RIGHT,
  },
};

export const WithCustomWidth = Template.bind({});
WithCustomWidth.args = {
  icon: OptionDotsIcon,
  renderDropDown: <div>Render Dropdown Content</div>,
  dropDownOptions: {
    width: "300px",
  },
};
