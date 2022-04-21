import React from "react";
import { dark } from "theme";


export const componentByVariants = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  body1: "span",
  body2: "span",
};

export enum weightByType {
  medium = "medium",
  demibold = "demibold",
  regular = "regular",
}

export interface TypographyProps {
  variant?: keyof typeof componentByVariants;
  weight?: weightByType;
  style?: any;
  className?: string;
  component?: any;
  color?: keyof typeof dark;
  underline?: boolean;
  children: React.ReactNode;
}
