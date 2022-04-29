// Dependencies
import styled from "styled-components";

// Components
import CaretTriangleIcon from "assets/icons/caret-triangle-icon.svg";

export const Layout = styled.div``;

export const Value = styled.span<{ isPositive: boolean }>`
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;

  ${({ isPositive, theme }) => `
    color: ${isPositive ? theme["greenGraph"] : theme["redGraphOrError"]};
  `}
`;

export const Indicator = styled(CaretTriangleIcon)<{ isPositive: boolean }>`
  margin-right: 6px;
  vertical-align: middle;
  ${({ isPositive }) => `
    transform: ${isPositive ? "rotateX(0deg)" : "rotateX(180deg)"};
  `}
`;
