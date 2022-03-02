// Dependencies
import React from 'react';

// Component
import Button from './';
import { buttonVariantsId } from '@types/buttons';
import { sizeTypesId } from '@types/sizes';

export default {
  title: 'Inputs/Button',
  component: Button
};

const Template = (args) => (
  <Button {...args} />
);

export const PrimaryAndSmall = Template.bind({});
PrimaryAndSmall.args = {
  variant: buttonVariantsId.PRIMARY,
  size: sizeTypesId.SMALL
};

export const PrimaryAndMedium = Template.bind({});
PrimaryAndMedium.args = {
  variant: buttonVariantsId.PRIMARY,
  size: sizeTypesId.MEDIUM
};

export const PrimaryAndLarge = Template.bind({});
PrimaryAndLarge.args = {
  variant: buttonVariantsId.PRIMARY,
  size: sizeTypesId.LARGE
};

export const SecondaryAndSmall = Template.bind({});
SecondaryAndSmall.args = {
  variant: buttonVariantsId.SECONDARY,
  size: sizeTypesId.SMALL
};
