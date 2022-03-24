import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Checkbox from "./";

export default {
  title: "Input/Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  label: "Example Checkbox",
  checked: true
};

