// Dependencies
import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Component
import ErrorMessage from "./";

export default {
  title: "Display/ErrorMessage",
  component: ErrorMessage,
} as ComponentMeta<typeof ErrorMessage>;

const Template: ComponentStory<typeof ErrorMessage> = (args) => <ErrorMessage {...args} />;

export const Error = Template.bind({});
Error.args = {
  text: "Exceeds available balance",
  color: "redGraphOrError"
};

export const Success = Template.bind({});
Success.args = {
  text: "Success",
  color: "greenGraph"
};

