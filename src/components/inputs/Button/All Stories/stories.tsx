import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ButtonVariations } from "./storyLists";
import Button from "..";
import { NormalButton } from "../stories";
import ArrowBottomIcon from "assets/icons/arrow-bottom-icon.svg";
import BTC from "assets/icons/coins/btc.svg";


export default {
  title: "Inputs/Button/All stories",
  component: ButtonVariations,
  subcomponents: { Button },
  parameters: {
    jest: ["test.tsx"],
  },
  decorators: [(story) => <div style={{ padding: "0.2rem" }}>{story()}</div>],
} as ComponentMeta<typeof ButtonVariations>;

const Template: ComponentStory<typeof ButtonVariations> = (args) => <ButtonVariations {...args} />;

export const Heading = Template.bind({});
Heading.args = {
  buttonsRow1: [
    { ...NormalButton.args, variant: "primary" },
    { ...NormalButton.args, variant: "primary", rightElement:  BTC },
    { ...NormalButton.args, variant: "primary", leftElement: ArrowBottomIcon },
    { ...NormalButton.args, variant: "primary", leftElement: ArrowBottomIcon, rightElement: BTC },
  ],
  buttonsRow2: [
    { ...NormalButton.args },
    { ...NormalButton.args, variant: "primary" },
    { ...NormalButton.args, variant: "primary" },
  ],
  buttonsRow3: [
    { ...NormalButton.args, variant: "primary" },
    { ...NormalButton.args, variant: "primary" },
    { ...NormalButton.args, variant: "primary" },
  ],
};

export const Body = Template.bind({});
Body.args = {
  buttonsRow1: [
    { ...NormalButton.args, variant: "primary" },
    { ...NormalButton.args, variant: "primary" },
    { ...NormalButton.args, variant: "primary" },
  ],
  buttonsRow2: [
    { ...NormalButton.args, variant: "primary" },
    { ...NormalButton.args, variant: "primary" },
    { ...NormalButton.args, variant: "primary" },
    { ...NormalButton.args, variant: "primary" },
  ],
};
