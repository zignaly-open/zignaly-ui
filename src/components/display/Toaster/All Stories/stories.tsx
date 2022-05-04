import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Toaster from "..";
import { ExampleToaster } from "../stories";
import { ToasterVariations } from "./storyLists";

export default {
  title: "Display/Toaster/All stories",
  component: ToasterVariations,
  subcomponents: { Toaster },
  argTypes: {
    variant: {
      options: ["success", "error"],
      control: { type: "select" },
    },
    size: {
      options: ["large", "small"],
      control: { type: "select" },
    },
    caption: {
      control: "text",
    },
  },
  parameters: {
    jest: ["test.tsx"],
  },
} as ComponentMeta<typeof Toaster>;

const Template: ComponentStory<typeof ToasterVariations> = (args) => (
  <ToasterVariations {...args} />
);

export const ToasterWithSuccess = Template.bind({});
ToasterWithSuccess.args = {
  toastersRow1: [
    {
      ...ExampleToaster.args,
      variant: "success",
      size: "large",
      caption: "Transaction Completed",
      id: 0,
    },
  ],
  toastersRow2: [
    {
      ...ExampleToaster.args,
      variant: "success",
      size: "small",
      caption: "Transaction Completed",
      id: 1,
    },
  ],
};

export const ToasterWithError = Template.bind({});
ToasterWithError.args = {
  toastersRow1: [
    {
      ...ExampleToaster.args,
      variant: "error",
      size: "large",
      caption: "Something went wrong",
      id: 2,
    },
  ],
  toastersRow2: [
    {
      ...ExampleToaster.args,
      variant: "error",
      size: "small",
      caption: "Something went wrong",
      id: 3,
    },
  ],
};
