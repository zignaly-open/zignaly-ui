// Dependencies
import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

// Assets
import OptionDotsIcon from "assets/icons/option-dots-icon.svg";

// Component
import IconButton from "./";

export default {
  title: "Inputs/IconButton",
  component: IconButton,

  argTypes: {
    variant: {
      options: ["primary", "secondary", "flat"],
      control: { type: "radio" },
    },
    disabled: {
      type: "boolean",
      defaultValue: false,
    },
    size: {
      options: ["small", "medium", "large", "xlarge"],
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
  icon: <OptionDotsIcon />,
};

export const WithDropdownLeft = Template.bind({});
WithDropdownLeft.args = {
  icon: <OptionDotsIcon />,
  renderDropDown: <div>Render Dropdown Content</div>,
  dropDownOptions: {
    alignment: "left",
  },
};

export const WithDropdownRight = Template.bind({});
WithDropdownRight.args = {
  icon: <OptionDotsIcon />,
  renderDropDown: <div>Render Dropdown Content</div>,
  dropDownOptions: {
    alignment: "right",
  },
};

export const WithCustomWidth = Template.bind({});
WithCustomWidth.args = {
  icon: <OptionDotsIcon />,
  renderDropDown: <div>Render Dropdown Content</div>,
  dropDownOptions: {
    width: "300px",
  },
};

export const Static = Template.bind({});
Static.args = {
  icon: <OptionDotsIcon />,
  renderDropDown: <div>Render Dropdown Content</div>,
  dropDownOptions: {
    position: "static",
  },
};
