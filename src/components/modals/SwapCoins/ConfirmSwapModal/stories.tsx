import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import ConfirmSwapModal from ".";

export default {
  title: "Modals/SwapCoins/ConfirmSwapModal",
  component: ConfirmSwapModal,
} as ComponentMeta<typeof ConfirmSwapModal>;

const Template: ComponentStory<typeof ConfirmSwapModal> = (args) => {
  return <ConfirmSwapModal {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  swapFrom: {
    token: { id: "ETH", balance: "10000000000000", avaliableSwapPairs: [] },
    value: "100",
  },
  swapTo: {
    token: { id: "USDT", balance: "10000000000000", avaliableSwapPairs: [] },
    value: "100",
  },
  swapRate: "1000",
};
