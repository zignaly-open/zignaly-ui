import styled from "styled-components";

export const Column = styled.div<{
  gap?: number;
  justifyContent?: "end" | "center" | "start";
  alignItems?: "end" | "center" | "start";
}>`
  align-items: ${(props) => `${props.alignItems}`};
  justify-content: ${(props) => `${props.justifyContent}`};
  gap: ${(props) => `${props.gap}`}px;
`;
