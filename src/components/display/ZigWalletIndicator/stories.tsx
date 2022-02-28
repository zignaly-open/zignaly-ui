// Dependencies
import React from 'react';
import { Story } from "@storybook/react/types-6-0";

// Component
import ZigWalletIndicator from './';

// Types
import { rankTypesId } from 'types/ranks';

export default {
  title: 'Display/ZigWalletIndicator',
  component: ZigWalletIndicator,
  argTypes: {
    zigs: {
      control: 'text'
    },
    rankId: {
      control: 'select',
      default: rankTypesId.WHALE,
      options: [
        rankTypesId.WHALE,
        rankTypesId.DOLPHIN
      ]
    }
  },
  parameters: {
    jest: ['test.js']
  }
};

const Template: Story<React.ComponentProps<typeof ZigWalletIndicator>> = (args) => <ZigWalletIndicator {...args} />

export const Dolphin = Template.bind({});
Dolphin.args = {};
