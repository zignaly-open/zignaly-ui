import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TextVariations } from "./storyLists";
import { Text } from "../stories";

export default {
  title: "Display/Typography/Allstories",
  component: TextVariations,
  parameters: {
    jest: ["test.tsx"],
  },
} as ComponentMeta<typeof TextVariations>;

const Template: ComponentStory<typeof TextVariations> = (args) => <TextVariations {...args} />;

export const TextUnion = Template.bind({});
TextUnion.args = {
  texts: [{ ...Text.args, variant: "body1" }],
};
