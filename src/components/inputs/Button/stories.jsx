// Dependencies
import React from 'react';

// Component
import Button from './';

export default {
  title: 'Inputs/Button',
  component: Button
};

const Template = (args) => (
  <Button {...args} />
);

export const Basic = Template.bind({});
Basic.args = {};
