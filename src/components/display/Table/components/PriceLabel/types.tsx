import React from "react";

export interface PriceLabelProps {
  value: number | string;
  coin: string;
  fiat?: boolean;
  bottomElement?: React.ReactNode;
}
