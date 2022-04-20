import React, { ReactElement } from "react";

export type IconButtonProps = {
  variant?: IconButtonVariants;
  icon: string;
  size: IconButtonSizes;
  disabled?: boolean;
  dropDownOptions: {
    width?: string;
    alignment?: String;
  };
  onClick: React.MouseEventHandler<HTMLButtonElement> | null;
  renderDropDown: ReactElement<any> | null;
};

export enum IconButtonSizes {
  SMALL = "small",
  NORMAL = "normal",
  LARGE = "large",
  XLARGE = "xlarge",
}

export enum IconButtonVariants {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  FLAT = "flat",
}

export enum DropdownAlignment {
  LEFT = "left",
  RIGHT = "right",
}
