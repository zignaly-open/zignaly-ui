import styled from "styled-components";

export const Row = styled.div<{ gap?: number; justifyContent?: "start" | "end" | "center" }>`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.justifyContent};
  gap: ${(props) => props.gap}px;
`;

export const SelectorContainer = styled.div<{ width: number }>`
  width: ${(props) => props.width}px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  margin-top: 20px;
  gap: 1px;
`;

export const QRCodeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  border-radius: 8px;
  background: #e1e9f0;
`;
