import React from 'react';

export type MenuDropDownProps = {
  title: string;
  secondaryTitle?: string | null;
  focused?: boolean;
  children: React.ReactElement | React.ReactElement[]
};
