// Dependencies
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import BrandImage from "./";

export default {
  title: "Navigation/BrandImage",
  component: BrandImage,
} as ComponentMeta<typeof BrandImage>;

const Template: ComponentStory<typeof BrandImage> = (args) => <BrandImage {...args} />;

export const Logotype = Template.bind({});
Logotype.args = {
  type: "logotype",
  width: "100px",
  height: "68px",
};
