// Dependencies
import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Component
import TransferModal from "./";

export default {
  title: "Modals/TransferModal",
  component: TransferModal,
  argTypes: {},
} as ComponentMeta<typeof TransferModal>;

const Template: ComponentStory<typeof TransferModal> = (args) => <TransferModal {...args} />;

export const Default = Template.bind({});
Default.args = {};
