import React from 'react';

export type MenuDropDownProps = {
  title: string;
  secondaryTitle?: string | null;
  children: React.ReactElement | React.ReactElement[]
};
