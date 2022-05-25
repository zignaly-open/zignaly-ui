// Dependencies
import styled from 'styled-components';
import Typography from "../../display/Typography";
import IconButton from "../../inputs/IconButton";

const getWidth = (width: "fullscreen" | "large" | "small" | number): number => {
  if (typeof width === "number") return width;

  switch (width) {
    case "large":
    default:
      return 824;
  }
};

type ModalContainerProps = {
  width?: "fullscreen" | "large" | "small" | number;
  padding?: string;
};

export const Layout = styled.div`
  ${({ theme }: any) => `
    background-color: ${theme['neutral750']};
    border: 1px solid ${theme['neutral600']};
    border-radius: 16px;
    padding: 40px;
  `};
`;

export const ModalContainer = styled.div<ModalContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background: #101225;
  border: 1px solid #35334a;
  border-radius: 16px;

  ${({ width, padding }: any) => `
    width: ${getWidth(width)}px;
    padding: ${padding ?? "48px 56px"};
  `};
  user-select: none;
`;

export const Title = styled(Typography).attrs({ variant: "h1", color: "neutral100" })`
  display: flex;
  justify-content: space-between;
`;

export const Body = styled.div`
  font-size: 14px;
  text-align: left;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 18px 0;
  color: ${({ theme }) => theme.neutral200};
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin-bottom: 14px;
`;

export const CloseButton = styled.button`
  border: 0;
  background: transparent;
  border: none;
  cursor: pointer;
  
  svg { 
    fill: #fff;
    width: 22px;
    height: 22px;
  }
`;
