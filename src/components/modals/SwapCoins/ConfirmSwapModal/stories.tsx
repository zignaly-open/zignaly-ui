import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import ConfirmSwapModal from ".";

export default {
  title: "Modals/SwapCoins/ConfirmSwapModal",
  component: ConfirmSwapModal,
} as ComponentMeta<typeof ConfirmSwapModal>;

const Template: ComponentStory<typeof ConfirmSwapModal> = () => {
  return <ConfirmSwapModal  />;
};

export const Default = Template.bind({});
Default.args = {};
