// Dependencies
import React from 'react';
import { Story } from "@storybook/react/types-6-0";

// Assets
import OptionDotsIcon from '@assets/icons/option-dots-icon.svg';

// Component
import IconButton from './';

export default {
  title: 'Inputs/IconButton',
  component: IconButton
};

const Template: Story<React.ComponentProps<typeof IconButton>> = (args) => <IconButton {...args} />

export const Basic = Template.bind({});
Basic.args = {
  icon: OptionDotsIcon
};
