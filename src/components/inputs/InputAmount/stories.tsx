// Dependencies
import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Component
import InputAmount from "./";

export default {
  title: "Inputs/InputAmount",
  component: InputAmount,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/ROYL3Amojd4Q0y2M0NntVt/My-Account?node-id=379%3A20019",
    },
  },
} as ComponentMeta<typeof InputAmount>;

const Template: ComponentStory<typeof InputAmount> = (args) => <InputAmount {...args} />;

export const Default = Template.bind({});
Default.args = {
  balance: "804600073000",
};
