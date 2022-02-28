// Dependencies
import React from 'react';
import { Story } from "@storybook/react/types-6-0";

// Assets
import EditPenIcon from '@assets/icons/edit-pen-icon.svg';

// Component
import TableButton, { TableButtonProps } from './index';

export default {
  title: 'Display/Table/Components/TableButton',
  component: TableButton
};

const Template: Story<TableButtonProps> = (args) =>
  <TableButton {...args} />

export const Basic = Template.bind({});
Basic.args = {
  icon: EditPenIcon,
  caption: 'Edit'
};
