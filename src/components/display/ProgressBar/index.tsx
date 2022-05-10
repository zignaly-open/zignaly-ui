// Dependencies
import * as React from "react";
import { ReactElement } from "react";
import Typography from "../Typography";

// Styled Components
import {
  Bar,
  Dot,
  DotContainer,
  EndLabel,
  EndLabelContainer,
  Labels,
  Layout,
  StartLabel,
  ValueLabel,
  ValueLabelContainer,
} from "./styles";

// Types
import { ProgressBarProps } from "./types";

function ProgressBar({ className, value, max = 100 }: ProgressBarProps): ReactElement {
  const normalizedValue = (max * value) / 100;

  return (
    <Layout className={className}>
      <Bar>
        <StartLabel>0%</StartLabel>
        <DotContainer value={normalizedValue}>
          <Dot value={normalizedValue} />
          <ValueLabelContainer>
            <ValueLabel value={normalizedValue}>{value}%</ValueLabel>
          </ValueLabelContainer>
        </DotContainer>
        <EndLabel>{max}%</EndLabel>
      </Bar>
      {/* <Labels>
        <StartLabel>0%</StartLabel>
        <EndLabel>{max}%</EndLabel>
      </Labels> */}
    </Layout>
  );
}

export default ProgressBar;
