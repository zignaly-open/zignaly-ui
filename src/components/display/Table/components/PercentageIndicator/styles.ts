// Dependencies
import styled from "styled-components";

export const Layout = styled.div``;

export const Value = styled.span<{ isPositive: boolean }>`
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;

  ${({ isPositive, theme }) => `
    color: ${isPositive ? theme["greenGraph"] : theme["redGraphOrError"]};
  `}
`;

export const Indicator = styled.img<{ isPositive: boolean }>`
  margin-right: 6px;
  ${(props) => `
    transform: rotateX(${props.isPositive ? "0" : "180"}deg);
  `}
`;
