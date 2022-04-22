import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import InputText from ".";

export default {
  title: "Inputs/InputText",
  component: InputText,
  argTypes: {
    label: {
      type: "string",
    },
    placeholder: {
      type: "string",
    },
    disabled: {
      type: "boolean",
      defaultValue: false,
    },
    error: {
      type: "string",
      defaultValue: "",
    },
    onChange: {
      disabled: true,
    },
  },
} as ComponentMeta<typeof InputText>;

const Template: ComponentStory<typeof InputText> = (args) => <InputText {...args} />;

export const TextInputer = Template.bind({});
TextInputer.args = {
  label: "Amount to Withdraw",
};
