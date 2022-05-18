import React from 'react';

export const defaultDropDownOptions = {
  maxHeight: "20px",
};

export type MenuDropDownProps = {
  title: string;
  secondaryTitle?: string | null;
  focused?: boolean;
  children: React.ReactElement | React.ReactElement[];
  dropDownOptions?: {
    maxHeight?: string;
  };
};
