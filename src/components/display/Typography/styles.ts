// Dependencies
import styled from "styled-components";
import { styledIf } from "utils/styled";

const getWeight = (weight: string) => {

  if(weight === "demibold") {
    return 600;
  } else if(weight === "medium") {
    return 500;
  } else if(weight === "regular") {
    return 400;
  }
  return 400;
};


export const Layout = styled.h1<{ color: string; underline: boolean; weight: string }>`
  font-family: "Avenir", sans-serif;
  margin: 0;

  &.h1 {
    font-weight: 500;
    font-size: 22px;
    line-height: 36px;
    letter-spacing: 1px;
  }

  &.h2 {
    font-size: 18px;
    line-height: 28px;
    letter-spacing: 0.66px;
    font-weight: 500;
  }

  &.h3 {
    font-size: 15px;
    line-height: 24px;
    font-weight: 500;
    letter-spacing: 0.33px;
  }

  &.h4 {
    font-weight: 500;
    font-size: 13px;
    line-height: 20px;
  }

  &.h5 {
    font-weight: 500;
    font-size: 11px;
    line-height: 16px;
  }

  &.body1 {
    font-size: 15px;
    line-height: 24px;
    letter-spacing: 0.33px;
  }

  &.body2 {
    font-size: 13px;
    line-height: 24px;
    letter-spacing: 0.33px;
  }

  ${(props: any) => `
    color: inherit;

    ${styledIf(
      props.color,
      `
      color: ${props.theme[props.color]}    
    `,
    )}
    ${styledIf(
      props.underline,
      `
      text-decoration-line: underline;
    `,
    )}
    ${styledIf(
      props.weight,
      `
      font-weight: ${getWeight(props.weight)};
    `,
    )}
  `}

  &.style-number {
    letter-spacing: 1px;
  }
`;
