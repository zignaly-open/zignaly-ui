import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import InputModal from ".";
import { Swap } from "../types";

export default {
  title: "Modals/SwapCoins/InputModal",
  component: InputModal,
} as ComponentMeta<typeof InputModal>;

const Template: ComponentStory<typeof InputModal> = (args) => {
  return <InputModal {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  continueButtonOnClick: ({ token, value }: Swap) => {
    console.log(token);
    console.log(value);
  },
  avaliableCoins: [
    {
      id: "BTC",
      balance: "1000000000000000000",
      avaliableSwapPairs: [{ id: "eth", balance: "1000000000000000000", avaliableSwapPairs: [] }],
    },
    {
      id: "ETH",
      balance: "1000000000000000000",
      avaliableSwapPairs: [{ id: "eth", balance: "1000000000000000000", avaliableSwapPairs: [] }],
    },
    {
      id: "Doge",
      balance: "1000000000000000000",
      avaliableSwapPairs: [
        { id: "eth", balance: "1000000000000000000", avaliableSwapPairs: [] },
        { id: "doge", balance: "1000000000000000000", avaliableSwapPairs: [] },
      ],
    },
    {
      id: "BTC",
      balance: "1000000000000000000",
      avaliableSwapPairs: [{ id: "eth", balance: "1000000000000000000", avaliableSwapPairs: [] }],
    },
    {
      id: "ETH",
      balance: "1000000000000000000",
      avaliableSwapPairs: [{ id: "eth", balance: "1000000000000000000", avaliableSwapPairs: [] }],
    },
    {
      id: "Poly",
      balance: "1000000000000000000",
      avaliableSwapPairs: [{ id: "eth", balance: "1000000000000000000", avaliableSwapPairs: [] }],
    },
  ],
};
