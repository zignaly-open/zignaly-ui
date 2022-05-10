// Dependencies
import * as React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

// Component
import ProgressBar from "./";

export default {
  title: "Display/Slider",
  component: ProgressBar,
} as ComponentMeta<typeof ProgressBar>;

const Template: ComponentStory<typeof ProgressBar> = (args) => (
  <div style={{ width: "300px" }}>
    <ProgressBar {...args} />
  </div>
);

const defaultProps = {
  value: 3,
};

export const DefaultProgressBar = Template.bind({});
DefaultProgressBar.args = {
  ...defaultProps,
  max: 50,
};
