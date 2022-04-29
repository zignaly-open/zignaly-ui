// Dependencies
import React from "react";
import NumberFormat from "react-number-format";

// Styled Components
import * as styled from "./styles";

//  Utils
import { isPositive } from "utils/numbers";

const PercentageIndicator = ({ value = 0, theme }) => {
  const isPositiveValue = isPositive(value);
  return (
  <styled.Layout>
    <styled.Indicator isPositive={isPositiveValue} color={theme["greenGraph"]} />
    <styled.Value isPositive={isPositiveValue}>
      <NumberFormat
        value={String(value).replaceAll("-", "")}
        displayType={"text"}
        thousandSeparator={true}
      />
      %
    </styled.Value>
  </styled.Layout>
);};

export default PercentageIndicator;
